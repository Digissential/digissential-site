// src/pages/robots.txt.ts
import type { APIRoute } from 'astro';

export const prerender = true;

// Prefer Netlify context when present; also derive prod from base hostname.
function getBase(site?: URL | null) {
  const base =
    (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za')
      .replace(/\/+$/, '');
  return base;
}

export const GET: APIRoute = ({ site }) => {
  const base = getBase(site);
  const hostname = (() => {
    try { return new URL(base).hostname.toLowerCase(); } catch { return ''; }
  })();

  // Netlify: 'production' | 'deploy-preview' | 'branch-deploy' | ''
  const ctx = (process.env.CONTEXT || '').toLowerCase();

  // Consider it production if either:
  // - Netlify says 'production', OR
  // - The resolved base hostname is your live domain
  const isProd = ctx === 'production' || hostname === 'digissential.co.za' || hostname.endsWith('.digissential.co.za');

  // Allow overriding the sitemap path via env if you ever switch to an index:
  const sitemapPath = (import.meta.env.PUBLIC_SITEMAP_PATH || '/sitemap.xml')
    .replace(/^\/*/, '/');

  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    ...(isProd ? [`Sitemap: ${base}${sitemapPath}`] : ['# Preview/branch build — indexing disabled']),
    '',
  ];

  // NOTE: These headers won't be served by Netlify for a prerendered file.
  // Keep caching/X-Robots-Tag in netlify.toml or a /dist/_headers file.
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
