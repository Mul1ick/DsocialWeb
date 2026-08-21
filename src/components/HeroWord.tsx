import { motion } from "framer-motion";
import { useRef, useState,useEffect } from "react";

type HeroWordProps = {
  children: string;
  className?: string;
  delay: number;
};

export default function HeroWord({ children, className = "", delay }: HeroWordProps) {
  const letters = children.split("");
  const refs = useRef<Array<HTMLSpanElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const rectsRef = useRef<{x: number, y: number}[]>([]);

  useEffect(() => {
    const updateRects = () => {
      rectsRef.current = refs.current.map(node => {
        if (!node) return { x: 0, y: 0 };
        const rect = node.getBoundingClientRect();
        return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      });
    };
    updateRects();
    window.addEventListener('resize', updateRects);
    return () => window.removeEventListener('resize', updateRects);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    // Use the cached rectsRef instead of getBoundingClientRect()
    rectsRef.current.forEach((center, index) => {
      const distance = Math.hypot(event.clientX - center.x, event.clientY - center.y);
      if (distance < closestDistance) {
        closestIndex = index;
        closestDistance = distance;
      }
    });
    setActiveIndex(closestDistance < 62 ? closestIndex : null);
  };

  return (
    <motion.span
      className={`hero-word-mask ${className}`}
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.001 }}
      animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
      transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveIndex(null)}
    >
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          ref={(node) => {
            refs.current[index] = node;
          }}
          className={activeIndex === index ? "hero-letter hero-letter--active" : "hero-letter"}
        >
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </motion.span>
  );
}
