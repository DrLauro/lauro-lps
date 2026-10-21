// Publicações do blog: artigos escritos no site (src/content/blog, editados em /admin)
// mais os artigos antigos do Jusbrasil, que ficam como links (src/data/jusbrasil.json).
// O RSS do Jusbrasil deixou de ser lido: o fluxo agora é publicar no site e replicar lá.
import { getCollection } from 'astro:content';
import jusbrasil from '../data/jusbrasil.json';
import { pages } from './contexts.mjs';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const areaName = Object.fromEntries(pages.map((p) => [p.slug, p.card.title]));

export async function loadPosts() {
  const site = (await getCollection('blog')).map(({ id, data }) => ({
    title: data.title,
    url: `${base}/blog/${id}/`,
    date: data.date.toISOString(),
    excerpt: data.description,
  }));
  // Sem o trecho automático do Jusbrasil: ele expõe número de processo e iniciais de partes.
  const antigos = jusbrasil.map(({ excerpt, ...p }) => ({ ...p, external: true }));
  return [...site, ...antigos]
    .map((p) => ({ ...p, areaName: areaName[p.area] }))
    // Artigos fora da área criminal marcados com `fim` vão para o fim da lista.
    .sort((a, b) => !!a.fim - !!b.fim || b.date.localeCompare(a.date));
}
