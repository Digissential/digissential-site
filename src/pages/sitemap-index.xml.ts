import type { APIRoute } from 'astro';

export const prerender = true;

const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

const SITE =
  import.meta.env.PUBLIC_SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||                // Netlify prod URL
  process.env.DEPLOY_PRIME_URL ||   // Netlify preview URL
  'https://www.digissential.co.za';

const base = SITE.replace(/\/$/, '');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${base}/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>${base}/sitemap-services.xml</loc></sitemap>
  <sitemap><loc>${base}/sitemap-blog.xml</loc></sitemap>
</sitemapindex>`;

export const GET: APIRoute = () =>
  new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
    },
  });
