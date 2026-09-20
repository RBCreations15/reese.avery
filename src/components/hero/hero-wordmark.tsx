import styles from "./hero.module.css";

export function HeroWordmark() {
  return (
    <div className={styles.wordmarkPosition} data-wordmark-parallax>
      <h1 className={styles.wordmark} aria-label="Reese Avery" data-wordmark>
        <span className={styles.reese} aria-hidden="true">
          {Array.from("reese").map((letter, index) => <span key={index} className={letter === "e" ? styles.e : undefined}>{letter}</span>)}
        </span>
        <span className={styles.avery} aria-hidden="true"><span className={styles.dot}>.</span>avery</span>
      </h1>
    </div>
  );
}
