import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Heart, MessageCircle, BarChart2, Play } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

// Expanded to 10 items for a perfect 5-column, 2-row grid. 
// You can easily add 5 more for a 3-row layout.
const scatterData = [
  { img: "public/BTS/BTS011.JPG", type: "photo", x: "-50vw", y: "-40vh", rotate: -15, scale: 1.2 },
  { img: 'public/BTS/BTS013.JPG', type: "polaroid", x: "-20vw", y: "-60vh", rotate: 12, scale: 1.1 },
  { img: 'public/BTS/IMG_173.JPG', type: "photo", x: "10vw", y: "-50vh", rotate: -5, scale: 1.3 },
  { img: 'public/BTS/IMG_172.JPG', type: "reel", x: "40vw", y: "-30vh", rotate: 20, scale: 1.1 },
  { img: 'public/BTS/IMG_400.JPG', type: "photo", x: "60vw", y: "-10vh", rotate: -25, scale: 1.4 },
  
  { img: 'public/BTS/IMG_1295.JPG', type: "polaroid", x: "-60vw", y: "20vh", rotate: -20, scale: 1.2 },
  { img: 'public/BTS/IMG_1702.JPG', type: "photo", x: "-30vw", y: "40vh", rotate: 15, scale: 1.3 },
  { img: 'public/BTS/IMG_6325.JPG', type: "reel", x: "0vw", y: "50vh", rotate: -10, scale: 1.1 },
  { img: 'public/BTS/IMG_6327.JPG', type: "polaroid", x: "30vw", y: "60vh", rotate: 25, scale: 1.2 },
  { img: 'public/BTS/BTS011.JPG', type: "photo", x: "60vw", y: "40vh", rotate: -15, scale: 1.1 },
];

export default function StudioMoments() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200", 
          pin: true, 
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".grid-wrapper",
        { scale: 1.4 },
        { scale: 1, duration: 2.5, ease: "power3.out" },
        0
      );

      scatterData.forEach((item, i) => {
        tl.fromTo(
          `.moment-item-${i}`,
          {
            x: item.x,
            y: item.y,
            rotation: item.rotate,
            scale: item.scale,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 2.5, 
            ease: "power3.out",
          },
          0
        );
      });

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
        1.5 
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative min-h-screen w-full overflow-hidden bg-[#Faf7fb] flex items-center justify-center py-10 border-y border-[var(--purple-wash)]"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(139,90,150,0.04))]" />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none mix-blend-multiply opacity-50">
        <p className="uppercase tracking-[0.3em] text-[10px] text-[var(--secondary)] mb-2 font-medium">
          Behind the Scenes
        </p>
      </div>

      {/* Expanded to max-w-[1400px] to utilize the ultra-wide layout */}
      <div className="grid-wrapper w-full max-w-[1400px] px-6 lg:px-12 z-10 mx-auto">
        
        {/* Changed to grid-cols-5 for large screens, scaling down gracefully on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5">
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