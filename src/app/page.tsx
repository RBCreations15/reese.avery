import { Container } from "@/components/layout/container";
import { siteContent } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.main}>
      <Container>
        <h1 className={styles.title}>{siteContent.title}</h1>
        <p className={styles.description}>{siteContent.placeholder}</p>
      </Container>
    </main>
  );
}
