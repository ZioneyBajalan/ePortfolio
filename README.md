# Zioney Jayce — Developer Portfolio

A concise, fast-loading static portfolio highlighting AI/ML and full‑stack projects. This repository contains a single-page static site built with semantic HTML, modern CSS, and a small amount of JavaScript for interactivity.

## Highlights
- Fast, accessible single-page portfolio (Hero, About, Projects, Contact)
- Minimal JavaScript: smooth navigation, animated reveal, and client-side form validation
- Clean, responsive UI optimized for performance and deployment to GitHub Pages or Vercel

## Tech
- HTML5
- CSS3 (modern layout + effects)
- JavaScript (vanilla, minimal)
- Vite (optional, for local dev / production build)

## Quick start
1. Clone the repo:
```bash
git clone https://github.com/ZioneyBajalan/ePortfolio.git
cd ePortfolio
```
2. View locally (no build required):
```bash
# On Windows
start index.html
```
3. Optional (local dev with Vite):
```bash
npm install
npm run dev
```

## Deploy
- GitHub Pages (static): push the repository to GitHub and enable Pages from the `main` branch (or use `gh-pages`). Since this is a static site, no build step is required unless you use Vite.
- Vercel: connect the repository; for a Vite site set the build command to `npm run build` and the output directory to `dist`. Vercel auto-detects and provides sensible defaults.

## Minimal project structure
```
ePortfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/   (project images & resume)
├── package.json  (optional dev tooling)
└── README.md
```

## Contact
- Email: jayce.zioney@gmail.com
