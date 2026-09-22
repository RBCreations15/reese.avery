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
  // Crop and screen corners use original source-image coordinates, not CSS pixels.
  viewBox: readonly [number, number, number, number];
  screen: {
    width: number;
    height: number;
    corners: readonly [readonly [number, number], readonly [number, number], readonly [number, number], readonly [number, number]];
  };
  frames: readonly [CameraFrame, ...CameraFrame[]];
};

export const cameraAssets: CameraAssets = {
  shell: "/media/camera/camera-back.png",
  width: 1536,
  height: 1024,
  viewBox: [250, 192, 1080, 702],
  screen: {
    width: 520,
    height: 360,
    // Inner LCD, clockwise: top-left, top-right, bottom-right, bottom-left.
    corners: [[483, 338], [991, 416], [936, 772], [428, 691]],
  },
  frames: [
    { src: "/media/camera/lcd-01.svg", alt: "Temporary LCD frame 1: abstract light study" },
    { src: "/media/camera/lcd-02.svg", alt: "Temporary LCD frame 2: abstract shadow study" },
    { src: "/media/camera/lcd-03.svg", alt: "Temporary LCD frame 3: abstract composition study" },
    { src: "/media/camera/lcd-04.svg", alt: "Temporary LCD frame 4: abstract form study" },
    { src: "/media/camera/lcd-05.svg", alt: "Temporary LCD frame 5: abstract texture study" },
  ],
};
