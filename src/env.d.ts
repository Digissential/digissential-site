/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly URL?: string;               // Netlify production URL
  readonly DEPLOY_PRIME_URL?: string;  // Netlify preview URL
  readonly CONTEXT?: string;           // "production" | "branch-deploy" | "deploy-preview"
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}