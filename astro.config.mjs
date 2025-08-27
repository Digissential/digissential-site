
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Will resolve to your custom domain later; falls back to Netlify env URLs
const SITE =
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||                // production deploy URL on Netlify
  process.env.DEPLOY_PRIME_URL ||   // preview deploy URL on Netlify
  'https://www.digissential.co.za'; // final fallback

export default defineConfig({
  site: 'digissential.co.za',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  build: { outDir: 'dist' },
});
