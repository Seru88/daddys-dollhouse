import type { APIRoute } from 'astro';

export const prerender = true;

const paths = ['/', '/about/', '/rules/', '/resources/', '/dictionary/'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://daddysdollhouse.org');
  const urls = paths
    .map(path => `  <url><loc>${new URL(path, base).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
