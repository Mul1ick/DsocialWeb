// src/lib/animation.ts
import type { Transition } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
};

export const revealTransition: Transition = {
  duration: 0.6,
  ease: [0.76, 0, 0.24, 1], // Cinematic ease-in-out (fast middle, slow ends)
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.04, // Very fast stagger
    },
  },
};