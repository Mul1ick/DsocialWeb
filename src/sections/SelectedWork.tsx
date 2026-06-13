// src/sections/SelectedWork.tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionShell from "../components/SectionShell";
import { work } from "../lib/content"; // Importing from our new data layer

// Extracted a dedicated component for the interactive card
function WorkCard({ item, index }: { item: typeof work[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal className="work-item">
      <motion.div 
        className={`work-image ${item.tone}`} 
        aria-hidden="true"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        <em>{item.note}</em>
      </motion.div>
      
      <div className="work-meta">
        <h3>{item.title}</h3>
        <p>{item.detail}</p>
        <ul>
          {item.disciplines.map((discipline) => (
            <li key={discipline}>{discipline}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function SelectedWork() {
  return (
    <SectionShell id="work" className="selected-work">
      <Reveal>
        <div className="section-heading section-heading--wide">
          <p className="section-kicker">Selected Work</p>
          <h2>Visual worlds shaped around the people who live inside them.</h2>
        </div>
      </Reveal>
      <div className="work-list">
        {work.map((item, index) => (
          <WorkCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}