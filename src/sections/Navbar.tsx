// src/sections/Navbar.tsx
import { ArrowUpRight } from "lucide-react";
import logo from "../assets/Dsocial_logo_web.png";
import { useScrollState } from "../hooks/useScrollState";

const navItems = [
  {label: "About Us", href: "#about"},
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const hasScrolled = useScrollState(20);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-white/70 backdrop-blur-md border-b border-[var(--purple-wash)] py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
        
        <a href="#" aria-label="Dsocial home" className="w-fit">
          <img src={logo} alt="Dsocial" className="h-14 md:h-18 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex justify-center gap-7 lg:gap-9" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-[var(--secondary)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a 
            className="flex items-center gap-2 bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--purple)] hover:text-white transition-colors duration-300" 
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
