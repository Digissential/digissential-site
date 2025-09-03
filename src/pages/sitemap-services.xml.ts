import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}

function isoDate(d?: Date | string) {
  if (!d) return new Date().toISOString();
  if (d instanceof Date) return d.toISOString();
  const parsed = new Date(d);
  return Number.isNaN(+parsed) ? new Date().toISOString() : parsed.toISOString();
}

export const GET: APIRoute = async ({ site }) => {
  const base = baseUrl(site);
  const items = (await getCollection('services', ({ data }) => !data.draft))
    .sort((a, b) => (a.slug || '').localeCompare(b.slug || ''));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.map(i => {
  const lastmod = isoDate(i.data.updatedDate || i.data.pubDate);
  return `  <url><loc>${base}/services/${i.slug}/</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>${lastmod}</lastmod></url>`;
}).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
