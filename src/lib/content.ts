// src/lib/content.ts

import dkLogo from "../assets/Client Logos/DK.webp";
import divineSpaceDesignLogo from "../assets/Client Logos/Divine_space.webp";
import gildedLogo from "../assets/Client Logos/Gilded.webp";
import aquellaLogo from "../assets/Client Logos/aquella.webp";
import NJPLogo from "../assets/Client Logos/njp.webp";
import PistyleLogo from "../assets/Client Logos/Pistyle.webp";
import PolkaLogo from "../assets/Client Logos/polka.webp";
import rearrangeKidsLogo from "../assets/Client Logos/rearrange_kids.webp";
import rearrangeLogo from "../assets/Client Logos/rearrange_home.webp";
import shagunLogo from "../assets/Client Logos/shagun.webp";
import SPLogo from "../assets/Client Logos/sp.webp";
import TOLogo from "../assets/Client Logos/TO.webp";
import altheaLogo from "../assets/Client Logos/althea.webp";
import avaniLogo from "../assets/Client Logos/avani.webp";
import bikaneriLogo from "../assets/Client Logos/Bikaneri.webp";
// import dynaconsLogo from "../assets/Client Logos/Dynacons.webp";
import eightLogo from "../assets/Client Logos/eight.webp";
import jsmLogo from "../assets/Client Logos/jsm.webp";
import lokaLogo from "../assets/Client Logos/loka.webp";
import nubyLogo from "../assets/Client Logos/nuby.webp";
import pluralLogo from "../assets/Client Logos/plural.webp";
import rachnaLogo from "../assets/Client Logos/rachna.webp";
import rageLogo from "../assets/Client Logos/rage.webp";
import renuSarafLogo from "../assets/Client Logos/renu_saraf.webp";
import rotaryLogo from "../assets/Client Logos/rotary.webp";
import smfLogo from "../assets/Client Logos/smf.webp";
import ssLogo from "../assets/Client Logos/SS_logo.webp";
import tokoytoriLogo from "../assets/Client Logos/tokoytori.webp";

export type ClientCategoryId =
  | "interiors"
  | "home"
  | "beauty"
  | "events"
  | "fashion"
  | "food"
  | "baby"
  | "jewellery"
  | "media";

export interface ClientBrand {
  name: string;
  logo: string;
  category: ClientCategoryId;
  instagram?: string;
}

export const principles = [
  "Full-service creative and digital agency",
  "Strategic thinking, compelling content and impactful digital experiences",
  "Visibility, engagement and long-term brand value",
];

export const approachSteps = ["Strategy", "Create", "Launch"];

export const processSteps = [
  "Discover",
  "Strategize",
  "Create",
  "Launch",
  "Optimise",
];

