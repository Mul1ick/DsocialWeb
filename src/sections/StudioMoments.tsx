import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import founderPhoto from "../assets/Founder_photo.jpg";
import { clients } from "../lib/content";

const moments = [
  { label: "Shoot days", image: founderPhoto, className: "md:col-span-2 md:row-span-2" },
  { label: "Moodboards", image: clients[1].logo, className: "" },
  { label: "Launch prep", image: clients[2].logo, className: "" },
  { label: "Content desk", image: clients[3].logo, className: "md:col-span-2" },
];

export default function StudioMoments() {
  const marqueeItems = [...moments, ...moments];

  return (
    <SectionShell className="py-24 relative z-10 bg-white/30 border-y border-white/60 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <h2 className="text-[clamp(38px,5vw,60px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0 max-w-[620px]">
              Studio moments
            </h2>
            <p className="text-lg text-[var(--secondary)] font-light leading-relaxed max-w-[420px] m-0">
              BTS, shoot days, desk chaos and the small in-between things that make the work feel alive.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[210px] gap-5">
          {moments.map((moment, index) => (
            <Reveal key={`${moment.label}-${index}`} className={moment.className}>
              <figure className="group relative h-full overflow-hidden rounded-xl border border-white/60 bg-[var(--purple-soft)] soft-lift">
                <img
                  src={moment.image}
                  alt={moment.label}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <figcaption className="absolute left-4 bottom-4 rounded-full bg-white/75 backdrop-blur-md border border-white/60 px-4 py-2 text-xs uppercase tracking-widest text-[var(--purple)]">
                  {moment.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 overflow-hidden">
          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          >
            {marqueeItems.map((moment, index) => (
              <div
                key={`${moment.label}-strip-${index}`}
                className="h-24 w-40 rounded-lg overflow-hidden border border-white/60 bg-white/50"
              >
                <img src={moment.image} alt="" className="h-full w-full object-cover opacity-70 mix-blend-multiply" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
