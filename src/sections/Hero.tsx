// src/sections/Hero.tsx
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
import founderPhoto from "../assets/Founder_photo.jpg";
import { clients } from "../lib/content";

const floatingCards = [
  { title: "Content calendar", detail: "12 brands active", className: "left-0 top-10 rotate-[-6deg]" },
  { title: "Shoot day", detail: "BTS in progress", className: "right-0 top-28 rotate-[5deg]" },
  { title: "Launch week", detail: "Strategy -> live", className: "left-8 bottom-12 rotate-[4deg]" },
];

export default function Hero() {
  return (
    <section id="top" className="min-h-[calc(100vh-80px)] flex items-center pt-24 pb-20 relative z-10 overflow-hidden">
      <motion.div
        className="absolute left-6 right-6 top-24 hidden lg:flex justify-between pointer-events-none opacity-50"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        {clients.slice(0, 5).map((client) => (
          <div key={client.name} className="h-12 w-24 rounded-full bg-white/50 border border-white/60 flex items-center justify-center px-5">
            <img src={client.logo} alt="" className="max-h-6 max-w-full object-contain mix-blend-multiply opacity-60" />
          </div>
        ))}
      </motion.div>

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
          className="lg:col-span-5 relative w-full max-w-[520px] ml-auto z-10 mt-12 lg:mt-0"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <figure className="relative w-[82%] mx-auto aspect-[4/5] overflow-hidden rounded-xl soft-lift border border-white/60 bg-white/40">
            <img 
              src={founderPhoto} 
              alt="Dhvani Dalal" 
              className="w-full h-full object-cover object-[50%_30%] hover:scale-105 transition-transform duration-[7s]"
            />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/65 backdrop-blur-md text-xs uppercase tracking-widest text-[var(--purple-deep)] rounded-lg border border-white/50">
              <strong className="block font-semibold">Dhvani Dalal</strong>
              <span className="opacity-70">Founder, DSocial</span>
            </div>
          </figure>

          {floatingCards.map((card, index) => (
            <motion.div
              key={card.title}
              drag
              dragElastic={0.14}
              dragMomentum={false}
              className={`absolute hidden md:block w-44 rounded-xl bg-white/75 backdrop-blur-md border border-white/70 p-4 shadow-[0_18px_50px_rgba(75,41,79,0.12)] cursor-grab active:cursor-grabbing ${card.className}`}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.12 }}
            >
              <p className="text-sm font-medium text-[var(--purple-deep)] m-0">
                {card.title}
              </p>
              <p className="text-xs uppercase tracking-widest text-[var(--secondary)] mt-2 m-0">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
