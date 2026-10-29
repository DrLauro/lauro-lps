# Briefing para a campanha do Google Ads

_Para: estrategista de marketing. Preparado em 23/10/2026, com o estado real do site, do GTM, do GA4 e da conta do Google Ads._

A ideia deste documento é você saber exatamente o que já está pronto e o que falta, para montar a campanha do zero conforme o planejamento feito com o Dr. Lauro. Onde houver diferença entre este documento e o planejamento, vale o planejamento: aponte a diferença e a gente ajusta o site ou a medição.

## 1. Situação em uma frase

O site está no ar em **https://lauro.adv.br** com 20 páginas de área, a medição de contato (WhatsApp e ligação) está funcionando no GTM e no GA4, e a **conta do Google Ads está cancelada e sem campanhas**: a campanha nasce do zero.

## 2. Contas e acessos

Tudo na conta Google **dr.lauroneto@gmail.com**.

| Ferramenta | Identificação | Situação |
|---|---|---|
| Google Ads | conta "Dr. Lauro Almeida Neto", ID de conversão `AW-11034973115` | **Cancelada** (aviso "sua conta foi cancelada", botão Reativar). Precisa reativar e conferir o faturamento antes de qualquer campanha. |
| Google Tag Manager | conta "Lauro Neto Advocacia", contêiner `lauro.adv.br`, **`GTM-5V9CSW5J`** | Versão 3 publicada e instalada em todas as páginas |
| Google Analytics 4 | propriedade "Dr. Lauro", fluxo web "lauro.adv.br" 16225171758, **`G-MMG8ZNG0P6`** | `page_view` e cliques desde 28/10/2026. O fluxo antigo `G-WL6VECX5F6` não recebia `page_view` (ver `docs/07-operacoes/observabilidade.md`) |
| Perfil da Empresa no Google | https://share.google/4rXgq8QJ5Aov5yxQ2 | Ativo; é o destino do "Como chegar" no site |

### Limpeza feita no Google Ads (pedido do Dr. Lauro)

As 5 campanhas antigas já estavam com status **Removida**, que é o estado final no Google Ads (a plataforma não apaga campanhas de vez; o histórico fica guardado). A visualização "Todas as campanhas" foi filtrada para **ativadas e pausadas**, então o painel abre vazio. Para referência, as campanhas removidas eram:

| Campanha | Tipo | Lance | Orçamento |
|---|---|---|---|
| Audiência e Custódia | Smart | Maximizar cliques | R$ 9,70/dia |
| Adv - Custódia/Criminal | Pesquisa | Maximizar cliques | R$ 50,00/dia |
| [LAN][LEAD][PESQUISA][CAPTAR WSAP][LP1 CRIMINALISTA] - MAX CONVERSÕES | Pesquisa | Maximizar conversões | R$ 80,00/dia |
| Search-3 | Pesquisa | Maximizar conversões | R$ 84,50/dia |
| Search-4 | Pesquisa | Maximizar conversões | R$ 84,50/dia |

### Ações de conversão que já existem na conta

Nenhuma mede o site. Todas são de chamadas vindas direto do anúncio ou do Perfil da Empresa:

| Ação | Origem | Observação |
|---|---|---|
| Calls from Smart Campaign Ads | Chamadas a partir de anúncios | criada pelo Google para a campanha Smart |
| Ligação Extensão Criminal #1 | Chamadas a partir de anúncios | |
| Ligação Botão Criminal #1 | Chamadas a partir de anúncios | "Requer atenção" |
| Smart campaign ad clicks to call | Chamadas a partir de anúncios | criada pelo Google |
| Clicks to call | Hospedado pelo Google | fora das metas da conta |
| Smart campaign map clicks to call | Hospedado pelo Google | fora das metas da conta |
| Business profile - Call | Outro | fora das metas da conta |

Sugestão: decidir quais destas continuam como **principais** (entram no lance) e rebaixar as outras para **secundárias**, para que o lance otimize só para o que importa.

### Tag do Google antiga

Existe uma tag do Google "Lauro ADV - Criminal" (`AW-11034973115` e `GT-WVXDJTBM`) que não está instalada no site e **não deve ser instalada**: o site usa o GTM, e as duas juntas contariam tudo em dobro.

## 3. As páginas de destino

Todas com WhatsApp e ligação em vários pontos da página, triagem de WhatsApp no topo (cada opção manda uma mensagem pronta diferente) e conteúdo aprovado pelo Dr. Lauro. Lighthouse mobile: 99 em Performance e 100 em Acessibilidade, Boas práticas e SEO.

O "Grupo / fase" abaixo é o que está registrado em cada CONTEXT.md (seção 1). Confira com o planejamento.

