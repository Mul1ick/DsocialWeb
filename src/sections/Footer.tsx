// src/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[var(--purple-soft)]/50 backdrop-blur-sm border-t border-[var(--purple-wash)] pt-20 pb-10 px-6 lg:px-12 relative z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-[var(--purple-wash)] pb-12 mb-8">

        <div className="md:col-span-8 flex flex-col items-start">
          <a href="#top" className="mb-6 block opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-medium text-2xl tracking-tight text-[var(--purple-deep)]">
              d.social
            </span>
          </a>
          <p className="text-lg font-light text-[var(--secondary)] max-w-[300px] leading-relaxed m-0">
            Thoughtful social, <br /> made personally.
          </p>
        </div>

        <nav className="md:col-span-4 flex flex-col gap-4 text-sm font-medium tracking-wide" aria-label="Social links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors w-fit">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors w-fit">
            LinkedIn
          </a>
          <a href="mailto:dhvanidalal@dsocial.in" className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors w-fit">
            Email Studio
          </a>
        </nav>

      </div>

      {/* The Bottom Copyright Bar */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-4 text-xs font-medium text-[var(--secondary)] opacity-70">
        <span>© {new Date().getFullYear()} d.social</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}