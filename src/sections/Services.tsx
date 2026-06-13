// src/sections/Services.tsx
import { ArrowUpRight, Sparkles, Camera, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { services } from "../lib/content"; 

// Mapping an icon to each service to add visual flair
const icons = [Sparkles, Camera, Smartphone];

export default function Services() {
  return (
    <SectionShell id="services" className="services pb-32">
      <Reveal>
        <div className="section-heading mb-16">
          <p className="section-kicker">Services</p>
          <h2>Creative support that feels close, not outsourced.</h2>
        </div>
      </Reveal>

      {/* Changed to a 3-column grid on desktop to break the boring horizontal list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = icons[index];
          
          return (
            <Reveal key={service.name} className="h-full">
              <div className="group relative h-full min-h-[420px] p-8 flex flex-col justify-between border border-[rgb(75_41_79/0.12)] bg-white/30 hover:bg-white/80 transition-all duration-500 overflow-hidden">
                
                {/* Top: Animated Icon & Copy */}
                <div>
                  <div className="w-12 h-12 rounded-full border border-[var(--purple-mid)] flex items-center justify-center text-[var(--purple)] mb-8 group-hover:bg-[var(--purple)] group-hover:text-white group-hover:border-[var(--purple)] transition-colors duration-500">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-light text-[var(--primary)] mb-4 transition-colors group-hover:text-[#6d3d73]">
                    {service.name}
                  </h3>
                  <p className="text-[var(--secondary)] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Subtle Note & Interactive Arrow */}
                <div className="mt-12 pt-6 border-t border-[rgb(75_41_79/0.1)] flex items-end justify-between">
                  <p className="text-sm text-[var(--purple)] opacity-70 max-w-[80%] leading-relaxed">
                    {service.note}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-[var(--purple-soft)] flex items-center justify-center text-[var(--purple)] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
                
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}