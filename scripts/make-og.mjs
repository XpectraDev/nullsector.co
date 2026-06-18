// Genera la imagen Open Graph por defecto (1200x630) en public/og-default.png
// Uso: node scripts/make-og.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
mkdirSync(join(ROOT, 'public'), { recursive: true });

const W = 1200, H = 630;
const badges = ['OSCE³', 'OSED', 'OSEP', 'OSWE', 'OSCP'];

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0e14"/>
      <stop offset="100%" stop-color="#111824"/>
    </linearGradient>
    <radialGradient id="glow" cx="80%" cy="10%" r="60%">
      <stop offset="0%" stop-color="#34e0a1" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#34e0a1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#34e0a1"/>
  <text x="80" y="150" font-family="DejaVu Sans Mono, monospace" font-size="28" letter-spacing="6" fill="#34e0a1">NULLSECTOR.CO</text>
  <text x="80" y="295" font-family="DejaVu Sans, sans-serif" font-size="94" font-weight="bold" fill="#f2f6fb">Miguel Zabala</text>
  <text x="80" y="365" font-family="DejaVu Sans, sans-serif" font-size="40" fill="#cdd8e6">OSCE³ · Fundador de Xpectra</text>
  <text x="80" y="425" font-family="DejaVu Sans, sans-serif" font-size="40" fill="#cdd8e6">IA generativa &amp; ciberseguridad</text>
  ${badges.map((c, i) => `<g transform="translate(${80 + i * 150}, 500)"><rect width="132" height="58" rx="10" fill="#16202e" stroke="#1e2a3a" stroke-width="1.5"/><text x="66" y="38" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#34e0a1">${c}</text></g>`).join('')}
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(ROOT, 'public', 'og-default.png'));
console.log('✓ og-default.png generado (1200x630)');
