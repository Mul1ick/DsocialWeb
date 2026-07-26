// // src/sections/Clients.tsx
// import { motion } from "framer-motion";
// import SectionShell from "../components/SectionShell";
// import { clients } from "../lib/content";

// export default function Clients() {
//   const duplicatedClients = [...clients, ...clients, ...clients];

//   return (
//     <SectionShell id="testimonials" className="py-24 bg-[var(--purple-soft)] border-y border-[var(--purple-mid)] overflow-hidden">
//       <h2 className="text-center text-[var(--purple)] text-sm font-medium uppercase tracking-[0.2em] mb-12 opacity-70">
//         Testimonials
//       </h2>
      
//       <div className="flex overflow-hidden w-full relative">
//         {/* Soft gradient masks to fade the edges of the marquee */}
//         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--purple-soft)] to-transparent z-10 pointer-events-none"></div>
//         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--purple-soft)] to-transparent z-10 pointer-events-none"></div>
        
//         <motion.div
//           className="flex flex-nowrap items-center gap-16 px-8 min-w-max"
//           animate={{ x: ["0%", "-33.33%"] }}
//           transition={{ ease: "linear", duration: 35, repeat: Infinity }}
//         >
//           {duplicatedClients.map((client, index) => (
//             <figure key={`${client.name}-${index}`} className="flex-shrink-0">
//               <img 
//                 src={client.logo} 
//                 alt={client.name} 
//                 className="h-10 md:h-14 w-auto object-contain mix-blend-multiply opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
//               />
//             </figure>
//           ))}
//         </motion.div>
//       </div>
//     </SectionShell>
//   );
// }
