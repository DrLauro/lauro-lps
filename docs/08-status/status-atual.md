# Status atual

_Atualizado em 22/10/2026, ao fim da rodada de ajustes do estrategista de marketing._

## No ar

- Produção: https://lauro.adv.br (Cloudflare Worker, deploy automático a cada push na `main`). Domínio na Cloudflare desde 23/10/2026.
- Preview com noindex: https://drlauro.github.io/lauro-lps/
- 20 páginas de área, home, /especialidades/, /blog/, política de privacidade e página 404.

## Rodada de 22/10/2026

| Tarefa | Situação | Commit |
|---|---|---|
| T1 Mensagens neutras nos botões genéricos de WhatsApp + `data-secao` | feito | `ad6d241` |
| T2 Serviços em lista, um por linha (20 páginas) | feito | `83e238e` |
| T3 Crimes Digitais × Golpes sem canibalização | feito | `ff9174e` |
| T4 Aviso 190/180, link para vítimas, texto de Ofensas Digitais, nome "Crimes Contra a Honra e Ofensas Digitais" | feito | `009282e` |
| T5 Casos com "Ler artigo" | feito (2 vínculos a confirmar, ver pendências) | `dc58eaa` |
| T6 Menu, cabeçalho fixo, contato em /blog/ e /especialidades/, mapa e "Como chegar" | feito | `6cde3f2` |
| T7 Person no JSON-LD, 404, `_headers`, noindex por `PUBLIC_ENV`, robots | feito (exceto `workers_dev: false`, que vai com a T10) | `981f56f` |
| T8 Banner de cookies + Modo de Consentimento | feito; validação no Tag Assistant aguarda o ID do GTM | `a6a15c8` |
| T9 Estrutura de artigos dentro do site | feito | `135118b` |
| Extra: iniciais de parte em título de artigo antigo | corrigido + verificação automática | `ac89d6a` |
| Extra: CLS da home (troca de fonte) | corrigido, Performance 99 | ver git log |
| T10 Domínio definitivo | feito em 23/10: lauro.adv.br no ar pela Cloudflare, www com 301, HTTPS, 24 páginas do sitemap com 200, 404 personalizada, e-mail (MX/SPF) preservado, workers.dev desligado | ver git log |

Lighthouse mobile (build de produção, 22/10): home e /lei-maria-da-penha/ com 99 em Performance e 100 em Acessibilidade, Boas práticas e SEO. Relatórios em `docs/06-qualidade/lighthouse/`.

## Impeditivos para o lançamento final

1. **ID do GTM** (`GTM-XXXXXXX`). Sem ele não há medição de conversão nem banner de cookies. Configuração em `docs/07-operacoes/observabilidade.md`.

Painel administrativo resolvido em 23/10/2026: login pelo GitHub em https://lauro.adv.br/admin/ funcionando (OAuth App na conta DrLauro, Worker `lauro-cms-auth` em `auth.lauro.adv.br`, repositório `DrLauro/lauro-lps`). Para editar, a conta precisa ser dona ou colaboradora com push no repositório. Recomendado: gerar um Client secret novo (o atual foi colado no chat) e gravar com `wrangler secret put GITHUB_CLIENT_SECRET`.

## Pendências com material necessário

- Confirmar os vínculos de dois casos com as publicações do Jusbrasil (o Jusbrasil bloqueia leitura automática):
  - Execução Penal, "Pena reduzida no STJ depois da condenação definitiva": ligado a 6996129713 ("Habeas Corpus substitutivo de revisão criminal? E quando há ilegalidade manifesta?").
  - Recursos, "Condenação definitiva corrigida no STJ": ligado a 6607932795 ("HC substitutivo de revisão criminal: STJ concede ordem de ofício").
  - Se estiverem trocados, inverter as linhas `Publicação:` nos dois CONTEXT.md.
- Textos integrais dos artigos para hospedar no site (T9 pronta para recebê-los).
- Casos das páginas 14 a 19.
- ID do widget do Trustindex.
- Validação do GTM no Tag Assistant e prints em `docs/06-qualidade/screenshots/` (depende do ID).
