// Artigos do blog escritos no site. Cada arquivo .md em src/content/blog é um post,
// criado pelo Dr. Lauro no editor em /admin (public/admin/config.yml define os mesmos campos).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { pages } from './lib/contexts.mjs';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    cover_alt: z.string().optional(),
    // Área relacionada (slug de uma das 20 páginas): o artigo ganha link para ela.
    area: z.enum(pages.map((p) => p.slug)).optional(),
    // Artigo que também está no Jusbrasil: o interno substitui o link antigo em todo o site.
    jusbrasilId: z.string().regex(/^\d+$/).optional(),
    jusbrasilUrl: z.string().url().optional(),
    // Rascunho: aparece só no `npm run dev`, nunca no site publicado.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
