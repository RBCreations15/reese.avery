"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function SectionMotion({ children, className }: { children: ReactNode; className?: string }) {
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(scope);
      select("[data-line-reveal]").forEach((element: HTMLElement) => {
        gsap.from(element, { clipPath: "inset(0 0 100% 0)", duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 92%", once: true } });
      });
      select("[data-image-reveal]").forEach((element: HTMLElement) => {
        gsap.from(element, { clipPath: "inset(0 100% 0 0)", duration: 1.1, ease: "power3.inOut", scrollTrigger: { trigger: element, start: "top 92%", once: true } });
      });
    }, scope);
    media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.selector(scope)("[data-image-drift]").forEach((element: HTMLElement) => {
        gsap.fromTo(element, { y: 12 }, { y: -12, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 1 } });
      });
    }, scope);
    return () => media.revert();
  }, { scope });
  return <div ref={scope} className={className}>{children}</div>;
}
