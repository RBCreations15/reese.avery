import { Hero } from "@/components/hero/hero";
import styles from "./transition.module.css";
import { PointOfView } from "@/components/portfolio/point-of-view";
import { Process } from "@/components/portfolio/process";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { ImageSection } from "@/components/portfolio/image-section";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <>
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <PointOfView />
      <Process />
      <SelectedWork />
      <ImageSection />
      <About />
      <Contact />
    </main>
    <div id="camera-flash" className={styles.flash} aria-hidden="true" />
    </>
  );
}
