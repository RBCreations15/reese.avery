# Reese Avery

Phase 2 rough draft of Reese Avery's complete editorial portfolio. The approved homepage hero is preserved; the rest of the experience explores creative direction, digital experiences, and visual storytelling through distinct editorial sections and project worlds. Built with the existing Next.js App Router, React, TypeScript, CSS Modules, and GSAP stack; no additional dependencies.

## Locked stack and architecture

Use Next.js App Router, React, TypeScript, CSS Modules/organized global CSS, CSS custom properties, GSAP, ScrollTrigger, and `@gsap/react`. Use `next/image` for optimized imagery and `next/font` for typography where appropriate. Stack changes require explicit owner approval.

Do not use Tailwind or a UI component library. Keep dependencies minimal; additional animation libraries require a demonstrated technical need, an explanation, and approval. This editorial portfolio does not need application-state libraries, databases, authentication, a CMS, or backend infrastructure.

Keep route components focused on composing independent sections, with section-specific CSS and small client-side interaction components. Share tokens, content, layout primitives, and animation utilities through the existing folders. Add future interaction controllers only as their features are requested. Prefer GSAP/ScrollTrigger with transform and opacity, scoped cleanup, and reduced-motion alternatives. The project rules are recorded in `AGENTS.md` for future contributors.

## Local development

Use Node.js 24 LTS (also recorded in `.nvmrc`) and pnpm 11.19.0. With Node/npm installed, install the package manager with `npm install --global pnpm@11.19.0` if needed.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. Stop the server with Ctrl+C.

On the current Mac, Node and pnpm are available in the Codex runtime but are not on the shell PATH. To use that existing runtime in a terminal session:

```sh
export PATH="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback:$PATH"
pnpm dev
```

## Validation and production

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

Type checking generates Next.js route types before running TypeScript, including on a fresh checkout. Lint runs separately from the production build. `pnpm start` serves the completed production build. No environment variables or external services are required.

## Structure

- `src/app/`: root layout, metadata, global styles, homepage composition, Work index, three static project routes, Talent, and a 404 page.
- `src/content/site.ts`: editable name, page copy, and metadata.
- `src/content/hero.ts`: exact editorial copy, disciplines, navigation destinations, and all camera asset paths and screen geometry.
- `src/styles/tokens.css`: warm ivory/near-black palette, subtle grid, shared spacing, type, and layout tokens.
- `src/styles/fonts.ts` and `src/styles/fonts/`: self-hosted fonts through `next/font/local`, with original SIL OFL licenses.
- `src/components/hero/`: modular hero, wordmark, disciplines, scroll indicator, and scoped entrance/parallax controller.
- `src/components/editorial/` and `src/components/navigation/`: grid and header/navigation.
- `src/components/camera/`: keyboard/touch-accessible camera, five-frame cycling, pointer tilt, and restrained viewport flash.
- `src/components/layout/`: responsive `Container` and semantic `Section` primitives. Give each section a heading whose ID matches its required `aria-labelledby` prop.
- `src/components/motion/reveal.tsx`: optional client-side scroll enhancement for future sections.
- `src/lib/gsap.ts`: shared GSAP, ScrollTrigger, and `useGSAP` registration for client components.
- `public/images/` and `public/videos/`: static assets, served at `/images/...` and `/videos/...`.
- `public/media/camera/`: the supplied realistic PNG shell and five replaceable LCD placeholder SVGs. Camera replacement instructions are in `public/media/camera/README.md`.

## Approved hero and camera

