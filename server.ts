import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 666;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    try {
      const readedHTML = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
      const html = await vite.transformIndexHtml(req.originalUrl, readedHTML);
      const parts = html.split('<!--ssr-outlet-->');

      const { renderApp } = await vite.ssrLoadModule('./src/entry-server.tsx');

      const stream = renderApp(req.originalUrl, {
        onShellReady() {
          res.write(parts[0]);
          stream.pipe(res);
        },
        onShellError(err: unknown) {
          if (err instanceof Error) console.error(err);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(err: unknown) {
          if (err instanceof Error) console.error(err);
        },
      });
    } catch (err) {
      if (err instanceof Error) {
        vite.ssrFixStacktrace(err);
        return next(err);
      }
    }
  });

  console.log(`listening on http://localhost:${PORT}`);
  app.listen(PORT);
}

createServer();
