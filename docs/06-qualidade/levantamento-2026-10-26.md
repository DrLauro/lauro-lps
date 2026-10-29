# Levantamento técnico: Google Ads, GTM, GA4 e site

_Coletado em 28/10/2026, entre 17h50 e 18h10 (Brasília), somente leitura. Evidências em `docs/06-qualidade/levantamento-2026-10-26/`._

Nada foi salvo, publicado, ativado ou aceito. A única interação além da leitura foi trocar filtros de visualização das tabelas do Google Ads: status "Todas" na lista de campanhas e 100 linhas por página. Isso muda só o que a tela mostra, não a conta. Nenhum token, cartão ou dado bancário aparece neste documento.

## 1. Google Ads

### 1.1 Login e contas

| Item | Valor | Evidência |
|---|---|---|
| Login usado no Playwright | dr.lauroneto@gmail.com (o mesmo do Chrome do escritório) | `ads-01-contas.png` |
| Contas acessíveis | 1: **Dr. Lauro Almeida Neto, 741-973-2901, Cancelada** | `ads-01-contas.png` |
| MCC | Nenhuma. O seletor só oferece essa conta e "Nova conta do Google Ads". | `ads-01-contas.png` |
| ID de conversão (tag) | AW-11034973115 (registrado em 23/10 em `docs/07-operacoes/observabilidade.md`) | — |

Até hoje nenhuma configuração foi feita nessa conta pelo Playwright. Em 23/10 a única mudança foi o filtro de visualização da lista de campanhas ("ativadas, pausadas"), que deixava o painel vazio. Hoje ele foi trocado para "Todas".

### 1.2 Campanhas (filtro "Todas", inclusive removidas)

Rascunhos em andamento: 0. Experimentos: nenhum encontrado.

| Campanha | Tipo | Status | Início | Término | Orçamento | Lance | Redes | Idioma | Locais | Programação |
|---|---|---|---|---|---|---|---|---|---|---|
| [LAN][LEAD][PESQUISA][CAPTAR WSAP][LP1 CRIMINALISTA] - MAX CONVERSÕES | Pesquisa | Removida | 15/04/2024 | — | R$ 80,00/dia | Maximizar conversões | Pesquisa do Google; Rede de Display | English; Português | Brazil | Todos os dias, 00:00–23:45 |
| Adv - Custódia/Criminal | Pesquisa | Removida | 27/01/2024 | — | R$ 50,00/dia | Maximizar cliques | Pesquisa do Google | Português | Raio de 2 km na Av. Alberto Ruffolo, 33, Jandira, mais 18 locais | Todos os dias |
| Search-4 | Pesquisa | Removida | 30/03/2026 | — | R$ 84,50/dia | Maximizar conversões | Pesquisa do Google; Parceiros de pesquisa; Rede de Display | Português | Barueri; Cotia; mais 14 | Todos os dias |
| Search-3 | Pesquisa | Removida | 30/03/2026 | — | R$ 84,50/dia | Maximizar conversões | Pesquisa do Google; Parceiros de pesquisa; Rede de Display | Português | Barueri; Cotia; mais 13 | Todos os dias |
| Audiência e Custódia | Smart | Removida | 07/07/2023 | — | R$ 9,70/dia (R$ 294,88/mês) | Maximizar cliques | Pesquisa do Google; Parceiros de pesquisa; Rede de Display | Todos os idiomas | 11 locais (a tabela mostra "null; null; mais 9") | Todos os dias |

Fonte: Campanhas → Configurações, tabela das 5 campanhas (`ads-02-campanhas-todas.png`, `ads-03-config-campanhas.png`). Nas 5, a rotação de anúncios é "Otimizar", não há ajuste de lance e o dispositivo é "Todos".

**Não coletado** (a tabela de Configurações não traz estas colunas, e as 5 campanhas estão removidas):
- orçamento compartilhado;
- limite de CPC ou tCPA;
- opção "Presença" ou "Presença ou interesse";
- AI Max, expansão de URL final, ativos automáticos e correspondência ampla no nível da campanha;
- metas de conversão específicas por campanha.

