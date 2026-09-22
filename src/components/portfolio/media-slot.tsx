import Image from "next/image";
import type { MediaAsset } from "@/content/media";
import styles from "./media-slot.module.css";

export function MediaSlot({ media, className = "", sizes = "(max-width: 700px) 90vw, 50vw" }: { media: MediaAsset; className?: string; sizes?: string }) {
  return (
    <div className={`${styles.media} ${styles[media.tone]} ${className}`} data-media-slot={media.id}>
      {media.src ? media.kind === "video" ? (
        <video controls preload="metadata" playsInline aria-label={media.alt}>
          <source src={media.src} />
          {media.captions && <track kind="captions" src={media.captions} srcLang="en" label="English" default />}
        </video>
      ) : <Image src={media.src} alt={media.alt} fill sizes={sizes} /> : (
        <div className={styles.placeholder} role="img" aria-label={`${media.label}. ${media.kind === "video" ? "Video" : "Image"} placeholder; original media pending.`}>
          <span className={styles.slotTop}>RA / {media.id}</span>
          <span className={styles.registration} aria-hidden="true">+</span>
          <span className={styles.slotBottom}><span>{media.label}</span><small>{media.kind === "video" ? "VIDEO" : "IMAGE"} TO COME</small></span>
        </div>
      )}
    </div>
  );
}
