import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { sanityClient, urlFor } from "../lib/sanity";

// Fallback data so the site renders cleanly if Sanity is empty
const fallbackTestimonials = [
  {
    _id: "1",
    text: `"From strategy to execution, DSocial made every step seamless. Their creativity and understanding of our vision made all the difference. They consistently brought fresh ideas while staying true to our brand, making every campaign feel thoughtful and impactful."`,
    author: "Megha Agrawal, Founder, Avani Nepal",
    logoAlt: "Avani",
    image: null, 
  },
  {
    _id: "2",
    text: `"DSocial transformed our brand presence completely. Their creative strategy and content were exceptional. My brand’s reach doubled within a month of organic content. Their ability to create impactful content made the entire process seamless."`,
    author: "Rhea Chatterjee, Founder, Rearrange Home",
    logoAlt: "Rearrange",
    image: null,
  },
  {
    _id: "3",
    text: `"Working with DSocial felt like having an in-house marketing team. Our engagement tripled within the first month itself, and it was unbelievable. Their strategic approach and creative execution truly helped us connect better with our audience and build a stronger brand presence."`,
    author: "Jhanvi Shah, CEO, Tokyo Tori",
    logoAlt: "Maison",
    image: null,
  },
  {
    _id: "4",
    text: `"DSocial is the creative partner every brand needs. Their ability to bring ideas to life with precision and creativity makes every collaboration effortless. I’d highly recommend them. I can confidently trust them to deliver exceptional work every single time."`,
    author: "Nirmiti Jhaveri, Director, Nirmiti Jhaveri Productions",
    logoAlt: "Vitality",
    image: null,
  },
  {
    _id: "5",
    text: `"Our social media inquiries grew by nearly 45% within two months of partnering with DSocial. Their creative direction, attention to detail, and data-driven approach made a measurable difference to our business."`,
    author: "Rachna Kumar, Rachna Kumar",
    logoAlt: "Vitality",
    image: null,
  },
  {
    _id: "6",
    text: `"Within the first quarter, our profile visits increased by 120%, and we saw a noticeable rise in qualified inquiries through social media. DSocial's combination of creativity and strategy produced results that went beyond our expectations."`,
    author: "Niharika Saraf, Polka House Interior Design",
    logoAlt: "Vitality",
    image: null,
  },
  {
    _id: "7",
    text: `"DSocial helped us take our campaign visibility to the next level, achieving over a 5x increase in campaign reach compared to our previous initiatives. Their creative strategy, timely execution, and ability to capture audience attention helped us create campaigns that truly stood out."`,
    author: "Vedant Shah, Plural Restaurant",
    logoAlt: "Vitality",
    image: null,
  },
  {
    _id: "8",
    text: `"Partnering with DSocial helped us turn our social media presence into a stronger business driver. Within a few months, we saw a 35% increase in sales generated through digital channels. Their strategic approach, creative execution, and understanding of our audience made a significant impact on our growth."`,
    author: "Founder, Bikaner Jewellery",
    logoAlt: "Vitality",
    image: null,
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<any[]>(fallbackTestimonials);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "testimonial"] | order(order asc)`)
      .then((res) => {
        // Only overwrite the fallback if Sanity actually returns data
        if (res && res.length > 0) {
          setTestimonials(res);
        }
      })
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <SectionShell id="testimonials" className="py-32 relative z-10 border-t border-[var(--purple-wash)] overflow-hidden bg-[var(--bg)]">
      
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <Reveal>
          <p className="uppercase tracking-[0.35em] text-[10px] text-[var(--secondary)] font-medium mb-3">
            Client Voices
          </p>
          <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-bold text-[var(--purple-deep)] tracking-tight m-0">
            Testimonials
          </h2>
        </Reveal>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full flex items-center group">
        
        {/* Edge Fade Gradients for smooth entrance/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
        
        {/* The Scrolling Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          
          {[...Array(2)].map((_, arrayIndex) => (
            <div key={arrayIndex} className="flex gap-8 md:gap-12 px-4 md:px-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={`${arrayIndex}-${testimonial._id || testimonial.author}`}
                  className="w-[320px] md:w-[380px] shrink-0 flex flex-col transition-transform duration-300 hover:-translate-y-1"
                >
                  
                  {/* 1. The Feed Screenshot Container */}
                  <div className="w-full aspect-[2/3] bg-[var(--purple-wash)] overflow-hidden mb-6 relative rounded-sm">
                    {testimonial.image ? (
                      <img 
                        // Safely handle both Sanity image objects and fallback static URLs
                        src={testimonial.image?.asset ? urlFor(testimonial.image).url() : testimonial.image} 
                        alt={`${testimonial.logoAlt} Instagram Feed`} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--secondary)] text-sm uppercase tracking-widest opacity-60">
                        [Feed Screenshot]
                      </div>
                    )}
                  </div>

                  {/* 2. The Testimonial Text */}
                  <p className="text-[15px] md:text-base text-[var(--primary)] font-normal leading-relaxed mb-6">
                    {testimonial.text}
                  </p>

                  {/* 3. The Author */}
                  <p className="text-sm md:text-[15px] font-medium text-[var(--purple-deep)] mb-4">
                    - {testimonial.author}
                  </p>

                  {/* 4. The Brand Logo */}
                  {/* Fixed h-30 typo to valid standard tailwind heights (h-24/h-32) and added overflow-hidden */}
                  <div className="mt-auto h-24 md:h-32 w-full max-w-[160px] md:max-w-[220px] flex items-center justify-start overflow-hidden">
                    {testimonial.brandLogo ? (
                      <img 
                        // Added .width(400) to request a higher-res image from Sanity so it doesn't blur when scaling
                        src={testimonial.brandLogo?.asset ? urlFor(testimonial.brandLogo).width(400).url() : testimonial.brandLogo} 
                        alt={`${testimonial.logoAlt} Logo`}
                        // Added origin-left to anchor the scale, scale-[1.25] to visually crop, and h-full w-full
                        className="w-full h-full object-contain object-left origin-left scale-[1.8] opacity-90 mix-blend-multiply" 
                      />
                    ) : (
                      <div className="text-2xl md:text-3xl font-serif tracking-widest text-[var(--purple-deep)] opacity-80">
                        {testimonial.logoAlt}
                      </div>
                    )}
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