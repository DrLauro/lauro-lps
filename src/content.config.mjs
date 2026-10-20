// Artigos do blog escritos no site. Cada arquivo .md em src/content/blog é um post,
// criado pelo Dr. Lauro no editor em /admin (public/admin/config.yml define os mesmos campos).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    cover_alt: z.string().optional(),
  }),
});

export const collections = { blog };
