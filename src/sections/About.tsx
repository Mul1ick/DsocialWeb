import { useEffect, useState } from "react";
import SectionShell from "../components/SectionShell";
import { sanityClient, urlFor } from "../lib/sanity";

// Static fallback image paths so photos render immediately if Sanity is loading/empty
const FALLBACK_FOUNDER_IMG = "/board/polaroids/fashion.jpg"; // Replace with your static founder image path
const FALLBACK_TEAM_IMG = "/bts/1.jpg"; // Replace with your static team image path

const fallbackStats = [
  { value: "5+", label: "Years building presence" },
  { value: "29+", label: "Brands across industries" },
  { value: "360°", label: "Creative & digital care" },
];

export default function About() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "about"][0]`)
      .then((res) => {
        if (res) setData(res);
      })
      .catch((err) => console.error("Error fetching about section:", err));
  }, []);

  const stats = data?.stats || fallbackStats;

  // Resolve founder image URL safely
  const founderImgSrc = data?.founderImage?.asset
    ? urlFor(data.founderImage).url()
    : FALLBACK_FOUNDER_IMG;

  // Resolve team image URL safely
  const teamImgSrc = data?.teamImage?.asset
    ? urlFor(data.teamImage).url()
    : FALLBACK_TEAM_IMG;

  return (
    <SectionShell id="about" className="py-16 md:py-32 relative z-10 border-t border-[var(--purple-wash)] bg-[var(--bg)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
        
        {/* Left Column: Ethos Narrative */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-block bg-[var(--purple-soft)] text-[var(--purple)] px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[11px] md:text-xs font-medium uppercase tracking-widest w-fit mb-6 md:mb-8 border border-[var(--purple-mid)]">
            {data?.eyebrow || "The Ethos"}
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.1] font-bold text-[var(--purple-deep)] tracking-tight mb-6 md:mb-8">
            {data?.heading || "Who are we"}
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-[var(--secondary)] font-light mb-4 md:mb-5">
            {data?.paragraph1 || "A boutique creative studio for brands with big ambitions! We hold a special place in our hearts for small businesses, independent founders and most of all, dreamers - because we understand that every milestone matters!"}
          </p>
          <p className="text-base md:text-xl leading-relaxed text-[var(--secondary)] font-light mb-4 md:mb-5">
            {data?.paragraph2 || "The best kind of work comes from open communication, genuine collaboration and truly understanding the people behind the brand. Which is why instead of a one-size-fits-all strategy, we keep our approach personal, collaborative and hands-on, thus allowing us to stay authentic and true to your brand's story."}
          </p>
          <p className="text-base md:text-xl leading-relaxed text-[var(--secondary)] font-light">
            {data?.paragraph3 || "The result? A unique voice for your brand, millions of online impressions and a long lasting relationship with us!"}
          </p>
        </div>

        {/* Right Column: Dual Portrait Imagery + Stats */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
          
          {/* Dual Portrait Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            
            {/* Founder Photo */}
            <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-[var(--purple-wash)] bg-[var(--purple-soft)] shadow-sm">
              <img
                src={founderImgSrc}
                alt={data?.founderName || "Dhvani Dalal"}
                className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
              />
              <figcaption className="absolute left-2 right-2 bottom-2 sm:left-4 sm:right-4 sm:bottom-4 bg-[var(--bg)]/90 backdrop-blur-md border border-[var(--purple-wash)] rounded-lg p-2 sm:p-3">
                <span className="block text-xs sm:text-sm font-medium text-[var(--purple-deep)]">
                  {data?.founderName || "Dhvani Dalal"}
                </span>
                <span className="block text-[9px] sm:text-xs uppercase tracking-widest text-[var(--secondary)] mt-0.5">
                  {data?.founderTitle || "Founder, DSocial"}
                </span>
              </figcaption>
            </figure>

            {/* Team Photo */}
            <figure className="relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-[var(--purple-wash)] bg-[var(--purple-soft)] shadow-sm">
              <img
                src={teamImgSrc}
                alt={data?.teamTitle || "DSocial Team"}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <figcaption className="absolute left-2 right-2 bottom-2 sm:left-4 sm:right-4 sm:bottom-4 bg-[var(--bg)]/90 backdrop-blur-md border border-[var(--purple-wash)] rounded-lg p-2 sm:p-3">
                <span className="block text-xs sm:text-sm font-medium text-[var(--purple-deep)]">
                  {data?.teamTitle || "The Studio Team"}
                </span>
                <span className="block text-[9px] sm:text-xs uppercase tracking-widest text-[var(--secondary)] mt-0.5">
                  {data?.teamSubtitle || "Creative & Digital"}
                </span>
              </figcaption>
            </figure>

          </div>

          {/* Stats Bar Below Photos */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-2">
            {stats.map((stat: any, index: number) => (
              <div
                key={stat.value || index}
                className="flex flex-col justify-between bg-[var(--bg)]/60 backdrop-blur-sm border border-[var(--purple-wash)] p-3 sm:p-5 rounded-xl shadow-sm cursor-default"
              >
                <span className="text-[clamp(20px,3.5vw,40px)] leading-none font-light text-[var(--accent)]">
                  {stat.value}
                </span>
                <p className="text-[9px] sm:text-xs font-medium uppercase tracking-wider text-[var(--secondary)] m-0 mt-2 sm:mt-3 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </SectionShell>
  );
}