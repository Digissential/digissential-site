// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://digissential.co.za",
  trailingSlash: "always",
  output: "static",
  adapter: netlify(),
  integrations: [tailwind({ applyBaseStyles: true })],
  build: { outDir: "dist" },
});
