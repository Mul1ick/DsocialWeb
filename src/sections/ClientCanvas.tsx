import { useState } from 'react';
import ExpandedBoard from '../components/ExpandedBoard';
import { campaignBoard } from '../data/clientBoard';

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80",
];

const caseFiles = [
  { id: 1, categoryId: 'interiors', title: 'Interiors', brands: 4, img: images[0], hasTape: true, rotation: '-rotate-1', pinX: '50%', note: { text: 'Moodboards\nConcepts', pos: '-left-10 top-12', rot: '-rotate-3' } },
  { id: 2, categoryId: 'home', title: 'Home Décor', brands: 4, img: images[1], hasClip: true, rotation: 'rotate-1', pinX: '60%', imgRot: 'rotate-12', imgOffset: '-right-20 -top-2' },
  { id: 3, categoryId: 'beauty', title: 'Beauty', brands: 4, img: images[2], hasTape: false, rotation: '-rotate-2', pinX: '40%', note: { text: 'Approved ♡', pos: '-right-6 -top-4', rot: 'rotate-3' }, imgRot: 'rotate-6', imgOffset: '-right-16 top-4' },
  { id: 4, categoryId: 'events', title: 'Events', brands: 3, img: images[3], hasTape: false, rotation: 'rotate-0', pinX: '30%', note: { text: 'Revisions\nin progress', pos: '-left-12 top-10', rot: '-rotate-2' }, imgRot: 'rotate-6', imgOffset: '-right-20 top-2' },
  { id: 5, categoryId: 'fashion', title: 'Fashion', brands: 4, img: images[4], hasClip: true, hasTape: true, rotation: '-rotate-1', pinX: '50%', specialNote: true, imgRot: '-rotate-6', imgOffset: '-right-16 -top-4' },
  { id: 6, categoryId: 'food', title: 'Food', brands: 2, img: images[5], hasTape: false, rotation: 'rotate-2', pinX: '45%', note: { text: 'Shoot Friday', pos: '-right-6 -bottom-6', rot: 'rotate-2' }, imgRot: 'rotate-12', imgOffset: '-right-24 top-0' },
  { id: 7, categoryId: 'baby', title: 'Baby', brands: 1, img: images[6], hasClip: true, rotation: '-rotate-2', pinX: '35%', imgRot: 'rotate-6', imgOffset: '-right-20 top-4' },
  { id: 8, categoryId: 'jewellery', title: 'Jewellery', brands: 2, img: images[7], hasTape: true, tapePos: '-top-3 left-1/2', rotation: 'rotate-1', pinX: '45%', hasPalette: true, imgRot: '-rotate-3', imgOffset: '-right-16 -top-2' },
  { id: 9, categoryId: 'media', title: 'Media', brands: 4, img: images[8], hasTape: false, rotation: 'rotate-0', pinX: '50%', note: { text: 'V14 ☆', pos: '-right-4 -top-2', rot: '-rotate-3' }, imgRot: 'rotate-12', imgOffset: '-right-24 top-2' },
];

