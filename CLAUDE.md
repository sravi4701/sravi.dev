# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Use **Yarn (Berry)** — not npm/pnpm, despite what the README says. `.yarnrc.yml` sets `nodeLinker: node-modules`.
- Verify changes with `yarn build` before considering work done (there are no tests; the build catches type and compile errors).
- Dev server: `yarn dev`. Lint: `yarn lint`.

## Git & deploy

- Commit directly to `main` — no feature branches or PRs.
- **Pushing to `main` auto-deploys to production via Vercel.** Only push when the change is verified with `yarn build`.
- Commit message format: `<Verb> :: <lowercase description>` — e.g. `Mod :: updated projects`, `Fix :: fixed ui quirks`, `Add :: ...`.

## Architecture notes

- Next.js 14 App Router; pages under `src/app/`.
- **The site is a single page.** `src/app/page.tsx` composes six sections from `src/components/sections/`. The old `/about`, `/works` and `/projects` routes are permanent redirects to home anchors in `next.config.mjs` — do not recreate those pages.
- Site content (profile, experience, projects, skills, socials) lives in typed modules under `src/utils/content/` — edit there, not in components. `src/utils/site.ts` holds the canonical URL and description used by metadata.
- Blog posts are `.mdx` files in `src/contents/`, loaded from the filesystem by `src/utils/posts.ts`. Frontmatter keys: `title`, `publishedAt`, `tag`, and an optional `summary` used as the meta description. The blog is deliberately absent from the header nav; it is reachable from the footer and the sitemap.
- TypeScript `strict` is intentionally off — don't turn it on or add strict-mode fixes unasked. Note this means a typo in the content modules will not fail the build.

## Theming

- Colours are CSS variables on `:root` and `.dark` in `src/app/globals.css`, exposed to Tailwind as semantic names. Write `bg-surface text-fg-muted`, never a `dark:` variant and never a raw palette colour — that is what keeps both themes in sync.
- Dark mode is class-based via `next-themes`, light by default. Only `ThemeToggle` may read the theme value.
- All framer-motion usage lives in `src/components/motion/`. Any other file importing it needs `"use client"`, so keep it contained — every section is a server component.
- Fonts are Instrument Serif (`font-display`), Inter (`font-sans`) and JetBrains Mono (`font-mono`), loaded in the layout behind CSS variables.
- Images are local; there is no `remotePatterns` allowlist. A remote image host needs a new entry in `next.config.mjs`.
