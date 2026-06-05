# Frontend-only AI Workspace

This folder contains a professional frontend demo app that simulates model interactions.

```bash
```
Run locally:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

Professional features included:

- ESLint + Prettier configuration and `npm run lint` / `npm run format` scripts
- Unit tests with Vitest and React Testing Library (`npm run test`)
- CI workflow at `.github/workflows/frontend-ci.yml` (lint, test, build)
- `.env.example` and Dockerfile for production preview

Replace `src/services/mockModel.ts` with real API calls or WebSocket-based inference when ready. Use `VITE_API_BASE_URL` to configure the backend.

Deploying to Vercel
-------------------

This project is ready to deploy to Vercel as a static site. Two options:

- Deploy the `frontend` folder directly in Vercel: set the **Root Directory** to `frontend` when creating the project. Vercel will run `npm run build` and serve the `dist` folder.
- Or create a Vercel project at the repo root and set the **Build Command** to `cd frontend && npm ci && npm run build` and the **Output Directory** to `frontend/dist`.

Vercel configuration is provided in `frontend/vercel.json` which uses `@vercel/static-build` and configures an SPA fallback to `index.html`.

Environment variables
- Add `VITE_API_BASE_URL` in Vercel's Environment Variables to point to your backend (e.g. `https://api.example.com`).

Quick deploy steps (recommended):

1. Push your branch to GitHub.
2. In Vercel, import the GitHub repo and set the Root Directory to `frontend`.
3. Confirm build settings (Build Command: `npm run build`, Output Directory: `dist`).
4. Deploy — Vercel will build and publish the site.

