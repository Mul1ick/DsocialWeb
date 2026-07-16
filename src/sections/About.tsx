// src/sections/About.tsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { stagger, fadeUp } from "../lib/animation";
import founderPhoto from "../assets/Founder_photo.jpg";

const stats = [
  { value: "5+", label: "Years building brand presence" },
  { value: "12+", label: "Brands across industries" },
  { value: "360", label: "Creative, content and digital care" },
];

export default function About() {
  return (
    <SectionShell id="about" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Soft Narrative */}
        <Reveal className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-block bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest w-fit mb-8 border border-[var(--purple-mid)]">
            The Ethos
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight mb-8">
            Who we are
          </h2>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light mb-5">
            DSocial is a full-service creative and digital agency helping brands grow through strategic thinking, compelling content, and impactful digital experiences.
          </p>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light">
            For the past 5 years, we've partnered with brands across industries to create work that drives visibility, engagement, and long-term brand value.
          </p>
        </Reveal>

        {/* Right Column: Founder image and proof points */}
        <motion.div 
          className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.figure
            variants={fadeUp}
            className="sm:row-span-2 relative min-h-[420px] overflow-hidden rounded-xl soft-lift border border-white/60 bg-white/40"
          >
            <img
              src={founderPhoto}
              alt="Dhvani Dalal"
              className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
            />
            <figcaption className="absolute left-5 right-5 bottom-5 bg-white/70 backdrop-blur-md border border-white/60 rounded-lg p-4">
              <span className="block text-sm font-medium text-[var(--purple-deep)]">
                Dhvani Dalal
              </span>
              <span className="block text-xs uppercase tracking-widest text-[var(--secondary)] mt-1">
                Founder, DSocial
              </span>
            </figcaption>
          </motion.figure>

          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp} 
              className="group min-h-[190px] flex flex-col justify-between bg-white/40 backdrop-blur-sm border border-white/60 p-6 md:p-8 rounded-xl soft-lift cursor-default"
            >
              <span className="text-[clamp(42px,5vw,64px)] leading-none font-light text-[var(--accent)]">
                {stat.value}
              </span>
              <p className="text-base md:text-lg font-light text-[var(--secondary)] m-0 leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </SectionShell>
  );
}
