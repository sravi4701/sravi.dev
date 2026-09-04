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
- Site content (profile, projects, works, social links) is hardcoded in `src/utils/constants.ts` — edit there, not in components.
- Blog posts are `.mdx` files in `src/contents/`, loaded from the filesystem by `src/utils/posts.ts`. Frontmatter keys: `title`, `publishedAt`, `tag`.
- TypeScript `strict` is intentionally off — don't turn it on or add strict-mode fixes unasked.
- `next.config.mjs` only allows remote images from `media.licdn.com` — images from other hosts need a new `remotePatterns` entry.
