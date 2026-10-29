# Etapa 1: medição do site (28/10/2026)

## Causa da falta de `page_view`

Não era só o bloqueio por consentimento. O fluxo do GA4 "Meu Negócio" (`G-WL6VECX5F6`) foi combinado com a tag do Google antiga do Google Ads "Lauro ADV - Criminal" (`GT-WVXDJTBM`, `AW-11034973115`). Com isso, `https://www.googletagmanager.com/gtag/js?id=G-WL6VECX5F6` responde **404**. A tag do Google no GTM pedia esse script e falhava, então nenhum `page_view` saía e o cookie `_ga` não era gravado, com ou sem aceite. Os cliques chegavam ao GA4 porque a tag de evento usa outro caminho (`gtag/destination`). Print: `e1-ga4-fluxo-tag-combinada.png`.

Usar `GT-WVXDJTBM` no GTM resolveria, mas instalaria no site a tag antiga do Ads, com coleta automática de e-mail. Decisão do usuário nesta conversa: novo fluxo web na mesma propriedade.

Ordem real no `dataLayer` (produção):
- **Retorno com aceite salvo:** `consent default`, `consent update`, `gtm.js`.
- **Primeira visita:** `consent default`, `gtm.js`, `gtm.dom`, `gtm.load`, `consent update` e `consent_update` no clique.

`send_page_view` não estava desligado.

## O que mudou

| Onde | Mudança |
|---|---|
| GA4 | Novo fluxo web "lauro.adv.br", 16225171758, `G-MMG8ZNG0P6`, com tag própria (`gtag/js` responde 200). Print: `e1-ga4-fluxo-novo.png` |
| GA4 | URL do fluxo antigo de `https://www.lauro.adv.br` para `https://lauro.adv.br` |
| GA4 | `whatsapp_click` e `phone_click` marcados como eventos principais; `blog_click` não; os três padrão mantidos. Print: `e1-ga4-eventos-principais.png` |
| Código | O banner envia `consent_update` ao `dataLayer` depois da escolha, só se a medição ainda não estava aceita (commits `967cb7a` e `d32359d`) |
| GTM | Acionador `CE - consent_update`; "Google tag - GA4" com `G-MMG8ZNG0P6` e acionadores Inicialização + `CE - consent_update`; "GA4 - evento de contato e blog" com `G-MMG8ZNG0P6`. Consentimento básico mantido (`analytics_storage`) |
| GTM | Versão 4, "v4 - page_view após consentimento", publicada com a tag em "Uma vez por página". No teste, a primeira visita não disparou: a tentativa bloqueada na inicialização contou como o disparo da página. Versão 5, "v4.1 - page_view após consentimento (disparo por evento)", volta para "Uma vez por evento"; a duplicidade é evitada pelo banner. Prints: `e1-gtm-v4-envio.png`, `e1-gtm-v4-publicada.png`, `e1-gtm-v4-1-publicada.png` |
| GTM | Ao salvar, a interface acrescentou sozinha uma tag "Google Analytics G-MMG8ZNG0P6" (Inicialização, sem exigência de consentimento) e as configurações "Gerenciar detecção automática de eventos" e "Permitir recursos de dados fornecidos pelo usuário". As três foram descartadas antes de publicar |

## Teste em produção (28/10/2026, ~21:05, versão 5 do GTM)

Requisições a domínios do Google medidas pela Resource Timing API em navegador limpo:

| Cenário | Resultado |
|---|---|
| 1. Primeira visita, antes de escolher | nenhuma requisição |
| 1. Primeira visita, depois de "Aceitar" | `gtag/js?id=G-MMG8ZNG0P6` e **um** `g/collect` `en=page_view`; cookies `_ga` e `_ga_MMG8ZNG0P6` |
| 1. Reabrir "Preferências de cookies" e aceitar de novo | continua **um** `g/collect` (sem duplicar) |
| 2. Retorno com aceite salvo (próxima página) | **um** `g/collect` `en=page_view` |
| 3. "Recusar" e navegar para outra página | nenhuma requisição, nenhum cookie |
| Cliques depois do aceite | `phone_click` e `whatsapp_click` em `G-MMG8ZNG0P6`, `secao=header` |

No cenário 2 também sai `www.google.com/ccm/collect` com `en=page_view` (ping de medição de publicidade da tag do Google, com `ad_storage` concedido). Ele não conta como `page_view` no GA4.

GA4 Tempo real, logo depois: `page_view` 3, `whatsapp_click` 3. Print: `e1-ga4-tempo-real.png`. Os testes desta etapa geraram 3 `page_view`, 1 `phone_click` e 1 `whatsapp_click` às 00:03 UTC de 29/10 (21:03 de Brasília) e mais 2 `whatsapp_click` no diagnóstico (20:42–20:44 de Brasília).
