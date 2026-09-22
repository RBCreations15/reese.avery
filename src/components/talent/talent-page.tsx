import { talentContent } from "@/content/talent";
import { Navigation } from "@/components/navigation/navigation";
import { Contact } from "@/components/portfolio/contact";
import { MediaSlot } from "@/components/portfolio/media-slot";
import { SectionMotion } from "@/components/portfolio/section-motion";
import styles from "./talent.module.css";

export function TalentPortfolio() {
  const content = talentContent;
  return <><Navigation /><main id="main-content" tabIndex={-1}>
    <header className={styles.header}><p>TALENT / REESE AVERY</p><h1>{content.heading}</h1><p>{content.disciplines}</p></header>
    <SectionMotion>
      <section className={styles.acting} aria-labelledby="acting-title">
        <div className={styles.sectionHeading}><span>01</span><h2 id="acting-title">ACTING</h2></div>
        <div className={styles.credit}><h3>{content.credit.title}</h3><dl><div><dt>ROLE</dt><dd>{content.credit.role}</dd></div><div><dt>FORMAT</dt><dd>{content.credit.format}</dd></div><div><dt>YEAR</dt><dd>{content.credit.year}</dd></div></dl></div>
        <div className={styles.actingMedia}>{content.acting.map((media) => <div key={media.id} data-image-reveal><MediaSlot media={media} /></div>)}</div>
      </section>
      <section className={styles.modeling} aria-labelledby="modeling-title">
        <div className={styles.sectionHeading}><span>02</span><h2 id="modeling-title">MODELING</h2></div>
        <div className={styles.contactSheet}>{content.modeling.map((media) => <figure key={media.id} data-image-reveal><MediaSlot media={media} /><figcaption>{media.id} / {media.label}</figcaption></figure>)}</div>
        <p className={styles.mediaNote}>CONTACT SHEET / REESE IMAGERY TO COME</p>
      </section>
      <section className={styles.onCamera} aria-labelledby="on-camera-title">
        <div className={styles.sectionHeading}><span>03</span><h2 id="on-camera-title">ON CAMERA<span> / UGC</span></h2></div>
        <p className={styles.mediaNote}>MEDIA SLOTS / NO BRAND PARTNERSHIPS PRESENTED</p>
        <div className={styles.videoGrid}>{content.onCamera.map((media) => <div key={media.id} data-image-reveal><MediaSlot media={media} /></div>)}</div>
      </section>
    </SectionMotion>
    <Contact />
  </main></>;
}
