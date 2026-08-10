import { ArrowUpRight } from "lucide-react";
import SectionShell from "../components/SectionShell";

export default function CTA() {
  return (
    <SectionShell id="contact" className="py-24 md:py-32 relative z-10">
      {/* 
        TEST: We replaced <Reveal> with a standard <div>. 
        If it shows up on mobile now, the Reveal component's viewport trigger is failing.
      */}
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-8 sm:p-12 md:p-16 rounded-3xl soft-lift grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center overflow-hidden">
          
          {/* Left Column: Text & CTA Button */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-[clamp(32px,4vw,54px)] leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight mb-8">
              Let's sit with your brand and see what it wants to become.
            </h2>
            <a 
              className="inline-flex items-center gap-3 bg-[var(--purple)] text-white px-7 py-3.5 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[var(--accent)] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl" 
              href="mailto:dhvanidalal@dsocial.in"
            >
              Begin a Conversation
              <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          {/* Right Column: Goofy Phone Image */}
          <div className="md:col-span-5 flex justify-center items-center w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/80 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500 group bg-white/50">
              <img 
                src="/cta-phone.webp" 
                alt="Studio phone conversation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-[var(--purple-soft)]/90 backdrop-blur-sm text-[var(--purple-deep)] text-xs font-medium px-3 py-1 rounded-full border border-white/60 shadow-sm font-['Courier',_monospace]">
                ring ring! 📲
              </div>
            </div>
          </div>

        </div>
      </div>
    </SectionShell>
  );
}