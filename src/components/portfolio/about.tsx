import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import { homeMedia } from "@/content/media";
import { MediaSlot } from "./media-slot";
import { SectionLabel } from "./section-label";
import styles from "./portfolio.module.css";

export function About() {
  const copy = portfolioContent.about;
  return <section className={styles.about} aria-labelledby="about-title">
    <SectionLabel number="005">ABOUT</SectionLabel>
    <h2 id="about-title" className={styles.aboutTitle}>ABOUT<span>{copy.name}</span></h2>
    <div className={styles.aboutLayout}>
      <MediaSlot className={styles.aboutPortrait} media={homeMedia.portrait} />
      <div className={styles.aboutCopy}><p className={styles.positioning}>{copy.positioning}</p><p>{copy.description}</p><Link className={styles.textLink} href="/talent">Also in front of the camera <span aria-hidden="true">↗</span></Link></div>
    </div>
    <div className={styles.aboutGroups}>
      {copy.groups.map((group) => <div key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
      <div><h3>TOOLS{!copy.tools.confirmed && <small>TO CONFIRM</small>}</h3><ul>{copy.tools.items.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
    </div>
  </section>;
}
