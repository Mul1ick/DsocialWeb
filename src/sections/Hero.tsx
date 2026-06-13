import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroWord from "../components/HeroWord";
import founderPhoto from "../assets/Founder_photo.jpg";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-type">
          <h1 className="hero-title" aria-label="Dream. Design. Deliver.">
            <HeroWord className="hero-word--1" delay={0.18}>
              Dream.
            </HeroWord>
            <HeroWord className="hero-word--2" delay={0.88}>
              Design.
            </HeroWord>
            <HeroWord className="hero-word--3" delay={1.58}>
              Deliver.
            </HeroWord>
          </h1>
          <motion.div
            className="hero-lower"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              A founder-led creative studio for small brands, built through close
              conversations, shared instinct and thoughtful design.
            </p>
            <a className="text-link" href="mailto:hello@dsocial.studio">
              Begin a Conversation
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
        <motion.figure
          className="hero-portrait"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.001 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={founderPhoto} alt="Dhvani Dalal, founder of d.social" />
          <figcaption>
            <strong>Dhvani Dalal</strong>
            <span>Founder, d.social</span>
            <em>&quot;Small brands deserve thoughtful design.&quot;</em>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
