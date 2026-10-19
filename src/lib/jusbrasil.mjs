// Publicações do Dr. Lauro no Jusbrasil, lidas do RSS público do perfil no build.
// O RSS só traz título, link, data e um trecho (~350 caracteres). A página do artigo fica
// atrás de captcha e o robots.txt do Jusbrasil bloqueia robôs, então o texto completo não é importado.
// Se o feed falhar, o build usa o último snapshot salvo (src/data/jusbrasil.json).
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const FEED = 'https://dr-lauroneto3523.jusbrasil.com.br/rss';
const SNAPSHOT = join(process.cwd(), 'src/data/jusbrasil.json');

const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(n)).replace(/&amp;/g, '&');
const text = (html) => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const tag = (xml, name) => xml.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`))?.[1] ?? '';

// Feed gerado pelo PyRSS2Gen: formato fixo e simples, dispensa parser XML.
export function parseRss(xml) {
  return xml.split('<item>').slice(1).map((item) => {
    const link = decode(tag(item, 'link')).trim();
    const desc = decode(tag(item, 'description'));
    // O trecho é o último <font size="-1"> da descrição; os anteriores são título e "há X dias".
    const excerpt = text([...desc.matchAll(/<font size="-1">([\s\S]*?)<\/font>/g)].at(-1)?.[1] ?? '');
    return {
      id: link.match(/\/artigos\/(\d+)\//)?.[1] ?? link,
      title: text(tag(item, 'title')),
      url: link,
      date: new Date(tag(item, 'pubDate')).toISOString(),
      excerpt: excerpt.replace(/\s*(\.\.\.|…)$/, '…'),
    };
  }).filter((p) => p.title && p.url);
}

let cache;
export async function loadPosts() {
  if (cache) return cache;
  try {
    const res = await fetch(FEED, {
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; lauro.adv.br feed reader)' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts = parseRss(await res.text());
    if (!posts.length) throw new Error('feed sem itens');
    const json = JSON.stringify(posts, null, 2) + '\n';
    if (json !== readFileSync(SNAPSHOT, 'utf8')) writeFileSync(SNAPSHOT, json);
    cache = posts;
  } catch (err) {
    console.warn(`[jusbrasil] feed indisponível (${err.message}); usando snapshot`);
    cache = JSON.parse(readFileSync(SNAPSHOT, 'utf8'));
  }
  return cache.sort((a, b) => b.date.localeCompare(a.date));
}
