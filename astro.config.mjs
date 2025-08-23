import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';

export default defineConfig({
  site: 'https://www.digissential.co.za',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  output: 'server',
  adapter: netlify({ edgeMiddleware: false })
});
