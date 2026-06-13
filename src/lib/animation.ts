// src/lib/animation.ts
import type { Transition } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Faster, slightly springy transition for a more tactile feel
export const revealTransition: Transition = {
  type: "spring",
  damping: 24,
  stiffness: 100,
  mass: 0.8,
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.06, // Sped up the stagger slightly
    },
  },
};