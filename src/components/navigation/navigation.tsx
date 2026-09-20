"use client";

import { heroContent } from "@/content/hero";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.header} data-nav>
      <a className={styles.brand} href="#main-content">REESE AVERY</a>
      <nav aria-label="Main navigation" className={styles.nav}>
        {heroContent.navigation.map(({ label, href, destination }) => (
          <a key={label} href={href} title={`${label} — planned section`} onClick={() => {
            // All destinations intentionally share the blank Phase 1 preview area.
            const target = document.getElementById("next-label");
            if (target) target.textContent = `NEXT — ${destination}`;
          }}>
            <span aria-hidden="true">(</span> {label} <span aria-hidden="true">)</span>
          </a>
        ))}
      </nav>
      <p className={styles.availability}><span aria-hidden="true">✳</span>{heroContent.availability}</p>
    </header>
  );
}
