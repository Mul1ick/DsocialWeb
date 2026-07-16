import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { processSteps } from "../lib/content";

export default function Process() {
  return (
    <SectionShell id="process" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <h2 className="text-[clamp(42px,6vw,72px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
              Process
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => (
            <Reveal key={step}>
              <div className="h-full min-h-[220px] p-8 flex flex-col justify-between bg-white/40 backdrop-blur-sm border border-white/60 rounded-xl soft-lift">
                <span className="text-[var(--accent)] text-sm font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[clamp(24px,3vw,34px)] font-light text-[var(--primary)] m-0">
                  {step}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
