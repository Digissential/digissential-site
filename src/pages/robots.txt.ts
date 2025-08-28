// src/pages/robots.txt.ts

import type { APIRoute } from 'astro';

export const prerender = true;

// Netlify build context: "production" | "branch-deploy" | "deploy-preview"
const ctx = (process.env.CONTEXT || '').toLowerCase();
const isProd = ctx === 'production';

// Prefer PUBLIC_SITE_URL; sensible fallbacks for previews
const SITE =
  import.meta.env.PUBLIC_SITE_URL ||
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||                // Netlify site URL (prod)
  process.env.DEPLOY_PRIME_URL ||   // Netlify preview URL
  'https://digissential.co.za';

export const GET: APIRoute = () => {
  const base = SITE.replace(/\/$/, '');
  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    isProd ? `Sitemap: ${base}/sitemap-index.xml` : '# Preview build — indexing disabled',
    '' // trailing newline
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
    },
  });
  
}
