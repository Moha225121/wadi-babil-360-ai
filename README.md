# WADI BABIL 360 AI

بروتوتايب عربي تفاعلي لشركة وادي بابل للمقاولات والاستثمار العقاري.

**بيانات تجريبية لأغراض العرض والتوضيح فقط.**

16 role-based demo portals, 15 business modules, an illustrative AI Center, local project and purchase workflows, approvals, unit reservations, tasks, reports, and guided process journeys. Arabic RTL, locally bundled Cairo font, responsive layout, light and dark modes.

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Select a demo role to begin.

## Checks

```sh
npm test
npm run build
```

## GitHub Pages

Pushes to `main` trigger `.github/workflows/pages.yml`, which tests, builds a static export, and deploys to GitHub Pages. Repository Pages settings must use GitHub Actions. The project base path is `/wadi-babil-360-ai`.

For a local static export in PowerShell:

```powershell
$env:GITHUB_PAGES='true'
$env:NEXT_PUBLIC_BASE_PATH='/wadi-babil-360-ai'
npm run build
```

## Demo boundaries

Data is stored in the current browser's localStorage. Role switching illustrates access scope and is **not authentication or production security**. Do not enter confidential or real personal data. Uploaded files remain temporary browser-local previews. The AI uses deterministic demo scenarios, not a connected model or trained forecasts. Document extraction is a fixed example from the included fictional sample contract. Agents prepare approval requests and create local follow-up tasks only; they do not execute payments or sign contracts.

Production requires a database, authenticated server APIs, server-enforced authorization, secure document storage, audit protection, backups, and separately approved AI and business integrations.

The user-supplied company logo is retained for this prototype. Cairo is distributed under the included `public/fonts/OFL.txt`. Commercial proposals and company documents are not included in this repository.
