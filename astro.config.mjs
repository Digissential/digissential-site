import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  site: 'https://example.netlify.app',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  output: "static",
  adapter: netlify({ edgeMiddleware: false }),
  build: { outDir: 'dist' },
});
