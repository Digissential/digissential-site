// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://digissential.co.za",
  trailingSlash: "always",
  output: "static",
  integrations: [tailwind({ applyBaseStyles: true })],
  build: { outDir: "dist" },
});
