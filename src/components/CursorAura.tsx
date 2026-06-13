import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorAura() {
  const [canHover, setCanHover] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 90, damping: 28, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 90, damping: 28, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateCapability = () => setCanHover(media.matches);
    const updatePosition = (event: PointerEvent) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };

    updateCapability();
    media.addEventListener("change", updateCapability);
    window.addEventListener("pointermove", updatePosition);

    return () => {
      media.removeEventListener("change", updateCapability);
      window.removeEventListener("pointermove", updatePosition);
    };
  }, [mouseX, mouseY]);

  if (!canHover) {
    return null;
  }

  return <motion.div className="cursor-aura" style={{ x, y }} aria-hidden="true" />;
}
