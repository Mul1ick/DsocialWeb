import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Or your icon library
import BrandCarousel from './BrandCarousel';

interface ExpandedBoardProps {
  category: {
    id: string;
    title: string;
    brands: any[];
  } | null;
  onClose: () => void;
}

export default function ExpandedBoard({ category, onClose }: ExpandedBoardProps) {
  return (
    <AnimatePresence>
      {category && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 perspective-1000">
          
          {/* Backdrop Blur Fade In */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 3D Flip & Slide-Up Card Modal */}
          <motion.div
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              rotateY: -70, // Start flipped 70 degrees on Y-axis
              rotateX: 20,  // Tilted slightly back
              y: 120        // Starts lower down screen
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0, 
              rotateX: 0, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              rotateY: 70, 
              y: 100 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 22,
              mass: 0.8
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative z-10 w-full max-w-5xl bg-[#fbfaf8] border border-[#e5e5e5] rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
          >
            {/* Header / Pinboard Tab Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#f4f1ea]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#a68453] shadow-inner" />
                <span className="text-xs uppercase tracking-widest text-[#7a7a7a] font-semibold">
                  Client File: {category.title}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#3b2745] hover:bg-black/5 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Carousel / Board Content */}
            <div className="p-6 md:p-10">
              <BrandCarousel brands={category.brands} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}