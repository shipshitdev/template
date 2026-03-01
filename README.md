# ShipShit.dev Template

Production-ready Next.js 15 starter. Everything wired so you ship on day one.

## Stack

- **Next.js 15** + **Bun** — latest, fastest
- **Tailwind v4** — dark theme out of the box
- **TypeScript** — strict mode
- **Clerk** — auth, conditional provider pattern
- **@shipshit/ai** — CommandBar wired into layout
- **Biome** — lint + format, no ESLint/Prettier noise
- **GH Actions CI** — build + lint on every push/PR

## Quickstart

```bash
# 1. Clone
git clone https://github.com/shipshitdev/template my-app
cd my-app

# 2. Set env
cp .env.example .env.local
# Fill in your Clerk keys and SHIPSHIT_AI_URL

# 3. Install
bun install

# 4. Run
bun dev
```

## Auth

Clerk is conditional — the app works without keys (no auth UI rendered).
Set `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` + `CLERK_SECRET_KEY` to enable.

## Lint / Format

```bash
bun lint       # biome check
bun format     # biome format --write
```

## Deploy

Works on Vercel out of the box. Push to GitHub → connect repo → done.

---

Built by [ShipShit.dev](https://shipshit.dev)
