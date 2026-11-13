"use client";
import { useEffect, useRef } from "react";
/** Progressive enhancement: content stays visible without JavaScript/reduced motion. */
export function SectionMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      el.querySelectorAll(".reveal-pending").forEach((n) =>
        n.classList.remove("reveal-pending"),
      );
      if (mq.matches) return;
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("reveal-pending");
              entry.target.classList.add("reveal-arrived");
              observer?.unobserve(entry.target);
            }
          }),
        { threshold: 0.08 },
      );
      el.querySelectorAll<HTMLElement>(
        ".section-head,.page-heading,.story-copy,.care-grid > div,.process-grid > div,.article-card,.product-card,.category-grid > a,.partner,.enquiry-form,.certificate,.reading",
      ).forEach((node, i) => {
        node.style.setProperty("--reveal-delay", `${(i % 4) * 65}ms`);
        if (node.getBoundingClientRect().top > window.innerHeight * 0.9) {
          node.classList.add("reveal-pending");
          observer?.observe(node);
        }
      });
    };
    setup();
    mq.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      mq.removeEventListener("change", setup);
    };
  }, []);
  return <div ref={root}>{children}</div>;
}
