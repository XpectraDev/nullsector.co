// Genera la imagen Open Graph (1200x630) con la marca Nullsector: oro sobre negro + logo.
// Uso: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200, H = 630;
const badges = ['OSCE³', 'OSED', 'OSEP', 'OSWE', 'OSCP'];

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a0c10"/><stop offset="100%" stop-color="#12161f"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="8%" r="62%">
      <stop offset="0%" stop-color="#ffd700" stop-opacity="0.18"/><stop offset="100%" stop-color="#ffd700" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="0" width="14" height="${H}" fill="#ffd700"/>
  <text x="80" y="306" font-family="DejaVu Sans, sans-serif" font-size="96" font-weight="bold" fill="#ffffff">Miguel Zabala</text>
  <text x="80" y="372" font-family="DejaVu Sans, sans-serif" font-size="37" fill="#ffd700">OSCE³ · Investigador de seguridad ofensiva e IA</text>
  <text x="80" y="426" font-family="DejaVu Sans, sans-serif" font-size="31" fill="#98a2b3">9 años · pentesting · exploit development · reversing · IA</text>
  ${badges.map((c, i) => `<g transform="translate(${80 + i * 150}, 498)"><rect width="134" height="56" rx="10" fill="#171c28" stroke="#232a38"/><text x="67" y="36" text-anchor="middle" font-family="DejaVu Sans Mono, monospace" font-size="24" fill="#ffd700">${c}</text></g>`).join('')}
</svg>`;

const logo = await sharp(join(ROOT, 'public/brand/Logo_Amarillo.png')).resize({ width: 300 }).png().toBuffer();
await sharp(Buffer.from(svg)).composite([{ input: logo, top: 72, left: 80 }]).png().toFile(join(ROOT, 'public/og-default.png'));
console.log('✓ og-default.png (marca oro/negro + logo) generado');
