import { mediaSlot, type MediaAsset } from "./media";

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: "Digital experiences" | "Image + editorial";
  disciplines: string[];
  year: string | null;
  theme: "monti" | "sassy" | "dinner";
  context: string;
  idea: string;
  direction: string;
  palette: { name: string; color: string }[];
  cover: MediaAsset;
  gallery: MediaAsset[];
  experience: string;
  credits: string | null;
};

// Direction/idea copy is a rough draft based solely on the supplied brief.
export const projects: Project[] = [
  {
    slug: "monti-institute", number: "01", name: "MONTI INSTITUTE", category: "Digital experiences",
    disciplines: ["Creative Direction", "Digital Design", "Digital Experience / Web"], year: "2026", theme: "monti",
    context: "A medical practice blending neurology and aesthetics. The creative challenge: communicate physician-led medical credibility while creating an elevated aesthetic experience.",
    idea: "Build the experience around a balance of confidence and care. Let medical clarity lead, with an elevated visual language that feels considered rather than clinical.",
    direction: "Navy and gold. Restrained typography, deliberate space, and a calm image language. A direction intended to make credibility and aesthetics feel part of the same world.",
    palette: [{ name: "Navy", color: "#172937" }, { name: "Gold", color: "#b8a06e" }, { name: "Ivory", color: "#eeeae0" }],
    cover: mediaSlot("01", "Monti Institute / homepage", "navy"),
    gallery: [mediaSlot("02", "Services", "cream"), mediaSlot("03", "Providers", "stone"), mediaSlot("04", "Memberships", "navy"), mediaSlot("05", "Mobile experience", "cream"), mediaSlot("06", "Brand details / typography", "navy"), mediaSlot("07", "Image direction", "stone")],
    experience: "Homepage, services, providers, memberships, and mobile: space for the final digital experience and its details.", credits: null,
  },
  {
    slug: "sassy-alchemy", number: "02", name: "SASSY ALCHEMY", category: "Digital experiences",
    disciplines: ["Digital Design", "Visual Direction", "Web"], year: null, theme: "sassy",
    context: "A digital presence for a wellness and beauty studio, with an earthy, intimate visual direction.",
    idea: "Make a digital space feel personal. Build a sense of ease through warmth, quiet details, and room to breathe.",
    direction: "Sage, clay, olive, forest, and stone. A cozy, minimal, chic direction that feels grounded and close — a different atmosphere from Monti's medical world.",
    palette: [{ name: "Sage", color: "#a8b39b" }, { name: "Clay", color: "#b8836b" }, { name: "Olive", color: "#666c48" }, { name: "Forest", color: "#324437" }, { name: "Stone", color: "#ded9cc" }],
    cover: mediaSlot("01", "Sassy Alchemy / digital presence", "sage"),
    gallery: [mediaSlot("02", "Homepage details", "cream"), mediaSlot("03", "Studio atmosphere", "clay"), mediaSlot("04", "Mobile experience", "sage"), mediaSlot("05", "Typography + color", "stone")],
    experience: "A place for the studio's web experience, from first impression to the smaller moments that make it feel personal.", credits: null,
  },
  {
    slug: "dinner-series", number: "03", name: "DINNER SERIES", category: "Image + editorial",
    disciplines: ["Photography", "Visual Storytelling"], year: null, theme: "dinner",
    context: "An editorial photography project around food and the restaurant experience.",
    idea: "Look beyond the plate. Find the atmosphere in light, texture, and the details of a table.",
    direction: "Warm, moody, and crisp. Rich blacks, restrained saturation, shallow depth, and cream-gold highlights.",
    palette: [{ name: "Warm black", color: "#211e1a" }, { name: "Cream", color: "#e9dfc8" }, { name: "Gold", color: "#b29667" }],
    cover: mediaSlot("01", "Dinner / opening photograph", "ink"),
    gallery: [mediaSlot("02", "The table / wide frame", "clay"), mediaSlot("03", "Food / close detail", "ink"), mediaSlot("04", "Light / atmosphere", "cream"), mediaSlot("05", "A final impression", "ink")],
    experience: "A photographic sequence. Final images will determine its rhythm.", credits: null,
  },
];

export const workCategories = [
  { number: "01", name: "DIGITAL EXPERIENCES", category: "Digital experiences", note: "Monti Institute / Sassy Alchemy" },
  { number: "02", name: "IMAGE + EDITORIAL", category: "Image + editorial", note: "Dinner Series / Photography" },
] as const;

export const futureCategories = ["CONTENT + SOCIAL", "FASHION + CULTURE"];
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
