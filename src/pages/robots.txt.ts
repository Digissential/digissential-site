import type { APIRoute } from 'astro';

export const prerender = true;

const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}

export const GET: APIRoute = ({ site }) => {
  const base = baseUrl(site);
  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    ...(isProd ? [`Sitemap: ${base}/sitemap.xml`] : ['# Preview build — indexing disabled']),
    '',
  ];
  const headers: Record<string, string> = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
  };
  if (!isProd) headers['X-Robots-Tag'] = 'noindex, nofollow';
  return new Response(lines.join('\n'), { headers });
};
