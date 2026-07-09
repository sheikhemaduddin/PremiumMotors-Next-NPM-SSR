# next-custom · npm · CSR SPA

| Field | Value |
|-------|-------|
| Framework Preset | Next.js |
| Package Manager | npm |
| Build Command | `npm install && npm run build` |
| Output Directory | `out` |
| Entry File | server.js |
| Start Command | `npm start` |
| Node | >=18.18.0 |

Listens on `process.env.PORT`. The app is a client-side SPA (`output: 'export'`) with no SSR. Production `server.js` serves the static `out/` bundle and exposes `/healthz`. Generate the lockfile with `./generate-lockfile.sh` before pushing.
