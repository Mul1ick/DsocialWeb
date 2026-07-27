import { motion } from "framer-motion";
import { BoardCluster as Cluster } from "../data/boardLayout";

interface Props {
  cluster: Cluster;
  onClick?: () => void;
}

const stickyColours = {
  purple: "bg-[#F4EEFF]",
  white: "bg-white",
};

export default function BoardCluster({
  cluster,
  onClick,
}: Props) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: cluster.sticky.x,
        top: cluster.sticky.y,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
    >
      {/* ================= PHOTO ================= */}

      {cluster.photo && (
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
          <div className="bg-white p-2 rounded-md shadow-xl">
            <img
              src={cluster.photo.src}
              alt=""
              draggable={false}
              className="rounded-sm object-cover"
              style={{
                width: cluster.photo.width,
                height: cluster.photo.width * 1.35,
              }}
            />
          </div>
        </motion.div>
      )}

      {/* ================= TAPE ================= */}

      {cluster.tape && (
        <img
          src="/board/masking.png"
          alt=""
          draggable={false}
          className="absolute pointer-events-none z-30 opacity-90"
          style={{
            left: cluster.tape.dx,
            top: cluster.tape.dy,
            width: cluster.tape.width,
            rotate: `${cluster.tape.rotate}deg`,
          }}
        />
      )}

      {/* ================= PAPER CLIP ================= */}

      {cluster.clip && (
        <img
          src="/board/paperclip1.png"
          alt=""
          draggable={false}
          className="absolute z-40 pointer-events-none"
          style={{
            left: cluster.clip.dx,
            top: cluster.clip.dy,
            width: cluster.clip.size,
            rotate: `${cluster.clip.rotate}deg`,
          }}
        />
      )}

      {/* ================= STICKY ================= */}

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
        {/* Paper grain */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
            [background-size:10px_10px]
          "
        />

        {/* Fold */}

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

        {/* Push pin */}

        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
          <div className="w-4 h-4 rounded-full bg-[#8C6A58] border border-white shadow-md" />
        </div>

        {/* Content */}

       <div className="absolute inset-0 p-8 flex flex-col justify-between">

    <div>

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

        <div
            className="
            w-2
            h-2
            rounded-full
            bg-[#A78BC5]
            "
        />

        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
        >
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