Para obtê-los é preciso abrir as configurações de cada campanha removida.

### 1.3 Grupos de anúncios e palavras-chave

| Campanha | Grupo | Status do grupo | Palavras-chave | Correspondência |
|---|---|---|---|---|
| Adv - Custódia/Criminal | Grupo de anúncios 1 (161236940787) | campanha removida | 52 | 35 ampla, 17 frase |
| [LAN]...[LP1 CRIMINALISTA] - MAX CONVERSÕES | Grupo de anúncios 1 (167941642304) | campanha removida | 21 | 19 ampla, 2 frase |
| Search-4 | Ad group 1 (197939125627) | campanha removida | 16 | 16 ampla |
| Search-3 | não encontrado | — | 0 | — |
| Audiência e Custódia (Smart) | não se aplica: campanha inteligente, sem grupos visíveis | — | — | — |

- **Total:** 89 palavras-chave, nenhuma de correspondência exata. Todas aparecem como "Não qualificada, A campanha foi removida".
- **Motivos extras de algumas palavras:**
  - "Baixo volume de pesquisas": 10 palavras;
  - "Raramente mostrado (baixo Índice de qualidade)": 5 palavras ("Audiência de Custódia", "Audiência de custódia", "advogado gratuito são paulo", "advogado em osasco" e "advocacia são paulo").
- **Lista completa:** texto, correspondência, campanha, grupo e status em `ads-palavras-chave.txt`.
- **URL final por palavra-chave:** a coluna aparece vazia ("—"). A URL final está nos anúncios (1.5).

### 1.4 Palavras-chave negativas

| Onde | Nível | Quantidade | Correspondência |
|---|---|---|---|
| [LAN]...[LP1 CRIMINALISTA] › Grupo de anúncios 1 | Grupo de anúncios | 67 | todas exatas |
| Adv - Custódia/Criminal | Campanha | 15 | 14 frase, 1 exata |
| Lista "Lista Negativa Lauro Criminalista" | Lista compartilhada | 100 termos | 93 exatas e 7 amplas ("quanto", "quanto custa", "quanto é", "de graça", "de gratis", "gratis", "gratuito") |

- A lista compartilhada está aplicada só à campanha [LAN]...[LP1 CRIMINALISTA]. Na conta não há negativas de nível conta ("Palavras-chave negativas: Nenhuma" em Configurações da conta).
- **Grupos de termos:**
  - nomes de outros advogados e escritórios;
  - "gratuito", "defensoria" e "público";
  - perguntas informativas ("o que é", "quanto ganha", "como processar");
  - outras áreas do direito (família, previdenciário, imobiliário).
- **Termos completos:** `ads-negativas.txt` e `ads-lista-negativa-lauro-criminalista.txt`.

### 1.5 Anúncios responsivos de pesquisa

Foram encontrados 4 anúncios, todos responsivos de pesquisa. Nenhum tem fixação; o campo aparece como "Nenhuma" em todos os recursos.

| Anúncio (ID) | Campanha | Status | Caminho exibido | Títulos | Descrições |
|---|---|---|---|---|---|
| 696686536467 | [LAN]...[LP1 CRIMINALISTA] | Pausada (campanha removida) | lauro.adv.br/criminalista | 15 | 4 |
| 697526492841 | [LAN]...[LP1 CRIMINALISTA] | Não qualificada (campanha removida) | lauro.adv.br/criminalista/osasco | 15 | 4 |
| 689057946870 | Adv - Custódia/Criminal | Não qualificada (campanha removida) | **criminal24adv.com/drlauro/dratamiris** | 15 | 4 |
| 802802493547 | Search-4 | Não qualificada (campanha removida) | lauro.adv.br | 3 | 2 |

