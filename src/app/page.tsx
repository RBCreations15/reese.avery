import { Hero } from "@/components/hero/hero";
import styles from "./transition.module.css";

export default function Home() {
  return (
    <>
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <section id="next" tabIndex={-1} className={styles.transition} aria-labelledby="next-label">
        <h2 id="next-label">NEXT — SELECTED WORK</h2>
      </section>
    </main>
    <div id="camera-flash" className={styles.flash} aria-hidden="true" />
    </>
  );
}
