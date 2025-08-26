/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Tell TS about your public env var(s)
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  // (optional) any others you might read:
  readonly URL?: string;
  readonly DEPLOY_PRIME_URL?: string;
  readonly CONTEXT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
