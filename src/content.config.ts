import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de piezas largas de investigación (migradas del blog + nuevas).
const investigacion = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/investigacion' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Miguel Zabala'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // URL original en nullsectorblog.co (referencia para el mapa de 301).
    legacyUrl: z.string().url().optional(),
  }),
});

export const collections = { investigacion };
