import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InteractiveLogo() {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const x = useSpring(dotX, { stiffness: 120, damping: 18, mass: 0.35 });
  const y = useSpring(dotY, { stiffness: 120, damping: 18, mass: 0.35 });

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    // Cache the position
    let rect = logo.getBoundingClientRect();
    let centerX = rect.left + rect.width * 0.78;
    let centerY = rect.top + rect.height * 0.34;

    const onResize = () => {
      rect = logo.getBoundingClientRect();
      centerX = rect.left + rect.width * 0.78;
      centerY = rect.top + rect.height * 0.34;
    };
    
    window.addEventListener("resize", onResize);

    const onPointerMove = (event: PointerEvent) => {
      // Use cached variables instead of calling getBoundingClientRect() here!
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
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
    };
  }, [dotX, dotY]);

  return (
    <a ref={logoRef} className="interactive-logo" href="#top" aria-label="d.social home">
      <span>d</span>
      <motion.i style={{ x, y }} aria-hidden="true" />
      <span>social</span>
    </a>
  );
}
