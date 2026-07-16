import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import founderPhoto from "../assets/Founder_photo.jpg";

export default function FounderNote() {
  return (
    <SectionShell className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-5">
          <figure className="relative rotate-[-2deg] bg-white p-4 pb-16 shadow-[0_28px_80px_rgba(75,41,79,0.16)] border border-white/70 rounded-sm">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-9 w-28 rotate-2 bg-[var(--purple-mid)]/70 backdrop-blur-sm"></div>
            <img
              src={founderPhoto}
              alt="Dhvani Dalal"
              className="aspect-[4/5] w-full object-cover object-[50%_28%]"
            />
            <figcaption className="absolute left-8 bottom-7 text-sm uppercase tracking-widest text-[var(--purple)]">
              Founder note
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <div className="relative bg-[#fffdf8] border border-[var(--purple-mid)]/60 p-8 md:p-12 shadow-[0_24px_70px_rgba(75,41,79,0.09)] rotate-[1deg]">
            <div className="absolute -top-3 right-12 h-7 w-20 bg-[var(--purple-soft)] border border-[var(--purple-mid)]/50 rotate-3"></div>
            <p className="text-[clamp(30px,4vw,48px)] leading-[1.12] font-light text-[var(--purple-deep)] m-0">
              We build brand presence with the kind of care that makes people stop, feel something, and remember you.
            </p>
            <p className="mt-8 text-lg text-[var(--secondary)] leading-relaxed font-light">
              From strategy to shoot days to launch weeks, DSocial stays close to the work and the people behind it.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
