"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const INTERVAL_MS = 2800;

export default function RotatingRole({ roles }: { roles: string[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || roles.length < 2) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % roles.length),
      INTERVAL_MS
    );
    return () => window.clearInterval(timer);
  }, [reduce, roles.length]);

  // Fixed height keeps the hero from jumping as the line swaps.
  if (reduce) {
    return (
      <p className="flex h-7 items-center text-lg text-fg-muted">{roles[0]}</p>
    );
  }

  return (
    <div className="flex h-7 items-center overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-lg text-fg-muted"
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
