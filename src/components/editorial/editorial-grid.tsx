import styles from "./editorial-grid.module.css";

export function EditorialGrid() {
  return (
    <div className={styles.grid} aria-hidden="true" data-grid>
      {[0, 1, 2, 3, 4, 5].map((line) => <i key={line} />)}
      <span className={styles.header} />
      <span className={styles.middle} />
      <span className={styles.bottom} />
    </div>
  );
}