export default function ClientCanvas() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Retrieve the fully populated category data from the central store when clicked
  const activeCategoryData = selectedCategory
    ? campaignBoard.find((c) => c.id === selectedCategory) || null
    : null;

  return (
    // The "Wall" Background
    <section className="min-h-screen w-full relative flex flex-col items-center justify-start font-sans bg-[var(--bg)] py-20 px-4 md:px-12">
      
      {/* 2. THE HEADER: Sits at the top, spans full width, content centered */}
      <div className="w-full max-w-[1400px] mb-12 flex flex-col items-center justify-center text-center">
        <p className="uppercase tracking-[0.35em] text-[11px] text-[var(--secondary)] font-medium mb-3">
          Case Files & Brands
        </p>
        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-light text-[var(--purple-deep)] tracking-tight m-0">
          The Campaign Board.
        </h2>
      </div>

      {/* 3. THE BOARD: Sits directly underneath the header */}
      <div className="relative w-full max-w-[1400px] flex items-center justify-center rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
        
        {/* Felt board background image */}
        <img 
          src="/board/felt-beige.png" 
          alt="Felt Board Background" 
          className="absolute inset-0 w-full h-full object-fill z-0 pointer-events-none rounded-[2rem]"
        />

        {/* Inner Padding container to keep cards off the wooden frame */}
        <div className="relative z-10 w-full px-12 py-20 md:px-24 md:py-28 xl:px-32 xl:py-36 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-16 lg:gap-x-24 place-items-center scale-[0.85] xl:scale-100 origin-center">
          
          {caseFiles.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedCategory(item.categoryId)}
              className={`relative w-[260px] h-[220px] ${item.rotation} cursor-pointer group z-10 hover:z-30`}
            >
              
              {/* Background Image / Polaroid Layer */}
              <div className={`absolute ${item.imgOffset || '-right-20 -top-2'} w-[180px] h-[200px] bg-white p-2 pb-6 shadow-[2px_8px_16px_rgba(0,0,0,0.15)] ${item.imgRot || 'rotate-6'} z-0 transition-transform group-hover:scale-105 group-hover:rotate-0 duration-300`}>
                <div className="w-full h-full bg-gray-200 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                {item.hasTape && (
                  <div className="absolute -top-2 -left-3 w-16 h-5 bg-[#bdaec6] opacity-80 -rotate-12 shadow-sm mix-blend-multiply" />
                )}
              </div>

              {/* Main White Card Layer */}
              <div className="absolute inset-0 bg-[#fbfaf8] shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-[#e5e5e5] p-6 flex flex-col justify-between z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
                
                {/* Push Pin */}
                <div 
                  className="absolute -top-2 w-4 h-4 rounded-full shadow-sm z-30 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    left: item.pinX,
                    background: 'radial-gradient(circle at 30% 30%, #a68453, #5c4322)',
                    boxShadow: '2px 4px 5px rgba(0,0,0,0.25), inset -1px -1px 3px rgba(0,0,0,0.4)'
                  }}
                />

                {/* Tape on main card */}
                {item.hasTape && (
                  <div className={`absolute w-16 h-5 bg-[#bdaec6] opacity-80 shadow-sm mix-blend-multiply z-20 ${item.tapePos || '-top-2 -left-4 -rotate-12'}`} />
                )}

                {/* Paperclip */}
                {item.hasClip && (
                  <div className="absolute -top-4 right-6 w-4 h-12 border-[2px] border-[#c0a062] rounded-full z-30 rotate-3 shadow-[1px_2px_3px_rgba(0,0,0,0.15)]" style={{ clipPath: 'inset(0 0 20% 0)' }}>
                    <div className="absolute top-1 left-1 w-1 h-8 border-[2px] border-[#c0a062] rounded-full" />
                  </div>
                )}

                <div className="mt-2">
                  <div className="flex items-center gap-4 border-b border-[#d4d4d4] pb-2 mb-4">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#7a7a7a] font-medium">
                      Case File 0{item.id}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl text-[#3b2745] tracking-tight leading-none mt-2">
                    {item.title}
                  </h2>
                </div>

                <div className="flex justify-between items-center border-b border-[#d4d4d4] pb-3">
                  <span className="text-[9px] tracking-widest uppercase text-[#7a7a7a] font-medium">
                    {item.brands} Active Brand{item.brands > 1 ? 's' : ''}
                  </span>
                  <span className="text-[#3b2745] text-sm group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Post-it Notes Layer */}
  
{item.note && (
  <div className={`absolute z-40 bg-[#c6b6d3] px-3 py-2 shadow-[2px_4px_8px_rgba(0,0,0,0.1)] whitespace-pre-line font-['Courier',_monospace] text-[#2c1d33] text-xs ${item.note.pos} ${item.note.rot}`}>
    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/30 backdrop-blur-sm -rotate-3 mix-blend-screen" />
    {item.note.text}
  </div>
)}

              {/* Special Large Note */}
              {item.specialNote && (
                <div className="absolute -bottom-12 right-2 z-40 bg-[#f7f6f3] border-l-2 border-l-[#d4d4d4] px-4 py-3 shadow-[2px_6px_12px_rgba(0,0,0,0.1)] rotate-3">
                   <div className="space-y-2 font-['Courier',_monospace] text-[#2c1d33] text-sm leading-snug">
                     <p>More BTS</p>
                     <p>coming soon! ♡</p>
                   </div>
                   <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 20px, #3b2745 21px)'}} />
                </div>
              )}

              {/* Color Palette */}
              {item.hasPalette && (
                <div className="absolute -bottom-8 right-2 z-40 bg-[#f7f6f3] p-2.5 shadow-[2px_4px_10px_rgba(0,0,0,0.1)] -rotate-3 flex flex-col gap-1.5">
                  <span className="font-['Courier',_monospace] text-[10px] text-[#3b2745]">Palette</span>
                  <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#b2a4bf]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#755c82]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#463053]" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[#d6c7b8]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Renders the expanded overlay carousel when a category is selected */}
      <ExpandedBoard 
        category={activeCategoryData} 
        onClose={() => setSelectedCategory(null)} 
      />
    </section>
  );
}