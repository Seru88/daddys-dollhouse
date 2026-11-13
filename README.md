# Daddy's Dollhouse — front end

Static site for [Daddy's Dollhouse](https://daddysdollhouse.org), an adult
forum for fans of giant men and tiny women.

Built with [Astro](https://astro.build). No React, no client-side framework —
the site ships plain HTML and CSS.

## Commands

| Command              | Action                                                   |
| -------------------- | -------------------------------------------------------- |
| `npm install`        | install dependencies                                     |
| `npm run dev`        | start the dev server on http://localhost:4321            |
| `npm run build`      | build the production site into `dist/`                   |
| `npm run preview`    | serve the production build locally                       |
| `npm run format`     | format the source with Prettier                          |
| `npm run check`      | verify formatting without writing (runs in CI)           |
| `npm run check:a11y` | check the built HTML for structural a11y/SEO regressions |
| `npm run icons`      | regenerate `public/icons/` from the favicon              |

## Layout

- `src/layouts/Base.astro` — the HTML shell (head, meta tags, global CSS).
- `src/styles/global.css` — the design system: tokens, typography, layout and
  component classes. This replaced the Material-UI theme of the old Gatsby site.
- `src/transitions.ts` — the page transition shared by every route.
- `src/fonts/` — the self-hosted AKA Posse and Courier Prime files; see
  `src/fonts/README.md` for provenance and licensing.
- `src/components/` — shared UI pieces (hero image, bordered box, button, …).
- `src/pages/` — one `.astro` file per route, plus the static sitemap endpoint.
- `src/images/` — images, imported and optimized by `astro:assets`.
- `src/tags.json` — the forum tag list rendered by the dictionary page.
- `scripts/make-icons.mjs` — regenerates the PWA / apple-touch icon set, including maskable icons.
- `scripts/check-a11y.mjs` — structural checks (landmarks, headings, metadata, links, media) run after the build in CI.

## Typography and motion

AKA Posse has no true lowercase — its lowercase glyphs are small caps, so
casing changes which letters are full height rather than introducing lowercase
letterforms. That is why:

- page titles are written in title case and uppercased in CSS;
- section headings are written in sentence case and left to the font's small
  caps;
- numbered section headings (`1. …`) sit on a two-column grid, so a wrapped
  line hangs under the text instead of under the numeral. The column has a
  fixed width so every heading on a page starts at the same x.

Page transitions run on the View Transitions API, so the animations apply to
the `::view-transition-*` snapshots rather than to the page element itself.
The `transform-origin: 50% 0` rule in `global.css` has to stay: without it the
snapshot scales around the centre of the document, and a tall page such as
Resources slides in from hundreds of pixels below.

## Adding a page

Create `src/pages/<route>.astro`, import `Base` from `../layouts/Base.astro`
and wrap the page in `<div class="container">`. Most pages then follow the same
shape — `<HeroImg />`, `<SiteNav />`, and a
`<div class="page-body" transition:animate={growFade}>` for the content; the
404 page skips the hero. Use the existing classes from
`src/styles/global.css`; `src/pages/index.astro` is the reference example.

## Deploying

`npm run build` writes a fully static site to `dist/`. Any static host works;
point the build command at `npm run build` and the publish directory at `dist/`.

This repo also has a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys to the DigitalOcean droplet on every push to `main`.

Required repository secrets (Settings → Secrets and variables → Actions):

| Secret           | Value                                              |
| ---------------- | -------------------------------------------------- |
| `DEPLOY_SSH_KEY` | Private SSH key authorized on the droplet          |
| `DEPLOY_HOST`    | Droplet IP or hostname (e.g. `165.227.66.154`)     |
| `DEPLOY_USER`    | SSH user (e.g. `seru`)                             |
| `DEPLOY_PATH`    | Destination directory (e.g. `/var/www/ddh/public`) |

The public key must be in the droplet’s `~/.ssh/authorized_keys` for the user
specified in `DEPLOY_USER`.

To deploy manually from this machine:

```bash
npm run build
rsync -avz --delete dist/ ddh:/var/www/ddh/public/
```