The primary reference is the Reese Avery mockup. The wordmark uses live text: [Sour Gummy](https://github.com/google/fonts/tree/main/ofl/sourgummy) at weight 400 with individually rotated e's approximates the rounded reference, while [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope) supplies the contrasting grotesk and manifesto. The exact reference font has not been identified; its unusual e contours are not reproduced exactly. Both included fonts use the SIL Open Font License. No screenshot is used as the logo.

The initial sequence resolves grid/navigation, reveals the masthead with a mask, introduces disciplines and copy, then the camera. Desktop ScrollTrigger motion separates the masthead and camera slightly. Camera tilt uses GSAP quick setters without React mousemove state. Click, tap, Enter, and Space cycle five frames; a short, low-opacity warm wash is limited to once per second. All motion contexts/listeners are cleaned up. Reduced-motion preferences, including live changes, remove entrance animation, pointer tilt, scroll motion, and flash while keeping frame cycling. Mobile uses a two-line masthead and a single-column editorial composition without desktop parallax or edge imagery. A custom cursor is intentionally deferred.

Navigation now connects to `/work`, `/talent`, and `/#contact`. The hero scroll indicator still targets `#next`, now the Point of View section. No hero geometry, type, camera code, or motion was changed for Phase 2.

The supplied realistic silver camera PNG is now the rendered shell, with perspective-matched LCD content and counter. Still needed: five photographs of Reese with alt text (and optional real date metadata) for its LCD. The side image cards have been removed without replacement. The LCD frames remain geometric placeholders. Do not use stock/generated portraits as Reese. Replace paths and geometry in `src/content/hero.ts` without changing components.

Keep page content and layout as Server Components by default; isolate browser interactions in small Client Components. Import animation tools from `@/lib/gsap`, scope animations with `useGSAP`, and return cleanup for any media contexts, listeners, or other resources. The reusable `Reveal` demonstrates scoped ScrollTrigger cleanup and responds to live `prefers-reduced-motion` changes. Its content stays visible without JavaScript, and reduced-motion users receive no reveal animation.

Global accessibility foundations include a keyboard-visible skip link, focus indicators, language metadata, responsive media, and reduced-motion CSS. Future images need meaningful alt text (or empty alt text when decorative); videos need appropriate captions and motion controls. Use `next/image` for portfolio imagery where appropriate.

Dependency resolution is recorded in `pnpm-lock.yaml`. TypeScript 5.9 and ESLint 9 keep the Next.js lint plugins within their declared peer ranges. ESLint 9 is deprecated upstream; upgrade when the bundled import, React, and accessibility plugins support ESLint 10. `pnpm-workspace.yaml` explicitly permits the native dependency build scripts used by Next.js and its tooling. Generated output and local environment files are ignored by Git. The existing `.codex` directory is local workspace state and was left untouched.

No deployment or Git publishing workflow is configured. Review, commit, and push changes using GitKraken when ready.

## Phase 2 routes and editable content

- `/`: approved hero → RA—001 Point of View → RA—002 How I Work → RA—003 Selected Work → RA—004 Image → RA—005 About → RA—006 Contact.
- `/work`: editorial index linking the three known projects.
- `/work/monti-institute`: navy/gold medical + aesthetics direction.
- `/work/sassy-alchemy`: sage/clay/forest wellness direction.
- `/work/dinner-series`: image-led warm-black/cream restaurant direction.
- `/talent`: Acting, Modeling, and On Camera / UGC. The only acting credit shown is Lake Money / Camille / Independent Film / 2026.

Edit homepage statements, process stages, About groups, and contact destinations in `src/content/portfolio.ts`. Contact URLs are `null` until confirmed and render as labeled text rather than invented or broken links. Once a real `mailto:` or HTTPS destination is set, it becomes a working link. Tools are listed as TO CONFIRM because the brief proposes Figma, Lightroom, and Canva without prior verified expertise in the repository.

Project facts, draft direction copy, palette studies, media slots, and credits live in `src/content/projects.ts`. Monti's 2026 date is supplied; Sassy and Dinner dates remain unconfirmed. Case studies are explicitly drafts, palettes are direction studies, and credits/final assets remain pending. No results, metrics, client work, representation, or partnerships were invented. Future Content + Social and Fashion + Culture categories are labeled as future exploration with no work added.

Home photography slots live in `src/content/media.ts`; Talent media and the confirmed acting credit live in `src/content/talent.ts`. Set a media object's `src` to an actual local asset path and write accurate `alt` text to replace its labeled placeholder. `MediaSlot` uses `next/image` for supplied photographs and native controls for supplied videos; a caption-track path can be supplied for video. There are no fake play buttons when a video is missing.

## Phase 2 architecture and motion

`src/components/portfolio/` contains separate homepage sections, a reusable media slot, RA section labels, and the scoped reveal controller. `src/components/work/` contains the reusable index and case-study template. `src/components/talent/` contains Talent's contact-sheet and media layouts. Routes compose these components and remain server-rendered by default.

Point of View uses horizontal text/image wipes and small image drift; How I Work uses a sticky reading position and scroll-updated stage index; Work images reveal on hover and keyboard focus, and stay visible on touch/mobile. IMAGE uses varied proportions and restrained drift. About and Contact remain still. Reduced motion removes GSAP reveals/drift and the sticky process treatment. Mobile uses a regular vertical process list and recomposed editorial layouts. No scroll hijacking, circle transition, additional state library, backend, CMS, or authentication was introduced.

The attached reference screenshots informed layout and pacing only. Their projects, photography, biographies, credits, and social accounts are not included as Reese's work. Real project captures, photography, portraits, video/reel assets, contact URLs, and final copy are the next content pass.
