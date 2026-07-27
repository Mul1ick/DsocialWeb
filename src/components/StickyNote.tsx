import { motion } from "framer-motion";
import { ClientCategory } from "../data/clientBoard";

interface StickyProps {
  category: ClientCategory;
  active: boolean;
  onClick: () => void;
}

const colours = {
  yellow: "bg-[#F7F3FF]", // Soft Lavender
  pink: "bg-white",       // White
  blue: "bg-[#EFEAFE]",   // Pale Lilac
  green: "bg-[#FCFCFC]",  // Off White
};

export default function StickyNote({
  category,
  active,
  onClick,
}: StickyProps) {
  return (
    <motion.div
      layoutId={category.id}
      onClick={onClick}
      whileHover={{
        rotate: category.rotation - 2,
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      style={{
        left: category.x,
        top: category.y,
        rotate: `${category.rotation}deg`,
      }}
      className={`
        absolute
        cursor-pointer
        select-none
        w-[145px]
        h-[145px]
        rounded-sm
        shadow-[0_18px_45px_rgba(0,0,0,.12)]
        ${colours[category.colour]}
      `}
    >
      {/* Paper texture */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
          [background-size:12px_12px]
        "
      />

      {/* Fold */}

      <div
        className="
          absolute
          top-0
          right-0
          w-8
          h-8
          bg-gradient-to-bl
          from-white/70
          to-transparent
        "
      />

      {/* Pin */}

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-3
          w-4
          h-4
          rounded-full
          bg-[#8A5D4A]
          border
          border-white/80
          shadow
        "
      />

      {/* Content */}

      <div className="h-full flex flex-col justify-center px-5">

        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.25em]
            text-neutral-500
            mb-3
          "
        >
          Category
        </span>

        <h2
          className="
            text-[24px]
            leading-none
            font-light
            text-[#2A2330]
          "
        >
          {category.title}
        </h2>

        <div className="mt-5 flex items-center gap-2">

          <div className="h-[1px] flex-1 bg-black/20" />

          <span className="text-xs opacity-50">
            {category.brands.length}
          </span>

        </div>

      </div>

      {/* Glow */}

      {active && (
        <div
          className="
            absolute
            inset-0
            rounded-sm
            ring-2
            ring-[#8B5A96]
          "
        />
      )}
    </motion.div>
  );
}