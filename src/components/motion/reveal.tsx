"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Optional enhancement: content is visible before JS and when motion is reduced. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(scope.current, {
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: scope.current, start: "top 90%", once: true },
      });
    });

    // Revert transforms and dispose of triggers on unmount or preference changes.
    return () => media.revert();
  }, { scope });

  return <div ref={scope} className={className}>{children}</div>;
}
