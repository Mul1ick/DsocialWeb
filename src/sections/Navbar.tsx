import { ArrowUpRight } from "lucide-react";
import logo from "../assets/Dsocial_logo_web.png";
import { useScrollState } from "../hooks/useScrollState";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Campaign Board", href: "#board" },
  { label: "Studio", href: "#studio" },
  { label: "Stats", href: "#stats" }, // Added link
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const hasScrolled = useScrollState(20);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-white/70 backdrop-blur-md border-b border-[var(--purple-wash)] py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#top" aria-label="Dsocial home" className="w-fit shrink-0">
          <img src={logo} alt="Dsocial" className="h-12 md:h-16 w-auto object-contain" />
        </a>

        {/* All Section Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="whitespace-nowrap text-xs xl:text-sm font-medium tracking-wide text-[var(--secondary)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex justify-end shrink-0">
          <a 
            className="flex items-center gap-2 bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2.5 rounded-full text-xs xl:text-sm font-medium hover:bg-[var(--purple)] hover:text-white transition-colors duration-300" 
            href="mailto:hello@dsocial.studio"
          >
            Say Hello
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}