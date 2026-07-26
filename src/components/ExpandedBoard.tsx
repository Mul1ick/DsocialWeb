import { AnimatePresence, motion } from "framer-motion";
import { ClientCategory } from "../data/clientBoard";

interface Props {
  category: ClientCategory | null;
  onClose: () => void;
}

export default function ExpandedBoard({
  category,
  onClose,
}: Props) {
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

            {/* paper texture */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
                [background-size:12px_12px]
              "
            />

            {/* folded corner */}

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
                Category
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

              <div className="mt-10 h-px bg-neutral-200" />

              <div className="mt-10 grid grid-cols-2 gap-5">

                {category.brands.map((brand, i) => (

                  <motion.div
                    key={brand}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    className="
                      bg-white
                      rounded-lg
                      border
                      border-neutral-200
                      p-5
                      shadow-sm
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span className="text-lg">
                      {brand}
                    </span>

                    <div className="w-2 h-2 rounded-full bg-[#8B5A96]" />

                  </motion.div>

                ))}

              </div>

              <p
                className="
                  mt-12
                  italic
                  text-neutral-400
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