export const services = [
  {
    name: "Social Media Management",
    description:
      "Day-to-day planning, publishing and care for a consistent brand presence.",
    note: "A steady rhythm across platforms.",
  },
  {
    name: "Content Creation",
    description:
      "Ideas, visuals and storytelling shaped for the way people actually scroll.",
    note: "Built for visibility and recall.",
  },
  {
    name: "Creative Strategy",
    description:
      "Clear direction before the work goes live, from positioning to campaign thinking.",
    note: "The thinking behind the content.",
  },
  {
    name: "Branding & Graphic Design",
    description:
      "Visual systems, campaign graphics and branded assets that feel cohesive.",
    note: "Designed to look like one brand.",
  },
  {
    name: "Photography",
    description:
      "Brand, product and lifestyle imagery planned around the story you want to tell.",
    note: "Shot with purpose and mood.",
  },
  {
    name: "Website Content",
    description:
      "Copy and content direction for websites that need to feel clear and considered.",
    note: "Words that support the experience.",
  },
  {
    name: "Moral Support",
    description:
      "A creative partner in the messy middle, helping brands stay steady and moving.",
    note: "Because good work needs care too.",
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

export const clients: ClientBrand[] = [
  { name: "Divine Space Design", logo: divineSpaceDesignLogo, category: "interiors", instagram: "https://www.instagram.com/divinespace_design/" },
  { name: "Rearrange Home", logo: rearrangeLogo, category: "home", instagram: "https://www.instagram.com/rearrangehome/" },
  { name: "Loka", logo: lokaLogo, category: "fashion", instagram: "https://www.instagram.com/loka_byveerali/" },
  { name: "Rachna Kumar", logo: rachnaLogo, category: "home", instagram: "https://www.instagram.com/rachnakumar29/" },
  { name: "Gilded Gestures", logo: gildedLogo, category: "home",instagram:"https://www.instagram.com/gildedgestures/" },
  { name: "Plural", logo: pluralLogo, category: "food", instagram: "https://www.instagram.com/pluralrestaurant" },
  { name: "Eight", logo: eightLogo, category: "fashion",instagram:"https://www.instagram.com/eight_india/" },
  { name: "Daws&Kahlon", logo: dkLogo, category: "interiors",instagram:"https://www.instagram.com/dawsandkahlon_/" },
  { name: "Aquella.in", logo: aquellaLogo, category: "home",instagram:"https://www.instagram.com/aquella.in/" },
  { name: "Althea wellness co", logo: altheaLogo, category: "beauty",instagram:"https://www.instagram.com/altheawellnessco/" },
  { name: "Avani Nepal", logo: avaniLogo, category: "beauty", instagram: "https://www.instagram.com/avaninepal/" },
  { name: "Renu Saraf", logo: renuSarafLogo, category: "events", instagram:"https://www.instagram.com/renusaraf/" },
  { name: "Polka House Interior Design", logo: PolkaLogo, category: "interiors",instagram:"https://www.instagram.com/polkahouseinteriordesign/" },
  { name: "Pistyle.in", logo: PistyleLogo, category: "interiors" },
  { name: "Shagun Nagi The label", logo: shagunLogo, category: "fashion",instagram:"https://www.instagram.com/shagunnagi_thelabel/" },
  { name: "Tokyo tori", logo: tokoytoriLogo, category: "fashion", instagram: "https://www.instagram.com/tokyotori_/" },
  { name: "Bikaneri Jewels", logo: bikaneriLogo, category: "jewellery",instagram:"https://www.instagram.com/bikanerijewelsmumbaillp/" },
  { name: "Nuby india", logo: nubyLogo, category: "baby", instagram:"https://www.instagram.com/nuby.india/" },
  { name: "Rotary club of Mumbai Divas", logo: rotaryLogo, category: "events",instagram:"https://www.instagram.com/rcofmumbaidivas/" },
  { name: "Set Me Free fashion", logo: smfLogo, category: "fashion",instagram:"https://www.instagram.com/setmefree_fashion/" },
  { name: "Nirmiti Jhaveri Productions", logo: NJPLogo, category: "media", instagram:"https://www.instagram.com/nirmitijhaveriproductions/" },
  { name: "Rearrange Kids", logo: rearrangeKidsLogo, category: "home", instagram:"https://www.instagram.com/rearrangehome_kids/" },
  { name: "Treasured Occasions", logo: TOLogo, category: "home", instagram:"https://www.instagram.com/treasuredoccasions.co/" },
  { name: "Rage Celebrations", logo: rageLogo, category: "events", instagram:"https://www.instagram.com/ragecelebrations/" },
  { name: "Speciality experiences", logo: SPLogo, category: "food", instagram:"https://www.instagram.com/specialityexperiences/" },
  { name: "Jinal Shah Mehta", logo: jsmLogo, category: "beauty",instagram:"https://www.instagram.com/jinal.shah.mehta/" },
  { name: "Saffron String", logo: ssLogo, category: "events",instagram:"https://www.instagram.com/saffronstringofficial/" },
];
