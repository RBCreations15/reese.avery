import { portfolioContent } from "@/content/portfolio";
import { homeMedia } from "@/content/media";
import { MediaSlot } from "./media-slot";
import { SectionLabel } from "./section-label";
import { SectionMotion } from "./section-motion";
import styles from "./portfolio.module.css";

export function ImageSection() {
  return (
    <section className={styles.imageSection} aria-labelledby="image-title">
      <SectionLabel number="004">IMAGE</SectionLabel>
      <SectionMotion>
        <div className={styles.imageHeading}><h2 id="image-title" data-line-reveal>{portfolioContent.image.heading}</h2><p>{portfolioContent.image.note}</p></div>
        <p className={styles.imageCategories}>{portfolioContent.image.categories.join(" / ")}</p>
        <div className={styles.imageSequence}>
          {homeMedia.image.map((media) => <figure key={media.id} data-image-drift><div data-image-reveal><MediaSlot media={media} /></div><figcaption>{media.id} — {media.label}</figcaption></figure>)}
        </div>
      </SectionMotion>
    </section>
  );
}
