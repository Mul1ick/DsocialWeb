
/**
 * Bento grid replicating the reference screenshot layout.
 * Positions/sizes are defined as percentages of a 1600x905 reference
 * canvas, taken directly from the source image's pixel coordinates,
 * so the relative proportions and aspect ratios of every tile match
 * the original exactly. Swap the `src` values in `TILES` with your
 * real images whenever you're ready — everything else adapts.
 */

interface Tile {
  id: number;
  src: string;
  alt: string;
  // percentages relative to the 1600 x 905 reference canvas
  left: number;
  top: number;
  width: number;
  height: number;
}

const TILES: Tile[] = [
  // Left column
  {
    id: 1,
    src: "/stats_images/1.png",
    alt: "Placeholder 1",
    left: (207 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (425 / 905) * 100,
  },
  {
    id: 2,
    src: "/stats_images/2.png",
    alt: "Placeholder 2",
    left: (207 / 1600) * 100,
    top: (489 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (219 / 905) * 100,
  },
  {
    id: 3,
    src: "/stats_images/3.png",
    alt: "Placeholder 3",
    left: (207 / 1600) * 100,
    top: (717 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (140 / 905) * 100,
  },

  // Column 2 (narrow)
  {
    id: 4,
    src: "/stats_images/4.png",
    alt: "Placeholder 4",
    left: (533 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (184 / 1600) * 100,
    height: (257 / 905) * 100,
  },
  {
    id: 10,
    src: "/stats_images/8.png",
    alt: "Placeholder 10",
    left: (533 / 1600) * 100,
    top: (592 / 905) * 100,
    width: (184 / 1600) * 100,
    height: (265 / 905) * 100,
  },

  // Column 3 (wide)
  {
    id: 5,
    src: "/stats_images/5.png",
    alt: "Placeholder 5",
    left: (731 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (379 / 1600) * 100,
    height: (257 / 905) * 100,
  },
  {
    id: 7,
    src: "/stats_images/6.png",
    alt: "Placeholder 7",
    left: (547 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (364 / 1600) * 100,
    height: (257 / 905) * 100,
  },
  {
    id: 8,
    src: "/stats_images/7.png",
    alt: "Placeholder 8",
    left: (925 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (185 / 1600) * 100,
    height: (257 / 905) * 100,
  },
  {
    id: 11,
    src: "/stats_images/9.png",
    alt: "Placeholder 11",
    left: (731 / 1600) * 100,
    top: (592 / 905) * 100,
    width: (379 / 1600) * 100,
    height: (265 / 905) * 100,
  },

  // Right column
  {
    id: 6,
    src: "/stats_images/10.png",
    alt: "Placeholder 6",
    left: (1126 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (257 / 905) * 100,
  },
  {
    id: 9,
    src: "/stats_images/11.png",
    alt: "Placeholder 9",
    left: (1126 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (363 / 905) * 100,
  },
  {
    id: 12,
    src: "/stats_images/12.png",
    alt: "Placeholder 12",
    left: (1126 / 1600) * 100,
    top: (717 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (140 / 905) * 100,
  },
];

// Reference canvas aspect ratio (width / height), used to keep the
// grid's proportions locked as it scales to any container width.
const CANVAS_ASPECT = 1600 / 905;

export default function Stats() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#e9e2f5] p-6">
      <div
        className="relative w-full max-w-[1600px]"
        style={{ aspectRatio: CANVAS_ASPECT }}
      >
        {TILES.map((tile) => (
          <div
            key={tile.id}
            className="absolute overflow-hidden rounded-2xl shadow-sm bg-white"
            style={{
              left: `${tile.left}%`,
              top: `${tile.top}%`,
              width: `${tile.width}%`,
              height: `${tile.height}%`,
            }}
          >
            <img
              src={tile.src}
              alt={tile.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}