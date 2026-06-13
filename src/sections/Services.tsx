// src/sections/Services.tsx
import { ArrowUpRight, Sparkles, Camera, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { services } from "../lib/content"; 

const icons = [Sparkles, Camera, Smartphone];

export default function Services() {
  return (
    <SectionShell id="services" className="py-32 bg-white relative z-10 border-t-4 border-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-[clamp(48px,6vw,82px)] leading-none font-bold uppercase tracking-tighter text-black max-w-[800px] m-0">
              Creative support that hits hard.
            </h2>
            <div className="bg-[var(--accent)] text-black px-4 py-2 font-bold uppercase tracking-widest border-2 border-black hard-shadow w-fit">
              Not Outsourced
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = icons[index];
            
            return (
              <Reveal key={service.name} className="h-full">
                {/* Applying the .hard-shadow class here. 
                  On hover, the background snaps to black, and text shifts to off-white & orange.
                */}
                <div className="group relative h-full min-h-[420px] p-8 flex flex-col justify-between bg-[var(--bg)] border-2 border-black hard-shadow hover:bg-black transition-colors duration-150 overflow-hidden cursor-pointer">
                  
                  <div>
                    <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-black mb-8 group-hover:bg-[var(--accent)] group-hover:text-black group-hover:border-[var(--accent)] transition-all duration-200">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-bold uppercase text-black mb-4 group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-lg font-medium text-[var(--secondary)] group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-12 pt-6 border-t-2 border-black group-hover:border-gray-800 transition-colors flex items-end justify-between">
                    <p className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-[var(--accent)] max-w-[70%] transition-colors">
                      {service.note}
                    </p>
                    <div className="w-12 h-12 bg-black flex items-center justify-center text-white group-hover:bg-[var(--accent)] group-hover:text-black transition-colors duration-200">
                      <ArrowUpRight size={24} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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