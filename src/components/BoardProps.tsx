interface Prop {
  src: string;
  x: string;
  y: string;
  rotate?: number;
  width?: number;
  z?: number;
}

export default function BoardProp({
  src,
  x,
  y,
  rotate = 0,
  width = 120,
  z = 1,
}: Prop) {
  return (
    <img
      src={src}
      draggable={false}
      alt=""
      style={{
        left: x,
        top: y,
        rotate: `${rotate}deg`,
        width,
        zIndex: z,
      }}
      className="
      absolute
      select-none
      pointer-events-none
      drop-shadow-xl
      "
    />
  );
}