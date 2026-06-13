// src/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-12 relative z-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b-2 border-white/20 pb-12 mb-8">
        
        <div className="md:col-span-8 flex flex-col items-start">
          <div className="text-[clamp(40px,8vw,100px)] leading-none font-bold uppercase tracking-tighter mb-4">
            d.social
          </div>
          <p className="text-xl font-medium text-gray-400 max-w-[400px]">
            High-impact social media management for brands that refuse to be ignored.
          </p>
        </div>

        <nav className="md:col-span-4 flex flex-col gap-4 text-lg font-bold uppercase tracking-widest" aria-label="Social links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors w-fit">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors w-fit">
            LinkedIn
          </a>
          <a href="mailto:hello@dsocial.studio" className="hover:text-[var(--accent)] transition-colors w-fit">
            Email Studio
          </a>
        </nav>

      </div>
      
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
        <span>© {new Date().getFullYear()} D.SOCIAL</span>
        <span>ALL RIGHTS RESERVED</span>
        <span>MUMBAI, IN</span>
      </div>
    </footer>
  );
}