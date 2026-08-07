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

// Use an 8-column grid to ensure identical sizing and perfect centering
const servicePanels = [
  {
    id: "panel-1",
    items: services.slice(0, 4).map((service, i) => ({ 
      ...service, 
      originalIndex: i,
      itemClass: "lg:col-span-2" // 4 items x 2 cols = 8 cols
    })),
    gridClass: "lg:grid-cols-8",
  },
  {
    id: "panel-2",
    items: services.slice(4, 7).map((service, i) => ({ 
      ...service, 
      originalIndex: i + 4,
      // Start the first item in column 2 to perfectly center the 3 cards (leaves col 1 and 8 empty)
      itemClass: i === 0 ? "lg:col-span-2 lg:col-start-2" : "lg:col-span-2"
    })),
    gridClass: "lg:grid-cols-8", 
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
        
        const nextImages = nextPanel?.querySelectorAll('.service-image');

        const tl = gsap.timeline();

        if (direction === 1) {
          tl.fromTo(nextPanel, { yPercent: 100, boxShadow: "0px -40px 100px rgba(75,41,79,0.08)" }, { yPercent: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 1, ease: "power3.inOut" }, 0);
          if (nextImages?.length) tl.fromTo(nextImages, { scale: 1.15 }, { scale: 1, duration: 1, ease: "power3.out", stagger: 0.05 }, 0.2);
          tl.to(currentPanel, { yPercent: -10, scale: 0.95, opacity: 0, duration: 1, ease: "power3.inOut" }, 0);
        } else {
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
        end: "+=1500", 
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
    <section ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden bg-[var(--bg)] font-sans">
      
      {servicePanels.map((panel, panelIndex) => (
        <div
          key={panel.id}
          ref={(el) => {
            panelsRef.current[panelIndex] = el;
          }}
          className="absolute inset-0 w-full h-full bg-[var(--bg)] will-change-transform flex flex-col items-center justify-start pt-12 lg:pt-16 px-4 md:px-10"
        >
          
          {/* Main Section Header */}
          <div className="w-full max-w-[1400px] mx-auto mb-6 lg:mb-10 flex flex-col items-center justify-center text-center shrink-0">
            <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium mb-2">
              What We Do — Part 0{panelIndex + 1}
            </p>
            <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
              Our Services.
            </h2>
          </div>

          <div className="w-full max-w-[1400px] mx-auto relative flex-grow pb-8">
            
            <div className={`grid grid-cols-1 md:grid-cols-2 ${panel.gridClass} gap-x-6 lg:gap-x-10 gap-y-8 h-full items-start`}>
              
              {panel.items.map((service) => {
                const absIndex = service.originalIndex;
                return (
                  <div key={service.name} className={`flex flex-col h-full group ${service.itemClass}`}>
                    
                    {/* Fixed minimum height to keep all images aligned regardless of text lines */}
                    <div className="mb-4 lg:mb-5 min-h-[90px] xl:min-h-[110px] flex flex-col justify-start">
                      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
                        0{absIndex + 1}
                      </p>
                      {/* Scaled text size down slightly to prevent crowding */}
                      <h2 className="text-xl lg:text-2xl xl:text-3xl leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight uppercase">
                        {editorialHeadings[absIndex]}
                      </h2>
                    </div>

                    {/* Changed to aspect-square to prevent vertical blowout on laptops */}
                    <div className="w-full aspect-square overflow-hidden bg-[var(--purple-soft)] rounded-sm shadow-md mb-4 lg:mb-5 relative shrink-0">
                      <div className="absolute inset-0 bg-[var(--purple-wash)] opacity-10 mix-blend-multiply z-10" />
                      <img 
                        src={editorialVisuals[absIndex]} 
                        alt={service.name}
                        className="service-image w-full h-full object-cover object-center mix-blend-multiply opacity-90 will-change-transform"
                      />
                    </div>

                    {/* Description Block */}
                    <div className="mt-auto pt-4 border-t border-[var(--purple-wash)]/60">
                      {/* Scaled description text down slightly to fit */}
                      <p className="text-xs lg:text-sm font-light text-[var(--primary)] leading-relaxed">
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