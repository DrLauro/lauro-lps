# Observabilidade e medição

Conversão do site = contato: `whatsapp_click` e `phone_click`. Todo o resto é sinal de apoio.

## Como os eventos saem do site

- Todo link de contato tem `data-track` (evento), `data-area` (página ou área), `data-situacao` (opção da triagem ou `contato-geral` / `artigo`) e `data-secao` (posição na página).
- Um script único no `BaseLayout` empurra cada clique para o `dataLayer`:
  `{ event, area, situacao, secao, pagina }`.
  O `dataLayer` recebe o clique com ou sem consentimento. Quem decide o que vai para o Google é o GTM, conforme o Modo de Consentimento.
- Valores de `secao`: `triagem`, `header`, `final`, `sticky`, `footer`, `card-area`, `artigos-home`, `blog-lista`, `casos`, `topo` (botão abaixo do H1 em /blog/ e /especialidades/), `404`.
  A lista e a regra "todo `data-track` tem `data-secao`" são conferidas por `npm run check:dist`.
- Nenhum texto de conversa, documento ou dado de caso vai para as ferramentas. A mensagem do WhatsApp fica só no link; o evento leva apenas os códigos acima.

## Consentimento (LGPD e Modo de Consentimento v2)

- O banner (`src/components/Consentimento.astro`) só existe quando há `PUBLIC_GTM_ID`. Sem GTM, o site não grava cookie de medição nem de publicidade.
- Antes do GTM: `gtag('consent', 'default', { ad_storage, ad_user_data, ad_personalization, analytics_storage: 'denied', wait_for_update: 500 })`.
- Na escolha: `gtag('consent', 'update', ...)`. Medição liga `analytics_storage`; Publicidade liga `ad_storage`, `ad_user_data` e `ad_personalization`.
- A escolha fica em `localStorage` (`cookies-v1`). "Preferências de cookies", no rodapé, reabre o banner.
- Depois da escolha, o banner envia `{ event: 'consent_update' }` ao `dataLayer`, mas só se a medição ainda não estava aceita. Tags bloqueadas na inicialização (primeira visita) disparam nesse evento; quem já tinha aceitado não recebe o evento, e assim não há `page_view` duplicado.
- O mapa da home (Google Maps) só carrega quando a pessoa clica em "Mostrar mapa".

## Contas (atualizado em 28/10/2026)

Tudo na conta Google dr.lauroneto@gmail.com.

- **GTM:** conta "Lauro Neto Advocacia", contêiner `lauro.adv.br`, **`GTM-5V9CSW5J`**. Versão publicada: 5, "v4.1 - page_view após consentimento (disparo por evento)", em 28/10/2026. Cópia em `docs/07-operacoes/gtm-container.json` (exportada da versão publicada). Mudou o contêiner pela interface? Exporte e atualize o JSON.
- **GA4:** propriedade "Dr. Lauro". Fluxo web em uso: "lauro.adv.br", 16225171758, ID de medição **`G-MMG8ZNG0P6`** (criado em 28/10/2026).
  - O fluxo antigo "Meu Negócio" (13126515431, `G-WL6VECX5F6`, URL corrigida para `https://lauro.adv.br`) foi combinado com a tag antiga do Google Ads `GT-WVXDJTBM`. Por isso `gtag/js?id=G-WL6VECX5F6` responde 404 e a tag do Google no GTM nunca carregava: zero `page_view` até 28/10. Esse fluxo fica parado; não usar o ID dele no GTM.
  - Ao criar uma tag do GA4 no GTM, a interface pode acrescentar sozinha uma tag "Google Analytics G-…" e as configurações "Gerenciar detecção automática de eventos" e "Permitir recursos de dados fornecidos pelo usuário". Elas não têm a exigência de consentimento e ficaram fora da versão publicada. Confira a lista de alterações antes de publicar.
