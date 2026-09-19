import type { ComponentPropsWithoutRef } from "react";
import { Container } from "./container";
import styles from "./layout.module.css";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  "aria-labelledby": string;
};

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
