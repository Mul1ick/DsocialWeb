// src/sections/SelectedWork.tsx
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { work } from "../lib/content";

export default function SelectedWork() {
  return (
    <SectionShell id="work" className="py-32 bg-[var(--bg)] relative z-10 border-t-4 border-black">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        <Reveal>
          <div className="mb-20">
            <h2 className="text-[clamp(60px,10vw,140px)] leading-[0.85] font-bold text-black uppercase tracking-tighter m-0">
              The <br className="md:hidden"/> <span className="text-[var(--accent)]">Proof.</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-24 md:gap-40">
          {work.map((item, index) => (
            // We removed `gap-8` here so explicit column overlaps are perfectly calculated
            <Reveal key={item.id} className="group relative grid grid-cols-1 md:grid-cols-12 items-center cursor-pointer">
              
              {/* Massive Background Number */}
              <div className="hidden md:block absolute -left-12 -top-20 text-[240px] font-bold text-black/5 z-0 pointer-events-none group-hover:text-[var(--accent)]/10 transition-colors duration-500">
                0{index + 1}
              </div>

              {/* The Visual Block - explicitly spans columns 1 through 8 and locks to Row 1 */}
              <div className="md:col-start-1 md:col-span-8 md:row-start-1 relative aspect-[4/3] bg-black border-4 border-black hard-shadow overflow-hidden z-10">
                 <div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
                 
                 {/* Glitchy Hover Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm z-20">
                    <span className="bg-[var(--accent)] text-black px-8 py-3 text-lg font-bold uppercase tracking-widest border-2 border-black hard-shadow">
                      View Project
                    </span>
                 </div>
              </div>

              {/* The Meta Block - explicitly spans columns 7 through 12 and locks to Row 1, creating a 2-column overlap */}
              <div className="md:col-start-7 md:col-span-6 md:row-start-1 flex flex-col items-start z-20 mt-8 md:mt-0">
                <div className="bg-white border-4 border-black p-8 md:p-12 hard-shadow group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-200 w-full">
                  <p className="text-[var(--accent)] font-bold uppercase tracking-widest mb-4">
                    {item.note}
                  </p>
                  <h3 className="text-[clamp(32px,4vw,56px)] font-bold text-black uppercase leading-none mb-6">
                    {item.title}
                  </h3>
                  <p className="text-xl font-medium text-[var(--secondary)] mb-8">
                    {item.detail}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {item.disciplines.map((discipline) => (
                      <span 
                        key={discipline} 
                        className="border-2 border-black px-4 py-1 text-sm font-bold uppercase text-black bg-[var(--bg)]"
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