- **Google Ads:** conta "Dr. Lauro Almeida Neto", ID de conversão `AW-11034973115`. **Conta cancelada em 23/10/2026** (anúncios parados). A conta tem 15 ações de conversão antigas, entre elas "Clique Botão WhatsApp Criminal" e "Ligação Botão Criminal #1", ligadas à tag antiga e sem disparo no site atual (levantamento de 26/10). Na reativação, todas passam a secundárias, sem remover nenhuma. Ao reativar: criar as ações "WhatsApp (site)" e "Ligação (site)" com origem Site e configuração manual, e acrescentar no GTM uma tag "Acompanhamento de conversões do Google Ads" para cada uma (acionadores `CE - whatsapp_click` e `CE - phone_click`).
- **GA4:** dimensões personalizadas `area`, `situacao` e `secao` (escopo do evento, 23/10). Eventos principais: `whatsapp_click` e `phone_click` (28/10), além dos três padrão da propriedade (`close_convert_lead`, `purchase`, `qualify_lead`), que ficam como estão. `blog_click` não é evento principal.
- **Consentimento no contêiner:** as tags do GA4 exigem `analytics_storage` e o vinculador exige `ad_storage` (modo básico). Sem aceite, nenhuma requisição ao Google. Validação em `docs/06-qualidade/screenshots/2026-10-23-validacao-gtm.md` e `docs/06-qualidade/lancamento-2026-10-28/`.
- A tag do Google antiga "Lauro ADV - Criminal" (`AW-11034973115`, `GT-WVXDJTBM`) não está no site e não deve ser instalada à parte: contaria em dobro com o GTM.

## Ligar o GTM

1. Criar o contêiner no Google Tag Manager (tipo Web) e copiar o ID `GTM-XXXXXXX`.
2. No GitHub: Settings → Secrets and variables → Actions → aba **Variables** → `PUBLIC_GTM_ID` = o ID. É variável, não segredo: o ID aparece no HTML.
3. Rodar de novo o workflow "Deploy produção (Cloudflare)" (ou fazer um push). O build lê `vars.PUBLIC_GTM_ID`.

## Configuração do contêiner

### Variáveis da camada de dados
`area`, `situacao`, `secao`, `pagina` (Variável da camada de dados, versão 2).

### Acionadores
- `CE - whatsapp_click`: Evento personalizado `whatsapp_click`.
- `CE - phone_click`: Evento personalizado `phone_click`.
- `CE - blog_click`: Evento personalizado `blog_click`.
- `CE - consent_update`: Evento personalizado `consent_update` (enviado pelo banner).

### Tags
- **Google tag - GA4**: `G-MMG8ZNG0P6`, acionadores `Initialization - All Pages` e `CE - consent_update`, uma vez por evento. Consentimento: exige `analytics_storage`.
- **GA4 Event** para cada um dos três acionadores, com o nome do evento igual ao do acionador e os parâmetros `area`, `situacao`, `secao` e `pagina`.
- **Google Ads – Conversão** disparada por `CE - whatsapp_click` e por `CE - phone_click`. Uma ação de conversão para cada evento, se quiser separar WhatsApp de ligação. Consentimento: `ad_storage`.
- **Vinculador de conversões** (Conversion Linker) em todas as páginas, para o `gclid`.

### Regras
- No GA4, marcar como evento-chave **apenas** `whatsapp_click` e `phone_click`.
- **Não importar** essas conversões do GA4 para o Google Ads. A conversão do Ads vem da tag do GTM; importar contaria em dobro.
- `blog_click` e cliques em redes sociais **nunca** são conversão.
- No GA4, registrar `area`, `situacao` e `secao` como dimensões personalizadas (escopo do evento) para os relatórios.

## Validação (a fazer quando o ID existir)

1. Tag Assistant (tagassistant.google.com) no site publicado.
2. Recusar no banner e conferir na aba Rede: nenhuma requisição a `google-analytics.com` nem a `googleadservices.com`.
3. Aceitar, clicar em um WhatsApp e conferir um único evento `whatsapp_click` com `area`, `situacao`, `secao` e `pagina`.
4. Salvar os prints em `docs/06-qualidade/screenshots/`.

## gclid e UTM

Nenhum redirecionamento do site remove `gclid` ou parâmetros UTM: o redirecionamento do www (regra da Cloudflare) e os de `public/_redirects` preservam a query string. Conferido em 21/10/2026.
