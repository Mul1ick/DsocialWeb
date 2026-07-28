import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { services } from "../lib/content";
import founderPhoto from "../assets/Founder_photo.jpg";
import { clients } from "../lib/content";

gsap.registerPlugin(ScrollTrigger, Observer);

const editorialHeadings = [
  <>SOCIAL MEDIA<br/>MANAGEMENT</>,
  <>CONTENT<br/>CREATION</>,
  <>CREATIVE<br/>STRATEGY</>,
  <>BRANDING &<br/>GRAPHIC DESIGN</>,
  <>PHOTOGRAPHY &<br/>VIDEOGRAPHY</>,
  <>WEBSITE<br/>CONTENT</>,
  <>MORAL<br/>SUPPORT</>,
];

const editorialVisuals = [
  founderPhoto,
  clients[2]?.logo || founderPhoto,
  clients[4]?.logo || founderPhoto,
  clients[6]?.logo || founderPhoto,
  founderPhoto, 
  clients[8]?.logo || founderPhoto,
  clients[1]?.logo || founderPhoto,
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useGSAP(
    () => {
      const panels = panelsRef.current;
      if (!panels.length) return;

      let currentIndex = 0;
      let isAnimating = false;
      let st: globalThis.ScrollTrigger;

      // Helper to instantly snap panels into the correct arrangement
      const resetPanelsTo = (index: number) => {
        panels.forEach((p, i) => {
          if (!p) return;
          if (i === index) {
            gsap.set(p, { yPercent: 0, opacity: 1, scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" });
            if (imageRefs.current[i]) gsap.set(imageRefs.current[i], { scale: 1 });
          } else if (i < index) {
            gsap.set(p, { yPercent: -10, opacity: 0, scale: 0.9 });
          } else {
            gsap.set(p, { yPercent: 100, opacity: 1, scale: 1, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)" });
            if (imageRefs.current[i]) gsap.set(imageRefs.current[i], { scale: 1.3 });
          }
        });
      };

      // The core transition logic with the Dead Zone lockout
      const gotoPanel = (index: number, direction: number) => {
        isAnimating = true; // Lock the gate
        const currentPanel = panels[currentIndex];
        const nextPanel = panels[index];
        const currentImg = imageRefs.current[currentIndex];
        const nextImg = imageRefs.current[index];

        const tl = gsap.timeline();

        if (direction === 1) {
          // Scrolling down: Bring next panel UP
          tl.fromTo(nextPanel, { yPercent: 100, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)" }, { yPercent: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 1, ease: "power3.inOut" }, 0);
          if (nextImg) tl.fromTo(nextImg, { scale: 1.3 }, { scale: 1, duration: 1, ease: "power3.out" }, 0.2);
          tl.to(currentPanel, { yPercent: -10, scale: 0.9, opacity: 0, duration: 1, ease: "power3.inOut" }, 0);
        } else {
          // Scrolling up: Push current panel DOWN
          tl.to(currentPanel, { yPercent: 100, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)", duration: 1, ease: "power3.inOut" }, 0);
          tl.fromTo(nextPanel, { yPercent: -10, scale: 0.9, opacity: 0 }, { yPercent: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.inOut" }, 0);
          if (nextImg) tl.to(nextImg, { scale: 1, duration: 1, ease: "power3.out" }, 0);
        }

        // STRICT DEAD ZONE: 1s for animation + 400ms buffer to absorb all inertia
        setTimeout(() => {
          currentIndex = index;
          isAnimating = false; // Unlock the gate
        }, 1400); 
      };

      // The Event Hijacker
      // The Event Hijacker
      const observer = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        preventDefault: true, 
        tolerance: 30, // Requires a deliberate flick
        onUp: () => {
          if (isAnimating) return; 
          if (currentIndex < panels.length - 1) {
            gotoPanel(currentIndex + 1, 1);
          } else {
            // Reached the end. Disable trap and teleport past the trigger.
            observer.disable(); 
            window.scrollTo(0, st.end + 50); 
          }
        },
        onDown: () => {
          if (isAnimating) return; 
          if (currentIndex > 0) {
            gotoPanel(currentIndex - 1, -1);
          } else {
            // Reached the start. Disable trap and teleport past the trigger.
            observer.disable(); 
            window.scrollTo(0, st.start - 50); 
          }
        }
      });

      // Start disabled so it doesn't hijack the page immediately on load
      observer.disable();
      
      // The Massive ScrollTrap
      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "+=3000", // Massive buffer guarantees they can't blow past it natively
        onEnter: () => {
          if (!observer.isEnabled) {
            currentIndex = 0;
            resetPanelsTo(0);
            observer.enable(); 
          }
        },
        onEnterBack: () => {
          if (!observer.isEnabled) {
            currentIndex = panels.length - 1;
            resetPanelsTo(currentIndex);
            observer.enable(); 
          }
        }
      });

    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="services" className="relative h-screen w-full overflow-hidden bg-[var(--bg)]">
      
      {services.map((service, index) => (
        <div
          key={service.name}
          ref={(el) => { panelsRef.current[index] = el; }}
          className={`absolute inset-0 h-full w-full flex items-center justify-center px-6 lg:px-12 z-10 will-change-transform ${
            index % 2 === 0 ? "bg-[#Faf7fb]" : "bg-[#FDFBF7]"
          }`}
          style={{ zIndex: index }}
        >
          <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-[var(--purple-wash)] opacity-50" />
          <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-px bg-[var(--purple-wash)] opacity-50" />

          <div className="absolute top-10 left-10 lg:left-16 z-40">
            <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium">
              What We Do — 0{index + 1}
            </p>
          </div>

          <div className="w-full max-w-[1280px] mx-auto relative h-[80vh] flex flex-col md:flex-row items-center justify-between mt-10">
            
            <div className="relative w-full md:w-3/5 flex flex-col justify-center h-full z-20 md:pr-10 pt-16 md:pt-0">
              
              <h2 
                className="text-[13vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85] font-light text-[var(--purple-deep)] tracking-tighter m-0 -ml-1 uppercase select-none relative z-20"
                style={{ letterSpacing: "-0.04em" }}
              >
                {editorialHeadings[index]}
              </h2>

              <div className="absolute bottom-4 left-0 max-w-[380px] z-30">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                  Service 0{index + 1}
                </p>
                <p className="text-lg md:text-xl font-light text-[var(--primary)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70vw] md:w-[40%] max-w-[480px] aspect-[3/4] z-10 hidden md:block">
              <div className="absolute -inset-4 border border-[var(--purple-wash)] rounded-sm opacity-50" />
              <div className="absolute -left-8 top-1/2 w-16 h-px bg-[var(--purple-wash)]" />
              
              <div className="w-full h-full rounded-sm overflow-hidden bg-[var(--purple-soft)] shadow-[0_30px_80px_rgba(75,41,79,0.12)]">
                <img 
                  ref={(el) => { imageRefs.current[index] = el; }}
                  src={editorialVisuals[index]} 
                  alt={service.name}
                  className="w-full h-full object-cover object-center mix-blend-multiply opacity-90 will-change-transform"
                />
              </div>
            </div>

            <div className="w-full aspect-[4/3] mt-12 rounded-sm overflow-hidden bg-[var(--purple-soft)] shadow-xl md:hidden relative z-10">
               <img 
                  src={editorialVisuals[index]} 
                  alt={service.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}