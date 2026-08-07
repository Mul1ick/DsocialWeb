import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function PhoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Tracks if the phone container is visible in the viewport
  const isInView = useInView(phoneRef, { amount: 0.3 });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 140, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 140, damping: 18 });

  // Play/pause and handle browser autoplay policy gracefully
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser blocks unmuted playback on load, fallback to muted autoplay immediately
          video.muted = true;
          setIsMuted(true);
          video.play().catch((err) => console.warn("Autoplay blocked:", err));
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  // Automatically unmute audio on the user's first click anywhere on the page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && isInView) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isInView]);

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 1, delay: 0.8 },
        scale: { duration: 1, delay: 0.8 },
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
      }}
      style={{ perspective: 2000 }}
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
        <div className="relative h-full w-full rounded-[47px] overflow-hidden bg-black">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 h-7 w-28 rounded-full bg-black" />

          {/* Speaker */}
          <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-10 h-[2px] bg-neutral-700 rounded-full z-50" />

          {/* Screen */}
          <div className="absolute inset-0 rounded-[42px] overflow-hidden bg-neutral-900">
            <video
              ref={videoRef}
              src="/board/IMG_3555.MP4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-5 right-5 z-50 p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 hover:bg-black/70 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            {/* Glass Reflection */}
            <motion.div
              animate={{ x: ["-120%", "180%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear", repeatDelay: 2 }}
              className="
                absolute top-0 left-0 h-full w-1/3 -skew-x-12
                bg-gradient-to-r from-transparent via-white/15 to-transparent
                pointer-events-none
              "
            />
          </div>

          {/* Side Buttons */}
          <div className="absolute -right-[3px] top-32 h-20 w-[3px] rounded-full bg-neutral-700" />
          <div className="absolute -left-[3px] top-28 h-10 w-[3px] rounded-full bg-neutral-700" />
          <div className="absolute -left-[3px] top-42 h-16 w-[3px] rounded-full bg-neutral-700" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-[54px] bg-[radial-gradient(circle_at_50%_120%,rgba(139,90,150,0.25),transparent_70%)] blur-3xl -z-10" />
      </motion.div>
    </motion.div>
  );
}