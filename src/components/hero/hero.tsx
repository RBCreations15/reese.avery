import { EditorialGrid } from "@/components/editorial/editorial-grid";
import { Navigation } from "@/components/navigation/navigation";
import { CameraObject } from "@/components/camera/camera-object";
import { heroContent } from "@/content/hero";
import { HeroMotion } from "./hero-motion";
import { HeroWordmark } from "./hero-wordmark";
import { HeroDisciplines } from "./hero-disciplines";
import { ScrollIndicator } from "./scroll-indicator";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <HeroMotion>
      <EditorialGrid />
      <Navigation />
      <div className={styles.identity}>
        <HeroWordmark />
        <HeroDisciplines />
      </div>
      <span className={styles.index} aria-hidden="true" data-annotation>01</span>
      <div className={styles.editorial}>
        <p className={styles.introduction} data-copy>{heroContent.introduction.map((line) => <span key={line}>{line} </span>)}</p>
        <div className={styles.cameraPosition} data-camera-parallax><div data-camera-entry><CameraObject /></div></div>
        <div className={styles.statement} data-copy>
          <p>{heroContent.statement.map((line) => <span key={line}>{line} </span>)}</p>
          <p className={styles.manifesto}>{heroContent.manifesto.map((line) => <span key={line}>{line} </span>)}</p>
        </div>
      </div>
      <div className={styles.annotations} data-annotation><ScrollIndicator /><span>{heroContent.established}</span></div>
    </HeroMotion>
  );
}
