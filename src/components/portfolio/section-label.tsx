import styles from "./portfolio.module.css";

export function SectionLabel({ number, children }: { number: string; children: string }) {
  return <p className={styles.label}><span>RA—{number}</span><span>/</span>{children}</p>;
}