| # | URL | Grupo / fase registrado | Palavra-chave principal | `area` no GA4 |
|---|---|---|---|---|
| 01 | /prisao-em-flagrante/ | Emergência Prisão | advogado prisão em flagrante | `flagrante` |
| 02 | /habeas-corpus/ | Habeas Corpus (novo) | advogado habeas corpus | `habeas-corpus` |
| 03 | /trafico-de-drogas/ | Tráfico de Drogas (novo) | advogado tráfico de drogas | `trafico` |
| 04 | /lei-maria-da-penha/ | Maria da Penha (novo) | advogado maria da penha | `maria-da-penha` |
| 05 | /crimes-digitais/ | Crimes Digitais | advogado crimes digitais | `crimes-digitais` |
| 06 | /golpes-e-fraudes-digitais/ | Crimes Digitais (palavras de golpe) | advogado golpe pix | `golpes` |
| 07 | /ofensas-digitais/ | Ofensas Digitais | advogado calúnia e difamação | `ofensas-digitais` |
| 08 | /crimes-sexuais/ | Crimes Sexuais | advogado crime sexual | `crimes-sexuais` |
| 09 | /crimes-complexos/ | Grande Repercussão e Operações | advogado operação policial | `crimes-complexos` |
| 10 | /tribunal-do-juri/ | Fase 2 | advogado tribunal do júri | `juri` |
| 11 | /execucao-penal/ | Fase 2 (melhor no Meta Ads) | advogado execução penal | `execucao` |
| 12 | /recursos-e-revisao-criminal/ | Fase 2 (nacional) | advogado recurso criminal | `recursos` |
| 13 | /crimes-patrimoniais/ | Fase 3 (só se sobrar verba) | advogado furto | `patrimoniais` |
| 14 | /crimes-de-transito/ | Grupo novo, incluir após a publicação | advogado crime de trânsito | `transito` |
| 15 | /crimes-economicos-e-financeiros/ | Fora do teste inicial; avaliar após 10 dias | advogado lavagem de dinheiro | `economicos` |
| 16 | /crimes-contra-a-administracao-publica/ | Fora do teste inicial; avaliar após 10 dias | advogado corrupção passiva | `administracao-publica` |
| 17 | /crimes-de-armas-de-fogo/ | Grupo novo, incluir após a publicação | advogado porte ilegal de arma | `armas` |
| 18 | /crimes-ambientais/ | Não incluir por enquanto | advogado crime ambiental | `ambientais` |
| 19 | /crimes-tributarios/ | Fora do teste inicial; avaliar após 10 dias | advogado sonegação fiscal | `tributarios` |
| 20 | /sou-vitima/ | Vítimas (golpe, agressão, ofensa) | advogado para vítima de crime | `vitima` |

As palavras-chave secundárias de cada página estão na seção 4 do respectivo `contexts/NN-*.CONTEXT.md`.

Outras páginas: home (`/`, `area=home`), `/especialidades/` (todas as áreas), `/blog/` (artigos), `/sou-vitima/`.

Observações úteis para a estrutura:

- **05 e 06 foram separadas de propósito:** Crimes Digitais fala de invasão, dados e prova digital (lado investigado); Golpes fala de Pix, falsa central, falso advogado e conta usada por golpistas (vítima e "laranja"). Grupos com palavras de golpe devem apontar para a 06.
- **04, 05, 06, 07 e 20 atendem vítimas**; 04 e 20 têm aviso "Em perigo agora? Ligue 190. Violência contra a mulher: 180".
- Os redirecionamentos do site preservam `gclid` e UTM (www → sem www inclusive). Pode usar parâmetros de URL à vontade.

## 4. O que conta como conversão

Só contato: **`whatsapp_click`** e **`phone_click`**. `blog_click` é sinal de interesse, nunca conversão.

Cada clique vai para o `dataLayer` com:

| Parâmetro | O que é | Exemplos |
|---|---|---|
| `area` | página ou área | `flagrante`, `golpes`, `home` |
| `situacao` | opção da triagem escolhida, ou `contato-geral` (botões genéricos), ou `artigo` | `alguem-foi-preso-agora`, `cai-em-um-golpe` |
| `secao` | posição do botão | `triagem`, `header`, `final`, `sticky`, `footer`, `card-area`, `artigos-home`, `blog-lista`, `casos`, `topo`, `404` |
| `pagina` | caminho da página | `/prisao-em-flagrante/` |

Com isso dá para responder, por exemplo, "quantos contatos de vítima de golpe vieram do grupo de golpes" (`area=golpes`, `situacao=cai-em-um-golpe`) ou "a triagem converte mais que o botão do topo" (`secao`).

Opções de triagem de cada página (valor de `situacao`):

