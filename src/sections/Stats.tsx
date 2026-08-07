import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

export default function Stats() {
  return (
    <SectionShell id="stats" className="py-20 relative z-10 border-t border-[var(--purple-wash)] bg-[#EAE6F3]">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <Reveal>
            <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-2">
              Measured Impact
            </p>
            <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] font-bold text-[var(--purple-deep)] tracking-tight m-0">
              Stats & Reach.
            </h2>
          </Reveal>
        </div>

        {/* Strict 4-Column CSS Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 items-start">
          
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* ================= COLUMN 4 ================= */}
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[2/3] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-white shadow-sm border border-white/60">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </SectionShell>
  );
}