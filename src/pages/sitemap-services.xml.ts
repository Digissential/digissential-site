// src/pages/sitemap-services.xml.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { mediaForService } from '@lib/serviceMedia';

export const prerender = true;

function baseUrl(site?: URL | null) {
  return (site?.toString() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}
function isoDate(d?: Date | string) {
  if (!d) return new Date().toISOString();
  if (d instanceof Date) return d.toISOString();
  const parsed = new Date(d);
  return Number.isNaN(+parsed) ? new Date().toISOString() : parsed.toISOString();
}
function esc(s = '') {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

export const GET: APIRoute = async ({ site }) => {
  const base = baseUrl(site);

  const items = (await getCollection('services', ({ data }) =>
    !data.draft && data.visibility !== 'internal' && !data.noindex
  )).sort((a, b) => (a.slug || '').localeCompare(b.slug || ''));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${items.map(i => {
  const lastmod = isoDate(i.data.updatedDate || i.data.pubDate);
  const loc = new URL(`/services/${i.slug}/`, base).toString();

  // Pull image + alt from your central media map
  const m = mediaForService(i.slug, i.slug, i.data.title);
  const imageBlock = m?.src ? `
  <image:image>
    <image:loc>${new URL(m.src, base).toString()}</image:loc>
    <image:title>${esc(i.data.title || '')}</image:title>
    <image:caption>${esc(m.alt || i.data.title || '')}</image:caption>
  </image:image>` : '';

  return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <lastmod>${lastmod}</lastmod>${imageBlock}
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
