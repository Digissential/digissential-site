// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const prerender = true;

// Netlify build context: "production" | "branch-deploy" | "deploy-preview"
const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

// Prefer PUBLIC_SITE_URL; sensible fallbacks for previews
const ENV_SITE =
  import.meta.env.PUBLIC_SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||              // Netlify site URL (prod)
  process.env.DEPLOY_PRIME_URL || // Netlify preview URL
  'https://digissential.co.za';

export const GET: APIRoute = ({ site }) => {
  // If Astro's canonical 'site' is available, prefer it; otherwise fallback to env
  const base = (site?.toString() || ENV_SITE).replace(/\/+$/, '');
  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    // Emit both common sitemap paths (harmless if one doesn’t exist)
    ...(isProd
      ? [`Sitemap: ${base}/sitemap-index.xml`, `Sitemap: ${base}/sitemap.xml`]
      : ['# Preview build — indexing disabled']),
    '', // trailing newline
  ];

  const headers: Record<string, string> = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
  };
  if (!isProd) {
    // Extra safeguard for previews
    headers['X-Robots-Tag'] = 'noindex, nofollow';
  }

  return new Response(lines.join('\n'), { headers });
};
