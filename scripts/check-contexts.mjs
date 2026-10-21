// Confere que o parser leu cada CONTEXT.md por inteiro e que o contexto é coerente consigo mesmo
// (o FAQ do JSON-LD precisa ser idêntico ao exibido — exigência da seção 8).
import assert from 'node:assert/strict';
import { pages } from '../src/lib/contexts.mjs';

assert.equal(pages.length, 13, '13 páginas');
for (const p of pages) {
  const at = (msg) => `${p.slug}: ${msg}`;
  assert.equal(p.hero.h1, p.h1, at('H1 do hero ≠ H1 da seção 4'));
  assert.equal(p.canonical, `https://lauro.adv.br/${p.slug}/`, at('canonical'));
  assert.ok(p.whatsapp.length >= 3 && p.phone?.href === 'tel:+5511970802600', at('triagem'));
  assert.ok(p.whatsapp.every((w) => w.href.startsWith('https://wa.me/5511970802600?text=')), at('link wa'));
  assert.equal(p.proof.length, 5, at('proof bar'));
  assert.deepEqual(p.content.map((b) => b.kind).filter((k) => k !== 'list' && k !== 'prose'), ['chips', 'cases', 'faq'], at('blocos'));

  const graph = p.jsonLd['@graph'];
  const page = graph.find((n) => n['@type'] === 'WebPage');
  assert.equal(page.name, p.title, at('title ≠ JSON-LD'));
  assert.equal(page.description, p.description, at('description ≠ JSON-LD'));
  const faq = p.content.find((b) => b.kind === 'faq').items;
  const ld = graph.find((n) => n['@type'] === 'FAQPage').mainEntity;
  assert.deepEqual(faq.map((f) => [f.q, f.a]), ld.map((q) => [q.name, q.acceptedAnswer.text]), at('FAQ ≠ JSON-LD'));
  for (const b of p.content) assert.ok(b.kind === 'cases' || b.items.length, at(`bloco vazio: ${b.h2}`));
}
console.log(`ok: ${pages.length} contextos coerentes`);
