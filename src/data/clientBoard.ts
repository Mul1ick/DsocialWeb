import { clients } from "../lib/content";

export interface CampaignBrand {
  name: string;
  logo: string;
  instagram?: string; // Added instagram field
}

export interface CampaignCategory {
  id: string;
  title: string;
  note: string;
  sticky: {
    x: string;
    y: string;
    rotate: number;
    colour: "purple" | "white";
    size: number;
  };
  photo?: {
    dx: number;
    dy: number;
    rotate: number;
    width: number;
  };
  tape?: {
    dx: number;
    dy: number;
    rotate: number;
    width: number;
  };
  clip?: {
    dx: number;
    dy: number;
    rotate: number;
    size: number;
  };
  brands: CampaignBrand[];
  connections?: string[];
}

function brandsForCategory(categoryId: string): CampaignBrand[] {
  return clients
    .filter((client) => client.category === categoryId)
    .map(({ name, logo, instagram }) => ({ name, logo , instagram}));
}

export const campaignBoard: CampaignCategory[] = [
  {
    id: "interiors",
    title: "Interiors",
    note: "Need wider shots",
    sticky: {
      x: "8%",
      y: "10%",
      rotate: -7,
      colour: "purple",
      size: 180,
    },
    photo: { dx: 90, dy: -45, rotate: 8, width: 120 },
    tape: { dx: 65, dy: -18, rotate: -8, width: 65 },
    brands: brandsForCategory("interiors"),
    connections: ["home", "events"],
  },
  {
    id: "home",
    title: "Home Décor",
    note: "Client approved",
    sticky: {
      x: "35%",
      y: "8%",
      rotate: 4,
      colour: "white",
      size: 190,
    },
    photo: { dx: -80, dy: 85, rotate: -6, width: 120 },
    clip: { dx: 138, dy: -12, rotate: 18, size: 34 },
    brands: brandsForCategory("home"),
    connections: ["interiors", "beauty"],
  },
  {
    id: "beauty",
    title: "Beauty",
    note: "Need UGC",
    sticky: {
      x: "68%",
      y: "13%",
      rotate: -5,
      colour: "purple",
      size: 170,
    },
    photo: { dx: -60, dy: 92, rotate: -9, width: 110 },
    tape: { dx: 55, dy: -12, rotate: 9, width: 60 },
    brands: brandsForCategory("beauty"),
    connections: ["home", "fashion"],
  },
  {
    id: "events",
    title: "Events",
    note: "Launch week",
    sticky: {
      x: "15%",
      y: "40%",
      rotate: 5,
      colour: "white",
      size: 180,
    },
    photo: { dx: 90, dy: 80, rotate: 6, width: 120 },
    brands: brandsForCategory("events"),
    connections: ["interiors", "media"],
  },
  {
    id: "fashion",
    title: "Fashion",
    note: "Trending audio",
    sticky: {
      x: "44%",
      y: "37%",
      rotate: -4,
      colour: "purple",
      size: 190,
    },
    photo: { dx: -90, dy: -50, rotate: -7, width: 130 },
    tape: { dx: 70, dy: -15, rotate: -10, width: 60 },
    clip: { dx: -18, dy: 150, rotate: -14, size: 36 },
    brands: brandsForCategory("fashion"),
    connections: ["beauty", "jewellery"],
  },
  {
    id: "food",
    title: "Food",
    note: "Shoot Friday",
    sticky: {
      x: "73%",
      y: "41%",
      rotate: 8,
      colour: "white",
      size: 170,
    },
    photo: { dx: -85, dy: 65, rotate: -5, width: 120 },
    brands: brandsForCategory("food"),
    connections: ["events"],
  },
  {
    id: "baby",
    title: "Baby",
    note: "Soft palette",
    sticky: {
      x: "12%",
      y: "70%",
      rotate: -8,
      colour: "purple",
      size: 150,
    },
    brands: brandsForCategory("baby"),
    connections: ["home"],
  },
  {
    id: "jewellery",
    title: "Jewellery",
    note: "Premium launch",
    sticky: {
      x: "42%",
      y: "70%",
      rotate: 6,
      colour: "white",
      size: 150,
    },
    brands: brandsForCategory("jewellery"),
    connections: ["fashion", "beauty"],
  },
  {
    id: "media",
    title: "Media",
    note: "Publish Monday",
    sticky: {
      x: "69%",
      y: "72%",
      rotate: -6,
      colour: "purple",
      size: 150,
    },
    photo: { dx: 70, dy: -60, rotate: 6, width: 110 },
    brands: brandsForCategory("media"),
    connections: ["events", "food"],
  },
];

/** @deprecated Use campaignBoard instead */
export type ClientCategory = CampaignCategory;

/** @deprecated Use campaignBoard instead */
export const clientBoard = campaignBoard;
