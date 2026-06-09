# Portfolio

This repository now contains a custom Next.js portfolio built for static export and GitHub Pages.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is written to `out/`.

## Content

- Home page with an interactive atlas-style hero
- Project detail pages for the existing portfolio work
- New featured case studies for `activity-viewer` and `min-wx`

## Deployment

A GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes the static export to GitHub Pages.
