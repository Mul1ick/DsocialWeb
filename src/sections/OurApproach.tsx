import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { approachSteps } from "../lib/content";
import founderPhoto from "../assets/Founder_photo.webp";

const notes = [
  "Find the signal, voice and direction.",
  "Turn ideas into content systems.",
  "Put the work out, learn and refine.",
];

export default function OurApproach() {
  return (
    <SectionShell id="approach" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium mb-3">
              Our Approach
            </p>
            <h2 className="text-[clamp(42px,6vw,72px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
              How we bring ideas to life
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-4">
            <figure className="relative aspect-[4/5] rounded-xl overflow-hidden soft-lift border border-white/60 bg-white/40">
              <img
                src={founderPhoto}
                alt="DSocial creative direction"
                className="absolute inset-0 h-full w-full object-cover object-[50%_32%]"
              />
              <div className="absolute inset-x-5 bottom-5 bg-white/70 backdrop-blur-md border border-white/60 rounded-lg p-4">
                <p className="m-0 text-sm uppercase tracking-widest text-[var(--purple)]">
                  Strategy to launch
                </p>
              </div>
            </figure>
          </Reveal>

          <div className="lg:col-span-8 relative">
            <div className="hidden lg:block absolute left-0 right-0 top-[42px] h-px bg-[var(--purple-mid)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {approachSteps.map((step, index) => (
                <Reveal key={step} className="h-full">
                  <div className="relative h-full pt-24">
                    <span className="absolute top-0 left-0 w-20 h-20 rounded-full border border-[var(--purple-mid)] bg-[var(--bg)] flex items-center justify-center text-[var(--accent)] text-lg font-light z-10">
                      0{index + 1}
                    </span>
                    <h3 className="text-[clamp(34px,4vw,52px)] font-light text-[var(--primary)] m-0">
                      {step}
                    </h3>
                    <p className="mt-5 text-lg leading-relaxed text-[var(--secondary)] font-light">
                      {notes[index]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}