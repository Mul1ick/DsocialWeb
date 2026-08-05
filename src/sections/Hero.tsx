// src/sections/Hero.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
// import founderPhoto from "../assets/Founder_photo.jpg";
import PhoneMockup from "../components/PhoneMockup";




export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-80px)] flex items-center pt-24 pb-20 relative z-10 overflow-hidden">
      

      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Soft Typography */}
        <div className="lg:col-span-7 flex flex-col z-20">
          <h1 className="flex flex-col m-0 text-[clamp(64px,9vw,140px)] leading-[0.95] font-light text-[var(--purple-deep)] tracking-tight">
            <HeroWord delay={0.1}>Dream.</HeroWord>
<HeroWord className="ml-0 lg:ml-16 text-[var(--accent)] pb-4" delay={0.4}>Design.</HeroWord>
            <HeroWord delay={0.7}>Deliver.</HeroWord>
          </h1>
          
          <motion.div
            className="mt-12 lg:mt-20 max-w-[440px] pl-6 border-l border-[var(--purple-mid)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[var(--secondary)] text-lg leading-relaxed font-light m-0">
              Strategy, content and digital presence for brands that want to be seen, remembered and felt.
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

        {/* Right: The Floating Studio Board */}
        <motion.div
    className="lg:col-span-5 flex justify-center items-center"
>
    <PhoneMockup />
</motion.div>

      </div>
    </section>
  );
}
