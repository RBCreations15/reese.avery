import Link from "next/link";
import { workCategories, futureCategories } from "@/content/projects";
import { portfolioContent } from "@/content/portfolio";
import { ProjectIndex } from "@/components/work/project-index";
import { SectionLabel } from "./section-label";
import { SectionMotion } from "./section-motion";
import styles from "./portfolio.module.css";

export function SelectedWork() {
  return (
    <section className={styles.selected} aria-labelledby="selected-title">
      <SectionLabel number="003">SELECTED WORK</SectionLabel>
      <SectionMotion>
        <div className={styles.selectedIntro}><h2 id="selected-title" data-line-reveal>{portfolioContent.selected.heading}</h2><p>{portfolioContent.selected.note}</p></div>
        {workCategories.map((category) => <div key={category.number} className={styles.workCategory}>
          <h3><span>[{category.number}]</span> {category.name}</h3>
          <ProjectIndex category={category.category} />
        </div>)}
        <div className={styles.future}>{futureCategories.map((name) => <p key={name}>{name}<span>FUTURE EXPLORATION / NO WORK ADDED</span></p>)}</div>
        <Link className={styles.textLink} href="/work">View the full work index <span aria-hidden="true">↗</span></Link>
      </SectionMotion>
    </section>
  );
}
