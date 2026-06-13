// src/sections/SelectedWork.tsx
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { work } from "../lib/content";

export default function SelectedWork() {
  return (
    <SectionShell id="work" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        <Reveal>
          <div className="mb-20">
            <h2 className="text-[clamp(42px,6vw,72px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
              Visual worlds shaped around the <br className="hidden md:block"/> people who live inside them.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-32">
          {work.map((item, index) => (
            <Reveal key={item.id} className="group relative grid grid-cols-1 md:grid-cols-12 items-center cursor-pointer">
              
              {/* Soft Background Number */}
              <div className="hidden md:block absolute -left-12 -top-16 text-[180px] font-light text-[var(--purple-soft)] z-0 pointer-events-none transition-colors duration-500">
                0{index + 1}
              </div>

              {/* The Visual Block - spans cols 1-8 */}
              <div className="md:col-start-1 md:col-span-8 md:row-start-1 relative aspect-[4/3] bg-[var(--purple-soft)] rounded-xl overflow-hidden soft-lift z-10 border border-white/50">
                 {/* Replace this div with an actual <img> tag when you drop her portfolio images in! */}
                 <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple-mid)] to-[var(--purple-soft)] group-hover:scale-105 transition-transform duration-700 opacity-30"></div>
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--purple-deep)]/20 backdrop-blur-sm z-20">
                    <span className="bg-white/90 text-[var(--purple)] px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-lg">
                      View Project
                    </span>
                 </div>
              </div>

              {/* The Meta Block - overlaps cols 7-12 */}
              <div className="md:col-start-7 md:col-span-6 md:row-start-1 flex flex-col items-start z-20 mt-8 md:mt-0">
                <div className="bg-white/80 backdrop-blur-lg border border-white/60 p-8 md:p-12 rounded-2xl soft-lift w-full">
                  <p className="text-[var(--accent)] text-xs font-semibold uppercase tracking-widest mb-3">
                    {item.note}
                  </p>
                  <h3 className="text-[clamp(28px,3vw,42px)] font-light text-[var(--primary)] leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg font-light text-[var(--secondary)] mb-8 leading-relaxed">
                    {item.detail}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.disciplines.map((discipline) => (
                      <span 
                        key={discipline} 
                        className="border border-[var(--purple-wash)] px-4 py-1.5 rounded-full text-xs font-medium text-[var(--secondary)] bg-white"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </SectionShell>
  );
}