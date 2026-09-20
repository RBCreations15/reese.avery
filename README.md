# Reese Avery

Phase 1 of Reese Avery's editorial portfolio: a responsive homepage hero, global visual system, and a blank scroll-testing area. Built with Next.js App Router, React, TypeScript, CSS Modules, and GSAP. No later portfolio sections are implemented.

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

- `src/app/`: root layout, metadata, global styles, hero composition, and blank transition area.
- `src/content/site.ts`: editable name, page copy, and metadata.
- `src/content/hero.ts`: exact editorial copy, disciplines, navigation placeholders, and all camera asset paths and screen geometry.
- `src/styles/tokens.css`: warm ivory/near-black palette, subtle grid, shared spacing, type, and layout tokens.
- `src/styles/fonts.ts` and `src/styles/fonts/`: self-hosted fonts through `next/font/local`, with original SIL OFL licenses.
- `src/components/hero/`: modular hero, wordmark, disciplines, scroll indicator, and scoped entrance/parallax controller.
- `src/components/editorial/` and `src/components/navigation/`: grid and header/navigation.
- `src/components/camera/`: keyboard/touch-accessible camera, five-frame cycling, pointer tilt, and restrained viewport flash.
- `src/components/layout/`: responsive `Container` and semantic `Section` primitives. Give each section a heading whose ID matches its required `aria-labelledby` prop.
- `src/components/motion/reveal.tsx`: optional client-side scroll enhancement for future sections.
- `src/lib/gsap.ts`: shared GSAP, ScrollTrigger, and `useGSAP` registration for client components.
- `public/images/` and `public/videos/`: static assets, served at `/images/...` and `/videos/...`.
- `public/media/camera/`: explicitly temporary camera/LCD SVGs and a documented realistic camera asset slot. Camera replacement instructions are in `public/media/camera/README.md`.

## Phase 1 behavior and remaining assets

The primary reference is the Reese Avery mockup. The wordmark uses live text: [Sour Gummy](https://github.com/google/fonts/tree/main/ofl/sourgummy) at weight 400 with individually rotated e's approximates the rounded reference, while [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope) supplies the contrasting grotesk and manifesto. The exact reference font has not been identified; its unusual e contours are not reproduced exactly. Both included fonts use the SIL Open Font License. No screenshot is used as the logo.

The initial sequence resolves grid/navigation, reveals the masthead with a mask, introduces disciplines and copy, then the camera. Desktop ScrollTrigger motion separates the masthead and camera slightly. Camera tilt uses GSAP quick setters without React mousemove state. Click, tap, Enter, and Space cycle five frames; a short, low-opacity warm wash is limited to once per second. All motion contexts/listeners are cleaned up. Reduced-motion preferences, including live changes, remove entrance animation, pointer tilt, scroll motion, and flash while keeping frame cycling. Mobile uses a two-line masthead and a single-column editorial composition without desktop parallax or edge imagery. A custom cursor is intentionally deferred.

Navigation links currently lead to the same blank transition area and update its small label to the requested future section. They do not imply that Work, Talent, or Contact pages already exist. Replace those destinations in the centralized navigation data when those sections are authorized.

Still needed: an isolated, back-view silver camera asset and five photographs of Reese with alt text (and optional real date metadata) for its LCD. The side image cards have been removed without replacement. Current assets are clearly labeled geometric placeholders; they are not intended to match the photographic realism of the mockup. Do not use stock/generated portraits as Reese. Replace paths and geometry in `src/content/hero.ts` without changing components.

Keep page content and layout as Server Components by default; isolate browser interactions in small Client Components. Import animation tools from `@/lib/gsap`, scope animations with `useGSAP`, and return cleanup for any media contexts, listeners, or other resources. The reusable `Reveal` demonstrates scoped ScrollTrigger cleanup and responds to live `prefers-reduced-motion` changes. Its content stays visible without JavaScript, and reduced-motion users receive no reveal animation.

Global accessibility foundations include a keyboard-visible skip link, focus indicators, language metadata, responsive media, and reduced-motion CSS. Future images need meaningful alt text (or empty alt text when decorative); videos need appropriate captions and motion controls. Use `next/image` for portfolio imagery where appropriate.

Dependency resolution is recorded in `pnpm-lock.yaml`. TypeScript 5.9 and ESLint 9 keep the Next.js lint plugins within their declared peer ranges. ESLint 9 is deprecated upstream; upgrade when the bundled import, React, and accessibility plugins support ESLint 10. `pnpm-workspace.yaml` explicitly permits the native dependency build scripts used by Next.js and its tooling. Generated output and local environment files are ignored by Git. The existing `.codex` directory is local workspace state and was left untouched.

No deployment or Git publishing workflow is configured. Review, commit, and push changes using GitKraken when ready.
