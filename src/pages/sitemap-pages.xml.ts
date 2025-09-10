import type { APIRoute } from 'astro';

export const prerender = true;

const PAGES = [
  '/', '/services/', '/blog/', '/contact/',
  '/legal/', '/legal/privacy/', '/legal/warranty/', '/legal/ewaste/', '/locations/',
  '/newsletter/'
];

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}

export const GET: APIRoute = ({ site }) => {
  const base = baseUrl(site);
  const lastmod = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(p => `  <url><loc>${base}${p}</loc><changefreq>weekly</changefreq><priority>0.7</priority><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' }
  });
};
