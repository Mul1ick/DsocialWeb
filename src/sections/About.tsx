import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import founderPhoto from "../assets/Founder_photo.jpg";
// 1. IMPORT YOUR NEW TEAM PHOTO HERE:
import teamPhoto from "../assets/team.JPG";

const stats = [
  { value: "5+", label: "Years building presence" },
  { value: "12+", label: "Brands across industries" },
  { value: "360°", label: "Creative & digital care" },
];

export default function About() {
  // 2. SWAP THIS VARIABLE ONCE IMPORTED
  // Change `founderPhoto` to `teamPhoto` to see your new image.
  const teamImageSrc = teamPhoto; 

  return (
    <SectionShell id="about" className="py-32 relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left Column: Ethos Narrative */}
        <Reveal className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-block bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest w-fit mb-8 border border-[var(--purple-mid)]">
            The Ethos
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] font-light text-[var(--purple-deep)] tracking-tight mb-8">
            Who we are
          </h2>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light mb-5">
            A boutique creative studio for brands with big ambitions! We hold a special place in our hearts for small businesses, independent founders and most of all, dreamers - because we understand that every milestone matters!
          </p>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light mb-5">
            The best kind of work comes from open communication, genuine collaboration and truly understanding the people behind the brand. Which is why instead of a one-size-fits-all strategy, we keep our approach personal, collaborative and hands-on, thus allowing us to stay authentic and true to your brand's story.
          </p>
          <p className="text-xl leading-relaxed text-[var(--secondary)] font-light">
            The result? A unique voice for your brand, millions of online impressions and a long lasting relationship with us!
          </p>
        </Reveal>

        {/* Right Column: Dual Portrait Imagery + Stats */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          
          {/* Dual Portrait Grid */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              
              {/* Founder Photo */}
              <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-[var(--purple-wash)] bg-[var(--purple-soft)] shadow-sm">
                <img
                  src={founderPhoto}
                  alt="Dhvani Dalal"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
                />
                <figcaption className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 bg-[var(--bg)]/85 backdrop-blur-md border border-[var(--purple-wash)] rounded-lg p-3">
                  <span className="block text-xs sm:text-sm font-medium text-[var(--purple-deep)]">
                    Dhvani Dalal
                  </span>
                  <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-[var(--secondary)] mt-0.5">
                    Founder, DSocial
                  </span>
                </figcaption>
              </figure>

              {/* Team Photo */}
              <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-[var(--purple-wash)] bg-[var(--purple-soft)] shadow-sm">
                <img
                  src={teamImageSrc}
                  alt="DSocial Team"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <figcaption className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 bg-[var(--bg)]/85 backdrop-blur-md border border-[var(--purple-wash)] rounded-lg p-3">
                  <span className="block text-xs sm:text-sm font-medium text-[var(--purple-deep)]">
                    The Studio Team
                  </span>
                  <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-[var(--secondary)] mt-0.5">
                    Creative & Digital
                  </span>
                </figcaption>
              </figure>

            </div>
          </Reveal>

          {/* Stats Bar Below Photos */}
          <Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col justify-between bg-[var(--bg)]/60 backdrop-blur-sm border border-[var(--purple-wash)] p-4 sm:p-5 rounded-xl shadow-sm cursor-default"
                >
                  <span className="text-[clamp(24px,3.5vw,40px)] leading-none font-light text-[var(--accent)]">
                    {stat.value}
                  </span>
                  <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[var(--secondary)] m-0 mt-3 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </SectionShell>
  );
}