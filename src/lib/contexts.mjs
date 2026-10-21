// Lê contexts/NN-<slug>.CONTEXT.md e devolve os dados de cada página.
// Os CONTEXT.md são a fonte da verdade do conteúdo (texto aprovado pelo Dr. Lauro):
// nada de copy duplicada no código. Mudou o contexto, mudou a página no próximo build.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'contexts');
const CARDS = JSON.parse(readFileSync(join(process.cwd(), 'src/data/cards-areas.json'), 'utf8'));

// Linhas do contexto que são instrução para o dev, não texto da página.
const INSTRUCAO = [/^Exibir como/, /^Sem nome de cliente/, /^Botões:/, /^- Logo abaixo:/];

const section = (md, n) => {
  const m = md.match(new RegExp(`^## ${n}\\. [^\\n]*\\n([\\s\\S]*?)(?=^## \\d+\\. |(?![\\s\\S]))`, 'm'));
  if (!m) throw new Error(`seção ${n} não encontrada`);
  return m[1];
};
const field = (txt, label) => {
  const m = txt.match(new RegExp(`^- ${label}:\\s*(.+)$`, 'm'));
  if (!m) throw new Error(`campo "${label}" não encontrado`);
  return m[1].trim();
};
const stripCount = (s) => s.replace(/\s*\(\d+ caracteres\)\s*$/, '');
const stripTicks = (s) => s.replace(/^`|`$/g, '');

// Serviços vêm como uma frase corrida; vira etiqueta em cada vírgula/ponto-e-vírgula/ponto
// que não esteja dentro de parênteses. Nenhuma palavra do texto se perde.
const chips = (txt) =>
  txt
    .split(/[,;.]\s+(?![^(]*\))/)
    .map((s) => s.replace(/\.$/, '').trim())
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .filter(Boolean);

function parseBlock(heading, body) {
  const lines = body.split('\n').map((l) => l.trimEnd());
  const kept = lines.filter((l) => l.trim() && !INSTRUCAO.some((r) => r.test(l.trim())));
  const h2 = heading.match(/^H2: (.+)$/)?.[1] ?? null;

  if (/^Casos/.test(heading) || /Casos em que atuamos/.test(heading)) {
    if (/Ainda não há caso aprovado/.test(body)) return { kind: 'cases', h2, items: [] };
    const items = [];
    for (const l of kept) {
      const t = l.match(/^\*\*(.+)\*\*\s*$/);
      if (t) items.push({ title: t[1], text: '' });
      else if (items.length) items.at(-1).text += (items.at(-1).text ? ' ' : '') + l.trim();
    }
    return { kind: 'cases', h2, items };
  }
  if (/Perguntas frequentes/.test(heading)) {
    const items = [];
    for (const l of kept) {
      const q = l.match(/^- \*\*(.+)\*\*\s*$/);
      if (q) items.push({ q: q[1], a: '' });
      else if (items.length) items.at(-1).a += (items.at(-1).a ? ' ' : '') + l.trim();
    }
    return { kind: 'faq', h2, items };
  }
  if (/Serviços nesta área/.test(heading)) {
    return { kind: 'chips', h2, items: kept.flatMap(chips) };
  }
  if (kept.every((l) => l.startsWith('- '))) {
    return { kind: 'list', h2, items: kept.map((l) => l.slice(2)) };
  }
  return { kind: 'prose', h2, items: kept };
}

export function parseContext(file) {
  const md = readFileSync(join(DIR, file), 'utf8').replace(/\r\n/g, '\n');
  const [, num, slug] = file.match(/^(\d+)-(.+)\.CONTEXT\.md$/);
  const name = md.match(/^# .*Página "(.+?)"/m)[1];
  const fase = Number(md.match(/Fase de publicação: (\d+)/)[1]);

  const seo = section(md, 4);
  const s5 = section(md, 5);
  const blocks = {};
  for (const m of s5.matchAll(/^### 5\.(\d) (.+)\n([\s\S]*?)(?=^### 5\.|(?![\s\S]))/gm)) {
    blocks[m[1]] = { heading: m[2].trim(), body: m[3] };
  }

  const hero = { h1: field(blocks[1].body, 'H1'), text: field(blocks[1].body, 'Texto') };
  const proof = blocks[2].body.trim().split(' · ');
  const content = ['3', '4', '5', '6', '7'].map((k) => parseBlock(blocks[k].heading, blocks[k].body));
  const finalCta = blocks[8].body.split('\n').find((l) => l.trim() && !l.startsWith('Botões:')).trim();
  const pageFooter = blocks[9].body.trim();

  const triage = [];
  for (const m of section(md, 6).matchAll(/^\| (?!Botão|---)(.+?) \| (\S+) \| (\S+) \|$/gm)) {
    triage.push({ label: m[1], situacao: m[2], href: m[3] });
  }
  const area = section(md, 7).match(/data-area="([^"]+)"/)[1];
  const jsonLd = JSON.parse(section(md, 8).match(/```json\n([\s\S]*?)```/)[1]);
  const links = [...section(md, 9).matchAll(/([^\n:·-][^:·\n]*?): `(\/[^`]+\/)`/g)].map((m) => ({
    label: m[1].trim(),
    path: m[2],
  }));

  return {
    num: Number(num),
    slug,
    name,
    fase,
    card: { title: CARDS[Number(num)]?.titulo ?? name, text: CARDS[Number(num)]?.descricao ?? '' },
    title: stripCount(field(seo, '`<title>`')),
    description: stripCount(field(seo, '`<meta name="description">`')),
    canonical: stripTicks(field(seo, 'Canonical')),
    h1: field(seo, 'H1 \\(único na página\\)'),
    keyword: field(seo, 'Palavra-chave principal'),
    hero,
    proof,
    content,
    finalCta,
    pageFooter,
    whatsapp: triage.filter((t) => t.situacao !== 'ligar'),
    phone: triage.find((t) => t.situacao === 'ligar'),
    area,
    jsonLd,
    links,
  };
}

export const pages = readdirSync(DIR)
  .filter((f) => f.endsWith('.CONTEXT.md'))
  .sort()
  .map(parseContext);

// Cards da seção "Áreas de Atuação": todos os números de cards-areas.json; slug só quando a página existe.
// Sem página (14–20), o card abre o WhatsApp com a área na mensagem, no padrão da triagem da home.
export const cards = Object.keys(CARDS).filter((k) => !k.startsWith('_')).map(Number).sort((a, b) => a - b)
  .map((num) => ({ num, slug: pages.find((p) => p.num === num)?.slug, title: CARDS[num].titulo, text: CARDS[num].descricao }));

export const cardLink = (c, base) => c.slug
  ? { href: `${base}/${c.slug}/` }
  : { href: `https://wa.me/5511970802600?text=${encodeURIComponent(`Olá, Dr. Lauro, vim pelo site: ${c.title}.`)}`,
      target: '_blank', rel: 'noopener', 'data-track': 'whatsapp_click', 'data-area': `card-${c.num}` };
