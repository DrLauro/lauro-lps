// Migração única (rodada de 22/10/2026): no schema.org, Attorney é organização (subtipo de LegalService),
// não pessoa. O nó do advogado nos 20 CONTEXT.md passa a ser Person com jobTitle; o resto do nó não muda.
// Idempotente: rodar de novo não altera nada. Uso: node scripts/migrar-person.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'contexts';
let alterados = 0;
for (const file of readdirSync(DIR).filter((f) => f.endsWith('.CONTEXT.md'))) {
  const path = join(DIR, file);
  const md = readFileSync(path, 'utf8');
  const novo = md.replace(/```json\r?\n([\s\S]*?)```/, (bloco, json) => {
    const ld = JSON.parse(json);
    ld['@graph'] = ld['@graph'].map((n) => {
      if (n['@type'] !== 'Attorney') return n;
      const { '@type': _, '@id': id, name, ...resto } = n;
      return { '@type': 'Person', '@id': id, name, jobTitle: 'Advogado criminalista', ...resto };
    });
    const eol = json.includes('\r\n') ? '\r\n' : '\n';
    return '```json' + eol + JSON.stringify(ld, null, 2).replace(/\n/g, eol) + eol + '```';
  });
  if (novo !== md) { writeFileSync(path, novo); alterados++; }
}
console.log(`${alterados} contextos migrados para Person`);
