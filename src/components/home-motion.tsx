"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("reveal-arrived");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    element
      .querySelectorAll<HTMLElement>("[data-home-reveal]")
      .forEach((target) => {
        target.classList.add("reveal-pending");
        observer.observe(target);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-motion" ref={root}>
      {children}
    </div>
  );
}
