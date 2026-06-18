// Elimina los em dash (—) de todo el contenido y los reemplaza por puntuación normal.
// Uso: node scripts/strip-emdash.mjs
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

const SRC = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');
const exts = new Set(['.astro', '.md', '.mdx', '.ts']);
let fixed = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!exts.has(extname(p))) continue;
    let c = readFileSync(p, 'utf8');
    if (!c.includes('—')) continue;
    const n = c
      .replace(/\s*—\s*/g, ', ')
      .replace(/:\s*,\s*/g, ': ')
      .replace(/,\s*,/g, ',')
      .replace(/\(\s*,\s*/g, '(')
      .replace(/\s+,/g, ',');
    writeFileSync(p, n);
    fixed++;
    console.log('  limpiado', p.replace(SRC, 'src'));
  }
}

walk(SRC);
console.log(`\n${fixed} archivos limpiados de em dash`);
