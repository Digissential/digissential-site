// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

const SITE = process.env.PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://www.digissential.co.za";

export default defineConfig({
  site: SITE,
  trailingSlash: "always", // matches /services/[slug]/ pattern
  output: "static",
  adapter: netlify(),
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  build: { outDir: "dist" },
});