| Página | Opções |
|---|---|
| home | alguem-foi-preso-agora, recebi-uma-intimacao-ou-estou-sendo-investigado, fui-vitima-de-um-crime, fui-condenado-e-quero-recorrer, outra-situacao-criminal |
| flagrante | alguem-foi-preso-agora, vai-ter-audiencia-de-custodia, fui-chamado-na-delegacia, outra-situacao |
| habeas-corpus | familiar-esta-preso, prisao-preventiva-decretada, tenho-medo-de-ser-preso, outra-situacao |
| trafico | foi-preso-por-trafico-agora, tenho-processo-por-trafico, fui-condenado-e-quero-recorrer, outra-situacao |
| maria-da-penha | sou-vitima-e-preciso-de-protecao, recebi-uma-medida-protetiva, fui-acusado, outra-situacao |
| crimes-digitais | estou-sendo-investigado, fui-acusado-de-golpe-ou-fraude, fui-vitima-de-golpe, tenho-processo-em-andamento |
| golpes | cai-em-um-golpe, minha-conta-foi-usada-em-golpe, recebi-intimacao, outra-situacao |
| ofensas-digitais | fui-ofendido-na-internet, fui-acusado-de-ofender-alguem, recebi-uma-intimacao, outra-situacao |
| crimes-sexuais | sou-vitima, estou-sendo-investigado, fui-intimado-a-depor, tenho-processo-em-andamento |
| crimes-complexos | fui-alvo-de-operacao-ou-busca, fui-preso, tenho-processo-em-andamento, outra-situacao |
| juri | familiar-foi-preso-por-homicidio, tenho-juri-marcado, sou-familiar-da-vitima, outra-situacao |
| execucao | familiar-esta-preso, progressao-atrasada, falta-grave-ou-sindicancia, outra-situacao |
| recursos | fui-condenado-agora, condenacao-ja-transitou, recurso-no-stj-ou-stf, outra-situacao |
| patrimoniais | foi-preso-agora, fui-acusado, tenho-processo-em-andamento, outra-situacao |
| transito | fui-preso-por-embriaguez, me-envolvi-em-acidente-com-vitima, recebi-intimacao, outra-situacao-criminal |
| economicos | fui-alvo-de-busca-ou-operacao, tive-bens-bloqueados, recebi-intimacao, outra-situacao-criminal |
| administracao-publica | sou-servidor-e-fui-investigado, fui-alvo-de-operacao, minha-empresa-foi-investigada, outra-situacao-criminal |
| armas | fui-preso-com-arma, arma-apreendida-em-casa, sou-cac-e-tive-problema, outra-situacao-criminal |
| ambientais | fui-denunciado-por-maus-tratos, minha-empresa-foi-autuada, recebi-intimacao, outra-situacao-criminal |
| tributarios | sou-socio-e-fui-intimado, sou-contador-e-fui-citado, recebi-representacao-fiscal, outra-situacao-criminal |
| vitima | fui-vitima-de-golpe, fui-agredido-ou-ameacado, fui-ofendido-na-internet, perdi-um-familiar |

Nenhum texto de conversa ou dado pessoal vai para o Google: a mensagem do WhatsApp fica só no link.

## 5. O que está configurado no GTM (versão 3, publicada em 23/10/2026)

O contêiner inteiro está versionado em `docs/07-operacoes/gtm-container.json` (pode ser importado em outro contêiner pelo Administrador → Importar contêiner).

### Tags

| Tag | Tipo | Dispara em | Consentimento exigido |
|---|---|---|---|
| Google tag - GA4 | Tag do Google, `G-MMG8ZNG0P6` | Initialization - All Pages e CE - consent_update | `analytics_storage` |
| GA4 - evento de contato e blog | Evento do GA4, nome do evento = `{{Event}}`, parâmetros `area`, `situacao`, `secao`, `pagina` | CE - whatsapp_click, CE - phone_click, CE - blog_click | `analytics_storage` |
| Vinculador de conversões | Conversion Linker | All Pages | `ad_storage` |

### Acionadores

| Acionador | Tipo | Condição |
|---|---|---|
| CE - whatsapp_click | Evento personalizado | `{{_event}}` igual a `whatsapp_click` |
| CE - phone_click | Evento personalizado | `{{_event}}` igual a `phone_click` |
| CE - blog_click | Evento personalizado | `{{_event}}` igual a `blog_click` |

### Variáveis

- Camada de dados (versão 2): `DLV - area`, `DLV - situacao`, `DLV - secao`, `DLV - pagina`.
- Incorporadas: Event, Page URL, Page Path.

### Consentimento (LGPD)

