// API estática: /api/jusbrasil.json com as publicações do Jusbrasil já normalizadas.
import { loadPosts, FEED } from '../../lib/jusbrasil.mjs';

export async function GET() {
  const posts = await loadPosts();
  return new Response(JSON.stringify({ source: FEED, updated: new Date().toISOString(), posts }, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}
