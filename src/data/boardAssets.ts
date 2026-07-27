export interface BoardAsset {
  type: "tape" | "clip" | "polaroid";
  x: string;
  y: string;
  rotate?: number;
  width?: number;
  z?: number;
  logo?: string;
}

export const boardAssets: BoardAsset[] = [
  {
    type: "clip",
    x: "19%",
    y: "16%",
    rotate: -18,
    width: 42,
    z: 20,
  },
  {
    type: "clip",
    x: "74%",
    y: "67%",
    rotate: 12,
    width: 46,
    z: 20,
  },
  {
    type: "tape",
    x: "58%",
    y: "47%",
    rotate: -8,
    width: 120,
    z: 30,
  },
];
