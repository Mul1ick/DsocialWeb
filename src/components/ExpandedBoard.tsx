import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CampaignCategory } from "../data/clientBoard";
import BrandCarousel from "./BrandCarousel";

interface Props {
  category: CampaignCategory | null;
  onClose: () => void;
}

export default function ExpandedBoard({ category, onClose }: Props) {
  useEffect(() => {
    if (!category) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [category, onClose]);

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[999]
            bg-black/40
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-10
          "
          onClick={onClose}
        >
          <motion.div
            layoutId={category.id}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-[700px]
              max-w-[95vw]
              min-h-[650px]
              rounded-md
              bg-[#FDFBF7]
              border
              border-[#ECE6DD]
              shadow-[0_40px_100px_rgba(0,0,0,.25)]
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
                [background-size:12px_12px]
              "
            />

            <div
              className="
                absolute
                top-0
                right-0
                w-14
                h-14
                bg-gradient-to-bl
                from-neutral-200
                to-transparent
              "
            />

            <div className="relative z-10 p-12">
              <p
                className="
                  uppercase
                  tracking-[0.35em]
                  text-[11px]
                  text-neutral-400
                "
              >
                Open Case
              </p>

              <h1
                className="
                  mt-3
                  text-[54px]
                  font-light
                  leading-none
                  text-[#2B2231]
                "
              >
                {category.title}
              </h1>

              <p className="mt-4 text-neutral-400 italic font-handwritten text-lg">
                {category.note}
              </p>

              <div className="mt-10 h-px bg-neutral-200" />

              <BrandCarousel brands={category.brands} />

              <p
                className="
                  mt-12
                  italic
                  text-[var(--accent)]
                "
              >
                reviewed ✓
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
