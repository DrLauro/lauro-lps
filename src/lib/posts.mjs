// Publicações do blog: artigos escritos no site (src/content/blog, editados em /admin)
// mais os artigos antigos do Jusbrasil, que ficam como links (src/data/jusbrasil.json).
// O RSS do Jusbrasil deixou de ser lido: o fluxo agora é publicar no site e replicar lá.
import { getCollection } from 'astro:content';
import jusbrasil from '../data/jusbrasil.json';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function loadPosts() {
  const site = (await getCollection('blog')).map(({ id, data }) => ({
    title: data.title,
    url: `${base}/blog/${id}/`,
    date: data.date.toISOString(),
    excerpt: data.description,
  }));
  const antigos = jusbrasil.map((p) => ({ ...p, external: true }));
  return [...site, ...antigos].sort((a, b) => b.date.localeCompare(a.date));
}
