// src/sections/Navbar.tsx
import { ArrowUpRight } from "lucide-react";
import InteractiveLogo from "../components/InteractiveLogo";
import { useScrollState } from "../hooks/useScrollState";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const hasScrolled = useScrollState(20);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-white/70 backdrop-blur-md border-b border-[var(--purple-wash)] py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* You can replace this text with your InteractiveLogo component if you prefer the animated dot! */}
        <div className="font-medium text-xl tracking-tight text-[var(--purple-deep)]">
          d.social
        </div>

        <nav className="hidden md:flex justify-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium tracking-wide text-[var(--secondary)] hover:text-[var(--accent)] transition-colors duration-200"
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