- Cada título e cada descrição, com a contagem de caracteres, está em `ads-anuncio-1-LP1.txt`, `ads-anuncio-2-custodia.txt`, `ads-anuncio-3-LP1-osasco.txt` e `ads-anuncio-4-search4.txt`.
- Nenhum título passa de 30 caracteres e nenhuma descrição passa de 90.
- Reprovação: nenhum anúncio aparece como reprovado. Recursos de campanha com restrição de política estão listados em 1.6.
- **URL final completa:** não coletada. A tabela de anúncios mostra só o caminho exibido.
- **Termos encontrados nos anúncios:**
  - títulos: "Advogado (Recomendado)", "Advogado Renomado", "Advogado mais bem avaliado" e "Mais de 6 mil casos defendidos";
  - descrições: "Especialista em Direito Penal";
  - anúncio 689057946870: título "Dra Tamires Bagatim".

### 1.6 Recursos (ativos)

| Recurso | Nível | Texto | Status ou motivo |
|---|---|---|---|
| Ligação | Campanha (LP1 e Custódia) | (11) 97080-2600 | Não qualificada, campanha removida |
| Sitelinks LP1 | Campanha | "+6 mil Casos Defendidos", "Atendimento Rápido", "23 Anos de Experiência", "Fale Comigo Agora" | 3 dos 4 com **"Política (Ato criminoso na publicidade personalizada)"** |
| Sitelinks Custódia | Campanha | "Dr Lauro", "Dra Tamires" | Não qualificada |
| Frases de destaque LP1 | Campanha | 14, entre elas Atendimento 24h, Audiência de Custódia, Lei Maria da penha, Tráfico de drogas, Homicídio, Crimes Sexuais, Calúnia e Difamação | 3 com "Política (Ato criminoso na publicidade personalizada)" |
| Frases de destaque Custódia | Campanha | Advogado Criminalista, Atendimento 24h, Fale conosco agora, (11) 97080-2600 | 1 com a mesma política |
| Snippet estruturado | Campanha (LP1) | Serviços: Audiência de Custódia, Defesa Criminal, Habeas Corpus | Não qualificada |
| Nome da empresa | Campanha (LP1) | LAURO DE ALMEIDA NETO | Não qualificada |
| Logotipo | Conta e Campanha | 1180 × 1180 | Não qualificada |
| Imagens | Campanha (LP1) | 7 imagens (1080×565, 1080×1078, 853×448, 853×858 ×2, 853×853, 1280×665) | 2 com a mesma política |
| Mensagem/WhatsApp | — | não encontrado | procurado nos recursos dos 4 anúncios |
| Local | — | não encontrado | procurado nos recursos dos 4 anúncios |

- **URLs dos sitelinks:** não exibidas na tela de recursos (não coletadas).
- **Relatório de chamadas:** "O relatório de chamadas foi ativado" (Configurações da conta).
- **Programação da ligação:** não coletada.

### 1.7 Ações de conversão (15, status "Todos")

| Ação | Origem | Status | Otimização | Contagem | Janela de clique | Nas metas da conta |
|---|---|---|---|---|---|---|
| Calls from Smart Campaign Ads | Chamadas a partir de anúncios | Sem conversões recentes | Principal | Uma | 30 dias | Sim |
| Ligação Extensão Criminal #1 | Chamadas a partir de anúncios | Sem conversões recentes | Principal | Uma | 1 semana | Sim |
| Ligação Botão Criminal #1 | Cliques no número de telefone (fonte: "Chamadas a partir do site") | **Requer atenção** | Principal (Leads de chamada) | Uma | 30 dias | Sim |
| Ligação Número Site Criminal #1 | Site | **Removido** | Principal | Uma | 1 semana | Sim |
| Smart campaign ad clicks to call | Chamadas a partir de anúncios | Sem conversões recentes | Principal | Todas | 30 dias | Sim |
| Clicks to call | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |
| Smart campaign map clicks to call | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |
| Business profile - Call | Outro | Sem conversões recentes | Principal | Uma | 30 dias | Não |
| **Clique Botão WhatsApp Criminal** | **Site** | **Requer atenção** | Principal (Cliques de saída) | Uma | 30 dias | Sim |
| Business profile - Form | Outro | Sem conversões recentes | Principal | Uma | 30 dias | Não |
| Local actions - Directions | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |
| Smart campaign map directions | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |
| Business profile - Directions | Outro | Sem conversões recentes | Principal | Uma | 30 dias | Não |
| Local actions - Other engagements | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |
| Local actions - Website visits | Hospedado pelo Google | Sem conversões recentes | Principal | Todas | 30 dias | Não |

