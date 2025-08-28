// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

const SITE = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE,
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  output: "static",
  adapter: netlify(),
  build: { outDir: 'dist' },
});
