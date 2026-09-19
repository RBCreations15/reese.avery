import type { ComponentPropsWithoutRef } from "react";
import styles from "./layout.module.css";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={[styles.container, className].filter(Boolean).join(" ")} {...props} />;
}
