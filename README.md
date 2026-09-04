# sravi.dev

Personal site for Ravi Shankar — a single-page portfolio with an MDX blog.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and framer-motion. Deployed on Vercel.

## Development

```bash
yarn install
yarn dev     # http://localhost:3000
yarn build   # the verification gate; there are no tests
yarn lint
```

Use Yarn (Berry). `.yarnrc.yml` sets `nodeLinker: node-modules`.

## Editing content

Site content is data, not markup. Everything on the home page comes from typed modules in `src/utils/content/`:

| File | Holds |
|---|---|
| `profile.ts` | Name, roles, bio, location, résumé and image paths |
| `experience.ts` | Work history, with an optional `metric` per bullet that renders emphasised |
| `projects.ts` | Featured cards and the archive list |
| `skills.ts` | Skill groups |
| `socials.ts` | External links |

Blog posts are `.mdx` files in `src/contents/`. Frontmatter takes `title`, `publishedAt`, `tag`, and an optional `summary` used as the meta description.

## Theming

Colours are CSS variables in `src/app/globals.css`, defined once for light and once for dark, and exposed to Tailwind as semantic names such as `bg-surface` and `text-fg-muted`. Components never write a `dark:` variant, so both themes stay in sync by construction.
