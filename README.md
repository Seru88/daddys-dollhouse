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
- `src/components/` — shared UI pieces (hero image, bordered box, button, …).
- `src/pages/` — one `.astro` file per route, plus the static sitemap endpoint.
- `src/images/` — images, imported and optimized by `astro:assets`.
- `src/tags.json` — the forum tag list rendered by the dictionary page.
- `scripts/make-icons.mjs` — regenerates the PWA / apple-touch icon set, including maskable icons.
- `scripts/check-a11y.mjs` — structural checks (landmarks, headings, metadata, links, media) run after the build in CI.

## Adding a page

Create `src/pages/<route>.astro`, import `Base` from `../layouts/Base.astro`
and wrap the page in `<div class="container">`. Use the existing classes from
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
