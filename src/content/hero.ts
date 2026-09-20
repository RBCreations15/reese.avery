export const heroContent = {
  disciplines: ["CREATIVE DIRECTION", "DIGITAL DESIGN", "VISUAL STORYTELLING"],
  introduction: [
    "Multidisciplinary creative working",
    "across image, digital and culture.",
    "Building visual worlds with intention.",
  ],
  statement: [
    "Creating online and wherever I land —",
    "across creative direction, ideas, experiences,",
    "and ultimately",
  ],
  manifesto: ["ALL THINGS", "STRATEGICALLY AESTHETIC."],
  navigation: [
    { label: "Work", href: "#next", destination: "SELECTED WORK" },
    { label: "Talent", href: "#next", destination: "TALENT" },
    { label: "Contact", href: "#next", destination: "CONTACT" },
  ],
  availability: "OPEN TO WORK",
  established: "EST. 2025",
} as const;

type CameraFrame = { src: string; alt: string; metadata?: string };
type CameraAssets = {
  shell: string;
  width: number;
  height: number;
  placeholder: boolean;
  // Percentages relative to an unrotated shell; tune here for a replacement asset.
  screen: { left: string; top: string; width: string; height: string };
  frames: readonly [CameraFrame, ...CameraFrame[]];
};

export const cameraAssets: CameraAssets = {
  // Realistic asset slot: /media/camera/camera-back.webp (not supplied yet).
  // Keep this fallback until that transparent photograph exists; see the asset README.
  shell: "/media/camera/shell-placeholder.svg",
  width: 600,
  height: 390,
  placeholder: true,
  screen: { left: "7.5%", top: "13%", width: "65%", height: "73%" },
  frames: [
    { src: "/media/camera/lcd-01.svg", alt: "Temporary LCD frame 1: abstract light study" },
    { src: "/media/camera/lcd-02.svg", alt: "Temporary LCD frame 2: abstract shadow study" },
    { src: "/media/camera/lcd-03.svg", alt: "Temporary LCD frame 3: abstract composition study" },
    { src: "/media/camera/lcd-04.svg", alt: "Temporary LCD frame 4: abstract form study" },
    { src: "/media/camera/lcd-05.svg", alt: "Temporary LCD frame 5: abstract texture study" },
  ],
};
