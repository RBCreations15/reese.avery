import Link from "next/link";
import { projects } from "@/content/projects";
import { MediaSlot } from "@/components/portfolio/media-slot";
import styles from "./work.module.css";

export function ProjectIndex({ category }: { category?: string }) {
  return <div className={styles.projectList}>{projects.filter((project) => !category || project.category === category).map((project) => (
    <Link className={styles.projectRow} key={project.slug} href={`/work/${project.slug}`}>
      <span className={styles.number}>{project.number}</span>
      <div className={styles.projectName}><h3>{project.name}</h3><p>{project.disciplines.join(" / ")}</p></div>
      <span className={styles.year}>{project.year ?? "YEAR TBC"}</span>
      <div className={styles.preview}><MediaSlot media={project.cover} sizes="(max-width: 700px) 90vw, 240px" /></div>
      <span className={styles.arrow} aria-hidden="true">↗</span>
    </Link>
  ))}</div>;
}
