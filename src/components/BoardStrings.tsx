import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CampaignCategory } from "../data/clientBoard";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  categories: CampaignCategory[];
  boardRef: React.RefObject<HTMLDivElement | null>;
}

interface Point {
  x: number;
  y: number;
}

function parsePercent(value: string, total: number): number {
  return (parseFloat(value) / 100) * total;
}

function getAnchor(category: CampaignCategory, boardWidth: number, boardHeight: number): Point {
  const x = parsePercent(category.sticky.x, boardWidth) + category.sticky.size / 2;
  const y = parsePercent(category.sticky.y, boardHeight) + category.sticky.size / 2;
  return { x, y };
}

function buildPath(from: Point, to: Point): string {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const curve = Math.min(Math.hypot(dx, dy) * 0.25, 80);

  const cp1x = midX - dy * 0.15;
  const cp1y = midY + dx * 0.15 - curve;
  const cp2x = midX + dy * 0.15;
  const cp2y = midY - dx * 0.15 + curve;

  return `M ${from.x} ${from.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${to.x} ${to.y}`;
}

export default function BoardStrings({ categories, boardRef }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);

  const connections = useMemo(() => {
    const pairs: { from: string; to: string; key: string }[] = [];
    const seen = new Set<string>();

    categories.forEach((category) => {
      category.connections?.forEach((targetId) => {
        const key = [category.id, targetId].sort().join("-");
        if (!seen.has(key)) {
          seen.add(key);
          pairs.push({ from: category.id, to: targetId, key });
        }
      });
    });

    return pairs;
  }, [categories]);

  useEffect(() => {
    const board = boardRef.current;
    const svg = svgRef.current;
    if (!board || !svg) return;

    const updatePaths = () => {
      const rect = board.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);

      connections.forEach((conn, index) => {
        const fromCat = categories.find((c) => c.id === conn.from);
        const toCat = categories.find((c) => c.id === conn.to);
        const pathEl = pathsRef.current[index];
        if (!fromCat || !toCat || !pathEl) return;

        const from = getAnchor(fromCat, rect.width, rect.height);
        const to = getAnchor(toCat, rect.width, rect.height);
        pathEl.setAttribute("d", buildPath(from, to));
      });
    };

    updatePaths();

    const observer = new ResizeObserver(updatePaths);
    observer.observe(board);

    pathsRef.current.forEach((pathEl) => {
      if (!pathEl) return;
      const length = pathEl.getTotalLength();
      gsap.set(pathEl, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: board,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    pathsRef.current.forEach((pathEl, index) => {
      if (!pathEl) return;
      tl.to(
        pathEl,
        {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        index * 0.08,
      );
    });

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === board) trigger.kill();
      });
    };
  }, [boardRef, categories, connections]);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
      aria-hidden="true"
    >
      {connections.map((conn, index) => (
        <g key={conn.key}>
          <path
            ref={(el) => {
              pathsRef.current[index] = el;
            }}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            strokeLinecap="round"
          />
          {/* Pin dots at endpoints rendered after path is set via CSS circles at cluster centers */}
        </g>
      ))}
    </svg>
  );
}
