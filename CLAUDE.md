# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Use **Yarn 4 (Berry)** — not npm/pnpm/Yarn 1. `.yarnrc.yml` sets `nodeLinker: node-modules`, and `package.json` pins `packageManager`.
- **Never commit a Yarn 1 lockfile.** Vercel's default Yarn is 1.22, which cannot read a Berry lockfile and installs with `--frozen-lockfile`, so a format mismatch fails the deploy. `vercel.json` overrides the install and build commands to invoke Yarn 4 through the Corepack proxy (`corepack yarn ...`). Note that `corepack enable` alone is not enough on Vercel: its shims lose to Vercel's own Yarn 1 on `PATH`, so the proxy form is required. There is also no Yarn 4 on npm under the `yarn` name, so `npx yarn@4` is not a fallback.
- Verify changes with `yarn build` before considering work done (there are no tests; the build catches type and compile errors).
- Dev server: `yarn dev`. Lint: `yarn lint` (ESLint 9 flat config in `eslint.config.mjs`; Next 16 removed `next lint`, so the script calls `eslint` directly).

## Git & deploy

- Commit directly to `main` — no feature branches or PRs.
- **Pushing to `main` auto-deploys to production via Vercel.** Only push when the change is verified with `yarn build`.
- Commit message format: `<Verb> :: <lowercase description>` — e.g. `Mod :: updated projects`, `Fix :: fixed ui quirks`, `Add :: ...`.

## Architecture notes

- Next.js 16 App Router (Turbopack builds) with React 19; pages under `src/app/`.
- **The site is a single page.** `src/app/page.tsx` composes six sections from `src/components/sections/`. The old `/about`, `/works` and `/projects` routes are permanent redirects to home anchors in `next.config.mjs` — do not recreate those pages.
- Site content (profile, experience, projects, skills, socials) lives in typed modules under `src/utils/content/` — edit there, not in components. `src/utils/site.ts` holds the canonical URL and description used by metadata.
- Blog posts are `.mdx` files in `src/contents/`, loaded from the filesystem by `src/utils/posts.ts`. Frontmatter keys: `title`, `publishedAt`, `tag`, and an optional `summary` used as the meta description. Dynamic route `params` are a Promise — `await` them. The blog is deliberately absent from the header nav; it is reachable from the footer and the sitemap.
- TypeScript `strict` is intentionally off — don't turn it on or add strict-mode fixes unasked. Note this means a typo in the content modules will not fail the build.

## Theming

- Tailwind v4, configured entirely in CSS — there is no `tailwind.config.ts`. The semantic palette lives in the `@theme` block of `src/app/globals.css` as `--color-*` tokens; the `.dark` block redefines those same tokens. Write `bg-surface text-fg-muted`, never a `dark:` variant and never a raw palette colour — that is what keeps both themes in sync.
- Dark mode is class-based via `next-themes` (the `@custom-variant dark` rule in `globals.css`), light by default. Only `ThemeToggle` may read the theme value.
- All animation (the `motion` package, imported from `motion/react` — the successor to `framer-motion`) lives in `src/components/motion/`. Any other file importing it needs `"use client"`, so keep it contained — every section is a server component.
- Fonts are Instrument Serif (`font-display`), Inter (`font-sans`) and JetBrains Mono (`font-mono`). `next/font` exposes them as `--font-*-face`, which the `@theme` block wraps into Tailwind's `--font-*` tokens; the `-face` suffix exists to avoid colliding with those.
- Images are local; there is no `remotePatterns` allowlist. A remote image host needs a new entry in `next.config.mjs`.
