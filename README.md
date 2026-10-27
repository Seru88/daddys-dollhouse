# Daddy's Dollhouse — front end

Static site for [Daddy's Dollhouse](https://daddysdollhouse.org), an adult
forum for fans of giant men and tiny women.

Built with [Astro](https://astro.build). No React, no client-side framework —
the site ships plain HTML and CSS.

## Commands

| Command           | Action                                        |
| ----------------- | --------------------------------------------- |
| `npm install`     | install dependencies                          |
| `npm run dev`     | start the dev server on http://localhost:4321 |
| `npm run build`   | build the production site into `dist/`        |
| `npm run preview` | serve the production build locally            |
| `npm run format`  | format the source with Prettier               |

## Layout

- `src/layouts/Base.astro` — the HTML shell (head, meta tags, global CSS).
- `src/styles/global.css` — the design system: tokens, typography, layout and
  component classes. This replaced the Material-UI theme of the old Gatsby site.
- `src/components/` — shared UI pieces (hero image, bordered box, button, …).
- `src/pages/` — one `.astro` file per route.
- `src/images/` — images, imported and optimized by `astro:assets`.
- `src/tags.json` — the forum tag list rendered by the dictionary page.

## Adding a page

Create `src/pages/<route>.astro`, import `Base` from `../layouts/Base.astro`
and wrap the page in `<div class="container">`. Use the existing classes from
`src/styles/global.css`; `src/pages/index.astro` is the reference example.

## Deploying

`npm run build` writes a fully static site to `dist/`. Any static host works;
point the build command at `npm run build` and the publish directory at `dist/`.
