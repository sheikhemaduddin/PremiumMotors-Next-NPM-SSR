// Custom Next.js server (entry file: server.js).
// Dev: runs Next in development mode. Production: serves the static CSR export from out/.
const { createServer } = require('http');
const { parse } = require('url');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const outDir = path.join(__dirname, 'out');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

function sendHealthz(res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, mode: 'next-custom-csr', runtime: `node ${process.version}` }));
}

function serveStaticExport(req, res) {
  const parsedUrl = parse(req.url, true);

  if (parsedUrl.pathname === '/healthz') {
    sendHealthz(res);
    return;
  }

  const requestPath = parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;
  let filePath = path.join(outDir, requestPath);

  if (!path.extname(filePath)) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!filePath.startsWith(outDir)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(outDir, 'index.html'), (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }
        res.setHeader('Content-Type', mimeTypes['.html']);
        res.end(fallbackData);
      });
      return;
    }

    const ext = path.extname(filePath);
    res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
    res.end(data);
  });
}

function startDevServer() {
  const next = require('next');
  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);

      if (parsedUrl.pathname === '/healthz') {
        sendHealthz(res);
        return;
      }

      handle(req, res, parsedUrl);
    }).listen(port, () => {
      console.log(`[next-custom-csr] dev ready on ${port}`);
    });
  });
}

function startProductionServer() {
  if (!fs.existsSync(outDir)) {
    console.error('[next-custom-csr] missing out/ directory — run npm run build first');
    process.exit(1);
  }

  createServer(serveStaticExport).listen(port, () => {
    console.log(`[next-custom-csr] serving ${outDir} on ${port}`);
  });
}

if (dev) {
  startDevServer();
} else {
  startProductionServer();
}
