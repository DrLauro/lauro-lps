# Status atual

_Atualizado em 28/10/2026, na etapa 1 do lançamento da campanha de Pesquisa._

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

Sem impeditivos técnicos. Site em lauro.adv.br, painel com login, GTM `GTM-5V9CSW5J` com GA4 e banner de cookies validados em produção. Desde 28/10 o ID de medição é `G-MMG8ZNG0P6` (ver Lançamento da campanha).

**Atenção comercial:** a conta do Google Ads (`AW-11034973115`) está **cancelada**; nenhum anúncio roda. As conversões do Ads (WhatsApp e ligação pelo site) entram no GTM quando a conta for reativada. Ver `docs/07-operacoes/observabilidade.md`.

Painel administrativo resolvido em 23/10/2026: login pelo GitHub em https://lauro.adv.br/admin/ funcionando (OAuth App na conta DrLauro, Worker `lauro-cms-auth` em `auth.lauro.adv.br`, repositório `DrLauro/lauro-lps`). Para editar, a conta precisa ser dona ou colaboradora com push no repositório. Recomendado: gerar um Client secret novo (o atual foi colado no chat) e gravar com `wrangler secret put GITHUB_CLIENT_SECRET`.

## Lançamento da campanha de Pesquisa (28/10/2026)

Especificação aprovada pelo estrategista, baseada em `docs/06-qualidade/levantamento-2026-10-26.md`. Evidências em `docs/06-qualidade/lancamento-2026-10-28/`.

| Etapa | Situação |
|---|---|
| 1. Medição (GTM e GA4) | **feita.** O GA4 recebia zero `page_view`. Causa: o fluxo antigo (`G-WL6VECX5F6`) foi combinado com a tag antiga do Ads e o script dele responde 404. Solução: fluxo novo `G-MMG8ZNG0P6` na mesma propriedade, banner com `consent_update` e GTM versão 5 ("v4.1"). Três cenários de consentimento testados em produção. `whatsapp_click` e `phone_click` são eventos principais. Detalhes em `etapa-1-medicao.md` |
| 2. Conta do Google Ads | aguarda o Dr. Lauro na aba: conferir o pagamento de R$ 1.438,31 de outubro, reativar e ver se a conta aceita pré-pago por Pix (até R$ 600,00) |
| 3. Conversões e tags do Ads | depende da etapa 2 (o ID AW- muda se a conta for nova) |
| 4. Campanha pausada | depende da etapa 3 e do CSV `campanha_v5_60dia_10dias_google_ads_editor.csv` |
| 5. Revisão final | depende da etapa 4 |
| 6. Ativação | só com o "pode ativar" escrito do Dr. Lauro |

## Pendências com material necessário

- Vínculos dos casos de Execução Penal e Recursos com as publicações do Jusbrasil: **confirmados** pelo Dr. Lauro (23/10).
- Textos integrais dos artigos: **não serão hospedados por enquanto**; o /blog/ segue com os links do Jusbrasil (T9 pronta se mudar).
- Casos das páginas 14 a 19: **concluído**, ficam como estão.
- Avaliações do Google sem Trustindex (decisão de 23/10): nota e total lidos no build pela Places API (New), `src/lib/avaliacoes.mjs`, rebuild diário. Projeto Google Cloud `lauro-adv-br` criado e Places API pedida; **falta ativar o faturamento** (conta da dr.lauroneto, uso estimado dentro da cota gratuita) e gravar a chave no secret `GOOGLE_PLACES_KEY` do GitHub. Sem a chave, a faixa segue com "Avaliações no Google". O widget do Trustindex criado no teste (842952) não é usado.
- Google Ads: as 5 campanhas antigas já estavam removidas (estado final; o painel agora filtra ativadas e pausadas). Campanha nova do zero com o estrategista: briefing em `docs/05-marketing/briefing-campanha-google-ads.md`. Reativar a conta é decisão do Dr. Lauro.
