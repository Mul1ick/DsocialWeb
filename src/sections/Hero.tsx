// src/sections/Hero.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
import founderPhoto from "../assets/Founder_photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-80px)] flex items-center pt-16 pb-20">
      {/* Changed items-center to items-start to allow independent vertical placement */}
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col">
          <h1 className="flex flex-col m-0 text-[clamp(64px,8vw,120px)] leading-[0.9] font-light text-[var(--purple-deep)] tracking-tight">
            <HeroWord className="hero-word--1" delay={0.18}>
              Dream.
            </HeroWord>
            <HeroWord className="ml-0 lg:ml-12 text-[#6d3d73]" delay={0.88}>
              Design.
            </HeroWord>
            <HeroWord className="hero-word--3" delay={1.58}>
              Deliver.
            </HeroWord>
          </h1>
          
          <motion.div
            className="mt-12 lg:mt-16 max-w-[420px] pl-6 border-l border-[rgb(75_41_79/0.2)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[var(--secondary)] text-lg leading-relaxed font-light m-0">
              A founder-led creative studio for small brands, built through close conversations, shared instinct and thoughtful design.
            </p>
            <a 
              className="inline-flex items-center gap-2 mt-8 text-[var(--purple)] text-lg transition-opacity hover:opacity-60" 
              href="mailto:hello@dsocial.studio"
            >
              Begin a Conversation
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: The Portrait */}
        <motion.figure
          
          className="lg:col-span-5 relative w-full aspect-[4/5] max-w-[460px] ml-auto overflow-hidden bg-[var(--purple-soft)] shadow-2xl shadow-[rgb(75_41_79/0.1)] mt-12 lg:mt-[180px]"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.001 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={founderPhoto} 
            alt="Dhvani Dalal, founder of d.social" 
            className="w-full h-full object-cover object-[50%_30%] scale-105 transition-transform duration-[10s] hover:scale-100"
          />
          {/* Added a subtle glassmorphism effect to the caption block */}
          <figcaption className="absolute bottom-6 left-6 right-6 p-4 bg-white/70 backdrop-blur-md text-xs uppercase tracking-wider text-[var(--purple-deep)] border border-white/40 shadow-sm">
            <strong className="block font-semibold mb-1">Dhvani Dalal</strong>
            <span className="opacity-70">Founder, d.social</span>
          </figcaption>
        </motion.figure>

      </div>
    </section>
  );
}