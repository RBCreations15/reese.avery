"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { portfolioContent } from "@/content/portfolio";
import { SectionLabel } from "./section-label";
import styles from "./portfolio.module.css";

export function Process() {
  const scope = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const copy = portfolioContent.process;
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.selector(scope)("[data-process-stage]").forEach((element: HTMLElement, index: number) => {
        ScrollTrigger.create({ trigger: element, start: "top 60%", end: "bottom 60%", onEnter: () => setActive(index), onEnterBack: () => setActive(index) });
      });
    });
    return () => media.revert();
  }, { scope });

  return (
    <section className={styles.process} ref={scope} aria-labelledby="process-title">
      <SectionLabel number="002">HOW I WORK</SectionLabel>
      <div className={styles.processLayout}>
        <div className={styles.processSticky}>
          <h2 id="process-title">{copy.heading.map((line) => <span key={line}>{line}</span>)}</h2>
          <p>{copy.note}</p>
          <div className={styles.stageReadout} aria-hidden="true"><span>0{active + 1} / 04</span><span>{copy.stages[active].name}</span></div>
        </div>
        <ol className={styles.stages}>
          {copy.stages.map((stage, index) => (
            <li key={stage.name} data-process-stage data-active={active === index}>
              <span className={styles.stageNumber}>0{index + 1}</span>
              <h3>{stage.name}</h3>
              <p>{stage.description}</p>
              <ul>{stage.words.map((word) => <li key={word}>{word}</li>)}</ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
