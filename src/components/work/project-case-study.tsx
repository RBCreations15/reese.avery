import Link from "next/link";
import type { Project } from "@/content/projects";
import { Navigation } from "@/components/navigation/navigation";
import { MediaSlot } from "@/components/portfolio/media-slot";
import { SectionMotion } from "@/components/portfolio/section-motion";
import styles from "./project-case-study.module.css";

export function ProjectCaseStudy({ project, next }: { project: Project; next: Project }) {
  return <div className={`${styles.world} ${styles[project.theme]}`}>
    <Navigation />
    <main id="main-content" tabIndex={-1}>
      <header className={styles.projectHeader}>
        <div className={styles.topline}><Link href="/work">← WORK INDEX</Link><span>PROJECT {project.number} / CASE STUDY DRAFT</span></div>
        <h1>{project.name}</h1>
        <div className={styles.metadata}><p>{project.disciplines.join(" / ")}</p><span>{project.year ?? "YEAR TO CONFIRM"}</span></div>
      </header>
      <SectionMotion>
        <div className={styles.cover} data-image-reveal><MediaSlot media={project.cover} sizes="100vw" /></div>
        <section className={styles.context} aria-labelledby="context-title"><h2 id="context-title">THE CONTEXT</h2><p>{project.context}</p></section>
        <div className={styles.thinking}>
          <section aria-labelledby="idea-title"><h2 id="idea-title">THE IDEA</h2><p>{project.idea}</p></section>
          <section aria-labelledby="direction-title"><h2 id="direction-title">THE DIRECTION</h2><p>{project.direction}</p></section>
        </div>
        <section className={styles.system} aria-labelledby="system-title">
          <div><h2 id="system-title">{project.theme === "dinner" ? "A STUDY IN ATMOSPHERE" : "THE VISUAL WORLD"}</h2><p>DIRECTION STUDY / FINAL MEDIA TO COME</p></div>
          <div className={styles.palette}>{project.palette.map((swatch) => <div key={swatch.name}><i style={{ backgroundColor: swatch.color }} /><span>{swatch.name}</span></div>)}</div>
        </section>
        <div className={styles.gallery}>{project.gallery.map((media) => <figure key={media.id} data-image-drift><div data-image-reveal><MediaSlot media={media} /></div><figcaption>{media.id} / {media.label}</figcaption></figure>)}</div>
        <section className={styles.experience} aria-labelledby="experience-title"><h2 id="experience-title">THE FINAL EXPERIENCE</h2><p>{project.experience}</p><small>FINAL ASSETS PENDING · {project.credits ?? "CREDITS TO CONFIRM"}</small></section>
      </SectionMotion>
      <Link className={styles.nextProject} href={`/work/${next.slug}`}><span>NEXT PROJECT / {next.number}</span><strong>{next.name}</strong><span aria-hidden="true">↗</span></Link>
    </main>
  </div>;
}
