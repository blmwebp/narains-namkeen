"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
const links = [
  ["/", "Home"],
  ["/our-story/", "Our Story"],
  ["/products/", "Products"],
  ["/recipes/", "Recipes"],
  ["/news/", "News"],
  ["/contact/", "Contact"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = nav.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus();
    function keys(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const els = Array.from(
          nav.current?.querySelectorAll<HTMLElement>("a,button") || [],
        );
        const first = els[0],
          last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = old;
      document.removeEventListener("keydown", keys);
    };
  }, [open]);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={scrolled ? "header compact" : "header"}>
        <Link className="brand" href="/" aria-label="Narain’s Namkeen home">
          <img
            src="/images/logo.png"
            width="150"
            height="92"
            alt="Narain’s Namkeen"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={path === url ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button nav-cta" href="/distributor/">
          Partner with us ↗
        </Link>
        <button
          className="icon-button menu-toggle"
          ref={toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </header>
      {open && (
        <nav
          id="mobile-menu"
          ref={nav}
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <button
            className="icon-button close-menu"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            aria-label="Close menu"
          >
            <X />
          </button>
          {links.map(([url, label]) => (
            <Link onClick={() => setOpen(false)} key={url} href={url}>
              {label}
            </Link>
          ))}
          <Link href="/quality/">Quality & care</Link>
          <Link href="/distributor/">Become a distributor</Link>
        </nav>
      )}
      {scrolled && (
        <button
          className="back-top icon-button"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "instant"
                : "smooth",
            })
          }
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
