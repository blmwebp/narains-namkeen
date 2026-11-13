# Build and deploy

1. Install Node.js 22+ and run `npm ci` in the project folder.
2. Run `npm run build`; Next.js generates the static `out/` folder.
3. Run `npm test` to inspect the exported page links and assets.
4. Upload the contents of `out/` to any static hosting root, or select Next.js/static export in your chosen provider.
5. For a VPS, serve `out/` through Nginx; use `try_files $uri $uri/ =404;` and an error page pointing to `/404.html`. No PM2 or Node server is required for this static export.
6. Test nested product/recipe URLs by opening them directly and refreshing.

## Production preparation

- Replace demo products, pack concepts, nutrition, allergens, shelf-life, company narrative and contact details with approved data.
- Add verified certificate documents only; remove the placeholder certification block if not needed.
- Configure real phone/WhatsApp/map links after replacing placeholders.
- Update the privacy notice for actual hosting and any analytics/forms you enable.
- Remove demo labels only after the corresponding information has been approved.
- Change robots metadata in `src/app/layout.tsx` and `public/robots.txt` when ready for indexing.
- Configure your real domain, canonical metadata, sitemap and social sharing artwork. No invented production domain has been embedded.
- Rebuild after each content change and upload the new export.
- Keep a copy of source and package-lock.json; install with npm ci for reproducible dependencies.

This build is hosted at a domain root. Subdirectory deployments require configuring a basePath and updating absolute asset references before building.
