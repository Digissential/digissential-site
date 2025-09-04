// /src/pages/sitemap-resources.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = (import.meta.env.SITE as string) || 'https://digissential.co.za';

export const GET: APIRoute = async () => {
  const items = await getCollection('resources', (e) => !e.data.draft);

  const indexUrl = `
    <url><loc>${SITE}/resources/</loc>
      <changefreq>weekly</changefreq><priority>0.6</priority>
    </url>`.trim();

  const urls = items.map((e) => `
    <url><loc>${SITE}/resources/${e.slug}/</loc>
      <changefreq>weekly</changefreq><priority>0.7</priority>
    </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${indexUrl}${urls}
  </urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
