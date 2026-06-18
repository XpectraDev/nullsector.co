// Migra los posts de nullsectorblog.co (WordPress REST API) a MDX/Markdown
// en src/content/investigacion/ y genera redirects.csv (mapa 301).
// Uso: node scripts/migrate-blog.mjs
import TurndownService from 'turndown';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src/content/investigacion');
mkdirSync(OUT, { recursive: true });

const API = 'https://nullsectorblog.co/wp-json/wp/v2/posts?per_page=100&_embed';

// Slugs limpios para las piezas clave (los antiguos eran largos y van por 301).
const slugRemap = {
  'mi-viaje-con-rgs-tool-de-principiante-a-mencion-honorable-en-el-concurso-de-nvidia': 'rgs-tool',
  'spectra-project-innovacion-seguridad-informatica-ia-generativa': 'spectra',
};
// El 2º artículo de SPECTRA se fusionará en /investigacion/spectra/ (queda como draft).
const draftSlugs = new Set([
  'adentrate-en-el-corazon-del-proyecto-spectra-transformando-la-ciberseguridad-con-ia-generativa-y-llms',
]);

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-' });

function decode(s = '') {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/&#8217;/g, '’')
    .replace(/&#8216;/g, '‘').replace(/&#8220;/g, '“').replace(/&#8221;/g, '”')
    .replace(/&#8211;/g, '–').replace(/&#8212;/g, '—').replace(/&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ').replace(/&hellip;/g, '…')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
}
const stripTags = (s = '') => decode(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const yaml = (s) => JSON.stringify(decode(String(s)));

const res = await fetch(API, { headers: { 'user-agent': 'nullsector-migrator' } });
const posts = await res.json();
if (!Array.isArray(posts)) throw new Error('API no devolvió un array: ' + JSON.stringify(posts).slice(0, 200));
console.log(`Migrando ${posts.length} posts...\n`);

const redirects = [];
for (const p of posts) {
  const origSlug = p.slug;
  const slug = slugRemap[origSlug] || origSlug;
  const title = stripTags(p.title?.rendered || origSlug);
  let desc = stripTags(p.excerpt?.rendered || '');
  if (desc.length > 180) desc = desc.slice(0, 177).trimEnd() + '…';
  if (!desc) desc = title;
  const terms = (p._embedded?.['wp:term'] || []).flat()
    .map((t) => t?.name).filter((n) => n && n.toLowerCase() !== 'uncategorized');
  const tags = [...new Set(terms)];
  const md = td.turndown(p.content?.rendered || '').trim();
  const isDraft = draftSlugs.has(origSlug);

  const fm = [
    '---',
    `title: ${yaml(title)}`,
    `description: ${yaml(desc)}`,
    `pubDate: ${p.date.slice(0, 10)}`,
    `updatedDate: ${p.modified.slice(0, 10)}`,
    `author: "Miguel Zabala"`,
    `tags: [${tags.map(yaml).join(', ')}]`,
    `legacyUrl: ${yaml(p.link)}`,
    isDraft ? 'draft: true' : null,
    '---',
    '',
  ].filter((x) => x !== null).join('\n');

  writeFileSync(join(OUT, `${slug}.md`), fm + md + '\n');
  redirects.push({ from: new URL(p.link).pathname, to: `/investigacion/${slug}/` });
  console.log(`  ${String(md.length).padStart(6)} chars  ${slug}.md${isDraft ? '  (draft→fusión)' : ''}`);
}

writeFileSync(
  join(ROOT, 'redirects.csv'),
  'source,destination,code\n' + redirects.map((r) => `${r.from},${r.to},301`).join('\n') + '\n',
);
console.log(`\n${redirects.length} redirecciones escritas en redirects.csv`);
