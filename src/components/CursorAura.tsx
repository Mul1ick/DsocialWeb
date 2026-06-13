// src/components/CursorAura.tsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorAura() {
  const [canHover, setCanHover] = useState(false);
  
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  
  // Tighter springs for a faster, snappier follow
  const x = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.2 });
  const y = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => setCanHover(media.matches);
    
    const updatePosition = (event: PointerEvent) => {
      // Changed from -160 to -24 to center the new 48px cursor
      mouseX.set(event.clientX - 24);
      mouseY.set(event.clientY - 24);
    };

    updateCapability();
    media.addEventListener("change", updateCapability);
    window.addEventListener("pointermove", updatePosition);

    return () => {
      media.removeEventListener("change", updateCapability);
      window.removeEventListener("pointermove", updatePosition);
    };
  }, [mouseX, mouseY]);

  if (!canHover) return null;

  return <motion.div className="cursor-aura" style={{ x, y }} aria-hidden="true" />;
}