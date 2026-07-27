import { BoardAsset } from "../data/boardAssets";

function MaskingTapeProp({
  x,
  y,
  rotate = 0,
  width = 120,
  z = 1,
}: {
  x: string;
  y: string;
  rotate?: number;
  width?: number;
  z?: number;
}) {
  return (
    <div
      style={{
        left: x,
        top: y,
        rotate: `${rotate}deg`,
        width,
        zIndex: z,
      }}
      className="absolute select-none pointer-events-none"
    >
      <div className="h-6 rounded-sm bg-[#EFEAFE]/85 border border-white/60 shadow-md opacity-90" />
    </div>
  );
}

function PaperClipProp({
  x,
  y,
  rotate = 0,
  width = 42,
  z = 1,
}: {
  x: string;
  y: string;
  rotate?: number;
  width?: number;
  z?: number;
}) {
  return (
    <svg
      style={{
        left: x,
        top: y,
        width,
        height: width * 2.2,
        rotate: `${rotate}deg`,
        zIndex: z,
      }}
      className="absolute select-none pointer-events-none drop-shadow-md"
      viewBox="0 0 24 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 4C8 2 10 0 12 0C16 0 18 3 18 8V32C18 36 16 38 14 38C12 38 10 36 10 32V12"
        stroke="#8B7355"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PolaroidProp({
  x,
  y,
  rotate = 0,
  width = 155,
  z = 1,
  logo,
}: {
  x: string;
  y: string;
  rotate?: number;
  width?: number;
  z?: number;
  logo?: string;
}) {
  return (
    <div
      style={{
        left: x,
        top: y,
        rotate: `${rotate}deg`,
        width,
        zIndex: z,
      }}
      className="absolute select-none pointer-events-none drop-shadow-xl bg-white p-2 pb-7 rounded-sm"
    >
      <div className="aspect-[4/5] rounded-sm bg-[var(--purple-soft)] flex items-center justify-center overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt=""
            className="max-h-[60%] max-w-[75%] object-contain mix-blend-multiply opacity-70"
            draggable={false}
          />
        ) : (
          <div className="w-full h-full bg-neutral-100" />
        )}
      </div>
    </div>
  );
}

export default function BoardProp(asset: BoardAsset) {
  switch (asset.type) {
    case "tape":
      return (
        <MaskingTapeProp
          x={asset.x}
          y={asset.y}
          rotate={asset.rotate}
          width={asset.width}
          z={asset.z}
        />
      );
    case "clip":
      return (
        <PaperClipProp
          x={asset.x}
          y={asset.y}
          rotate={asset.rotate}
          width={asset.width}
          z={asset.z}
        />
      );
    case "polaroid":
      return (
        <PolaroidProp
          x={asset.x}
          y={asset.y}
          rotate={asset.rotate}
          width={asset.width}
          z={asset.z}
          logo={asset.logo}
        />
      );
    default:
      return null;
  }
}
