/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist", ".astro"],
  overrides: [
    {
      files: ["**/*.astro"],
      // Minimal Astro-friendly parsing: ESLint will still catch basic issues.
      parser: "@typescript-eslint/parser",
      rules: {},
    },
  ],
};
