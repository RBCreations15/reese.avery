import styles from "./hero.module.css";

export function ScrollIndicator() {
  return <a className={styles.scroll} href="#next"><span>SCROLL<br />TO EXPLORE</span><i aria-hidden="true" data-scroll-line /></a>;
}
