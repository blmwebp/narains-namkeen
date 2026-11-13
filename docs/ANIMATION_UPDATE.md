# Animation and hover update

## Hero
- Autoplay interval: 3000 ms in `src/components/hero.tsx`.
- Pointer hover no longer pauses autoplay. Explicit pause, focus within controls, hidden browser tabs and reduced-motion preference still pause it.
- Coordinated slide transition with short blur, vertical movement and masked headline entrance.
- No CTA buttons were added to the hero.

## Images
- `HoverMedia` provides a true alternate-image reveal using clipping and crossfade.
- Product cards reveal the serving photo behind the concept pack when hovering anywhere on the card or keyboard focusing the link.
- Product detail gallery temporarily switches pack/serving on hover or focus; its existing buttons remain the persistent touch controls.
- Category, recipe and news cards reveal alternate photos when hovering anywhere on the card or focusing the link.
- Standalone story/article/hero images support keyboard focus and a touch-only toggle button.
- Text-only sections receive motion/hover styling, rather than unrelated images. Brand logos remain unchanged.
- Generic demo photographs are reused; pass `alternateSrc` into HoverMedia to supply a specific second photo. Replace these reference images with approved photography before launch.

## Section and page motion
- Staggered rising grid cards, clipped scroll reveals, heading entrances and route-entry transitions.
- SectionMotion uses IntersectionObserver, runs once per entry, and cleans up when navigating away.
- Reduced-motion preference turns off movement; hover images still change instantly.
- Native scrolling and existing navigation remain intact.

## Reference
https://animmasterlib.dev/ was reviewed for hover, slider, grid and page transition categories. Its component source is a paid downloadable collection and was not supplied. These are original CSS/Motion implementations inspired by those categories, not licensed Animmaster source or an imported Animmaster package.

## Files to edit
`src/components/hero.tsx`, `hover-media.tsx`, `section-motion.tsx`, `cards.tsx`, `product-detail.tsx`, `src/app/template.tsx`, and the Motion refresh block at the end of `src/app/globals.css`.
