// src/sections/CTA.tsx
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

export default function CTA() {
  return (
    <SectionShell id="contact" className="py-32 relative z-10">
      <Reveal className="max-w-[900px] mx-auto text-center px-6">
        {/* Soft, frosted glass card using the soft-lift interaction */}
        <div className="bg-white/40 backdrop-blur-md border border-white/60 p-12 md:p-20 rounded-3xl soft-lift">
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight mb-10">
            Let's sit with your brand and see what it wants to become.
          </h2>
          <a 
            className="inline-flex items-center gap-3 bg-[var(--purple)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--accent)] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl" 
            href="mailto:hello@dsocial.studio"
          >
            Begin a Conversation
            <ArrowUpRight size={20} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </SectionShell>
  );
}