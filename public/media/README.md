# Portfolio media — Phase 2 rough draft

The only supplied photographic object currently used is `camera/camera-back.png`. Other media slots deliberately show IMAGE TO COME or VIDEO TO COME. Reference screenshots are not portfolio assets.

Suggested asset locations:

- `projects/monti-institute/`: homepage, services, providers, memberships, mobile, brand details, typography, imagery.
- `projects/sassy-alchemy/`: web captures, studio images, mobile, brand details.
- `projects/dinner-series/`: opening photograph, table, food detail, atmosphere, closing image.
- `editorial/`: Point of View windows, IMAGE sequence, candid About portrait.
- `talent/`: headshots, Lake Money stills, reel, clips, portrait/full-body/editorial/lifestyle images, on-camera vertical videos.

Add only actual supplied/approved work. Configure paths and alt text in `src/content/projects.ts`, `media.ts`, and `talent.ts`. Keep `src: null` until a file exists. For video, set `kind: "video"`, a real source path, descriptive alt text, and a WebVTT `captions` path when speech needs captions. Videos use native controls and do not autoplay.

The camera LCD has its own five slots in `src/content/hero.ts`; see `camera/README.md` for perspective registration.
