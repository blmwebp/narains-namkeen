# Homepage motion and product image swaps

## Product cards

The reusable `ProductImageSwap` is used by product cards on the homepage's
“MEET THE COLLECTION” section and the Products listing only. Its primary
view is the existing concept pack; the decorative secondary image fades in only
after it loads. A failed secondary image leaves the pack visible. On touch
screens, product cards keep their normal single-tap navigation.

Edit each product's `hoverImage` in `src/content/products.ts`. The current
secondary photos are the credited, illustrative local `sev.jpg` and
`mixture.jpg` assets; they are not product-specific photography.

## Homepage motion

- Hero auto-advances every 3000 ms. Its crossfade is 450 ms, with text and art
  appearing over 400 ms and staggered by 80 ms. Timing and pause logic live in
  `src/components/hero.tsx`.
- Section headings fade up 22 px over 600 ms.
- Homepage card groups stagger by 80 ms; collection-card entrances use only
  opacity and vertical translation.
- The story image uses a subtle clip reveal. Its story text and the final
  partner block use the same restrained fade-up.
- Scroll reveals are initialized only on the homepage and remain visible when
  JavaScript, IntersectionObserver, or reduced-motion settings prevent motion.
- Non-collection imagery and product-detail images do not swap.

Image crossfade and reveal durations are in the scoped rules at the end of
`src/app/globals.css`. The existing site-level styling, content and page
navigation are unchanged.

## Free references reviewed

- React Bits Fade Content: https://www.reactbits.dev/animations/fade-content
- Motion for React: https://motion.dev/docs/react
- Motion scroll animations: https://motion.dev/docs/react-scroll-animations

The site uses its already-installed `motion` package for the hero transition
and original scoped CSS/IntersectionObserver reveals. No paid component source
or second animation library was added.
