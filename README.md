# Narain’s Namkeen

A complete, static-exportable informational website. Next.js App Router, React, TypeScript, Tailwind CSS and Motion. No CMS, database, admin panel, authentication, checkout or backend services.

## Quick start

Use Node.js 22 LTS or newer and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js (normally http://localhost:3000).

```bash
npm run typecheck
npm run build
npm test
npm run preview
```

`npm run preview` serves the production `out/` directory (downloads the small `serve` utility on first use). Do not open HTML files directly using file://; use a web server.

## Project structure

- `src/app/` — routes, static page generation, metadata, root layout and global design styles.
- `src/components/` — hero, navigation, product/recipe/news cards, catalogue, forms and transitions.
- `src/content/products.ts` — 12 demo products, four categories, sizes and product information.
- `src/content/hero-slides.ts` — three banner compositions and copy.
- `src/content/articles.ts` — four recipes and three news articles. Plain typed content arrays are used so no Markdown compiler is necessary.
- `src/config/site.ts` — demo contact information and brand configuration.
- `public/images/` — original supplied logo and locally bundled reference food photographs.
- `tests/` — checks for the actual static export, internal links and image assets.
- `docs/` — content editing, deployment, asset licences and verification notes.
- `out/` — ready-to-host static export included in this delivery; regenerate after editing source.

## Implemented interactions

- Three-slide hero, coordinated text/pack transitions, 3-second autoplay, dots, next/previous, pause, touch swipe and keyboard arrows. Pauses for keyboard focus, hidden tabs and reduced-motion preference; pointer hover keeps autoplay running. No hero CTA links.
- Sticky compacting header, active navigation, mobile navigation with focus loop, Escape dismissal and scroll locking; back-to-top.
- Product/recipe/news search with submit, category filters, URL query state, reset and empty state. Search state works with browser Back/Forward.
- Product detail pages, concept/serving image switcher, size selectors, nutrition/ingredient/storage accordions and related products.
- Recipes with ingredient lists, preparation steps, serving information, related snack links, print layout, native sharing/clipboard fallback.
- News categories, detail pages and related articles.
- Contact and distributor forms with browser validation and explicit demo-only submission feedback. No network request, localStorage or persistence for form data.
- Responsive layouts, reduced motion, keyboard focus, skip link, local image credits and demo privacy page.

## Important demo details

The supplied logo is preserved. Product packs are CSS-built concept placeholders, not real packaging. Reference food photography is reused across demo products and is not a visual guarantee of each listed snack. All food data, brand story and business details must be approved/replaced before public launch. No fake certificate marks or invented founder history are included.

The site intentionally uses `noindex, nofollow` metadata and `Disallow: /` in robots.txt. See `docs/DEPLOYMENT.md` for the launch checklist. Domain and hosting remain yours to configure.

## Editing

See `docs/CONTENT_GUIDE.md`. Add local image files and update the corresponding content entry; run `npm run build` and deploy the new `out/`. Recipes/news use structured TypeScript data for easy manual editing, not an admin dashboard.

## Design

Warm cream, brand red, biscuit neutrals, dark brown copy, serif display typography and system sans-serif body type. No remote fonts are required. Hero and product packaging are composed with HTML/CSS; real pack photography can replace the `Pack` component later.

## Licence

Project application code is provided for your use and modification. The Narain’s logo remains the property of its owner. Third-party photography has separate CC BY-SA licences, listed in `docs/ASSET_CREDITS.md` and on `/credits/`; preserve those credits while using the images.
