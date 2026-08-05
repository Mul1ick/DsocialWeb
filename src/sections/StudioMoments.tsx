import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, MessageCircle, BarChart2, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scatterData = [
  { img: "public/BTS/BTS011.JPG", type: "photo" },
  { img: 'public/BTS/BTS013.JPG', type: "polaroid" },
  { img: 'public/BTS/IMG_173.JPG', type: "photo" },
  { img: 'public/BTS/IMG_172.JPG', type: "reel" },
  { img: 'public/BTS/IMG_400.JPG', type: "photo" },
  
  { img: 'public/BTS/IMG_1295.JPG', type: "polaroid" },
  { img: 'public/BTS/IMG_1702.JPG', type: "photo" },
  { img: 'public/BTS/IMG_6325.JPG', type: "reel" },
  { img: 'public/BTS/IMG_6327.JPG', type: "polaroid" },
  { img: 'public/BTS/BTS011.JPG', type: "photo" },
];

export default function StudioMoments() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // We removed the separate pinning ScrollTrigger entirely! 
      // Now it just scrolls naturally without trapping the user.

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", 
          toggleActions: "play none none reverse",
        },
      });

      const topRow = scatterData.map((_, i) => `.moment-item-${i}`).slice(0, 5);
      const bottomRow = scatterData.map((_, i) => `.moment-item-${i}`).slice(5, 10);

      tl.fromTo(
        topRow,
        { x: "100vw", opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.8, 
          stagger: 0.1, 
          ease: "power3.out" 
        },
        0
      );

      tl.fromTo(
        bottomRow,
        { x: "-100vw", opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.8, 
          stagger: 0.1, 
          ease: "power3.out" 
        },
        0 
      );

      tl.fromTo(
        ".micro-ui",
        { y: 15, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        1.0 
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative min-h-screen w-full overflow-hidden bg-[#Faf7fb] flex flex-col items-center justify-start py-20 border-y border-[var(--purple-wash)]"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(139,90,150,0.04))]" />

      {/* 2. THE HEADER: Sits at the top, centered, with mb-12 to push the grid down */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 flex flex-col items-center justify-center text-center z-20">
        <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-3">
          Behind the Scenes
        </p>
        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
          Studio Moments.
        </h2>
      </div>

      {/* 3. THE GRID: Flows naturally underneath */}
      <div className="grid-wrapper w-full max-w-[1400px] px-6 lg:px-12 z-10 mx-auto">
        <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-5">
          {scatterData.map((item, index) => (
            <div
              key={index}
              className={`moment-item-${index} relative aspect-[4/5] rounded-xl overflow-hidden bg-white/40 soft-lift border border-white/60 shadow-[0_20px_40px_rgba(75,41,79,0.05)] ${
                item.type === "polaroid" ? "p-2 pb-8 lg:p-3 lg:pb-12 bg-white" : ""
              }`}
            >
              <div className={`relative h-full w-full overflow-hidden ${item.type === "polaroid" ? "rounded-lg" : ""}`}>
                <img
                  src={item.img}
                  alt="Studio moment"
                  className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
                />
              </div>

              {item.type === "reel" && (
                <div className="micro-ui absolute top-2 right-2 lg:top-3 lg:right-3 bg-black/40 backdrop-blur-md p-1.5 lg:p-2 rounded-full text-white">
                  <Play size={12} fill="currentColor" />
                </div>
              )}

              {item.type === "photo" && index % 2 === 0 && (
                <div className="micro-ui absolute bottom-2 left-2 lg:bottom-3 lg:left-3 flex gap-1.5">
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 lg:px-2.5 lg:py-1.5 rounded-full shadow-sm border border-white">
                    <Heart size={10} className="text-[var(--accent)]" fill="currentColor" />
                    <span className="text-[9px] lg:text-[10px] font-medium text-[var(--primary)]">1.2k</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 lg:p-1.5 rounded-full shadow-sm border border-white text-[var(--secondary)]">
                    <MessageCircle size={10} />
                  </div>
                </div>
              )}

              {item.type === "polaroid" && (
                <div className="micro-ui absolute -right-2 top-6 lg:top-8 bg-white/95 backdrop-blur-md px-2 py-1 lg:px-3 lg:py-1.5 rounded-lg shadow-xl border border-[var(--purple-wash)] rotate-6 flex items-center gap-1.5">
                  <BarChart2 size={10} className="text-[var(--accent)]" />
                  <div>
                    <p className="text-[6px] lg:text-[7px] uppercase tracking-wider text-[var(--secondary)]">Reach</p>
                    <p className="text-[9px] lg:text-[10px] font-semibold text-[var(--primary)]">+142%</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}