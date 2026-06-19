// Genera la imagen Open Graph (1200x630) con la marca Nullsector: oro sobre negro + logo.
// Uso: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200, H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#0a0b0d"/>
  <rect x="0" y="0" width="10" height="${H}" fill="#ffd700"/>
  <text x="80" y="352" font-family="DejaVu Sans, sans-serif" font-size="104" font-weight="bold" fill="#ffffff">Miguel Zabala</text>
  <text x="80" y="418" font-family="DejaVu Sans, sans-serif" font-size="37" fill="#ffd700">Investigador de seguridad ofensiva · IA generativa</text>
  <text x="80" y="472" font-family="DejaVu Sans Mono, monospace" font-size="26" fill="#8b9099">9 años · banca · gobierno · aeronáutica · 3 países</text>
</svg>`;

const logo = await sharp(join(ROOT, 'public/brand/Logo_Amarillo.png')).resize({ width: 320 }).png().toBuffer();
await sharp(Buffer.from(svg)).composite([{ input: logo, top: 82, left: 80 }]).png().toFile(join(ROOT, 'public/og-default.png'));
console.log('✓ og-default.png regenerado');
