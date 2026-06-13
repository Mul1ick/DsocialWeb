// src/sections/Clients.tsx
import { motion } from "framer-motion";
import SectionShell from "../components/SectionShell";
import { clients } from "../lib/content";

export default function Clients() {
  // Tripling the array so the marquee never runs out of space before looping
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <SectionShell className="py-24 bg-[var(--primary)] border-t-4 border-black overflow-hidden relative z-10">
      <div className="absolute inset-0 bg-[var(--accent)] opacity-5 blur-[100px] pointer-events-none"></div>
      
      <h2 className="text-center text-[var(--accent)] text-sm font-bold uppercase tracking-[0.3em] mb-12">
        The Roster
      </h2>
      
      {/* Top Marquee - Scrolling Left */}
      <div className="flex overflow-hidden w-full border-y-2 border-[#333] bg-[#050505] py-6 mb-4">
        <motion.div
          className="flex flex-nowrap items-center gap-16 px-8 min-w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {duplicatedClients.map((client, index) => (
            <figure key={`top-${client.name}-${index}`} className="flex-shrink-0 group cursor-crosshair">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-14 w-auto object-contain invert grayscale opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </figure>
          ))}
        </motion.div>
      </div>

      {/* Bottom Marquee - Scrolling Right */}
      <div className="flex overflow-hidden w-full border-b-2 border-[#333] bg-[#050505] py-6">
        <motion.div
          className="flex flex-nowrap items-center gap-16 px-8 min-w-max"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedClients.map((client, index) => (
            <figure key={`bottom-${client.name}-${index}`} className="flex-shrink-0 group cursor-crosshair">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-14 w-auto object-contain invert grayscale opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}