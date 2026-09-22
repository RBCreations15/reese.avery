export type MediaAsset = {
  id: string;
  label: string;
  src: string | null;
  alt: string;
  tone: "stone" | "ink" | "sage" | "clay" | "navy" | "cream";
  kind?: "image" | "video";
  captions?: string;
};

export function mediaSlot(id: string, label: string, tone: MediaAsset["tone"] = "stone", kind: MediaAsset["kind"] = "image"): MediaAsset {
  return { id, label, tone, kind, src: null, alt: `${label} — media to be supplied` };
}

// Set src to a local /media/... path and replace alt text when actual media arrives.
export const homeMedia = {
  pointOfView: [mediaSlot("01", "Atmosphere / place", "sage"), mediaSlot("02", "Image / detail", "clay")],
  image: [
    mediaSlot("01", "People / editorial portrait", "stone"),
    mediaSlot("02", "Food / a closer look", "ink"),
    mediaSlot("03", "Place / somewhere in between", "sage"),
    mediaSlot("04", "Detail / light + texture", "clay"),
  ],
  portrait: mediaSlot("RA", "Reese / candid editorial portrait", "stone"),
};