**Conversões de site:**
- "Clique Botão WhatsApp Criminal":
  - código do tipo de conversão 6792604791, criada em 15/04/2024;
  - fonte de dados "Lauro ADV - Criminal", evento manual (a tag do Google antiga);
  - conversões otimizadas "gerenciadas pela tag do Google";
  - janelas: visualização engajada de 3 dias, visualização de 1 dia;
  - rótulo AW-XXXX/rótulo não exibido na aba Configurações, não coletado.
- "Ligação Número Site Criminal #1": removida.
- Nenhuma vem de importação do GA4.

**Duração mínima da chamada:** não exibida em "Ligação Botão Criminal #1", que é do tipo cliques no número. Nas ações de chamadas a partir de anúncios, não coletada.

**Metas da conta:**
- "Enviar formulário de lead": 1 ação, Ativa, padrão da conta.
- "Lead telefônico": 3 ações, **Requer atenção**, padrão da conta.
- "Contato": 4 ações, Ativa.
- "Ver rota": 3 ações, Ativa.
- "Engajamento": 1 ação, Ativa, padrão da conta.
- "Clique de saída": 1 ação, **Requer atenção**, padrão da conta.
- "Visualização de página": 1 ação, Ativa.
- Metas personalizadas: 3, não abertas.

Evidências: `ads-05-metas.png`, `ads-06-acoes-conversao.png` e `ads-07-conv-whatsapp.png`.

### 1.8 Vínculos

| Item | Valor | Evidência |
|---|---|---|
| GA4 vinculado | Nenhum. Na propriedade do GA4, "Contas vinculadas do Google Ads": Concluídas 0, Aprovação necessária 0, Solicitação enviada 0, Canceladas 0. | `ga4-04-vinculo-ads.png` |
| Importação de eventos do GA4 | Nenhuma: nenhuma ação de conversão tem origem GA4 | `ads-06-acoes-conversao.png` |
| Marcação automática (auto-tagging) | **Ligada** ("Codificação automática: Sim") | `ads-08-config-conta.png` |

### 1.9 Faturamento

| Item | Valor |
|---|---|
| Status | Conta **cancelada em 29/06/2026** |
| Motivo do cancelamento | não aparece na tela de Resumo |
| Forma de pagamento | **Nenhuma cadastrada** ("Nenhuma forma de pagamento") |
| Como paga | **Pós-pagamento** (pagamento automático), não manual/Pix pré-pago |
| Pagador | LAURO DE ALMEIDA NETO |
| Perfil de pagamentos | Apelido "Pay Conta - Lauro ADV Criminal" (ID omitido), 1 usuário |
| Saldo pré-pago e orçamento da conta | não se aplica a pós-pagamento; não encontrado |
| Movimento | Outubro/2026: custo líquido R$ 0,00 e **pagamentos R$ 1.438,31**. Janeiro a setembro/2026: R$ 0,00 de custo e pagamento. |

Evidência: `ads-09-faturamento-resumo.png`. A tela de Configurações de faturamento não foi fotografada porque mostra o ID do perfil de pagamentos; os valores foram transcritos acima.

### 1.10 Recomendações

| Item | Valor |
|---|---|
| Aplicação automática | **Desativada** ("Desativado. Use a aplicação automática para otimizar a performance e economizar tempo.") |
| Tipos ligados | nenhum |
| Outras configurações da conta | Priorização de canais "todos com prioridade alta"; Anúncios de alto engajamento desativado; termos de anúncios de formulário de lead aceitos; lista de clientes com lances inteligentes e segmentação otimizada ativados |

Evidência: `ads-08-config-conta.png`.

