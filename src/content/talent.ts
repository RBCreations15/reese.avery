import { mediaSlot } from "./media";

export const talentContent = {
  heading: "REESE AVERY",
  disciplines: "ACTING / MODELING / ON CAMERA",
  credit: { title: "LAKE MONEY", role: "Camille", format: "Independent Film", year: "2026" },
  acting: [mediaSlot("01", "Headshot", "stone"), mediaSlot("02", "Lake Money / film still", "ink"), mediaSlot("03", "Reel", "stone", "video"), mediaSlot("04", "Performance clip", "ink", "video")],
  modeling: [mediaSlot("01", "Portrait", "stone"), mediaSlot("02", "Full body", "cream"), mediaSlot("03", "Editorial", "ink"), mediaSlot("04", "Lifestyle", "clay")],
  onCamera: [mediaSlot("01", "Vertical video", "stone", "video"), mediaSlot("02", "Brand content / future work", "clay", "video"), mediaSlot("03", "On-camera work", "ink", "video")],
};
