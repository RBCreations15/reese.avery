import Link from "next/link";
import { heroContent } from "@/content/hero";
import styles from "./navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.header} data-nav>
      <Link className={styles.brand} href="/#main-content">REESE AVERY</Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        {heroContent.navigation.map(({ label, href }) => (
          <Link key={label} href={href}>
            <span aria-hidden="true">(</span> {label} <span aria-hidden="true">)</span>
          </Link>
        ))}
      </nav>
      <p className={styles.availability}><span aria-hidden="true">✳</span>{heroContent.availability}</p>
    </header>
  );
}
