// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const prerender = true;

const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

const ENV_SITE =
  import.meta.env.PUBLIC_SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||              // Netlify prod URL
  process.env.DEPLOY_PRIME_URL || // Netlify preview URL
  'https://digissential.co.za';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || ENV_SITE).replace(/\/+$/, '');

  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    isProd ? `Sitemap: ${base}/sitemap.xml` : '# Preview build — indexing disabled',
    '', // trailing newline
  ];

  const headers: Record<string, string> = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
  };
  if (!isProd) headers['X-Robots-Tag'] = 'noindex, nofollow';

  return new Response(lines.join('\n'), { headers });
};
