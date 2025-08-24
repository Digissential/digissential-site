/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        digi: {
          ink: "#0B1220",
          bg: "#0F1629",
          primary: "#2F7BFF",
          accent: "#FF6B3D",
          soft: "#F3F6FF",
          card: "#151E34",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "Cantarell",
          "Noto Sans",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: { glow: "0 8px 30px rgba(47, 123, 255, 0.25)" },
      borderRadius: { xl2: "1.25rem" },
    },
  },
   plugins: [typography],
};