## 2. Tag Manager (GTM-5V9CSW5J)

### 2.1 Versão

| Item | Valor |
|---|---|
| Versão ativa | **3**, "v2 - tags so com consentimento", publicada em 23/10/2026 por dr.lauroneto@gmail.com |
| Versões anteriores | 2 "v1 - GA4 + vinculador de conversões" (23/10); 1 "Empty Container" (23/10) |
| Alterações não publicadas | **0** (Espaço de trabalho 4: 0 modificadas, 0 adicionadas, 0 excluídas) |
| Conteúdo | 3 tags, 3 acionadores, 4 variáveis |

Evidência: `gtm-01-versoes.png`. O contêiner publicado é o de `docs/07-operacoes/gtm-container.json`, importado sem mudança.

### 2.2 Tags, acionadores e variáveis

| Tag | Tipo | IDs e parâmetros | Acionador | Consentimento |
|---|---|---|---|---|
| Google tag - GA4 | Tag do Google (`googtag`) | `G-WL6VECX5F6` | Initialization - All Pages | exige `analytics_storage` |
| GA4 - evento de contato e blog | Evento do GA4 (`gaawe`) | nome do evento `{{Event}}`; ID de medição `G-WL6VECX5F6`; parâmetros `area`, `situacao`, `secao` e `pagina` | CE - whatsapp_click, CE - phone_click, CE - blog_click | exige `analytics_storage` |
| Vinculador de conversões | Vinculador de conversões (`gclidw`) | domínio cruzado, passagem de URL e cookies personalizados desligados | All Pages | exige `ad_storage` |

| Acionador | Tipo | Condição |
|---|---|---|
| CE - whatsapp_click | Evento personalizado | `{{_event}}` igual a `whatsapp_click` |
| CE - phone_click | Evento personalizado | `{{_event}}` igual a `phone_click` |
| CE - blog_click | Evento personalizado | `{{_event}}` igual a `blog_click` |

| Variável | Tipo |
|---|---|
| DLV - area / DLV - situacao / DLV - secao / DLV - pagina | Variável da camada de dados, versão 2, sem valor padrão |
| Integradas | Event, Page URL, Page Path |

Evidência: `gtm-02-tags.png` e `docs/07-operacoes/gtm-container.json`.

### 2.3 Tag do Google Ads

- **Não existe tag de conversão do Google Ads** no contêiner (nenhuma tag `awct`, nenhum `AW-`).
- **Existe o vinculador de conversões.** Ele só dispara com `ad_storage` concedido, ou seja, depois de "Aceitar" ou de "Publicidade" marcada em "Configurar" no banner. O vinculador não carrega nenhum `AW-`: ele só grava o cookie `_gcl_*` com o `gclid`. Por isso nenhuma tag `AW-` aparece em produção.
- Conferido no HTML de produção em 28/10: o único ID presente é `GTM-5V9CSW5J`. Nenhum `AW-` e nenhum `G-` fixo no código.

### 2.4 Captura de `area`, `situacao`, `secao` e `pagina`

1. Todo link de contato tem `data-track`, `data-area`, `data-situacao` e `data-secao`.
2. Um script no fim do `BaseLayout` escuta os cliques, pega o elemento com `data-track` mais próximo e faz `dataLayer.push({ event, area, situacao, secao, pagina })` (`src/layouts/BaseLayout.astro`, linhas 122 a 127). O push acontece com ou sem consentimento.
3. No GTM, as quatro variáveis da camada de dados leem essas chaves.
4. O acionador de evento personalizado dispara pelo nome do evento.
5. A tag de evento do GA4 envia os quatro parâmetros. Ela só sai com `analytics_storage` concedido.

## 3. GA4 (G-WL6VECX5F6)

