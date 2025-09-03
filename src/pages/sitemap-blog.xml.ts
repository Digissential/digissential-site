import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}

export const GET: APIRoute = async ({ site }) => {
  const base = baseUrl(site);
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.map(p => {
  const d = (p.data.updatedDate && p.data.updatedDate > p.data.pubDate) ? p.data.updatedDate : p.data.pubDate;
  const lastmod = (d instanceof Date ? d : new Date(d)).toISOString();
  return `  <url><loc>${base}/blog/${p.slug}/</loc><changefreq>weekly</changefreq><priority>0.6</priority><lastmod>${lastmod}</lastmod></url>`;
}).join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
