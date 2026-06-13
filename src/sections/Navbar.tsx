// src/sections/Navbar.tsx
import { ArrowUpRight } from "lucide-react";
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${hasScrolled ? "bg-[var(--bg)] border-b-4 border-black py-2" : "bg-transparent py-6"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
        
        {/* We keep your interactive logo, but you might want to style it bolder in its component later! */}
        <div className="font-bold text-2xl tracking-tighter uppercase text-black">
          d.social
        </div>

        <nav className="hidden md:flex justify-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest text-black hover:text-[var(--accent)] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <a 
            className="flex items-center gap-2 bg-black text-white px-5 py-2 text-sm font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-black transition-colors duration-200 border-2 border-transparent hover:border-black" 
            href="mailto:hello@dsocial.studio"
          >
            Say Hello
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}