| Item | Valor | Evidência |
|---|---|---|
| Conta e propriedade | Conta "Dr. Lauro Neto", propriedade "Dr. Lauro" (`a377565314p516246391`) | `ga4-01-eventos-principais.png` |
| Fluxo de dados | Web "Meu Negócio", URL do fluxo **https://www.lauro.adv.br**, código 13126515431, ID `G-WL6VECX5F6`; "Recebendo tráfego nas últimas 48 horas" | `ga4-06-fluxo.png` |
| Métrica otimizada | ligada: visualizações de página, rolagens, cliques de saída e mais 4 | `ga4-06-fluxo.png` |
| Eventos principais marcados | `close_convert_lead`, `purchase` e `qualify_lead`, os padrões do GA4, todos sem dados. **`whatsapp_click` e `phone_click` não estão marcados.** | `ga4-01-eventos-principais.png` |
| Eventos recebidos (últimos 28 dias) | `first_visit`, `phone_click`, `session_start`, `whatsapp_click`. **`page_view` não aparece.** | `ga4-02-eventos-recentes.png` |
| Números da página inicial (7 dias) | 2 usuários ativos (Osasco, Direct), 8 eventos, **0 visualizações**, 0 eventos principais | `ga4-03-pagina-inicial-7dias.png` |
| Vínculo com o Google Ads | **Nenhum** | `ga4-04-vinculo-ads.png` |
| Dimensões personalizadas | `area`, `secao` e `situacao`, escopo Evento, criadas em 23/10/2026 | `ga4-05-dimensoes.png` |

## 4. Código e publicação

### 4.1 Commits e tarefas

`git log --oneline -30`:

```
789e6c6 docs: avaliações do Google pela Places API no lugar do Trustindex
4d1444d feat: nota e total de avaliações do Google na faixa de prova, lidos no build pela Places API (sem chave, mantém o texto atual)
1d15b1a docs: Trustindex conectado ao Perfil da Empresa; widget criado, plano em decisão
dd48e46 docs: nenhum bug aberto
2e016e2 docs: briefing da campanha do Google Ads para o estrategista; pendências de conteúdo encerradas
ee2a92d feat: GTM versão 3 (tags só com consentimento), dimensões do GA4 e validação em produção
6141caa feat: GTM GTM-5V9CSW5J com GA4 e vinculador de conversões; contêiner versionado em docs
50c859b docs: painel administrativo com login funcionando
b90e29d chore: repositório na conta DrLauro (painel e preview)
647e777 t10: lauro.adv.br no ar pela Cloudflare, workers.dev desligado; OAuth App e Worker de login do painel
d1bf7fa docs: copys, status e bugs da rodada de 22/10
35cd72d perf: pré-carrega as fontes do topo (CLS da home de 0,36 para 0,01) e relatórios do Lighthouse
ac89d6a fix: título de artigo antigo sem as iniciais da parte e verificação de dado identificável no HTML
135118b t9: artigos do site com área, jusbrasilId e rascunho; interno substitui o link do Jusbrasil; Outros temas no fim do /blog/
a6a15c8 t8: banner de cookies com Modo de Consentimento do Google, GTM pelo deploy e documentação da medição
981f56f t7: advogado como Person, página 404, cabeçalhos HTTP, noindex por PUBLIC_ENV, canonical de especialidades e robots sem /admin/
6cde3f2 t6: menu do site, cabeçalho fixo com WhatsApp, contato em /blog/ e /especialidades/, endereço com mapa e Como chegar
dc58eaa t5: casos das áreas com link Ler artigo para a publicação
009282e t4: aviso 190/180, link para vítimas, texto de ofensas digitais e nome Crimes Contra a Honra e Ofensas Digitais
ff9174e t3: crimes digitais focada em invasão, dados e prova digital; golpes focada em Pix e fraudes
83e238e t2: serviços das 20 áreas como lista, um serviço completo por linha
ad6d241 t1: mensagens neutras nos botões genéricos de WhatsApp e data-secao na medição
ae09aaa style: texto da política de privacidade justificado a partir de 768px
4c146f9 docs: copys das páginas 14 a 20
2f66d8c feat: páginas 14 a 20 e ajuste da página de crimes complexos
83532fc feat: página de política de privacidade no endereço do site antigo
90f876d docs: DNS da Cloudflare preparado para a troca de nameservers
6e85f25 ci: deploy de produção no Cloudflare Workers
2bf8390 feat: 20 cards de áreas de atuação com a redação do documento do cliente
8874ce4 feat: ajustes do PRD consolidado (parte A) e redirecionamento do site antigo
```

