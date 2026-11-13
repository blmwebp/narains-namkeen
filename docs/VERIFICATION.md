# Verification

Completed for this delivery:

- `npm run build`: passed; static pages generated successfully.
- `npm run typecheck`: passed.
- `npm test`: 4 passed (expected routes, exported links/assets, swap scope, demo indexing protection).
- Desktop browser review: homepage rendering and local images, next-slide control, category filter with URL update, product details, 400 g selection, nutrition accordion, valid demo contact submission and explicit no-save confirmation.

Responsive layouts and reduced-motion handling are implemented. A physical-device/browser matrix, mobile touch testing, print-dialog output and native share-sheet behaviour have not been comprehensively tested. Complete those checks on your target devices before production launch.

Demo submissions do not save or transmit data. No backend, analytics, real certificate claims or production domain have been configured.

## Animation update verification

- `npm run build` and its TypeScript check passed; `npm test` passed all 4 tests,
  including the regression check that restricts image swaps to the collection
  and Products catalogue. Prettier checks passed for the changed code and docs.
- Browser-tested the built static export at desktop and 390 px mobile viewports.
  All 4 homepage collection cards and all 12 catalogue cards revealed their
  loaded alternate on hover and returned to the pack on pointer exit. Keyboard
  focus revealed the alternate on all 4 collection cards and a catalogue card.
  Card dimensions remained stable; the Aloo Bhujia alternate was also visually
  inspected in a screenshot.
- Product-card navigation worked from the homepage; the product detail page had
  no swap components. The “Mixtures” filter showed 4 products and clearing it
  restored all 12. Other homepage image sections had no swap components.
- The hero advanced after 3 seconds. Across a 3.5-second desktop sample, its
  stage stayed 590 px tall and no blank slide frame was observed. Slide dots and
  keyboard arrow navigation worked. Arrow buttons and pause/play controls are
  not rendered in the current hero source; touch swipe and hidden-tab pause were
  not exercised.
- Scroll-entry checks passed for category and collection cards, section
  headings, brand-story image/text, quality cards, recipe/news cards, and the
  final partner section. The reduced-motion emulation kept the hero static,
  showed content immediately, and made product-image switching instant with no
  zoom.
- At 390 px, the homepage, Products listing, and product detail had no
  horizontal overflow. A single normal click from the mobile-sized homepage
  opened the product detail. The browser context did not support touch input,
  so a true device tap/swipe was not tested.
- A deliberately broken alternate image logged the expected load error and
  returned to the visible primary pack after the crossfade. The static Python
  preview emits 404s for unsupported Next.js prefetch/HEAD sidecar requests and
  the favicon; product images loaded successfully and the export asset tests
  passed. These preview-server errors are not evidence of missing product
  images.

## Full-screen hero sizing

- `npm run build` and `npm test` passed after the responsive hero sizing change.
- Browser-checked `http://127.0.0.1:3000/` at 1425×1000, 1440×768, 1024×768,
  820×900, 390×844, 390×667, 320×568, and 844×390. In each viewport, the hero
  ended at the viewport bottom below the header, its copy, artwork, and controls
  stayed inside the hero, and there was no horizontal overflow.
- Desktop and 390×844 screenshots were visually checked. Port 3000 emitted
  repeated Next.js HMR WebSocket handshake errors during the review; these did
  not prevent rendering or layout checks, but live hot reload was not verified.
