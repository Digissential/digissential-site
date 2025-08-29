/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
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

      // Brand the prose styles
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.digi.primary'),
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255,255,255,.2)',
              '&:hover': { color: theme('colors.white') },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: { color: theme('colors.white') },
            code: {
              color: theme('colors.digi.soft'),
              backgroundColor: 'rgba(255,255,255,0.06)',
              padding: '0.2rem 0.35rem',
              borderRadius: '0.4rem',
            },
            pre: {
              backgroundColor: theme('colors.digi.ink'),
              color: theme('colors.digi.soft'),
            },
            hr: { borderColor: 'rgba(255,255,255,0.1)' },
          },
        },
        invert: {
          css: {
            color: theme('colors.white'),
            a: { color: theme('colors.digi.primary'), '&:hover': { color: theme('colors.white') } },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: { color: theme('colors.white') },
            code: {
              color: theme('colors.digi.soft'),
              backgroundColor: 'rgba(255,255,255,0.08)',
            },
            pre: {
              backgroundColor: '#0B1220',
              color: theme('colors.digi.soft'),
            },
            hr: { borderColor: 'rgba(255,255,255,0.1)' },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
