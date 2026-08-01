// import React from "react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

const testimonials = [
  {
    id: 1,
    text: `"From strategy to execution, DSocial made every step seamless. Their creativity and understanding of our vision made all the difference. They consistently brought fresh ideas while staying true to our brand, making every campaign feel thoughtful and impactful."`,
    author: "Megha Agrawal, Founder, Avani Nepal",
    logoAlt: "Avani",
    // Replace with the path to your actual feed screenshot (e.g., "/images/avani-grid.jpg")
    image: null, 
  },
  {
    id: 2,
    text: `"They don't just create content; they build cultural moments. The kind of care and strategic depth they bring is rare. They feel like an in-house team that understands our exact aesthetic and target audience."`,
    author: "David Chen, CMO, Lumina",
    logoAlt: "Lumina",
    image: null,
  },
  {
    id: 3,
    text: `"Visually stunning and highly converting. We saw our engagement metrics triple in the first month alone. The attention to detail on shoot days is incredible, capturing the raw, authentic elements we needed."`,
    author: "Elena Rodriguez, Director, Maison & Co.",
    logoAlt: "Maison",
    image: null,
  },
  {
    id: 4,
    text: `"Our community growth skyrocketed. They understand social algorithms and human psychology perfectly, turning our complex ideas into highly digestible, beautiful content systems that scale."`,
    author: "Marcus Thorne, Head of Growth, Vitality",
    logoAlt: "Vitality",
    image: null,
  },
];

export default function Testimonials() {
  return (
    <SectionShell id="testimonials" className="py-32 relative z-10 border-t border-[var(--purple-wash)] overflow-hidden bg-[#F2EFE8]">
      
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <Reveal>
          <p className="uppercase tracking-[0.35em] text-[10px] text-[#5a5a5a] font-medium mb-3">
            Client Voices
          </p>
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-light text-[#2c1d33] tracking-tight m-0">
            The people behind the work.
          </h2>
        </Reveal>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full flex items-center group">
        
        {/* Edge Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#F2EFE8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#F2EFE8] to-transparent z-10 pointer-events-none" />
        
        {/* The Scrolling Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-8 md:gap-12 px-4 md:px-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={`${arrayIndex}-${testimonial.id}`}
                  className="w-[320px] md:w-[380px] shrink-0 flex flex-col transition-transform duration-300 hover:-translate-y-1"
                >
                  
                  {/* 1. The Feed Screenshot Container */}
                  <div className="w-full aspect-[2/3] bg-[#d8d3c9] overflow-hidden mb-6 relative">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.logoAlt} Instagram Feed`} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#a8a39a] text-sm uppercase tracking-widest">
                        [Feed Screenshot]
                      </div>
                    )}
                  </div>

                  {/* 2. The Testimonial Text */}
                  <p className="text-[15px] md:text-base text-[#2c1d33] font-normal leading-relaxed mb-6">
                    {testimonial.text}
                  </p>

                  {/* 3. The Author */}
                  <p className="text-sm md:text-[15px] font-bold text-[#2c1d33] mb-4">
                    - {testimonial.author}
                  </p>

                  {/* 4. The Brand Logo Placeholder */}
                  <div className="mt-auto h-12 flex items-center">
                    <div className="h-8 md:h-10 text-3xl font-serif tracking-widest text-[#2c1d33] opacity-80">
                      {testimonial.logoAlt}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 50s linear infinite;
          will-change: transform;
        }
      `}} />
      
    </SectionShell>
  );
}