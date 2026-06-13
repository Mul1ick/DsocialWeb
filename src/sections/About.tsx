// src/sections/About.tsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { principles } from "../lib/content";
import { stagger, fadeUp } from "../lib/animation";

export default function About() {
  return (
    <SectionShell id="about" className="about">
      <div className="about-grid">
        {/* Left Column: The Narrative */}
        <Reveal className="about-copy">
          <p className="section-kicker">About</p>
          <h2>A studio built around attention.</h2>
          <p className="large-body mt-8">
            d.social is intentionally small. The work begins in conversation, then slowly
            becomes a visual language a brand can keep returning to.
          </p>
        </Reveal>

        {/* Right Column: The Principles */}
        <motion.div 
          className="about-principles flex flex-col gap-10 border-l border-[rgb(75_41_79/0.18)] pl-8 md:pl-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {principles.map((principle, index) => (
            <motion.div 
              key={principle} 
              variants={fadeUp} 
              className="group cursor-default"
            >
              <span className="block text-[var(--purple)] text-sm font-medium mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-3xl font-light text-[var(--primary)] group-hover:text-[#6d3d73] transition-colors duration-300">
                {principle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}