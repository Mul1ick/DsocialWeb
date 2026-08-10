/**
 * Bento grid replicating the reference screenshot layout.
 *
 * Desktop/tablet (md and up): tiles are absolutely positioned as
 * percentages of a 1600x905 reference canvas, taken directly from the
 * source image's pixel coordinates, so proportions and aspect ratios
 * match the original exactly.
 *
 * Mobile (below md): tiles reflow into a 2-column bento (full-width
 * "hero" tiles interleaved with half-width pairs). Paired tiles share
 * a single fixed height (instead of each sizing itself off its own
 * aspect ratio) so two tiles with different natural proportions don't
 * leave a dead gap under the shorter one.
 *
 * Fit mode matters here: real photography tiles use object-cover
 * (fine to crop), but UI/screenshot tiles use object-contain with a
 * soft background so on-screen text and numbers never get cropped or
 * distorted.
 *
 * Swap the `src` values in `TILES` with your real images whenever
 * you're ready — everything else adapts.
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
  // "cover" for real photography, "contain" for UI/screenshot tiles
  // that have text or numbers that must never be cropped.
  fit: "cover" | "contain";
}

const TILES: Tile[] = [
  // Left column
  {
    id: 1,
    src: "/stats_images/1.webp",
    alt: "Placeholder 1",
    left: (207 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (425 / 905) * 100,
    fit: "cover",
  },
  {
    id: 2,
    src: "/stats_images/2.webp",
    alt: "Placeholder 2",
    left: (207 / 1600) * 100,
    top: (489 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (219 / 905) * 100,
    fit: "contain",
  },
  {
    id: 3,
    src: "/stats_images/3.webp",
    alt: "Placeholder 3",
    left: (207 / 1600) * 100,
    top: (717 / 905) * 100,
    width: (308 / 1600) * 100,
    height: (140 / 905) * 100,
    fit: "contain",
  },

  // Column 2 (narrow)
  {
    id: 4,
    src: "/stats_images/4.webp",
    alt: "Placeholder 4",
    left: (533 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (184 / 1600) * 100,
    height: (257 / 905) * 100,
    fit: "contain",
  },
  {
    id: 10,
    src: "/stats_images/8.webp",
    alt: "Placeholder 10",
    left: (533 / 1600) * 100,
    top: (592 / 905) * 100,
    width: (184 / 1600) * 100,
    height: (265 / 905) * 100,
    fit: "cover",
  },

  // Column 3 (wide)
  {
    id: 5,
    src: "/stats_images/5.webp",
    alt: "Placeholder 5",
    left: (731 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (379 / 1600) * 100,
    height: (257 / 905) * 100,
    fit: "contain",
  },
  {
    id: 7,
    src: "/stats_images/6.webp",
    alt: "Placeholder 7",
    left: (547 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (364 / 1600) * 100,
    height: (257 / 905) * 100,
    fit: "contain",
  },
  {
    id: 8,
    src: "/stats_images/7.webp",
    alt: "Placeholder 8",
    left: (925 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (185 / 1600) * 100,
    height: (257 / 905) * 100,
    fit: "contain",
  },
  {
    id: 11,
    src: "/stats_images/9.webp",
    alt: "Placeholder 11",
    left: (731 / 1600) * 100,
    top: (592 / 905) * 100,
    width: (379 / 1600) * 100,
    height: (265 / 905) * 100,
    fit: "contain",
  },

  // Right column
  {
    id: 6,
    src: "/stats_images/10.webp",
    alt: "Placeholder 6",
    left: (1126 / 1600) * 100,
    top: (48 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (257 / 905) * 100,
    fit: "cover",
  },
  {
    id: 9,
    src: "/stats_images/11.webp",
    alt: "Placeholder 9",
    left: (1126 / 1600) * 100,
    top: (320 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (363 / 905) * 100,
    fit: "cover",
  },
  {
    id: 12,
    src: "/stats_images/12.webp",
    alt: "Placeholder 12",
    left: (1126 / 1600) * 100,
    top: (717 / 905) * 100,
    width: (262 / 1600) * 100,
    height: (140 / 905) * 100,
    fit: "contain",
  },
];

const TILE_BY_ID = new Map(TILES.map((t) => [t.id, t]));
const tile = (id: number) => TILE_BY_ID.get(id)!;

// Mobile layout: a deliberate 2-column bento, not a strict reflow of
// the desktop grid. Full-width "row" entries act as breathers between
// paired half-width tiles. Loosely preserves the original top-to-bottom
// reading order. Each pair gets a shared height (in the clamp() below)
// so both tiles line up evenly instead of leaving a gap under whichever
// one is naturally shorter.
type MobileRow =
  | { kind: "full"; id: number }
  | { kind: "pair"; ids: [number, number]; height: string };

const MOBILE_ROWS: MobileRow[] = [
  { kind: "full", id: 1 },
  { kind: "pair", ids: [4, 6], height: "clamp(170px, 46vw, 260px)" },
  { kind: "full", id: 5 },
  { kind: "full", id: 7 },
  { kind: "pair", ids: [8, 9], height: "clamp(170px, 46vw, 260px)" },
  { kind: "full", id: 2 },
  { kind: "pair", ids: [10, 12], height: "clamp(150px, 40vw, 230px)" },
  { kind: "full", id: 11 },
  { kind: "full", id: 3 },
];

// Reference canvas aspect ratio (width / height), used to keep the
// desktop grid's proportions locked as it scales to any container width.
const CANVAS_ASPECT = 1600 / 905;

function TileImage({ t }: { t: Tile }) {
  return (
    <div
      className={`w-full h-full overflow-hidden ${
        t.fit === "contain" ? "bg-[#f3eef7]" : ""
      }`}
    >
      <img
        src={t.src}
        alt={t.alt}
        loading="lazy"
        className={`w-full h-full ${
          t.fit === "cover" ? "object-cover" : "object-contain"
        }`}
      />
    </div>
  );
}

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#Faf7fb] py-16 sm:py-24 border-t border-[var(--purple-wash)] overflow-hidden"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(139,90,150,0.04))]" />

      <div className="relative z-10 w-full max-w-[1600px] px-5 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Centered Title Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 w-full">
          <p className="uppercase tracking-[0.35em] text-[10px] sm:text-[11px] text-[var(--secondary)] font-medium mb-3">
            By The Numbers
          </p>
          <h2 className="font-['Poppins'] text-[clamp(32px,8vw,64px)] leading-[1.05] font-bold text-[var(--purple-deep)] tracking-tight m-0">
            The Good Stuff
          </h2>
        </div>

        {/* Mobile/tablet: Images naturally dictate their own height, no extra background boxes */}
        <div className="flex md:hidden flex-col gap-4 sm:gap-6 w-full">
          {MOBILE_ROWS.map((row, i) => {
            if (row.kind === "full") {
              const t = tile(row.id);
              return (
                <img
                  key={`mobile-full-${i}`}
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  // w-full and h-auto allows the image to precisely fit its own dimensions
                  className="w-full h-auto rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(75,41,79,0.06)] bg-white"
                />
              );
            }

            return (
              <div key={`mobile-pair-${i}`} className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
                {row.ids.map((id) => {
                  const t = tile(id);
                  return (
                    <img
                      key={`mobile-tile-${id}`}
                      src={t.src}
                      alt={t.alt}
                      loading="lazy"
                      className="w-full h-auto rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(75,41,79,0.06)] bg-white"
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Desktop/tablet: exact bento grid from the reference image remains untouched */}
        <div
          className="hidden md:block relative w-full"
          style={{ aspectRatio: CANVAS_ASPECT }}
        >
          {TILES.map((t) => (
            <div
              key={t.id}
              className="absolute overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(75,41,79,0.04)]"
              style={{
                left: `${t.left}%`,
                top: `${t.top}%`,
                width: `${t.width}%`,
                height: `${t.height}%`,
              }}
            >
              <TileImage t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}