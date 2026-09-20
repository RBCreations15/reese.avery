"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./hero.module.css";

export function HeroMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro.from("[data-grid]", { opacity: 0, duration: 0.8 })
        .from("[data-nav]", { opacity: 0, duration: 0.6 }, 0.12)
        .from("[data-wordmark]", { clipPath: "inset(0 0 100% 0)", y: 12, duration: 1.1 }, 0.2)
        .from("[data-discipline]", { opacity: 0, x: -6, stagger: 0.09, duration: 0.55 }, 0.65)
        .from("[data-copy], [data-annotation]", { opacity: 0, duration: 0.7 }, 0.9)
        .from("[data-camera-entry]", { opacity: 0, y: 16, rotation: -3, duration: 1 }, 1.05);
    }, scope);
    media.add("(min-width: 701px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({ scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: 0.8 } })
        .to("[data-wordmark-parallax]", { y: -45, ease: "none" }, 0)
        .to("[data-camera-parallax]", { y: -80, ease: "none" }, 0);
      gsap.to("[data-scroll-line]", { scaleY: 0.45, transformOrigin: "top", duration: 1.5, repeat: 2, yoyo: true, ease: "sine.inOut" });
    }, scope);
    return () => media.revert();
  }, { scope });

  return <div ref={scope} className={styles.hero}>{children}</div>;
}
