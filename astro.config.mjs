// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico de producción (usado para canonicals, sitemap, OG, etc.)
  site: 'https://nullsector.co',
  // URLs con barra final para coincidir con las redirecciones 301 del blog migrado
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});
