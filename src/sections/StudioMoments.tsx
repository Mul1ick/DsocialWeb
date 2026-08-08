import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sanityClient, urlFor } from "../lib/sanity";

gsap.registerPlugin(ScrollTrigger);

const fallbackScatterData = [
  { _id: "1", img: "/bts/1.jpg", type: "photo" },
  { _id: "2", img: "/bts/2.jpg", type: "polaroid" },
  { _id: "3", img: "/bts/3.jpg", type: "photo" },
  { _id: "4", img: "/bts/4.jpg", type: "reel" },
  { _id: "5", img: "/bts/5.jpg", type: "photo" },
  { _id: "6", img: "/bts/6.jpg", type: "polaroid" },
  { _id: "7", img: "/bts/7.jpg", type: "photo" },
  { _id: "8", img: "/bts/8.jpg", type: "reel" },
  { _id: "9", img: "/bts/9.jpg", type: "polaroid" },
  { _id: "10", img: "/bts/10.jpg", type: "photo" },
];

export default function StudioMoments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [moments, setMoments] = useState<any[]>(fallbackScatterData);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "studioMoment"] | order(order asc)[0...10]`)
      .then((res) => {
        if (res && res.length > 0) {
          setMoments(res);
        }
      })
      .catch((err) => console.error("Error fetching studio moments:", err));
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", 
          toggleActions: "play none none reverse",
        },
      });

      const topRow = moments.slice(0, 5).map((_, i) => `.moment-item-${i}`);
      const bottomRow = moments.slice(5, 10).map((_, i) => `.moment-item-${i + 5}`);

      if (topRow.length > 0) {
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
      }

      if (bottomRow.length > 0) {
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
      }

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
    { scope: sectionRef, dependencies: [moments] }
  );

  return (
    <section
      ref={sectionRef}
      id="studio"
      className="relative min-h-screen w-full overflow-hidden bg-[#Faf7fb] flex flex-col items-center justify-start py-20 border-y border-[var(--purple-wash)]"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(139,90,150,0.04))]" />

      {/* HEADER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 flex flex-col items-center justify-center text-center z-20">
        <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-3">
          Behind the Scenes
        </p>
        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
          Studio Moments
        </h2>
      </div>

      {/* GRID */}
      <div className="grid-wrapper w-full max-w-[1400px] px-6 lg:px-12 z-10 mx-auto">
        <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-5">
          {moments.map((item, index) => {
            const imgSrc = item.image?.asset ? urlFor(item.image).url() : item.img;

            return (
              <div
                key={item._id || index}
                className={`moment-item-${index} relative aspect-[4/5] rounded-xl overflow-hidden bg-white/40 soft-lift border border-white/60 shadow-[0_20px_40px_rgba(75,41,79,0.05)] ${
                  item.type === "polaroid" ? "p-2 pb-8 lg:p-3 lg:pb-12 bg-white" : ""
                }`}
              >
                <div className={`relative h-full w-full overflow-hidden ${item.type === "polaroid" ? "rounded-lg" : ""}`}>
                  <img
                    src={imgSrc}
                    alt={item.title || "Studio moment"}
                    className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}