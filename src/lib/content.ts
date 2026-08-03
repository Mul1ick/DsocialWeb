// src/lib/content.ts

import dkLogo from "../assets/Client Logos/DK.png";
import divineSpaceDesignLogo from "../assets/Client Logos/Divine_space.png";
import gildedLogo from "../assets/Client Logos/Gilded.png";
import aquellaLogo from "../assets/Client Logos/aquella.png";
import NJPLogo from "../assets/Client Logos/njp.png";
import PistyleLogo from "../assets/Client Logos/Pistyle.png";
import PolkaLogo from "../assets/Client Logos/polka.png";
import rearrangeKidsLogo from "../assets/Client Logos/rearrange_kids.png";
import rearrangeLogo from "../assets/Client Logos/rearrange_home.png";
import shagunLogo from "../assets/Client Logos/shagun.png";
import SPLogo from "../assets/Client Logos/sp.png";
import TOLogo from "../assets/Client Logos/TO.png";
import altheaLogo from "../assets/Client Logos/althea.png";
import avaniLogo from "../assets/Client Logos/avani.png";
import bikaneriLogo from "../assets/Client Logos/Bikaneri.png";
import dynaconsLogo from "../assets/Client Logos/Dynacons.png";
import eightLogo from "../assets/Client Logos/eight.png";
import jsmLogo from "../assets/Client Logos/jsm.png";
import lokaLogo from "../assets/Client Logos/loka.png";
import nubyLogo from "../assets/Client Logos/nuby.png";
import pluralLogo from "../assets/Client Logos/plural.png";
import rachnaLogo from "../assets/Client Logos/rachna.png";
import rageLogo from "../assets/Client Logos/rage.png";
import renuSarafLogo from "../assets/Client Logos/renu_saraf.png";
import rotaryLogo from "../assets/Client Logos/rotary.png";
import smfLogo from "../assets/Client Logos/smf.png";
import ssLogo from "../assets/Client Logos/SS_logo.png";
import tokoytoriLogo from "../assets/Client Logos/tokoytori.png";

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
  { name: "Divine Space Design", logo: divineSpaceDesignLogo, category: "interiors" },
  { name: "Rearrange Home", logo: rearrangeLogo, category: "home" },
  { name: "Loka", logo: lokaLogo, category: "fashion" },
  { name: "Rachna", logo: rachnaLogo, category: "home" },
  { name: "Gilded", logo: gildedLogo, category: "home" },
  { name: "Plural", logo: pluralLogo, category: "food" },
  { name: "Eight", logo: eightLogo, category: "fashion" },
  { name: "D&K", logo: dkLogo, category: "interiors" },
  { name: "Aquella", logo: aquellaLogo, category: "home" },
  { name: "Althea", logo: altheaLogo, category: "beauty" },
  { name: "Avani", logo: avaniLogo, category: "beauty" },
  { name: "Renu Saraf", logo: renuSarafLogo, category: "events" },
  { name: "Polka", logo: PolkaLogo, category: "interiors" },
  { name: "Pistyle", logo: PistyleLogo, category: "interiors" },
  { name: "Shagun", logo: shagunLogo, category: "fashion" },
  { name: "Tokoytori", logo: tokoytoriLogo, category: "fashion" },
  { name: "Bikaneri", logo: bikaneriLogo, category: "jewellery" },
  { name: "Nuby", logo: nubyLogo, category: "baby" },
  { name: "Rotary", logo: rotaryLogo, category: "events" },
  { name: "SMF", logo: smfLogo, category: "fashion" },
  { name: "NJP", logo: NJPLogo, category: "media" },
  { name: "Rearrange Kids", logo: rearrangeKidsLogo, category: "home" },
  { name: "Treasured", logo: TOLogo, category: "home" },
  { name: "Rage", logo: rageLogo, category: "events" },
  { name: "Speciality", logo: SPLogo, category: "food" },
  { name: "JSM", logo: jsmLogo, category: "beauty" },
  // { name: "Dynacons", logo: dynaconsLogo, category: "media" },
  { name: "SS", logo: ssLogo, category: "events" },
];
