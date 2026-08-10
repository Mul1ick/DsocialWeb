import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Dsocial_logo_web.png";
import { useScrollState } from "../hooks/useScrollState";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Campaign Board", href: "#board" },
  { label: "Studio", href: "#studio" },
  { label: "Stats", href: "#stats" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const hasScrolled = useScrollState(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${hasScrolled ? "bg-white/80 backdrop-blur-md border-b border-[var(--purple-wash)] py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#top" aria-label="Dsocial home" className="w-fit shrink-0 z-50" onClick={closeMobileMenu}>
          <img src={logo} alt="Dsocial" className="h-10 md:h-16 w-auto object-contain" />
        </a>

        {/* Desktop Nav Links */}
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

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Desktop CTA Button */}
          <a 
            className="hidden sm:flex items-center gap-2 bg-[var(--purple-soft)] text-[var(--purple)] px-5 py-2.5 rounded-full text-xs xl:text-sm font-medium hover:bg-[var(--purple)] hover:text-white transition-colors duration-300" 
            href="mailto:hello@dsocial.studio"
          >
            Say Hello
            <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="p-2.5 rounded-full bg-[var(--purple-soft)] text-[var(--purple)] lg:hidden focus:outline-none transition-colors hover:bg-[var(--purple-mid)]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--purple-wash)] shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-lg font-['Poppins'] font-medium text-[var(--purple-deep)] hover:text-[var(--accent)] transition-colors py-1 border-b border-[var(--purple-wash)]/40"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Only CTA Button inside Drawer */}
              <a 
                className="flex sm:hidden items-center justify-center gap-2 bg-[var(--purple)] text-white w-full py-3.5 rounded-full text-sm font-medium hover:bg-[var(--accent)] transition-colors mt-2" 
                href="mailto:hello@dsocial.studio"
                onClick={closeMobileMenu}
              >
                Say Hello
                <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}