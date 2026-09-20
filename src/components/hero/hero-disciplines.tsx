import { heroContent } from "@/content/hero";
import styles from "./hero.module.css";

export function HeroDisciplines() {
  return <ul className={styles.disciplines}>{heroContent.disciplines.map((discipline) => (
    <li key={discipline} data-discipline><span aria-hidden="true">+</span> {discipline}</li>
  ))}</ul>;
}
