interface Props {
  text: string;
  colour: string;
  x: string;
  y: string;
  rotate: number;
  width: number;
}

export default function AmbientNote({
  text,
  colour,
  x,
  y,
  rotate,
  width,
}: Props) {
  return (
    <div
      style={{
        left: x,
        top: y,
        rotate: `${rotate}deg`,
        width,
        background: colour,
      }}
      className="
        absolute
        px-4
        py-3
        rounded-sm
        shadow-md
        text-[15px]
        text-neutral-700
        font-handwritten
        z-[8]
        select-none
        pointer-events-none
      "
    >
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[radial-gradient(#000_0.8px,transparent_0.8px)]
          [background-size:10px_10px]
        "
      />

      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8C6A58] border border-white/80 shadow-sm" />

      <span className="relative">{text}</span>
    </div>
  );
}
