// Descarga las imágenes referenciadas en los artículos (desde nullsectorblog.co),
// las guarda en public/investigacion/<slug>/ y reescribe los enlaces a rutas locales.
// Elimina imágenes rotas o basura (wp-admin, no-imagen). Idempotente.
// Uso: node scripts/localize-images.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/content/investigacion');
const PUB = join(ROOT, 'public/investigacion');

const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));
const imgRe = /!\[([^\]]*)\]\(([^)]+)\)/g;

let downloaded = 0, removed = 0, kept = 0;

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const path = join(DIR, file);
  let md = readFileSync(path, 'utf8');
  const matches = [...md.matchAll(imgRe)];
  if (matches.length === 0) continue;

  const outDir = join(PUB, slug);
  let made = false;

  for (const [full, alt, url] of matches) {
    if (url.startsWith('/investigacion/')) { kept++; continue; }
    // basura o no-imagen -> eliminar
    if (!/^https?:\/\//.test(url) || /wp-admin/.test(url) || !/\.(png|jpe?g|webp|gif|svg)(\?|#|$)/i.test(url)) {
      md = md.replace(full, '');
      removed++;
      continue;
    }
    let fname = (url.split('?')[0].split('#')[0].split('/').pop() || 'img');
    fname = decodeURIComponent(fname).replace(/[^a-zA-Z0-9._-]/g, '-');
    const srcUrl = url.replace('https://nullsector.co/', 'https://nullsectorblog.co/')
                      .replace('http://nullsector.co/', 'https://nullsectorblog.co/');
    try {
      const res = await fetch(srcUrl, { signal: AbortSignal.timeout(25000), headers: { 'user-agent': 'nullsector-migrator' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (!made) { mkdirSync(outDir, { recursive: true }); made = true; }
      writeFileSync(join(outDir, fname), buf);
      md = md.replace(full, `![${alt}](/investigacion/${slug}/${fname})`);
      downloaded++;
    } catch (e) {
      md = md.replace(full, '');
      removed++;
      console.log(`  ✗ ${slug}/${fname}: ${e.message} -> eliminada`);
    }
  }
  md = md.replace(/\n{3,}/g, '\n\n');
  writeFileSync(path, md);
  console.log(`  ${file}: ${matches.length} procesadas`);
}

console.log(`\nDescargadas: ${downloaded} · Eliminadas: ${removed} · Ya locales: ${kept}`);
