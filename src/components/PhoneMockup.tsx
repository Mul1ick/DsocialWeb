import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function PhoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 140,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 140,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = phoneRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateAmountY = ((x - rect.width / 2) / rect.width) * 10;
    const rotateAmountX = -((y - rect.height / 2) / rect.height) * 10;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: {
          duration: 1,
          delay: 0.8,
        },
        scale: {
          duration: 1,
          delay: 0.8,
        },
        y: {
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        },
      }}
      style={{
        perspective: 2000,
      }}
      className="flex justify-center items-center"
    >
      <motion.div
        ref={phoneRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          w-[290px]
          aspect-[9/19.5]
          rounded-[54px]
          bg-[#1b1b1b]
          p-[7px]
          shadow-[0_45px_90px_rgba(0,0,0,0.35)]
          border
          border-white/10
        "
      >
        {/* Titanium Frame */}
        <div
          className="
            relative
            h-full
            w-full
            rounded-[47px]
            overflow-hidden
            bg-black
          "
        >
          {/* Dynamic Island */}
          <div
            className="
              absolute
              top-3
              left-1/2
              -translate-x-1/2
              z-50
              h-7
              w-28
              rounded-full
              bg-black
            "
          />

          {/* Speaker */}
          <div
            className="
              absolute
              top-[15px]
              left-1/2
              -translate-x-1/2
              w-10
              h-[2px]
              bg-neutral-700
              rounded-full
              z-50
            "
          />

          {/* Screen */}
          <div className="absolute inset-0 rounded-[42px] overflow-hidden bg-neutral-900">
            {/* PLACE YOUR REEL HERE */}


            <video
                src="/board/IMG_3374_compressed.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />


            {/* Placeholder */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
              <div className="text-center">
                <div className="text-5xl mb-4">🎬</div>

                <p className="text-white text-lg font-medium">
                  Reel Placeholder
                </p>

                <p className="text-neutral-400 text-sm mt-2">
                  Drop your MP4 here
                </p>
              </div>
            </div> */}

            {/* Glass Reflection */}
            <motion.div
              animate={{
                x: ["-120%", "180%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
                repeatDelay: 2,
              }}
              className="
                absolute
                top-0
                left-0
                h-full
                w-1/3
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                pointer-events-none
              "
            />
          </div>

          {/* Side Button */}
          <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-full bg-neutral-700" />

          {/* Volume Buttons */}
          <div className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-full bg-neutral-700" />
          <div className="absolute -left-[3px] top-42 h-16 w-[3px] rounded-full bg-neutral-700" />
        </div>

        {/* Ambient Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-[54px]
            bg-[radial-gradient(circle_at_50%_120%,rgba(139,90,150,0.25),transparent_70%)]
            blur-3xl
            -z-10
          "
        />
      </motion.div>
    </motion.div>
  );
}