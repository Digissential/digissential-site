export function siteBase(site?: URL | null) {
  return (site?.toString?.() || import.meta.env.PUBLIC_SITE_URL || 'https://digissential.co.za').replace(/\/+$/, '');
}
export function absUrl(path: string, site?: URL | null) {
  const base = siteBase(site);
  const rel = String(path).replace(/^\/+/, ''); // strip leading slashes
  return `${base}/${rel}`;
}
