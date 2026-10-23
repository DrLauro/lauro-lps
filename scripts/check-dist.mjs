// Confere o HTML gerado (rodar depois do build): links de WhatsApp, medição e SEO técnico.
// Uso: npm run build && npm run check:dist
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const htmlFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
  d.isDirectory() ? htmlFiles(join(dir, d.name)) : d.name === 'index.html' ? [join(dir, d.name)] : []);

const erros = [];
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const PALAVRAS = ['vítima', 'acusado', 'preso', 'intimad', 'condenad', 'golpe'];

const files = htmlFiles(DIST);
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const page = '/' + relative(DIST, file).replace(/\\/g, '/').replace(/index\.html$/, '');
  const err = (msg) => erros.push(`${page}: ${msg}`);

  if (html.includes('Caso publicado no Jusbrasil')) err('caso com "(Caso publicado no Jusbrasil do Dr. Lauro.)" em vez do link');
  for (const tag of html.match(/<[a-z]+\b[^>]*>/g) ?? []) {
    const href = decode(attr(tag, 'href') ?? '');
    if (/wa\.me/.test(href)) {
      if (!href.startsWith('https://wa.me/5511970802600?text=')) err(`link de WhatsApp com outro número: ${href}`);
      if (attr(tag, 'data-situacao') === 'contato-geral') {
        // O nome da página ("Golpes e Fraudes Digitais", "Sou Vítima de um Crime") não presume nada sobre quem clica.
        const msg = decodeURIComponent(href.split('?text=')[1] ?? '').toLowerCase().replace(/na página .+?, e gostaria/, '');
        const achou = PALAVRAS.find((w) => msg.includes(w));
        if (achou) err(`mensagem de contato geral presume a situação ("${achou}"): ${msg}`);
      }
    }
    if (attr(tag, 'data-track') && !attr(tag, 'data-secao')) err(`data-track sem data-secao: ${tag.slice(0, 120)}`);
  }
}

const pagina = (path) => readFileSync(join(DIST, path, 'index.html'), 'utf8');
for (const slug of ['lei-maria-da-penha', 'sou-vitima']) {
  const html = pagina(slug);
  if (!/class="triage__aviso"/.test(html) || !html.includes('href="tel:190"') || !html.includes('href="tel:180"')) erros.push(`/${slug}/: sem aviso de emergência 190/180`);
}
for (const slug of ['lei-maria-da-penha', 'golpes-e-fraudes-digitais', 'ofensas-digitais', 'crimes-sexuais', 'tribunal-do-juri']) {
  if (!/class="triage__vitima" href="[^"]*\/sou-vitima\/"/.test(pagina(slug))) erros.push(`/${slug}/: sem link para /sou-vitima/`);
}

if (erros.length) {
  console.error(erros.join('\n'));
  process.exit(1);
}
console.log(`ok: ${files.length} páginas conferidas em ${DIST}/`);
