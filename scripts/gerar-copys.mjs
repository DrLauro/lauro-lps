// Gera copys/<pagina>.copy.md com o texto de cada página publicada, lido do build (dist/).
// Uso: npm run copys (faz o build e gera os arquivos).
// Serve para revisão de texto: título e descrição do Google, todo o conteúdo visível
// e a mensagem que cada botão de WhatsApp envia.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const OUT = 'copys';

const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(n)).replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const strip = (html) => decode(html.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const meta = (html, re) => decode(html.match(re)?.[1] ?? '');

export function toMarkdown(html) {
  let m = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '';
  m = m
    .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/g, '')
    .replace(/<div class="sticky-cta">[\s\S]*?<\/div>/g, '') // repete os botões do fim da página
    .replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, '') // marcadores "§ n" e separadores
    .replace(/<img\b[^>]*alt="([^"]+)"[^>]*>/g, '\n[Imagem: $1]\n')
    .replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, (_, attrs, inner) => {
      const href = decode(attrs.match(/href="([^"]*)"/)?.[1] ?? '');
      const text = strip(inner);
      const msg = href.match(/wa\.me\/\d+\?text=(.*)$/)?.[1];
      if (msg) return `[${text}] (WhatsApp, mensagem: "${decodeURIComponent(msg)}")`;
      if (href.startsWith('tel:')) return `[${text}] (ligação)`;
      return `[${text}](${href})`;
    })
    .replace(/<h([1-4])\b[^>]*>/g, (_, n) => `\n\n${'#'.repeat(n)} `)
    .replace(/<li\b[^>]*>/g, '\n- ')
    .replace(/<\/(h[1-4]|p|li|figcaption|blockquote|ul|ol|section|article|header|div|nav)>/g, '\n')
    .replace(/<(p|figcaption|blockquote|section|article|header|nav)\b[^>]*>/g, '\n\n');
  return m
    .split('\n')
    .map((l) => decode(l.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim())
    .reduce((acc, l) => (l || acc.at(-1) ? [...acc, l] : acc), [])
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n\n(?=- )/g, '\n')
    .trim();
}

function pages(dir = DIST, rel = '') {
  return readdirSync(join(dir)).flatMap((name) => {
    const path = join(dir, name);
    if (name === 'index.html') return [rel || '/'];
    if (existsSync(join(path, 'index.html')) || (!name.includes('.') && !name.startsWith('_'))) {
      try { return pages(path, `${rel}/${name}`); } catch { return []; }
    }
    return [];
  });
}

mkdirSync(OUT, { recursive: true });
for (const route of pages()) {
  if (route.startsWith('/admin')) continue; // editor, não é página do site
  const html = readFileSync(join(DIST, route, 'index.html'), 'utf8');
  const name = route === '/' ? 'home' : route.slice(1).replace(/\//g, '--');
  const md = [
    `# Copy — ${route === '/' ? 'Página principal' : route}`,
    '',
    `URL: https://lauro.adv.br${route === '/' ? '/' : `${route}/`}`,
    '',
    '## SEO',
    '',
    `- **Title:** ${meta(html, /<title>([^<]*)<\/title>/)}`,
    `- **Meta description:** ${meta(html, /<meta name="description" content="([^"]*)"/)}`,
    '',
    '## Conteúdo da página',
    '',
    toMarkdown(html),
    '',
  ].join('\n');
  writeFileSync(join(OUT, `${name}.copy.md`), md);
  console.log(`ok: ${OUT}/${name}.copy.md`);
}
