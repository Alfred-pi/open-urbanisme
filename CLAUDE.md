# OpenUrbanisme.ch

> Site vitrine pour fondation suisse d'urbanisme ouvert (FreeIT Foundation).

## Stack

- React 19 + Vite + TypeScript + Tailwind 4 + Framer Motion
- i18n: FR / EN / ES

## Commandes

- `npm run dev` — Dev server
- `npm run build` — Build (tsc + vite)
- Deploy: `npm run build && npx gh-pages -d dist`

## Deploy

- **Repo**: github.com/Alfred-pi/open-urbanisme (PUBLIC)
- **Live**: https://alfred-pi.github.io/open-urbanisme/
- **Base path**: `/open-urbanisme/`
- **Pas de CI/CD** — deploy manuel via gh-pages

## Design

- B&W élégant, Swiss Design, parallax hero
- Framer Motion animations

## Key files

- `src/` — Composants React
- `vite.config.ts` — Base path config
- `index.html` — Entry point
