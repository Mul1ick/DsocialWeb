import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import { BarChart2, CheckCircle2, Clapperboard, FileText, Image as ImageIcon, LineChart, Send } from "lucide-react";
import founderPhoto from "../assets/Founder_photo.jpg";
import { clients } from "../lib/content";

gsap.registerPlugin(ScrollTrigger, Observer);

const journeySteps = [
  {
    id: "brief",
    title: "The Brief",
    desc: "Understanding the brand's core, audience, and the story that needs to be told.",
    asset: (
      <div className="relative w-64 h-80 bg-white rounded-xl shadow-[0_20px_40px_rgba(75,41,79,0.08)] border border-[var(--purple-wash)] p-6 flex flex-col gap-4 transform -rotate-3">
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center text-white shadow-lg rotate-12">
          <FileText size={14} />
        </div>
        <div className="w-1/3 h-2 bg-[var(--purple-wash)] rounded-full mb-4" />
        <div className="w-full h-1.5 bg-neutral-100 rounded-full" />
        <div className="w-5/6 h-1.5 bg-neutral-100 rounded-full" />
        <div className="w-full h-1.5 bg-neutral-100 rounded-full" />
        <div className="w-2/3 h-1.5 bg-neutral-100 rounded-full mb-4" />
        <div className="flex-1 rounded-lg bg-[var(--purple-soft)] border border-[var(--purple-wash)] flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-[var(--purple)] font-medium">Strategy Doc</span>
        </div>
      </div>
    ),
  },
  {
    id: "moodboard",
    title: "Strategy & Mood",
    desc: "Curating the visual direction, color palettes, and typographic tone.",
    asset: (
      <div className="relative w-80 h-80 grid grid-cols-2 grid-rows-2 gap-3 rotate-2">
        <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-lg border border-white/60">
          <img src={founderPhoto} alt="Mood" className="w-full h-full object-cover mix-blend-multiply opacity-90" />
        </div>
        <div className="col-span-1 row-span-1 bg-[var(--purple-mid)] rounded-xl shadow-lg border border-white/60 flex items-center justify-center">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-[#251728]" />
            <div className="w-4 h-4 rounded-full bg-[#6f5d73]" />
            <div className="w-4 h-4 rounded-full bg-[#8b5a96]" />
          </div>
        </div>
        <div className="col-span-1 row-span-1 bg-white rounded-xl shadow-lg border border-white/60 p-4 flex flex-col justify-between">
          <ImageIcon className="text-[var(--secondary)]" size={20} />
          <div className="w-full h-1.5 bg-neutral-100 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    id: "shoot",
    title: "Shoot Day",
    desc: "Capturing raw moments, product details, and the human element.",
    asset: (
      <div className="relative w-80 h-56 bg-black/90 rounded-2xl shadow-2xl p-2 transform -rotate-2">
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img src={clients[1].logo} alt="Subject" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-4 border border-white/30 flex flex-col justify-between p-2">
            <div className="flex justify-between items-center text-white/70 text-[8px] font-mono">
              <span>REC 00:12:45</span>
              <span className="text-red-500 flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/> 4K 60</span>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 border border-white/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "edit",
    title: "The Edit",
    desc: "Splicing, color grading, and refining the narrative into a seamless piece.",
    asset: (
      <div className="relative w-80 h-64 bg-[#1e1e1e] rounded-xl shadow-2xl border border-white/10 p-4 flex flex-col gap-3 rotate-1">
        <div className="w-full h-24 bg-black/50 rounded-lg overflow-hidden relative border border-white/5 flex items-center justify-center">
          <Clapperboard className="text-white/20" size={32} />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full h-4 bg-white/5 rounded flex gap-1 overflow-hidden">
            <div className="w-1/4 h-full bg-blue-500/50 rounded-sm" />
            <div className="w-1/2 h-full bg-blue-500/80 rounded-sm" />
            <div className="w-1/4 h-full bg-blue-500/40 rounded-sm" />
          </div>
          <div className="w-full h-4 bg-white/5 rounded flex gap-1 overflow-hidden">
            <div className="w-1/3 h-full bg-emerald-500/60 rounded-sm" />
            <div className="w-2/3 h-full bg-emerald-500/40 rounded-sm" />
          </div>
          <div className="absolute top-[120px] left-1/3 w-0.5 h-24 bg-red-500 z-10 shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            <div className="absolute -top-2 -left-1.5 w-3.5 h-3.5 bg-red-500 rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "publish",
    title: "Publishing",
    desc: "Optimized formats, engaging copy, and strategic release timing.",
    asset: (
      <div className="relative w-56 h-96 bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[6px] border-neutral-100 p-3 transform rotate-3 flex flex-col">
        <div className="w-full flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--purple-soft)] border border-[var(--purple-wash)]" />
            <div className="w-16 h-1.5 bg-neutral-200 rounded-full" />
          </div>
        </div>
        <div className="w-full aspect-[4/5] bg-[var(--purple-soft)] rounded-xl overflow-hidden relative mb-3">
          <img src={clients[3].logo} alt="Post" className="w-full h-full object-cover mix-blend-multiply opacity-60" />
        </div>
        <div className="flex gap-3 px-1 mb-3 text-neutral-400">
          <CheckCircle2 size={16} />
          <Send size={16} />
        </div>
        <div className="px-1 flex flex-col gap-1.5">
          <div className="w-3/4 h-1.5 bg-neutral-200 rounded-full" />
          <div className="w-1/2 h-1.5 bg-neutral-200 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    title: "Analytics",
    desc: "Measuring reach, engagement, and the true impact of the campaign.",
    asset: (
      <div className="relative w-80 h-64 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(75,41,79,0.08)] border border-white/60 p-6 flex flex-col gap-6 -rotate-2">
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest text-[var(--secondary)] font-medium">Performance</span>
          <BarChart2 className="text-[var(--accent)]" size={18} />
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-[var(--purple-soft)] rounded-xl p-3 border border-[var(--purple-wash)]">
            <div className="text-[10px] text-[var(--secondary)] mb-1">Reach</div>
            <div className="text-lg font-light text-[var(--primary)]">24.8k</div>
          </div>
          <div className="flex-1 bg-[var(--purple-soft)] rounded-xl p-3 border border-[var(--purple-wash)]">
            <div className="text-[10px] text-[var(--secondary)] mb-1">Engagement</div>
            <div className="text-lg font-light text-[var(--primary)]">+142%</div>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between gap-2 border-b border-neutral-100 pb-2">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div key={i} className="w-full bg-[var(--accent)] rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "growth",
    title: "Growth",
    desc: "Long-term brand value, scaling presence, and building an enduring community.",
    asset: (
      <div className="relative w-72 h-72 rounded-full border border-[var(--purple-wash)] flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[var(--accent)] opacity-20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="w-48 h-48 rounded-full border border-[var(--purple-mid)] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[var(--purple-soft)] rounded-full opacity-50 blur-xl" />
          <div className="w-24 h-24 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,90,150,0.4)] z-10">
            <LineChart className="text-white" size={32} />
          </div>
        </div>
      </div>
    ),
  },
];

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const totalSlides = journeySteps.length;
      let currentIndex = 0;
      let isAnimating = false;
      let st: globalThis.ScrollTrigger;

      // Helper to instantly snap approach panels into position horizontally
      const resetPanelsTo = (index: number) => {
        gsap.set(track, { x: -(index * window.innerWidth) });
        panelsRef.current.forEach((p, i) => {
          if (!p) return;
          const content = p.querySelector(".panel-content");
          if (i === index) {
            if (content) gsap.set(content, { scale: 1, opacity: 1 });
          } else {
            if (content) gsap.set(content, { scale: 0.85, opacity: 0.2 });
          }
        });
      };

      // Core horizontal transition logic with strict dead zone lockout
      const gotoPanel = (index: number) => {
        isAnimating = true;
        currentIndex = index;

        const targetX = -(index * window.innerWidth);
        const tl = gsap.timeline();

        // Animate the track horizontally
        tl.to(track, {
          x: targetX,
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        // Scale/fade content for depth illusion between steps
        panelsRef.current.forEach((p, i) => {
          const content = p?.querySelector(".panel-content");
          if (!content) return;
          if (i === index) {
            tl.to(content, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }, 0);
          } else {
            tl.to(content, { scale: 0.85, opacity: 0.2, duration: 0.8 }, 0);
          }
        });

        // 1.4s lockout (1s animation + 400ms buffer) to defeat trackpad inertia
        setTimeout(() => {
          isAnimating = false;
        }, 1400);
      };

      // The Event Hijacker
      const observer = Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        preventDefault: true,
        tolerance: 30,
        onUp: () => {
          if (isAnimating) return;
          if (currentIndex < totalSlides - 1) {
            gotoPanel(currentIndex + 1);
          } else {
            observer.disable();
            window.scrollTo(0, st.end + 50);
          }
        },
        onDown: () => {
          if (isAnimating) return;
          if (currentIndex > 0) {
            gotoPanel(currentIndex - 1);
          } else {
            observer.disable();
            window.scrollTo(0, st.start - 50);
          }
        }
      });
      observer.disable();

      // The Massive ScrollTrap
      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: "+=3000",
        onEnter: () => {
          if (!observer.isEnabled) {
            currentIndex = 0;
            resetPanelsTo(0);
            observer.enable();
          }
        },
        onEnterBack: () => {
          if (!observer.isEnabled) {
            currentIndex = totalSlides - 1;
            resetPanelsTo(currentIndex);
            observer.enable();
          }
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="approach" className="relative h-screen w-full overflow-hidden bg-[var(--bg)]">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(216,196,221,0.15),transparent_50%)] pointer-events-none" />

      {/* Persistent Section Header */}
      <div className="absolute top-10 left-6 lg:left-12 z-40 mix-blend-multiply opacity-90 flex flex-col gap-2 pointer-events-none">
        <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium">
          Our Approach
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[var(--purple-deep)] tracking-tight">
          How we bring ideas to life.
        </h2>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={trackRef}
        className="flex h-full w-max will-change-transform"
      >
        {journeySteps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => { panelsRef.current[index] = el; }}
            className="w-screen h-full flex items-center justify-center relative shrink-0 px-6 lg:px-12"
          >
            <div className="panel-content w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              <div className="flex flex-col">
                <span className="text-[var(--accent)] text-lg md:text-xl font-light mb-4">
                  0{index + 1}
                </span>
                <h3 className="text-[clamp(42px,6vw,72px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight mb-6">
                  {step.title}
                </h3>
                <p className="text-xl leading-relaxed text-[var(--secondary)] font-light max-w-[420px]">
                  {step.desc}
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-end">
                {step.asset}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}