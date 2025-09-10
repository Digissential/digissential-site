import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || "https://digissential.co.za")
    .replace(/\/+$/, "");
}

const SCORE: Record<string, { changefreq: string; priority: string }> = {
  hub: { changefreq: "weekly",  priority: "0.9" },
  city: { changefreq: "weekly",  priority: "0.7" },
  neighbourhood: { changefreq: "monthly", priority: "0.6" },
  default: { changefreq: "monthly", priority: "0.5" },
};

export const GET: APIRoute = async ({ site }) => {
  const base = baseUrl(site);

  // All public locations (exclude drafts/noindex)
  const locations = (await getCollection("locations", ({ data }) => !data?.draft && !data?.noindex))
    .sort((a, b) => {
      // hub → city → neighbourhood → slug
      const rk = (k?: string) => (k === "hub" ? 0 : k === "city" ? 1 : k === "neighbourhood" ? 2 : 3);
      const d = rk(a.data.kind) - rk(b.data.kind);
      return d || a.slug.localeCompare(b.slug);
    });

  // /locations/ index node
  const nodes: string[] = [
    `<url>
      <loc>${base}/locations/</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>`,
  ];

  for (const e of locations) {
    const kind = (e.data.kind as string) || "default";
    const { changefreq, priority } = SCORE[kind] ?? SCORE.default;

    // Optional lastmod if you add updatedDate to the collection schema
    const updated = (e.data as any).updatedDate;
    const lastmod =
      updated instanceof Date
        ? updated.toISOString()
        : (typeof updated === "string" && !Number.isNaN(Date.parse(updated)))
        ? new Date(updated).toISOString()
        : null;

    nodes.push(
      `<url>
        <loc>${base}/locations/${e.slug}/</loc>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
        ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ``}
      </url>`
        .replace(/\n\s+/g, " ")
        .trim()
    );
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${nodes.join("\n")}
</urlset>`.trim();

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
