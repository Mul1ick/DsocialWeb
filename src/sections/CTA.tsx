// src/sections/CTA.tsx
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

export default function CTA() {
  return (
    <SectionShell id="contact" className="py-40 bg-[var(--accent)] border-y-4 border-black relative z-10">
      <Reveal className="flex flex-col items-center text-center px-6">
        <h2 className="text-[clamp(60px,10vw,160px)] leading-[0.85] font-bold text-black uppercase tracking-tighter max-w-[1200px] mb-12">
          Let's build something loud.
        </h2>
        
        <a 
          className="group flex items-center gap-4 bg-white text-black px-8 py-5 text-2xl md:text-4xl font-bold uppercase tracking-widest border-4 border-black hard-shadow hover:bg-black hover:text-white transition-colors duration-200" 
          href="mailto:hello@dsocial.studio"
        >
          Start a Conversation
          <span className="bg-black text-white group-hover:bg-white group-hover:text-black p-2 transition-colors duration-200">
            <ArrowUpRight size={40} strokeWidth={3} aria-hidden="true" />
          </span>
        </a>
      </Reveal>
    </SectionShell>
  );
}