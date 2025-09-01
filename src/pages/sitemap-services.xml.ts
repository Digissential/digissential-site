import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

const SITE =
  import.meta.env.PUBLIC_SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  'https://www.digissential.co.za';

const base = SITE.replace(/\/$/, '');

const toUrl = (slug: string) => `${base}/services/${slug}/`;

export const GET: APIRoute = async () => {
  const services = await getCollection('services');
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${services.map(s => `
    <url>
      <loc>${toUrl(s.slug)}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`).join('')}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
    },
  });
};
