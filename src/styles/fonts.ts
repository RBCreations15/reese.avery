import localFont from "next/font/local";

export const sans = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  variable: "--font-sans",
  weight: "200 800",
  display: "swap",
});

export const wordmark = localFont({
  src: "./fonts/SourGummy-Variable.ttf",
  variable: "--font-wordmark",
  weight: "100 900",
  display: "swap",
});
