// src/sections/Hero.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
import founderPhoto from "../assets/Founder_photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-80px)] flex items-center pt-8 pb-20 relative z-10">
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Soft Typography */}
        <div className="lg:col-span-7 flex flex-col z-20">
          <h1 className="flex flex-col m-0 text-[clamp(64px,9vw,140px)] leading-[0.95] font-light text-[var(--purple-deep)] tracking-tight">
            <HeroWord delay={0.1}>Dream.</HeroWord>
            <HeroWord className="ml-0 lg:ml-16 text-[var(--accent)]" delay={0.4}>Design.</HeroWord>
            <HeroWord delay={0.7}>Deliver.</HeroWord>
          </h1>
          
          <motion.div
            className="mt-12 lg:mt-20 max-w-[440px] pl-6 border-l border-[var(--purple-mid)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[var(--secondary)] text-lg leading-relaxed font-light m-0">
              A founder-led creative studio for small brands. Built through close conversations, shared instinct, and thoughtful design.
            </p>
            <a 
              className="inline-flex items-center gap-2 mt-8 text-[var(--purple)] text-lg font-medium transition-opacity hover:opacity-60" 
              href="mailto:hello@dsocial.studio"
            >
              Begin a Conversation
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>

        {/* Right: The Floating Portrait */}
        <motion.figure
          className="lg:col-span-5 relative w-full aspect-[4/5] max-w-[480px] ml-auto overflow-hidden rounded-sm soft-lift z-10 mt-12 lg:mt-0"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img 
            src={founderPhoto} 
            alt="Dhvani Dalal" 
            className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-[7s]"
          />
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/60 backdrop-blur-md text-xs uppercase tracking-widest text-[var(--purple-deep)] rounded-sm border border-white/40">
            <strong className="block font-semibold">Dhvani Dalal</strong>
            <span className="opacity-70">Founder, d.social</span>
          </div>
        </motion.figure>

      </div>
    </section>
  );
}