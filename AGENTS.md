# Project constraints

These requirements come from the repository owner. Keep them in place unless the owner explicitly approves a change.

## Git workflow

Work only inside this existing repository. Do not create a second project folder or nested repository. Do not commit, push, create branches or pull requests, initialize Git, change remotes, or publish through GitHub. Leave all changes uncommitted locally for the owner to review, commit, and push using GitKraken.

## Locked stack

- Next.js, React, TypeScript, and the Next.js App Router.
- CSS Modules and/or organized global CSS, with CSS custom properties for design tokens.
- GSAP, GSAP ScrollTrigger, and `@gsap/react` for animation.
- `next/image` for optimized imagery and `next/font` for typography where appropriate.
- A completely custom visual system. Do not install or use Tailwind CSS or UI component libraries such as Material UI, Bootstrap, Chakra, or shadcn.
- Keep dependencies intentionally minimal. Additional animation libraries require a specific technical need, an explanation, and explicit owner approval before introducing them. Apply the same approval requirement to other changes to the locked stack.
- Do not add unnecessary application-state libraries, databases, authentication, CMS platforms, or backend infrastructure.

## Architecture and interaction

This is an editorial creative portfolio. Keep route files focused on composing small sections. Put section-specific components and CSS in their own modules; keep shared layout primitives, motion utilities, tokens, and editable content centralized in their existing folders. Use Server Components by default and narrow Client Component boundaries for browser interactions.

Future scroll-linked animation, parallax, masking, typography transitions, interactive imagery, custom cursors, expanding-circle page transitions, and light/dark section transitions should use GSAP/ScrollTrigger and performant CSS transforms wherever practical. Prefer transform and opacity animation. Avoid premature effect frameworks or speculative dependencies for the possible floating-camera 3D interaction; evaluate its requirements when requested.

Use the shared `src/lib/gsap.ts` registration and scoped `useGSAP` lifecycles. Clean up timelines, ScrollTriggers, media contexts, and event listeners. Support `prefers-reduced-motion`, including preference changes, and keep essential content and navigation usable without animation. Keep global interaction controllers separate from section components and add them only when the corresponding feature is requested.

Do not build the portfolio design or future effects until requested. Retain the minimal temporary page for now.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
