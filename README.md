# Burhan Nayeem — Portfolio

A React single page application built with Vite. Home, About, Projects, and My Work are client-side routes served from one root HTML file. My Work loads all public repositories and the daily contribution calendar dynamically from GitHub-connected public APIs.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build creates the deployable site in `dist/`. Vercel rewrites route requests to the root app so direct links to `/about`, `/projects`, and `/my-work` work on refresh. Images and the CV are served from `public/`.

## Project structure

- `index.html` — the only HTML entry point
- `src/App.jsx` — app shell and client-side routes
- `src/pages/` — Home, About, Projects, and live My Work pages
- `src/components/` — shared navigation, footer, brand, contribution graph, and repository card components
- `src/services/github.js` — paginated GitHub repository and daily contribution data requests
- `src/data.js` — shared profile, project, skill, and logo data
- `src/styles.css` — responsive design system and motion
- `public/` — static images and CV
