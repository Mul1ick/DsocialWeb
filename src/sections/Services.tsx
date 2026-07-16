// src/sections/Services.tsx
import { Camera, ChevronDown, HandHeart, Layout, Palette, PenLine, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { services } from "../lib/content"; 

const icons = [Smartphone, Camera, Sparkles, Palette, Layout, PenLine, HandHeart];

export default function Services() {
  const [openService, setOpenService] = useState(services[0].name);

  return (
    <SectionShell id="services" className="py-32 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-[clamp(42px,5vw,64px)] leading-[1.1] font-light tracking-tight text-[var(--purple-deep)] max-w-[700px] m-0">
              What we Do
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            const isOpen = openService === service.name;
            
            return (
              <Reveal key={service.name} className="h-full">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenService(isOpen ? "" : service.name)}
                  className="group text-left relative h-full min-h-[230px] w-full p-6 flex flex-col justify-between bg-white/45 backdrop-blur-sm border border-white/60 rounded-xl soft-lift cursor-pointer overflow-hidden"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full border border-[var(--purple-mid)] flex items-center justify-center text-[var(--accent)] mb-7 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-light text-[var(--primary)] m-0 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between gap-4 border-t border-[var(--purple-wash)] pt-4">
                      <span className="text-xs uppercase tracking-widest text-[var(--purple)] opacity-70">
                        {isOpen ? "Hide" : "Details"}
                      </span>
                      <ChevronDown
                        size={18}
                        strokeWidth={1.5}
                        className={`text-[var(--purple)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </div>

                    <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-sm text-[var(--secondary)] font-light leading-relaxed m-0">
                      {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
