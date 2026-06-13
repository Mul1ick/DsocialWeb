import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InteractiveLogo() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const x = useSpring(dotX, { stiffness: 120, damping: 18, mass: 0.35 });
  const y = useSpring(dotY, { stiffness: 120, damping: 18, mass: 0.35 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const logo = logoRef.current;

      if (!logo) {
        return;
      }

      const rect = logo.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.78;
      const centerY = rect.top + rect.height * 0.34;
      const distanceX = event.clientX - centerX;
      const distanceY = event.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      if (distance > 150) {
        dotX.set(0);
        dotY.set(0);
        return;
      }

      const strength = 1 - distance / 150;
      dotX.set((distanceX / Math.max(distance, 1)) * strength * 9);
      dotY.set((distanceY / Math.max(distance, 1)) * strength * 9);
    };

    window.addEventListener("pointermove", onPointerMove);
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [dotX, dotY]);

  return (
    <a ref={logoRef} className="interactive-logo" href="#top" aria-label="d.social home">
      <span>d</span>
      <motion.i style={{ x, y }} aria-hidden="true" />
      <span>social</span>
    </a>
  );
}
