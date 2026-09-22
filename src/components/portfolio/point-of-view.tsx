import { portfolioContent } from "@/content/portfolio";
import { homeMedia } from "@/content/media";
import { MediaSlot } from "./media-slot";
import { SectionLabel } from "./section-label";
import { SectionMotion } from "./section-motion";
import styles from "./portfolio.module.css";

export function PointOfView() {
  const copy = portfolioContent.pointOfView;
  return (
    <section id="next" className={styles.pov} aria-labelledby="pov-title" tabIndex={-1}>
      <SectionLabel number="001">POINT OF VIEW</SectionLabel>
      <SectionMotion>
        <h2 id="pov-title" className="sr-only">{copy.opening} {copy.middle} {copy.endingBeforeImage} {copy.endingAfterImage} {copy.closingStart} + {copy.closingEnd}</h2>
        <div className={styles.sentence} aria-hidden="true">
          <div data-line-reveal>{copy.opening} <span className={styles.inlineImage} data-image-drift><MediaSlot media={homeMedia.pointOfView[0]} /></span></div>
          <div data-line-reveal>{copy.middle}</div>
          <div data-line-reveal>{copy.endingBeforeImage} <span className={styles.inlineImage} data-image-drift><MediaSlot media={homeMedia.pointOfView[1]} /></span> {copy.endingAfterImage}</div>
          <div data-line-reveal>{copy.closingStart} <span className={styles.plus}>+</span> {copy.closingEnd}</div>
        </div>
        <p className={styles.povNote}>{copy.note}</p>
      </SectionMotion>
    </section>
  );
}
