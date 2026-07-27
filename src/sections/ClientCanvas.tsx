import { useState } from "react";
import BoardCluster from "../components/BoardCluster";
import { boardLayout } from "../data/boardLayout";
import ExpandedBoard from "../components/ExpandedBoard";
import SectionShell from "../components/SectionShell";
import { ClientCategory } from "../data/clientBoard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import AmbientNote from "../components/AmbientNote";
// import { decorativeNotes } from "../data/boardDecor"

import BoardProp from "../components/BoardProps";
import { boardAssets } from "../data/boardAssets";;




gsap.registerPlugin(ScrollTrigger);



export default function ClientsCanvas() {
    const [selected, setSelected] = useState<ClientCategory | null>(null);
    const boardRef = useRef<HTMLDivElement>(null);


    useGSAP(() => {
  const cards = gsap.utils.toArray<HTMLElement>(".client-cluster");

  gsap.from(cards, {
    y: 40,
    opacity: 0,
    scale: 0.9,

    duration: 0.9,

    stagger: 0.1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: boardRef.current,
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
}, { scope: boardRef });


  return (
    <SectionShell
      id="clients"
      className="relative py-36 overflow-hidden"
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-[#F8F4EF]
        via-[#FBF9F5]
        to-[#F3EEE8]
      "
      />

      {/* subtle vignette */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,.04))]
      "
      />

      {/* Header */}

      <div className="relative z-20 max-w-7xl mx-auto text-center mb-20">
        <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-4">
          Inside The Studio
        </p>

        <h2 className="text-[clamp(42px,6vw,72px)] font-light text-[#2B1C2F]">
          The Campaign Wall
        </h2>

        <p className="mt-6 text-neutral-500 max-w-xl mx-auto leading-8">
          Every campaign starts with organised chaos.
          Ideas become strategies.
          Strategies become brands people remember.
        </p>
      </div>

      {/* Board */}

      <div
      ref={boardRef}
        className="
        relative
        mx-auto
        w-full
        max-w-[1180px]
        min-h-[760px]
        rounded-[40px]
        border
        border-white/70
        bg-[#FDFBF7]
        shadow-[0_40px_120px_rgba(0,0,0,.08)]
        overflow-hidden
      "
      >
        {/* paper texture */}

        {/* Felt board background */}

{/* Felt / Fuzzy Background */}

<div className="absolute inset-0 bg-[#E4DED3]" />

<div
  className="
    absolute
    inset-0
    opacity-20
    bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.5)_0.6px,transparent_0.7px)]
    [background-size:5px_5px]
  "
/>

<div
  className="
    absolute
    inset-0
    opacity-15
    bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,.15)_0.6px,transparent_0.7px)]
    [background-size:4px_4px]
  "
/>

<div
  className="
    absolute
    inset-0
    opacity-20
    bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,.08)_50%,transparent_100%)]
  "
/>

<div
  className="
    absolute
    inset-0
    opacity-10
    bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.35)_1px,transparent_1px)]
    [background-size:4px_4px]
    mix-blend-overlay
  "
/>

        {/* random decorative arrows */}

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        >
          <path
            d="M240 250 C420 200 480 350 620 280"
            stroke="#8B5A96"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />

          <path
            d="M820 520 C980 450 1100 600 1280 520"
            stroke="#8B5A96"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />

          <path
            d="M520 760 C700 680 760 840 930 760"
            stroke="#8B5A96"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 8"
          />
        </svg>

        

        {/* All Categories */}
        {/* {decorativeNotes.map((note) => (
  <AmbientNote
    key={note.text}
    {...note}
  />
))} */}

{boardAssets.map((asset, i) => (
    <BoardProp
        key={i}
        {...asset}
    />
))}

        {boardLayout.map((cluster) => (
  <BoardCluster
    key={cluster.id}
    cluster={cluster}
    onClick={() => console.log(cluster.id)}
  />
))}

      </div>
      <ExpandedBoard
    category={selected}
    onClose={() => setSelected(null)}
/>
    </SectionShell>
  );
}