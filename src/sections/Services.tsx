// src/sections/Services.tsx
import { ArrowUpRight, Sparkles, Camera, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { services } from "../lib/content"; 

const icons = [Sparkles, Camera, Smartphone];

export default function Services() {
  return (
    <SectionShell id="services" className="py-32 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-[clamp(42px,5vw,64px)] leading-[1.1] font-light tracking-tight text-[var(--purple-deep)] max-w-[700px] m-0">
              Creative support that feels close, not outsourced.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            
            return (
              <Reveal key={service.name} className="h-full">
                <div className="group relative h-full min-h-[420px] p-8 flex flex-col justify-between bg-white/40 backdrop-blur-sm border border-white/60 rounded-xl soft-lift cursor-pointer overflow-hidden">
                  
                  <div>
                    <div className="w-14 h-14 rounded-full border border-[var(--purple-mid)] flex items-center justify-center text-[var(--accent)] mb-8 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-light text-[var(--primary)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-[var(--secondary)] font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-12 pt-6 border-t border-[var(--purple-wash)] flex items-end justify-between">
                    <p className="text-sm text-[var(--purple)] opacity-70 max-w-[75%] leading-relaxed">
                      {service.note}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-[var(--purple-soft)] flex items-center justify-center text-[var(--purple)] group-hover:bg-[var(--purple)] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={18} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                  
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}