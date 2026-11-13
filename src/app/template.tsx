"use client";
import { SectionMotion } from "@/components/section-motion";
import { motion, useReducedMotion } from "motion/react";
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.45 }}
    >
      <SectionMotion>{children}</SectionMotion>
    </motion.div>
  );
}
