# Camera shell and replaceable LCD images

`camera-back.png` is the user's original 1536 × 1024 transparent PNG, copied without raster modification. It is the rendered camera shell. The old illustrated `shell-placeholder.svg` is no longer referenced by the hero.

The camera keeps its existing 600:390 layout box, desktop `20vw` / 320px cap, mobile sizing, shadow, and interactions. A source-coordinate viewport `[250, 192, 1080, 702]` trims transparent margins in the rendered composition without stretching or editing the physical photograph. The shell uses `next/image`. Its photographed tilt is approximately nine degrees, so the CSS resting rotation is two degrees on desktop and minus one degree on mobile to retain the original overall tilt.

## LCD registration

All geometry lives in `cameraAssets` in `src/content/hero.ts`. The LCD's inner corners, in original source-image pixels and clockwise order, are:

- Top-left: `(483, 338)`
- Top-right: `(991, 416)`
- Bottom-right: `(936, 772)`
- Bottom-left: `(428, 691)`

`screen-transform.ts` maps a 520 × 360 content plane to those four corners using a projective matrix. `CameraScreen` renders that plane inside a responsive SVG viewport shared with the shell's framing. Its photograph, counter, and optional metadata all receive the same perspective transform; overflow is clipped to the LCD with subtly rounded corners. Only the LCD content is perspective-transformed; the physical shell retains its original proportions.

## Replace the five LCD images

Add five photographs of Reese here and update the five `cameraAssets.frames` entries with paths, descriptive alt text, and optional real metadata. No component changes are needed. The current `lcd-01.svg` through `lcd-05.svg` files are abstract placeholders, not photographs of Reese. The `01 / 05` counter derives from the array length.

Click, tap, Enter, or Space advances the frames. The warm viewport flash is rate-limited and disabled for reduced motion. Pointer tilt, hover lift/reset, page entrance, scroll movement, and their cleanup remain intact. There is no visible instruction caption; the button retains its accessible name and live image announcement.
