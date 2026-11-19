# Peter Lyngso Portfolio

A small React and Vite portfolio site. Project content and homepage curation live in `src/data/content.js`; images are in `public/media`.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

Use Node.js 22.12 or newer. No environment variables, API server, database,
Replit account, or workspace setup are required.

The production files are generated in `dist`. On a static hosting service, use
`npm run build` as the build command and `dist` as the output directory.
Configure a single-page-app fallback to `index.html` so direct visits to routes
such as `/work/Labor` and `/project/colectivo-mpu` work.

## Editing

- `src/data/content.js`: projects, media assignments, homepage doors, selected-work order, and credits.
- `src/pages`: home, category, project, about, and not-found pages.
- `src/components`: navigation, media rendering, reveal animations, and page metadata.
- `src/index.css`: ordinary CSS; no Tailwind or UI framework.
- `public/media`: local still images. These are representative assets, not verified project footage.

Media items support `kind`, `src`, `alt`, `caption`, `aspectRatio`,
`objectPosition`, and `poster`. Projects can additionally specify `previewLoop`,
`finishedWorkUrl`, and `gallery` inside `media`. Preview videos and finished-work
URLs are currently unassigned. Fonts load from Google Fonts.

Only React, React DOM, and Wouter are runtime dependencies. Vite and its React
plugin are development dependencies.
