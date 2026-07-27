interface Props {
  text: string;
  colour: string;
  x: string;
  y: string;
  rotate: number;
  width: number;
}

const colours = [
  "#F4EEFF", // light lavender
  "#FFFFFF", // white
];

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
      text-[13px]
      text-neutral-700
      font-medium
      z-10
      "
    >
      {text}
    </div>
  );
}