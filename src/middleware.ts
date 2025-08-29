// src/middleware.ts
import type { MiddlewareNext } from 'astro';

export const onRequest = async (context: any, next: MiddlewareNext) => {
  const url = new URL(context.request.url);

  // Ignore files (e.g., .css, .js, images) and root
  const isFile = /\.[a-z0-9]+$/i.test(url.pathname);
  const isRoot = url.pathname === '/';

  // If it looks like a folder route and you're missing a trailing slash, add it
  if (!isRoot && !isFile && !url.pathname.endsWith('/')) {
    url.pathname = url.pathname + '/';
    return Response.redirect(url, 301);
  }

  return next();
};
