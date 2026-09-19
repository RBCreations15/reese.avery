# Reese Avery

Minimal Next.js App Router portfolio foundation with React, TypeScript, CSS modules, and GSAP. The temporary page intentionally contains only the name and readiness message.

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

- `src/app/`: root layout, metadata, global styles, and minimal temporary page.
- `src/content/site.ts`: editable name, page copy, and metadata.
- `src/styles/tokens.css`: shared colors, spacing, typography, and layout tokens; these are neutral defaults for future design work.
- `src/components/layout/`: responsive `Container` and semantic `Section` primitives. Give each section a heading whose ID matches its required `aria-labelledby` prop.
- `src/components/motion/reveal.tsx`: optional client-side scroll enhancement for future sections; not used on the temporary page.
- `src/lib/gsap.ts`: shared GSAP, ScrollTrigger, and `useGSAP` registration for client components.
- `public/images/` and `public/videos/`: static assets, served at `/images/...` and `/videos/...`.

Keep page content and layout as Server Components by default; isolate browser interactions in small Client Components. Import animation tools from `@/lib/gsap`, scope animations with `useGSAP`, and return cleanup for any media contexts, listeners, or other resources. The reusable `Reveal` demonstrates scoped ScrollTrigger cleanup and responds to live `prefers-reduced-motion` changes. Its content stays visible without JavaScript, and reduced-motion users receive no reveal animation.

Global accessibility foundations include a keyboard-visible skip link, focus indicators, language metadata, responsive media, and reduced-motion CSS. Future images need meaningful alt text (or empty alt text when decorative); videos need appropriate captions and motion controls. Use `next/image` for portfolio imagery where appropriate.

Dependency resolution is recorded in `pnpm-lock.yaml`. TypeScript 5.9 and ESLint 9 keep the Next.js lint plugins within their declared peer ranges. ESLint 9 is deprecated upstream; upgrade when the bundled import, React, and accessibility plugins support ESLint 10. `pnpm-workspace.yaml` explicitly permits the native dependency build scripts used by Next.js and its tooling. Generated output and local environment files are ignored by Git. The existing `.codex` directory is local workspace state and was left untouched.

No deployment or Git publishing workflow is configured. Review, commit, and push changes using GitKraken when ready.
