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
| T7 Person no JSON-LD, 404, `_headers`, noindex por `PUBLIC_ENV`, robots | feito (`workers_dev: false` entrou com a T10) | `981f56f` |
| T8 Banner de cookies + Modo de Consentimento | feito; validado em produção em 23/10 (`docs/06-qualidade/screenshots/2026-10-23-validacao-gtm.md`) | `a6a15c8` |
| T9 Estrutura de artigos dentro do site | feito | `135118b` |
| Extra: iniciais de parte em título de artigo antigo | corrigido + verificação automática | `ac89d6a` |
| Extra: CLS da home (troca de fonte) | corrigido, Performance 99 | ver git log |
| T10 Domínio definitivo | feito em 23/10: lauro.adv.br no ar pela Cloudflare, www com 301, HTTPS, 24 páginas do sitemap com 200, 404 personalizada, e-mail (MX/SPF) preservado, workers.dev desligado | ver git log |

Lighthouse mobile (build de produção, 22/10): home e /lei-maria-da-penha/ com 99 em Performance e 100 em Acessibilidade, Boas práticas e SEO. Relatórios em `docs/06-qualidade/lighthouse/`.

## Lançamento (23/10/2026)

Sem impeditivos técnicos. Site em lauro.adv.br, painel com login, GTM `GTM-5V9CSW5J` com GA4 (`G-WL6VECX5F6`) e banner de cookies validados em produção.

**Atenção comercial:** a conta do Google Ads (`AW-11034973115`) está **cancelada**; nenhum anúncio roda. As conversões do Ads (WhatsApp e ligação pelo site) entram no GTM quando a conta for reativada. Ver `docs/07-operacoes/observabilidade.md`.

Painel administrativo resolvido em 23/10/2026: login pelo GitHub em https://lauro.adv.br/admin/ funcionando (OAuth App na conta DrLauro, Worker `lauro-cms-auth` em `auth.lauro.adv.br`, repositório `DrLauro/lauro-lps`). Para editar, a conta precisa ser dona ou colaboradora com push no repositório. Recomendado: gerar um Client secret novo (o atual foi colado no chat) e gravar com `wrangler secret put GITHUB_CLIENT_SECRET`.

## Pendências com material necessário

- Vínculos dos casos de Execução Penal e Recursos com as publicações do Jusbrasil: **confirmados** pelo Dr. Lauro (23/10).
- Textos integrais dos artigos: **não serão hospedados por enquanto**; o /blog/ segue com os links do Jusbrasil (T9 pronta se mudar).
- Casos das páginas 14 a 19: **concluído**, ficam como estão.
- ID do widget do Trustindex.
- Marcar `whatsapp_click` e `phone_click` como eventos principais no GA4 (a partir de 24/10, quando o GA4 listar os eventos).
- Google Ads: as 5 campanhas antigas já estavam removidas (estado final; o painel agora filtra ativadas e pausadas). Campanha nova do zero com o estrategista: briefing em `docs/05-marketing/briefing-campanha-google-ads.md`. Reativar a conta é decisão do Dr. Lauro.
