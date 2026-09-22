import Image from "next/image";
import { cameraAssets } from "@/content/hero";
import { screenTransform } from "./screen-transform";
import styles from "./camera-object.module.css";

export function CameraScreen({ index, count }: { index: number; count: string }) {
  const { screen, viewBox, width, height, frames } = cameraAssets;
  const frame = frames[index];

  return (
    <svg className={styles.screenViewport} viewBox={viewBox.join(" ")} aria-hidden="true">
      <foreignObject width={width} height={height}>
        <div className={styles.screen} style={{
          width: screen.width,
          height: screen.height,
          transform: screenTransform(screen.corners, screen.width, screen.height),
        }}>
          <Image key={frame.src} src={frame.src} alt="" fill sizes="(max-width: 700px) 40vw, 160px" />
          <span className={styles.counter}>{count}</span>
          {frame.metadata && <span className={styles.metadata}>{frame.metadata}</span>}
        </div>
      </foreignObject>
    </svg>
  );
}
