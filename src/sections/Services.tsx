import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { sanityClient, urlFor } from "../lib/sanity"; // Make sure this path matches your setup

// Define the shape of your Sanity document
interface SanityService {
  _id: string;
  title: string;
  subtitle: string;
  icon: any; // The Sanity image object
  order: number;
}

export default function Services() {
  const [services, setServices] = useState<SanityService[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Fetch documents of type 'service', ordered by the 'order' field we defined
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
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Reveal>
             <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-2">
              What We Do
            </p>
            <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.05] font-bold text-[var(--purple-deep)] tracking-tight m-0">
              Our Services.
            </h2>
          </Reveal>
        </div>

        {/* 2x4 Grid Layout */}
        {isLoading ? (
          // Optional: A simple loading skeleton to prevent layout shift
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
                {/* Icon Container with subtle hover background */}
                <div className="w-32 h-32 mb-6 flex justify-center items-center relative rounded-full transition-all duration-300 group-hover:bg-[#EAE6F3]/50 group-hover:-translate-y-1">
                  {/* Added a safety check in case an image isn't uploaded in the CMS yet */}
                  {service.icon && (
                    <img 
                      src={urlFor(service.icon).url()} 
                      alt={`${service.title.replace('\n', ' ')} Icon`} 
                      className="w-[85%] h-[85%] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
                    />
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-[22px] font-semibold text-[var(--purple-deep)] mb-3 whitespace-pre-line leading-tight">
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