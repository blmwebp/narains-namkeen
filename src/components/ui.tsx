"use client";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.45 }}
    >
      {children}
    </motion.div>
  );
}
export function ShareTools({ print = false }: { print?: boolean }) {
  const [message, setMessage] = useState("");
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        setMessage("Link copied.");
      }
    } catch {
      setMessage(
        "Sharing cancelled or unavailable. Copy the address from your browser.",
      );
    }
  }
  return (
    <div className="share-tools">
      <button className="button secondary" onClick={share}>
        Share / copy link ↗
      </button>
      {print && (
        <button className="button secondary" onClick={() => window.print()}>
          Print recipe
        </button>
      )}
      <span role="status">{message}</span>
    </div>
  );
}
