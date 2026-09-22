"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cameraAssets } from "@/content/hero";
import { gsap, useGSAP } from "@/lib/gsap";
import styles from "./camera-object.module.css";
import { CameraScreen } from "./camera-screen";

export function CameraObject() {
  const scope = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const lastFlash = useRef(0);
  const [index, setIndex] = useState(0);
  const frame = cameraAssets.frames[index];
  const total = cameraAssets.frames.length;
  const count = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const { contextSafe } = useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (min-width: 701px) and (prefers-reduced-motion: no-preference)", () => {
      const element = button.current;
      if (!element) return;
      const options = { duration: 0.65, ease: "power3.out" };
      const x = gsap.quickTo(element, "x", options);
      const y = gsap.quickTo(element, "y", options);
      const rotateX = gsap.quickTo(element, "rotationX", options);
      const rotateY = gsap.quickTo(element, "rotationY", options);
      let bounds: DOMRect;
      const enter = () => { bounds = element.getBoundingClientRect(); };
      const move = (event: PointerEvent) => {
        if (!bounds) return;
        const horizontal = gsap.utils.clamp(-0.5, 0.5, (event.clientX - bounds.left) / bounds.width - 0.5);
        const vertical = gsap.utils.clamp(-0.5, 0.5, (event.clientY - bounds.top) / bounds.height - 0.5);
        x(horizontal * 8);
        y(vertical * 6 - 4);
        rotateX(-vertical * 6);
        rotateY(horizontal * 8);
      };
      const leave = () => { x(0); y(0); rotateX(0); rotateY(0); };
      element.addEventListener("pointerenter", enter);
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      element.addEventListener("blur", leave);
      return () => {
        element.removeEventListener("pointerenter", enter);
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
        element.removeEventListener("blur", leave);
      };
    });
    media.add("(prefers-reduced-motion: reduce)", () => {
      gsap.killTweensOf("#camera-flash");
      gsap.set("#camera-flash", { opacity: 0 });
    });
    return () => media.revert();
  }, { scope });

  const advance = () => {
    setIndex((current) => (current + 1) % total);
    // Rate-limit the warm wash, including rapid keyboard/touch activation.
    const now = performance.now();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && now - lastFlash.current > 1000) {
      lastFlash.current = now;
      contextSafe(() => {
        gsap.timeline().to("#camera-flash", { opacity: 0.28, duration: 0.055, overwrite: true })
          .to("#camera-flash", { opacity: 0, duration: 0.24, ease: "power2.out" });
      })();
    }
  };

  return (
    <figure className={styles.figure} ref={scope}>
      <div className={styles.perspective}>
        <button ref={button} className={styles.camera} type="button" onClick={advance}
          aria-label="Advance camera to next image">
          <Image className={styles.shell} src={cameraAssets.shell} alt="" width={cameraAssets.width} height={cameraAssets.height}
            sizes="(max-width: 700px) 100vw, (max-width: 1600px) 29vw, 456px" preload
            style={{
              width: `${cameraAssets.width / cameraAssets.viewBox[2] * 100}%`,
              left: `${-cameraAssets.viewBox[0] / cameraAssets.viewBox[2] * 100}%`,
              top: `${-cameraAssets.viewBox[1] / cameraAssets.viewBox[3] * 100}%`,
            }} />
          <CameraScreen index={index} count={count} />
        </button>
      </div>
      <div className={styles.shadow} aria-hidden="true" />
      <span role="status" aria-live="polite" aria-atomic="true" className="sr-only">Image {index + 1} of {total}. {frame.alt}</span>
    </figure>
  );
}
