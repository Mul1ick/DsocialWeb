// src/sections/About.tsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { principles } from "../lib/content";
import { stagger, fadeUp } from "../lib/animation";

export default function About() {
  return (
    <SectionShell id="about" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Soft Narrative */}
        <Reveal className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-block bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest w-fit mb-8 border border-[var(--purple-mid)]">
            The Ethos
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight mb-8">
            A studio built around attention.
          </h2>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light">
            d.social is intentionally small. The work begins in conversation, then slowly becomes a visual language a brand can keep returning to.
          </p>
        </Reveal>

        {/* Right Column: Elegant Glassy Principles */}
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => (
            <motion.div 
              key={principle} 
              variants={fadeUp} 
              className="group flex items-center gap-6 md:gap-8 bg-white/40 backdrop-blur-sm border border-white/60 p-6 md:p-8 rounded-2xl soft-lift cursor-default"
            >
              {/* Soft, floating circle for the numbers */}
              <span className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[var(--purple-soft)] text-[var(--purple)] text-xl md:text-2xl font-light border border-[var(--purple-mid)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                0{index + 1}
              </span>
              
              <p className="text-[clamp(22px,3vw,32px)] font-light text-[var(--primary)] m-0 group-hover:text-[var(--accent)] transition-colors duration-300">
                {principle}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionShell>
  );
}