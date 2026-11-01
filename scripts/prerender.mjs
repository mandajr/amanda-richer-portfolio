// Runs after `vite build`. Writes a real HTML page for each tab, with the tab's
// words in the page code, so search tools that don't run JavaScript can read
// the site. Also writes sitemap.xml from the same list of pages.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';

const site = 'https://amandaricher.com';
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
// A function, so a "$60" in the page isn't read as a replace pattern.
const swap = (html, find, to) => html.replace(find, () => to);

function buildPage(template, page, body) {
  const title = esc(page.title);
  const url = site + page.path;
  let html = swap(template, '<div id="root"></div>', `<div id="root">${body}</div>`);
  html = swap(html, /<title>.*?<\/title>/, `<title>${title}</title>\n    <link rel="canonical" href="${url}" />`);
  html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(page.description)}" />`);
  html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = swap(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  return html;
}

export function prerender() {
  let outDir;
  return {
    name: 'prerender-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const server = await createServer({
        configFile: false,
        plugins: [react()],
        server: { middlewareMode: true },
        appType: 'custom',
      });
      try {
        const { pages, renderTab } = await server.ssrLoadModule('/src/entry-server.jsx');
        const template = readFileSync(resolve(outDir, 'index.html'), 'utf8');
        for (const [tab, page] of Object.entries(pages)) {
          const file = tab === 'nexus' ? 'index.html' : `${tab}.html`;
          writeFileSync(resolve(outDir, file), buildPage(template, page, renderTab(tab)));
        }
        const today = new Date().toISOString().slice(0, 10);
        const urls = Object.values(pages)
          .map(p => `  <url><loc>${site}${p.path}</loc><lastmod>${today}</lastmod></url>`)
          .join('\n');
        writeFileSync(
          resolve(outDir, 'sitemap.xml'),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
      } finally {
        await server.close();
      }
    },
  };
}
