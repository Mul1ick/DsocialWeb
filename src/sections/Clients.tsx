// src/sections/Clients.tsx
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { clients } from "../lib/content"; // Make sure to wire this up!

export default function Clients() {
  // We duplicate the array to create a seamless infinite loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <SectionShell className="clients overflow-hidden">
      <Reveal>
        <p className="section-kicker">Clients</p>
      </Reveal>
      
      <div className="relative w-full mt-12 flex overflow-hidden border-t border-b border-[rgb(75_41_79/0.16)] bg-[rgb(255_253_251/0.32)]">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedClients.map((client, index) => (
            <figure 
              key={`${client.name}-${index}`} 
              className="relative flex-shrink-0 w-[240px] h-[140px] flex items-center justify-center p-8 border-r border-[rgb(75_41_79/0.16)] group hover:bg-[rgb(255_253_251/0.8)] transition-colors duration-150"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="max-w-[140px] max-h-[60px] object-contain mix-blend-multiply grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-150"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}