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
  const hasScrolled = useScrollState();

  return (
    <header className={`site-nav ${hasScrolled ? "site-nav--scrolled" : ""}`}>
      <div className="nav-inner">
        <InteractiveLogo />
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="mailto:hello@dsocial.studio">
          Say Hello
          <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
