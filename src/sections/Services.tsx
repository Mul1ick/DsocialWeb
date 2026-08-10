import { useEffect, useState } from "react";
// Remove Reveal import if you aren't using it elsewhere in this file
import SectionShell from "../components/SectionShell";
import { sanityClient, optimizeSanityImg } from "../lib/sanity"; 

interface SanityService {
  _id: string;
  title: string;
  subtitle: string;
  icon: any; 
  order: number;
}

export default function Services() {
  const [services, setServices] = useState<SanityService[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "service"] | order(order asc)`
        );
        setServices(data);
      } catch (error) {
        console.error("Error fetching services from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <SectionShell id="services" className="py-24 bg-white relative z-10 border-t border-[var(--purple-wash)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FIX: Removed the <Reveal> wrapper here so the title always loads on mobile */}
        <div className="mb-16 text-center">
           <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-2">
            What We Do
          </p>
          <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] font-bold text-[var(--purple-deep)] tracking-tight m-0">
            Our Services
          </h2>
        </div>

        {/* 2x4 Grid Layout */}
        {isLoading ? (
          <div className="flex justify-center text-[var(--purple-deep)]">
            Loading services...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {services.map((service) => (
              <div 
                key={service._id} 
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon Container: Increased to w-48/h-48 and added overflow-hidden to contain the scale crop */}
                <div className="w-48 h-48 mb-6 flex justify-center items-center relative rounded-full overflow-hidden transition-all duration-300 group-hover:bg-[#EAE6F3]/50 group-hover:-translate-y-1">
                  {service.icon && (
                    <img 
                      // Bumped the resolution to 300 to maintain quality when scaled up
                      src={optimizeSanityImg(service.icon, 300)} 
                      alt={`${service.title.replace('\n', ' ')} Icon`} 
                      loading="lazy"
                      decoding="async"
                      // scale-[1.25] acts as a visual crop for the padding. 
                      // Hover animation dynamically pushes it to scale-[1.35]
                      className="w-full h-full object-contain drop-shadow-sm scale-[1.25] transition-transform duration-300 group-hover:scale-[1.35]" 
                    />
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-[22px] font-['Poppins'] text-[var(--purple-deep)] mb-3 whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-[15px] text-neutral-500 whitespace-pre-line leading-relaxed max-w-[220px]">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </SectionShell>
  );
}