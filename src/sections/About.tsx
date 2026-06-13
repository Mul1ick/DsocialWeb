// src/sections/About.tsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { principles } from "../lib/content";
import { stagger, fadeUp } from "../lib/animation";

export default function About() {
  return (
    <SectionShell id="about" className="py-32 bg-[var(--bg)] border-t-4 border-black relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left: The Manifesto Copy */}
        <Reveal className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-block bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest w-fit mb-8">
            The Ethos
          </div>
          <h2 className="text-[clamp(42px,5vw,64px)] leading-[1.1] font-bold text-black uppercase tracking-tight mb-8">
            A studio built around attention.
          </h2>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-medium">
            d.social is intentionally small. We don't do cookie-cutter content. 
            The work begins in raw conversation, then rapidly becomes a visual language a brand can keep returning to.
          </p>
        </Reveal>

        {/* Right: The Oversized Principles */}
        <motion.div 
          className="lg:col-span-7 grid grid-cols-1 gap-0 border-t-2 border-black"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {principles.map((principle, index) => (
            <motion.div 
              key={principle} 
              variants={fadeUp} 
              className="group flex items-center border-b-2 border-black py-8 cursor-crosshair hover:bg-black transition-colors duration-200"
            >
              <span className="text-[clamp(60px,8vw,100px)] leading-none font-bold text-black group-hover:text-[var(--accent)] transition-colors duration-200 w-32 md:w-48">
                0{index + 1}
              </span>
              <p className="text-[clamp(24px,4vw,42px)] font-bold uppercase text-black group-hover:text-white transition-colors duration-200 m-0">
                {principle}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionShell>
  );
}