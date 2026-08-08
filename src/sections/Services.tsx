import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";

const servicesData = [
  {
    title: "Social Media\nManagement",
    subtitle: "You run the business,\nwe'll run the socials.",
    iconPath: "/icons/1.png", // <-- Add your path here (e.g., "/icons/social-management.png")
    alt: "Social Media Management Icon",
  },
  {
    title: "Content Creation",
    subtitle: "Making your brand the\nmain character.",
    iconPath: "/icons/2.png", // <-- Add your path here
    alt: "Content Creation Icon",
  },
  {
    title: "Creative Strategy",
    subtitle: "Pretty, but\nwith a plan.",
    iconPath: "/icons/3.png", // <-- Add your path here
    alt: "Creative Strategy Icon",
  },
  {
    title: "Branding & Design",
    subtitle: "Giving your brand\na personality.",
    iconPath: "/icons/4.png", // <-- Add your path here
    alt: "Branding & Design Icon",
  },
  {
    title: "Photography &\nVideography",
    subtitle: "Making your brand's\ngood side shine.",
    iconPath: "/icons/5.png", // <-- Add your path here
    alt: "Photography & Videography Icon",
  },
  {
    title: "Website Copywriting\n& Content",
    subtitle: "Words that sound\nlike your brand.",
    iconPath: "/icons/6.png", // <-- Add your path here
    alt: "Website Copywriting Icon",
  },
  {
    title: "Campaign Strategy &\nExecution",
    subtitle: 'From "what if?"\nto "it\'s live."',
    iconPath: "/icons/7.png", // <-- Add your path here
    alt: "Campaign Strategy Icon",
  },
  {
    title: "Moral Support",
    subtitle: "Our most underrated\nservice.",
    iconPath: "/icons/8.png", // <-- Add your path here
    alt: "Moral Support Icon",
  },
];

export default function Services() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container with subtle hover background */}
              <div className="w-32 h-32 mb-6 flex justify-center items-center relative rounded-full transition-all duration-300 group-hover:bg-[#EAE6F3]/50 group-hover:-translate-y-1">
                <img 
                  src={service.iconPath} 
                  alt={service.alt} 
                  className="w-[85%] h-[85%] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
                />
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

      </div>
    </SectionShell>
  );
}