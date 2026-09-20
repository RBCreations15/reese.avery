# Replaceable camera assets

All current SVGs are temporary diagrams/abstract image placeholders, not camera photographs or images of Reese.

## Realistic shell asset slot — awaiting user-supplied image

Reserved path: `public/media/camera/camera-back.webp` (transparent PNG or AVIF is also supported; update the extension in the configuration). No realistic standalone camera asset currently exists in the repository, so the interactive SVG fallback remains until that image is supplied. The supplied homepage screenshot is a visual reference, not an isolated camera asset.

Provide a high-resolution, tightly cropped, transparent rear-view photograph of a silver early-2000s point-and-shoot camera with realistic surface texture, controls, seams, and highlights. Aim for at least 1000px width. Keep the LCD approximately rectangular and facing the viewer so the separate replaceable photo layer can align with it. Avoid a baked-in portrait, screen counter, or surrounding webpage. The existing CSS supplies slight rotation and a separate soft ground shadow; avoid baking a large shadow into the asset.

When the asset arrives, set `cameraAssets.shell` to `/media/camera/camera-back.webp`, update its intrinsic dimensions and LCD percentages, and set `placeholder` to `false`. This preserves pointer tilt, hover lift/reset, click/flash, image cycling, and the counter. The five LCD frames remain separately replaceable. Do not fabricate a photographic shell using CSS.

Desktop object width is `20vw`, capped at 320px and its existing column width. The cap keeps it smaller on wide displays. Editorial columns and mobile sizing remain unchanged.

Replace the shell with a transparent PNG/WebP/AVIF of a silver compact camera viewed straight from the back. Keep the LCD visible and preferably clear. Do not bake the photograph into the shell. CSS supplies the resting rotation, so use an unrotated asset where possible.

Place five photographs of Reese here and update `cameraAssets` in `src/content/hero.ts`: shell path, intrinsic width/height, frame paths, descriptive alt text, optional metadata, and `placeholder: false`. Set the screen's left/top/width/height percentages to match the new shell. Current geometry is 600 × 390, with a 65% × 73% LCD at left 7.5%, top 13%. All replacement settings live in that data file; no component edits are needed.

Click, tap, Enter, or Space cycles all configured frames. No personal images or camera dates are invented. The screen counter derives from the frame array. The viewport wash is rate-limited and disabled for reduced motion.