`git status`: só a pasta `me-guie/`, sem rastreamento, de fora deste trabalho. Mais esta entrega (este arquivo e a pasta de evidências), ainda sem commit.

| Tarefa | Situação | Commit |
|---|---|---|
| T1 Mensagens neutras + `data-secao` | feito | `ad6d241` |
| T2 Serviços em lista | feito | `83e238e` |
| T3 Crimes Digitais × Golpes | feito | `ff9174e` |
| T4 Aviso 190/180, vítimas, Ofensas Digitais | feito | `009282e` |
| T5 Casos com "Ler artigo" | feito; vínculos confirmados pelo Dr. Lauro em 23/10 | `dc58eaa` |
| T6 Menu, cabeçalho, contato, mapa | feito | `6cde3f2` |
| T7 Person, 404, cabeçalhos, noindex, robots | feito | `981f56f` |
| T8 Banner de cookies + Modo de Consentimento | feito; GTM em modo básico na versão 3 | `a6a15c8`, `ee2a92d` |
| T9 Artigos dentro do site | feito | `135118b` |
| T10 Domínio definitivo | feito | `647e777` |

### 4.2 Verificações

| Comando | Saída |
|---|---|
| `npm run check` | `ok: 20 contextos coerentes` |
| `npm run build` (com `PUBLIC_ENV=production` e `PUBLIC_GTM_ID=GTM-5V9CSW5J`) | `25 page(s) built` · `Complete!` |
| `npm run check:dist` | `ok: 25 páginas conferidas em dist/` |

### 4.3 Deploy de produção

| Nome | Tipo | Definida? |
|---|---|---|
| `PUBLIC_ENV` | fixa no workflow (`production`) | sim |
| `PUBLIC_GTM_ID` | variável do repositório | sim (`GTM-5V9CSW5J`, atualizada em 23/10/2026) |
| `GOOGLE_PLACES_KEY` | secret do repositório | **não** (só `CLOUDFLARE_API_TOKEN` aparece em `gh secret list`) |
| `CLOUDFLARE_API_TOKEN` | secret do repositório | sim (gravado em 21/10/2026) |
| `CLOUDFLARE_ACCOUNT_ID` | fixa no workflow | sim |

- **Gatilhos:** push na `main`, manual e diário às 09:00 UTC (06:00 Brasília).
- **Últimas 5 execuções:** 24/10 a 28/10, todas pelo agendamento diário e todas com sucesso.

`wrangler.jsonc`:

```jsonc
{
  "name": "lauro-adv-br",
  "compatibility_date": "2026-10-01",
  "workers_dev": false,
  "assets": { "directory": "./dist", "html_handling": "auto-trailing-slash", "not_found_handling": "404-page" }
}
```

O campo `workers_dev` está `false`.

### 4.4 URLs publicadas

As 24 URLs do `sitemap-0.xml` de produção responderam HTTP 200 em 28/10. A coluna "Triagem" conta os botões com `data-secao="triagem"` no HTML.

| URL | Triagem própria (WhatsApp) |
|---|---|
| / | sim (6 opções) |
| /blog/ | não |
| /especialidades/ | não |
| /politicas-de-privacidade/ | não |
| /crimes-ambientais/ | sim (5) |
| /crimes-complexos/ | sim (5) |
| /crimes-contra-a-administracao-publica/ | sim (5) |
| /crimes-de-armas-de-fogo/ | sim (5) |
| /crimes-de-transito/ | sim (5) |
| /crimes-digitais/ | sim (5) |
| /crimes-economicos-e-financeiros/ | sim (5) |
| /crimes-patrimoniais/ | sim (5) |
| /crimes-sexuais/ | sim (5) |
| /crimes-tributarios/ | sim (5) |
| /execucao-penal/ | sim (5) |
| /golpes-e-fraudes-digitais/ | sim (5) |
| /habeas-corpus/ | sim (5) |
| /lei-maria-da-penha/ | sim (5) |
| /ofensas-digitais/ | sim (5) |
| /prisao-em-flagrante/ | sim (5) |
| /recursos-e-revisao-criminal/ | sim (5) |
| /sou-vitima/ | sim (5) |
| /trafico-de-drogas/ | sim (5) |
| /tribunal-do-juri/ | sim (5) |

