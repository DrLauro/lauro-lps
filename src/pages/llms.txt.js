import { pages } from '../lib/contexts.mjs';

export const GET = () =>
  new Response(
    [
      '# Dr. Lauro de Almeida Neto – Advogado Criminalista',
      '',
      '> Advogado criminalista, OAB/SP 210.212, mais de 23 anos de atuação em Direito Penal e Processo Penal. Atendimento 24 horas, presencial em Osasco e São Paulo e online em todo o Brasil. WhatsApp e telefone: (11) 97080-2600.',
      '',
      '## Áreas de atuação',
      '',
      ...pages.map((p) => `- [${p.name}](${p.canonical}): ${p.description}`),
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
