# Manual content guide

## Products

Edit `src/content/products.ts`. The current `entries` rows contain slug, name, category, description, package colour and serving image key. Every slug must be unique and URL-safe, for example `aloo-bhujia`. Product records also contain sizes, ingredients, allergens and shelfLife. Replace shared sample defaults with individually verified fields when adding real data.

Categories are listed at the top of the same file. Product category strings must exactly match a listed category. The listing uses names and descriptions for case-insensitive search. Add actual pack images by extending the Product type with a packImage field and adapting `src/components/pack.tsx` to render it with object-fit: contain. Retain image dimensions to avoid layout shifts.

## Hero

Edit `src/content/hero-slides.ts`. Each slide references an existing product slug, eyebrow, title, text and background. Use `\n` in the title for the intended desktop line break. Keep text compact for smaller screens. The carousel interval is 3000 ms in `src/components/hero.tsx`.

## Recipes and news

Edit `src/content/articles.ts`.

Recipe fields: slug, title, category, excerpt, image, date (YYYY-MM-DD), body (paragraph array), time, ingredients (array), steps (array), product (existing product slug).

News fields: slug, title, category, excerpt, image, date and body (paragraph array).

Each entry automatically gets its own static page. Add/remove entries, then rebuild. The homepage news section sorts newest first. The homepage recipe section currently uses the first three entries; reorder the array to curate it.

## Company information

Update `src/config/site.ts`, `src/components/footer.tsx`, `src/app/our-story/page.tsx` and `src/app/quality/page.tsx`. The footer's demo contact strings are displayed directly, so update it along with site configuration. Verify content before removing demo labels. Update metadata in `src/app/layout.tsx`.

## Forms

`src/components/enquiry-form.tsx` validates fields and shows a local demo response. Connect a backend only when requirements are settled. Never embed API keys or SMTP credentials in frontend code. When enabling a real backend, validate server-side, rate-limit, handle errors, and only show success after confirmed acceptance.

## Images

Place files under `public/images/` and reference them as `/images/filename.jpg`. Credit demo photos as documented. Avoid hotlinking. Current images are deliberately generic visual references. Replace images with approved original brand photography before launch.
