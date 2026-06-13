import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, revealTransition } from "../lib/animation";

type RevealProps = HTMLMotionProps<"div">;

export default function Reveal({ children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={revealTransition}
      {...props}
    >
      {children}
    </motion.div>
  );
}
