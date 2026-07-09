# next-custom-npm · CSR SPA

Next.js app configured as a client-side single-page application with no server-side rendering.

- **Rendering:** Client-only (`dynamic` import with `ssr: false`, `output: 'export'`)
- **Production:** `server.js` serves the static `out/` directory
- **Dev:** `server.js` runs Next in development mode
- **Health check:** `GET /healthz`

```bash
npm install
npm run dev      # development
npm run build    # static export to out/
npm start        # serve out/ in production
```
# next-npm-csr
