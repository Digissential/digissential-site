
export const prerender = true;

const ctx = (process.env.CONTEXT || '').toLowerCase(); // Netlify build context
const isProd = ctx === 'production';

// Prefer PUBLIC_SITE_URL; fall back to your current live URL
const SITE =
  (import.meta.env.PUBLIC_SITE_URL as string) ||
  'https://digissential.netlify.app';

export function GET() {
  const base = SITE.replace(/\/$/, '');
  const lines = [
    'User-agent: *',
    isProd ? 'Allow: /' : 'Disallow: /',
    isProd ? `Sitemap: ${base}/sitemap-index.xml` : '# Preview build – indexing disabled',
    '' // ensure trailing newline
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': isProd ? 'public, max-age=3600' : 'no-store',
    },
  });
}
