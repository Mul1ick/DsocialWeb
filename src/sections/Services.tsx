import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { services, clients } from "../lib/content";
import founderPhoto from "../assets/Founder_photo.jpg";

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

// Split the services into two distinct groups for the two panels
const servicePanels = [
  {
    id: "panel-1",
    items: services.slice(0, 4).map((service, i) => ({ ...service, originalIndex: i })),
    gridClass: "lg:grid-cols-4", // 4 columns for the first panel
  },
  {
    id: "panel-2",
    items: services.slice(4, 7).map((service, i) => ({ ...service, originalIndex: i + 4 })),
    gridClass: "lg:grid-cols-3", // 3 columns for the second panel
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const panels = panelsRef.current;
      if (!panels.length) return;

      let currentIndex = 0;
      let isAnimating = false;
      let st: globalThis.ScrollTrigger;

      const resetPanelsTo = (index: number) => {
        panels.forEach((p, i) => {
          if (!p) return;
          const images = p.querySelectorAll('.service-image');
          
          if (i === index) {
            gsap.set(p, { yPercent: 0, opacity: 1, scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" });
            gsap.set(images, { scale: 1 });
          } else if (i < index) {
            gsap.set(p, { yPercent: -10, opacity: 0, scale: 0.95 });
          } else {
            gsap.set(p, { yPercent: 100, opacity: 1, scale: 1, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)" });
            gsap.set(images, { scale: 1.15 });
          }
        });
      };

      const gotoPanel = (index: number, direction: number) => {
        isAnimating = true; 
        const currentPanel = panels[currentIndex];
        const nextPanel = panels[index];
        
        // Grab all images in the incoming panel for a staggered reveal
        const nextImages = nextPanel?.querySelectorAll('.service-image');

        const tl = gsap.timeline();

        if (direction === 1) {
          // Scrolling down: Bring next panel UP
          tl.fromTo(nextPanel, { yPercent: 100, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)" }, { yPercent: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 1, ease: "power3.inOut" }, 0);
          if (nextImages?.length) tl.fromTo(nextImages, { scale: 1.15 }, { scale: 1, duration: 1, ease: "power3.out", stagger: 0.05 }, 0.2);
          tl.to(currentPanel, { yPercent: -10, scale: 0.95, opacity: 0, duration: 1, ease: "power3.inOut" }, 0);
        } else {
          // Scrolling up: Push current panel DOWN
          tl.to(currentPanel, { yPercent: 100, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)", duration: 1, ease: "power3.inOut" }, 0);
          tl.fromTo(nextPanel, { yPercent: -10, scale: 0.95, opacity: 0 }, { yPercent: 0, scale: 1, opacity: 1, duration: 1, ease: "power3.inOut" }, 0);
          if (nextImages?.length) tl.fromTo(nextImages, { scale: 1.15 }, { scale: 1, duration: 1, ease: "power3.out", stagger: 0.05 }, 0);
        }

        setTimeout(() => {
          currentIndex = index;
          isAnimating = false;
        }, 1400); 
      };

      const observer = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        preventDefault: true, 
        tolerance: 30, 
        onUp: () => {
          if (isAnimating) return; 
          if (currentIndex < panels.length - 1) {
            gotoPanel(currentIndex + 1, 1);
          } else {
            observer.disable(); 
            window.scrollTo(0, st.end + 50); 
          }
        },
        onDown: () => {
          if (isAnimating) return; 
          if (currentIndex > 0) {
            gotoPanel(currentIndex - 1, -1);
          } else {
            observer.disable(); 
            window.scrollTo(0, st.start - 50); 
          }
        }
      });

      observer.disable();

      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "+=1500", // Reduced buffer since there are only 2 transitions now
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
      
      {servicePanels.map((panel, panelIndex) => (
        <div
          key={panel.id}
          ref={(el) => { panelsRef.current[panelIndex] = el; }}
          className={`absolute inset-0 h-full w-full flex flex-col justify-center px-6 lg:px-12 z-10 will-change-transform ${
            panelIndex % 2 === 0 ? "bg-[#Faf7fb]" : "bg-[#FDFBF7]"
          }`}
          style={{ zIndex: panelIndex }}
        >
          {/* Aesthetic border lines */}
          <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-px bg-[var(--purple-wash)] opacity-50 pointer-events-none" />
          <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-px bg-[var(--purple-wash)] opacity-50 pointer-events-none" />

          {/* Section Indicator */}
          <div className="absolute top-10 left-10 lg:left-16 z-40">
            <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium">
              What We Do — Part 0{panelIndex + 1}
            </p>
          </div>

          <div className="w-full max-w-[1400px] mx-auto relative mt-20 md:mt-24">
            
            {/* Dynamic Grid Layout (4 cols vs 3 cols) */}
            <div className={`grid grid-cols-1 md:grid-cols-2 ${panel.gridClass} gap-x-8 lg:gap-x-12 gap-y-16 h-full`}>
              
              {panel.items.map((service, index) => {
                const absIndex = service.originalIndex;
                return (
                  <div key={service.name} className="flex flex-col h-full group">
                    
                    {/* Header Block */}
                    <div className="mb-6 lg:mb-10">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                        0{absIndex + 1}
                      </p>
                      <h2 
                        className="text-3xl lg:text-4xl xl:text-[2.5rem] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight uppercase"
                      >
                        {editorialHeadings[absIndex]}
                      </h2>
                    </div>

                    {/* Image Block */}
                    <div className="w-full aspect-[4/5] overflow-hidden bg-[var(--purple-soft)] rounded-sm shadow-md mb-6 relative">
                      <div className="absolute inset-0 bg-[var(--purple-wash)] opacity-10 mix-blend-multiply z-10" />
                      <img 
                        src={editorialVisuals[absIndex]} 
                        alt={service.name}
                        className="service-image w-full h-full object-cover object-center mix-blend-multiply opacity-90 will-change-transform"
                      />
                    </div>

                    {/* Description Block */}
                    <div className="mt-auto pt-4 border-t border-[var(--purple-wash)]/60">
                      <p className="text-sm md:text-base font-light text-[var(--primary)] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                  </div>
                );
              })}
              
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}