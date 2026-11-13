// Lightweight structural checks against the built site. This is not a
// replacement for axe in a real browser, but it catches the regressions we
// care about in CI without adding a browser dependency.
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const errors = [];

const exists = async file => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

const allFiles = await readdir(dist, { recursive: true });
const htmlFiles = allFiles.filter(file => file.endsWith('.html')).sort();

const required = [
  ['<main', 'missing <main> landmark'],
  ['id="page-title"', 'missing #page-title heading target'],
];

for (const file of htmlFiles) {
  const html = await readFile(path.join(dist, file), 'utf8');
  const fail = message => errors.push(`${file}: ${message}`);
  const count = pattern => (html.match(pattern) ?? []).length;

  if (!/<html[^>]*\blang="en"/.test(html)) fail('html lang is not en');
  if (count(/<main\b/g) !== 1) fail('expected exactly one <main>');
  if (count(/<h1\b/g) !== 1) fail('expected exactly one <h1>');
  if (!/<title>[^<]+<\/title>/.test(html)) fail('missing title');
  if (!/<meta name="description" content="[^"]+"/.test(html))
    fail('missing meta description');
  if (
    !html.includes('content="noindex') &&
    !/<link rel="canonical" href="https:\/\/daddysdollhouse\.org/.test(html)
  )
    fail('missing absolute canonical URL');
  if (!/<meta property="og:title"/.test(html)) fail('missing og:title');
  if (!/<meta property="og:image"/.test(html)) fail('missing og:image');
  if (/<u>|<b>/i.test(html)) fail('presentational <u>/<b> markup found');
  if (/target="_blank"/.test(html)) fail('target="_blank" found');

  const headings = [...html.matchAll(/<h([1-6])\b/g)].map(match =>
    Number(match[1]),
  );
  if (headings[0] !== 1) fail('first heading is not an h1');
  for (let i = 1; i < headings.length; i += 1) {
    if (headings[i] - headings[i - 1] > 1) {
      fail(`heading level jumps from h${headings[i - 1]} to h${headings[i]}`);
      break;
    }
  }

  for (const nav of html.match(/<nav\b[^>]*>/g) ?? []) {
    if (!/\baria-label=/.test(nav) && !/\baria-labelledby=/.test(nav)) {
      fail('nav is missing an accessible name');
    }
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) fail('duplicate element ids');

  for (const [pattern, message] of required) {
    if (!html.includes(pattern)) fail(message);
  }

  for (const iframe of html.match(/<iframe\b[^>]*>/g) ?? []) {
    if (!/\btitle="[^"]+"/.test(iframe)) fail('iframe is missing a title');
  }

  for (const image of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\salt(?:="[^"]*")?(?=\s|\/?>)/.test(image))
      fail('image is missing an alt attribute');
  }

  for (const link of html.matchAll(/href="(\/[^"?#]*)"/g)) {
    const href = link[1];
    if (href.startsWith('/_astro/') || href === '/') continue;
    if (/\.[a-z0-9]+$/i.test(href)) {
      if (!(await exists(path.join(dist, href))))
        fail(`broken asset link ${href}`);
      continue;
    }
    const target = href.endsWith('/') ? href : `${href}/`;
    if (!(await exists(path.join(dist, target, 'index.html')))) {
      fail(`broken internal link ${href}`);
    }
  }
}

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8').catch(
  () => '',
);
for (const route of [
  '/',
  '/about/',
  '/rules/',
  '/resources/',
  '/dictionary/',
]) {
  const url = new URL(route, 'https://daddysdollhouse.org').href;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    errors.push(`sitemap.xml: missing ${url}`);
  }
}

for (const asset of ['robots.txt', 'og-default.jpg', 'manifest.webmanifest']) {
  if (!(await exists(path.join(dist, asset)))) errors.push(`missing ${asset}`);
}

const manifest = JSON.parse(
  await readFile(path.join(dist, 'manifest.webmanifest'), 'utf8'),
);
for (const key of ['id', 'name', 'start_url', 'scope', 'display', 'icons']) {
  if (!manifest[key]) errors.push(`manifest.webmanifest: missing ${key}`);
}
if (!manifest.icons?.some(icon => icon.purpose === 'maskable')) {
  errors.push('manifest.webmanifest: missing a maskable icon');
}

if (errors.length) {
  console.error(`Accessibility/SEO checks failed (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML pages: landmarks, headings, metadata, links, media, manifest.`,
);
