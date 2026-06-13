// src/lib/content.ts

// Import client logos
import dkLogo from "../assets/Client Logos/D&K_logo.JPG";
import divineSpaceDesignLogo from "../assets/Client Logos/DivineSpaceDesign_logo.jpeg";
import gildedLogo from "../assets/Client Logos/Gilded_logo.jpeg";
import aquellaLogo from "../assets/Client Logos/aquella_logo.JPG"
import NJPLogo from "../assets/Client Logos/NJP_logo.jpeg"
import PistyleLogo from "../assets/Client Logos/Pistyle_logo.JPG"
import PolkaLogo from "../assets/Client Logos/Polka_logo.JPG"
import rearrangeKidsLogo from "../assets/Client Logos/rearrange_kids_logo.JPG"
import rearrangeLogo from "../assets/Client Logos/rearrange_logo.jpeg"

// ... (import the rest of your logos here)

export const principles = [
  "Listen first",
  "Design with feeling",
  "Stay close"
];

export const processSteps = [
  "Listen",
  "Understand",
  "Shape",
  "Care"
];

export const services = [
  {
    name: "Conceptualisation",
    description: "We listen closely before shaping the direction.",
    note: "Voice, mood, references and the quiet instincts behind the brand.",
  },
  {
    name: "Content Creation",
    description: "Photography, reels and visual storytelling made around your pace.",
    note: "Planned with room for the spontaneous parts that make it feel real.",
  },
  {
    name: "Social Media Management",
    description: "Gentle consistency, daily care and a voice that feels like you.",
    note: "A steady rhythm of posting, checking in, refining and responding.",
  },
];

export const work = [
  {
    id: "restaurant-identity",
    title: "Restaurant Identity",
    disciplines: ["Strategy", "Content", "Social"],
    tone: "work-image--restaurant",
    note: "Hospitality",
    detail: "A warm visual rhythm for a place people return to.",
  },
  {
    id: "fashion-label",
    title: "Fashion Label",
    disciplines: ["Campaign", "Reels", "Direction"],
    tone: "work-image--fashion",
    note: "Campaign",
    detail: "Soft launches, sharper edits and a language of restraint.",
  },
  {
    id: "personal-brand",
    title: "Personal Brand",
    disciplines: ["Positioning", "Content", "Voice"],
    tone: "work-image--personal",
    note: "Presence",
    detail: "A digital presence shaped around the person, not a persona.",
  },
];

export const clients = [
  { name: "D&K", logo: dkLogo },
  { name: "Divine Space Design", logo: divineSpaceDesignLogo },
  { name: "Gilded", logo: gildedLogo },
  { name: "aquella", logo: aquellaLogo },
];