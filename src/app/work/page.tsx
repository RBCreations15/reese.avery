import type { Metadata } from "next";
import { Navigation } from "@/components/navigation/navigation";
import { ProjectIndex } from "@/components/work/project-index";
import { Contact } from "@/components/portfolio/contact";
import styles from "@/components/work/work.module.css";

export const metadata: Metadata = { title: "Selected Work", description: "Digital experiences and image-making by Reese Avery." };

export default function WorkPage() {
  return <><Navigation /><main id="main-content" tabIndex={-1}>
    <section className={styles.indexPage} aria-labelledby="work-title">
      <div className={styles.indexHeader}><h1 id="work-title">SELECTED<span>WORK</span></h1><p>Creative direction, digital experiences, and visual storytelling. Three projects. Different worlds.</p></div>
      <ProjectIndex />
      <p className={styles.indexNote}>ROUGH DRAFT / CASE STUDY COPY + MEDIA IN PROGRESS</p>
    </section>
    <Contact />
  </main></>;
}
