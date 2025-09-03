import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}

export const GET: APIRoute = async ({ site }) => {
  const base = baseUrl(site);
  const items = await getCollection('services');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items.map(i => {
  const d = (i.data.updatedDate || i.data.pubDate || new Date()) as Date;
  const lastmod = (d instanceof Date ? d : new Date(d)).toISOString();
  return `  <url><loc>${base}/services/${i.slug}/</loc><changefreq>monthly</changefreq><priority>0.6</priority><lastmod>${lastmod}</lastmod></url>`;
}).join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
