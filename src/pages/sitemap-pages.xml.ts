import type { APIRoute } from 'astro';

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
const now = new Date().toISOString();

const pages = [
  '/',               // Home
  '/services/',      // Services listing
  '/blog/',          // Blog listing
  '/contact/',       // Contact
  '/legal/',         // Policies hub (adjust if not present)
  '/legal/privacy/',
  '/legal/warranty/',
  '/legal/ewaste/',
];

const toUrl = (p: string) => `${base}${p}`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(p => `
  <url>
    <loc>${toUrl(p)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
    },
  });