A página 404 existe, mas fica fora do sitemap.

### 4.5 Token da Cloudflare

**Não.** O secret `CLOUDFLARE_API_TOKEN` foi gravado em 21/10/2026 e não foi alterado depois. Os deploys diários continuam passando com ele, e não há registro de revogação nos documentos (`docs/07-operacoes/deploy-e-ambientes.md`).

## Divergências encontradas

1. **Conta do Google Ads:**
   - cancelada desde 29/06/2026;
   - sem forma de pagamento;
   - configurada como **pós-pagamento automático**, não pré-pago por Pix.
2. **Pagamento em outubro:** consta um pagamento de R$ 1.438,31 em outubro/2026, com custo líquido de R$ 0,00 no mesmo mês. A origem não foi identificada na tela de Resumo.
3. **Ação de conversão de site já existente:** "Clique Botão WhatsApp Criminal".
   - É uma ação de site, Principal, com status "Requer atenção", ligada à tag antiga "Lauro ADV - Criminal".
   - O briefing de 23/10 (`docs/05-marketing/briefing-campanha-google-ads.md`) dizia que nenhuma ação de conversão media o site. Essa afirmação está errada.
4. **Status "Requer atenção":**
   - ação "Ligação Botão Criminal #1";
   - metas "Lead telefônico" e "Clique de saída".
5. **Nenhuma tag de conversão do Google Ads no GTM.** O site não envia conversão ao Ads; só o vinculador grava o `gclid`, e apenas com consentimento de publicidade.
6. **GA4 e Ads sem vínculo** entre si.
7. **Eventos principais do GA4:** `whatsapp_click` e `phone_click` ainda não estão marcados, embora já apareçam em "Eventos recentes".
8. **GA4 sem `page_view`:** nenhum `page_view` nos últimos 28 dias e 0 visualizações nos últimos 7 dias. Os eventos de clique chegaram, e a coleta só ocorre com consentimento. A causa não foi investigada neste levantamento.
9. **URL do fluxo do GA4:** `https://www.lauro.adv.br`, enquanto o site canônico é `https://lauro.adv.br` (o www redireciona com 301).
10. **Places API:** o secret `GOOGLE_PLACES_KEY` não existe. A faixa de prova continua com o texto "Avaliações no Google".
11. **Anúncio de outro domínio:** o anúncio da campanha "Adv - Custódia/Criminal" usava o domínio `criminal24adv.com/drlauro/dratamiris` e o título "Dra Tamires Bagatim".
12. **Restrição de política em recursos antigos:** "Política (Ato criminoso na publicidade personalizada)" em sitelinks, frases de destaque e imagens.
13. **Termos nos anúncios antigos:** "Advogado Renomado", "Advogado mais bem avaliado", "Advogado (Recomendado)", "Especialista em Direito Penal" e "Mais de 6 mil casos defendidos".
14. **Campanhas antigas abertas além da busca:**
    - Display ligado em 4 das 5 campanhas;
    - LP1 com idioma inglês e localização "Brazil" inteiro.
15. **Itens não coletados nas campanhas removidas:**
    - Presença ou interesse, AI Max, expansão de URL, ativos automáticos e correspondência ampla no nível da campanha;
    - orçamento compartilhado e limite de CPC ou tCPA;
    - URLs finais completas dos anúncios e sitelinks;
    - rótulo da conversão de site;
    - duração mínima das ações de chamada;
    - conteúdo das 3 metas personalizadas.
