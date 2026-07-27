import { motion } from "framer-motion";
import { CampaignCategory } from "../data/clientBoard";

interface Props {
  cluster: CampaignCategory;
  onClick?: () => void;
}

const stickyColours = {
  purple: "bg-[#F4EEFF]",
  white: "bg-white",
};

function MaskingTape({
  dx,
  dy,
  rotate,
  width,
}: {
  dx: number;
  dy: number;
  rotate: number;
  width: number;
}) {
  return (
    <div
      className="absolute pointer-events-none z-30 opacity-80"
      style={{
        left: dx,
        top: dy,
        width,
        rotate: `${rotate}deg`,
      }}
    >
      <div className="h-5 rounded-sm bg-[#EFEAFE]/90 border border-white/60 shadow-sm" />
    </div>
  );
}

function PaperClip({
  dx,
  dy,
  rotate,
  size,
}: {
  dx: number;
  dy: number;
  rotate: number;
  size: number;
}) {
  return (
    <svg
      className="absolute pointer-events-none z-40"
      style={{
        left: dx,
        top: dy,
        width: size,
        height: size * 2.2,
        rotate: `${rotate}deg`,
      }}
      viewBox="0 0 24 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 4C8 2 10 0 12 0C16 0 18 3 18 8V32C18 36 16 38 14 38C12 38 10 36 10 32V12"
        stroke="#8B7355"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 12V32C10 34 11 35 12 35C13 35 14 34 14 32V10"
        stroke="#A08B6D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BoardCluster({ cluster, onClick }: Props) {
  const evidenceLogo = cluster.brands[0]?.logo;

  return (
    <motion.div
      className="client-cluster absolute"
      style={{
        left: cluster.sticky.x,
        top: cluster.sticky.y,
      }}
      // initial={{ opacity: 0, y: 40 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.6 }}
    >
      {cluster.photo && evidenceLogo && (
        <motion.div
          whileHover={{
            rotate: cluster.photo.rotate + 2,
            scale: 1.02,
          }}
          className="absolute z-0"
          style={{
            left: cluster.photo.dx,
            top: cluster.photo.dy,
            rotate: `${cluster.photo.rotate}deg`,
          }}
        >
          <div className="bg-white p-2 pb-8 rounded-sm shadow-xl">
            <div
              className="rounded-sm bg-[var(--purple-soft)] flex items-center justify-center overflow-hidden"
              style={{
                width: cluster.photo.width,
                height: cluster.photo.width * 1.1,
              }}
            >
              <img
                src={evidenceLogo}
                alt=""
                draggable={false}
                className="max-h-[70%] max-w-[80%] object-contain mix-blend-multiply opacity-80"
              />
            </div>
            <p className="mt-2 text-[10px] text-center text-neutral-400 font-handwritten tracking-wide">
              evidence
            </p>
          </div>
        </motion.div>
      )}

      {cluster.tape && (
        <MaskingTape
          dx={cluster.tape.dx}
          dy={cluster.tape.dy}
          rotate={cluster.tape.rotate}
          width={cluster.tape.width}
        />
      )}

      {cluster.clip && (
        <PaperClip
          dx={cluster.clip.dx}
          dy={cluster.clip.dy}
          rotate={cluster.clip.rotate}
          size={cluster.clip.size}
        />
      )}

      <motion.div
        layoutId={cluster.id}
        onClick={onClick}
        whileHover={{
          y: -8,
          scale: 1.03,
          rotate: cluster.sticky.rotate - 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className={`
          relative
          overflow-hidden
          cursor-pointer
          rounded-sm
          z-20
          ${stickyColours[cluster.sticky.colour]}
        `}
        style={{
          width: cluster.sticky.size,
          height: cluster.sticky.size,
          rotate: `${cluster.sticky.rotate}deg`,
          boxShadow:
            "0 14px 40px rgba(0,0,0,.10), 0 2px 6px rgba(0,0,0,.05)",
        }}
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
            [background-size:10px_10px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            w-8
            h-8
            bg-gradient-to-bl
            from-white/70
            to-transparent
          "
        />

        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
          <div className="w-4 h-4 rounded-full bg-[#8C6A58] border border-white shadow-md" />
        </div>

        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-2">
              Case file
            </p>
            <h2
              className="
                text-[34px]
                leading-[1]
                font-light
                tracking-[-0.04em]
                text-[#2F2733]
              "
            >
              {cluster.title}
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-handwritten">
              {cluster.brands.length} brands
            </span>

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#6D5A82"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
