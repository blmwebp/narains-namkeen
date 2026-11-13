"use client";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { slides } from "@/content/hero-slides";
import { products } from "@/content/products";
import { Pack } from "./pack";
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const [focus, setFocus] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduced = useReducedMotion();
  const touch = useRef(0);
  const slide = slides[index];
  const product = products.find((p) => p.slug === slide.product)!;
  const next = (d: number) =>
    setIndex((i) => (i + d + slides.length) % slides.length);
  useEffect(() => {
    const f = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", f);
    return () => document.removeEventListener("visibilitychange", f);
  }, []);
  useEffect(() => {
    if (paused || focus || hidden || reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      3000,
    );
    return () => clearInterval(id);
  }, [paused, focus, hidden, reduced]);
  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Flavours worth sharing"
      style={{ background: slide.background }}
      onFocusCapture={() => setFocus(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocus(false);
      }}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const d = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(d) > 60) next(d < 0 ? 1 : -1);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next(1);
        if (e.key === "ArrowLeft") next(-1);
      }}
    >
      <div className="container hero-inner">
        <div className="hero-stage">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={index}
              className="hero-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.45 }}
            >
              <motion.div
                className="hero-copy"
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  delay: reduced ? 0 : 0.04,
                }}
              >
                <span className="eyebrow">{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <span className="hero-script">A taste of togetherness.</span>
              </motion.div>
              <motion.div
                className="hero-art"
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduced ? 0 : 0.4,
                  delay: reduced ? 0 : 0.12,
                }}
              >
                <span className="hero-ring" />
                <span className="hero-stamp">
                  PASS IT
                  <br />
                  AROUND<span>✳</span>
                </span>
                <div className="hero-pack">
                  <Pack product={product} large />
                </div>
                <img
                  className="hero-bowl"
                  src={product.image}
                  width="280"
                  height="280"
                  alt="Illustrative namkeen serving"
                />
                <span className="art-caption">
                  Serving suggestion · Concept pack
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="hero-controls">
          <span className="slide-number">
            0{index + 1}
            <small> / 0{slides.length}</small>
          </span>
          <div className="dots">
            {slides.map((s, i) => (
              <button
                key={s.product}
                aria-label={"Go to slide " + (i + 1)}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                <span className={i === index ? "active" : ""} />
              </button>
            ))}
          </div>
          {/* <div className="arrows">
            <button
              className="icon-button"
              aria-label="Previous slide"
              onClick={() => next(-1)}
            >
              <ArrowLeft size={19} />
            </button>
            <button
              className="icon-button"
              aria-label="Next slide"
              onClick={() => next(1)}
            >
              <ArrowRight size={19} />
            </button>
            <button
              className="icon-button"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              aria-pressed={paused}
              onClick={() => setPaused(!paused)}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
