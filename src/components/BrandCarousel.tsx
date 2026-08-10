import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight,Instagram } from "lucide-react";
import { CampaignBrand } from "../data/clientBoard";

interface Props {
  brands: CampaignBrand[];
}

export default function BrandCarousel({ brands }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const count = brands.length;
  const hasBrands = count > 0;

  const goTo = useCallback(
    (next: number) => {
      if (!hasBrands) return;
      setDirection(next > index ? 1 : -1);
      setIndex((next + count) % count);
    },
    [count, hasBrands, index],
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    setIndex(0);
    setDirection(0);
  }, [brands]);

  useEffect(() => {
    if (!hasBrands) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, hasBrands]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
  };

  if (!hasBrands) {
    return (
      <div className="mt-10 flex min-h-[280px] items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-white/60 px-8 text-center">
        <p className="text-neutral-400 italic">Case open — brands coming soon</p>
      </div>
    );
  }

  const brand = brands[index];

  return (
    <div className="mt-10">
      <div className="relative flex items-center justify-center min-h-[400px]">
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-[var(--purple)] shadow-sm transition hover:bg-[var(--purple-soft)]"
          aria-label="Previous brand"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        {/* UPDATED: Increased max width from 420px to 560px */}
        <div className="w-full max-w-[560px] overflow-hidden px-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={brand.name}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              className="
                relative
                rounded-lg
                border
                border-neutral-200
                bg-white
                p-10
                shadow-[0_8px_30px_rgba(75,41,79,0.06)]
                cursor-grab
                active:cursor-grabbing
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.03]
                  bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
                  [background-size:12px_12px]
                  pointer-events-none
                "
              />

              <div className="relative flex flex-col items-center gap-6">
                {/* UPDATED: Increased container height to h-64 */}
                <div className="flex h-64 w-full items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-56 max-w-full object-contain mix-blend-multiply"
                    draggable={false}
                  />
                  {/* Brand Name & Instagram Action Button */}
                <div className="flex items-center gap-3">
                  <p className="text-xl font-light text-[#2B2231] tracking-tight">
                    {brand.name}
                  </p>

                  {brand.instagram && (
                    <a
                      href={brand.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevents drag events on carousel
                      className="p-2 rounded-full bg-[var(--purple-soft)] text-[var(--purple)] hover:bg-[var(--purple)] hover:text-white transition-colors duration-200"
                      aria-label={`Visit ${brand.name} on Instagram`}
                    >
                      <Instagram size={18} strokeWidth={1.8} />
                    </a>
                  )}
                </div>
                </div>
                <p className="text-xl font-light text-[#2B2231] tracking-tight">
                  {brand.name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-[var(--purple)] shadow-sm transition hover:bg-[var(--purple-soft)]"
          aria-label="Next brand"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        {brands.map((item, dotIndex) => (
          <button
            key={item.name}
            type="button"
            onClick={() => goTo(dotIndex)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${dotIndex === index ? "w-6 bg-[var(--accent)]" : "w-2 bg-neutral-300 hover:bg-[var(--purple-mid)]"}
            `}
            aria-label={`Go to ${item.name}`}
          />
        ))}
      </div>
    </div>
  );
}