- O site mostra um banner de cookies com **Recusar**, **Configurar** e **Aceitar**. "Medição" libera `analytics_storage`; "Publicidade" libera `ad_storage`, `ad_user_data` e `ad_personalization`. "Preferências de cookies", no rodapé, reabre o banner.
- Antes do GTM carregar, o site define tudo como `denied` (Modo de Consentimento v2).
- As tags exigem consentimento explícito (**modo básico**): quem recusa não gera nenhuma requisição ao Google. Isso foi decidido porque a política de privacidade do site promete exatamente isso.
- **Consequência para o Ads:** sem o modo avançado, o Google não modela conversões de quem recusou. Se você recomendar o modo avançado, a decisão precisa passar pelo Dr. Lauro e a política de privacidade precisa mudar junto.

### Validação feita

Em produção, em 23/10/2026: recusar = zero requisições ao Google; aceitar = `phone_click` e `whatsapp_click` chegando ao GA4 com os quatro parâmetros. Detalhes em `docs/06-qualidade/screenshots/2026-10-23-validacao-gtm.md`.

## 6. GA4

- Dimensões personalizadas criadas (escopo do evento): `area`, `situacao`, `secao`.
- `whatsapp_click` e `phone_click` são **eventos principais** desde 28/10/2026.
- **Não importar** essas conversões do GA4 para o Google Ads se as conversões do Ads vierem da tag do GTM (seção 7): contaria em dobro. É uma coisa ou outra.
- Vincular o GA4 ao Google Ads (Administrador → Vínculos de produtos) depois de reativar a conta, para públicos e relatórios.

## 7. O que falta para a campanha medir conversões no Ads

Nada disso foi feito porque a conta está cancelada: conversão de anúncio sem anúncio não mede nada.

1. **Reativar a conta** e conferir faturamento (decisão e pagamento do Dr. Lauro).
2. **Ativar a marcação automática** (gclid), em Administrador → Configurações da conta.
3. **Criar duas ações de conversão**, origem Site, configuração manual:
   - "WhatsApp (site)": categoria Contato, contagem **Uma**, valor conforme o planejamento.
   - "Ligação (site)": categoria Contato (ou Lead telefônico), contagem **Uma**.
   - Janela de conversão e modelo de atribuição: conforme o planejamento.
4. **Passar para mim o rótulo de conversão** de cada uma (o ID já é `11034973115`). Eu crio no GTM as tags "Acompanhamento de conversões do Google Ads" com os acionadores `CE - whatsapp_click` e `CE - phone_click`, exigindo `ad_storage`, publico e valido.
5. Decidir o que fazer com as ações de chamada antigas (seção 2).

Itens que dependem da sua recomendação:

- **Conversões otimizadas (enhanced conversions):** hoje não se aplicam, porque o site não coleta e-mail nem telefone (o contato acontece no WhatsApp).
- **Conversões off-line:** se o escritório registrar quais conversas viraram contrato, dá para importar depois e otimizar para cliente, não para clique. Exige um processo do escritório (planilha com gclid ou CRM).
- **Remarketing:** tecnicamente possível com o consentimento de publicidade. Em área criminal há restrições de política do Google para públicos baseados em situação sensível; avaliar antes.
- **Recursos (assets) de anúncio:** ligação ((11) 97080-2600), local (vincular o Perfil da Empresa), sitelinks para as páginas de área, frase de destaque "Atendimento 24 horas".

## 8. Regras de conteúdo que valem também para os anúncios

Do Dr. Lauro e do Código de Ética e Provimento 205/2021 da OAB:

- Sem promessa de resultado, sem "o melhor", "nº 1", "garantido", sem preço.
- Sem nome de cliente, número de processo ou detalhe que identifique pessoas.
- Tom informativo e sóbrio; o texto das páginas foi aprovado pelo Dr. Lauro e não muda sem a aprovação dele.
- Dados que podem aparecer: Dr. Lauro de Almeida Neto, OAB/SP 210.212, mais de 23 anos de atuação, Osasco, São Paulo e atendimento online em todo o Brasil, atendimento 24 horas.

## 9. Como pedir ajustes

Mande a lista ao Lucas. Coisas que eu faço rápido:

- Novas tags, acionadores ou variáveis no GTM (com validação em produção).
- Ajustes de texto de botão, ordem da triagem ou mensagem pronta do WhatsApp (texto de página precisa do ok do Dr. Lauro).
- Página nova de área ou variação de página para teste A/B.
- Relatórios a partir do GA4.

Perguntas que deixo para você:

1. A estrutura de grupos da seção 3 bate com o planejamento? Alguma página deve receber dois grupos ou ser excluída?
2. Orçamento diário e estratégia de lance da fase inicial (as antigas usavam Maximizar cliques e Maximizar conversões entre R$ 50 e R$ 84,50/dia).
3. Segmentação geográfica: Osasco e região, Grande SP, estado ou Brasil? (A página 12, Recursos, foi pensada para alcance nacional.)
4. Horário dos anúncios, considerando o atendimento 24 horas.
5. Modo de consentimento básico ou avançado (seção 5).
