// src/sections/Hero.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
import founderPhoto from "../assets/Founder_photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-20 overflow-hidden relative">
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* The Massive Typography */}
        <h1 className="relative z-20 flex flex-col m-0 text-[clamp(80px,14vw,200px)] leading-[0.8] font-bold text-[var(--primary)] uppercase tracking-tighter mix-blend-difference text-white">
          <HeroWord className="hero-word--1" delay={0.1}>
            Dream.
          </HeroWord>
          <HeroWord className="ml-0 lg:ml-24 text-[var(--accent)]" delay={0.3}>
            Design.
          </HeroWord>
          <HeroWord className="hero-word--3" delay={0.5}>
            Deliver.
          </HeroWord>
        </h1>

        {/* The Portrait - Pushed behind the text and offset to the right */}
        <motion.figure
          className="absolute top-[10%] right-[-5%] lg:right-[10%] w-[80vw] lg:w-[45vw] max-w-[500px] aspect-[3/4] z-0 hard-shadow bg-black"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <img 
            src={founderPhoto} 
            alt="Dhvani Dalal, founder of d.social" 
            className="w-full h-full object-cover object-[50%_30%] grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-[var(--accent)] text-black px-3 py-1 text-xs font-bold uppercase tracking-widest border-2 border-black">
            Founder / Dhvani
          </div>
        </motion.figure>

        {/* The Lower Copy */}
        <motion.div
          className="relative z-20 mt-12 lg:mt-32 max-w-[460px] p-6 bg-white border-2 border-[var(--primary)] hard-shadow"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-sans text-[var(--secondary)] text-lg leading-relaxed m-0">
            A founder-led creative studio for small brands. Built through raw conversations, shared instinct, and high-impact design.
          </p>
          <a 
            className="inline-flex items-center gap-2 mt-6 font-bold text-[var(--primary)] text-lg uppercase tracking-wide hover:text-[var(--accent)]" 
            href="mailto:hello@dsocial.studio"
          >
            Start a Riot
            <ArrowUpRight size={24} strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}