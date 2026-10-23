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
- O mapa da home (Google Maps) só carrega quando a pessoa clica em "Mostrar mapa".

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

### Tags
- **Google tag (GA4)**: ID de medição do GA4, em todas as páginas. Consentimento: exige `analytics_storage`. O GTM já respeita o padrão negado.
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
