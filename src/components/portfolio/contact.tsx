import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import { SectionLabel } from "./section-label";
import styles from "./portfolio.module.css";

export function Contact() {
  const copy = portfolioContent.contact;
  return <section id="contact" tabIndex={-1} className={styles.contact} aria-labelledby="contact-title">
    <SectionLabel number="006">CONTACT</SectionLabel>
    <h2 id="contact-title">{copy.heading}</h2>
    <p className={styles.contactLine}>{copy.line}</p>
    <div className={styles.contactLinks}>{copy.links.map((link) => link.href ? <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a> : <span key={link.label}>{link.label}<small>LINK TO COME</small></span>)}</div>
    <div className={styles.signoff}><span>REESE AVERY / EST. 2025</span><Link href="/#main-content">BACK TO TOP ↑</Link></div>
  </section>;
}
