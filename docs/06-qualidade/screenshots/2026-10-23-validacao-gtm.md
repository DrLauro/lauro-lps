# Validação do GTM em produção (23/10/2026)

Contêiner `GTM-5V9CSW5J`, versão 3. Página: https://lauro.adv.br/lei-maria-da-penha/. Navegador sem cache e sem escolha salva (`cookies-v1` apagado).

| Teste | Resultado |
|---|---|
| Banner aparece na primeira visita | ok (`2026-10-23-01-banner.png`) |
| `consent default` antes do GTM | ok: os quatro sinais `denied`, `wait_for_update: 500` |
| Recusar + clique no WhatsApp | ok: `whatsapp_click` no `dataLayer`; **0 requisições** a google-analytics, googleadservices, doubleclick ou googlesyndication |
| Aceitar | ok: `consent update` com tudo `granted`; GA4 com `gcs=G111` |
| Clique no telefone e no WhatsApp da triagem | ok: um `g/collect` com `en=phone_click` (`secao=header`) e `en=whatsapp_click` (`situacao=recebi-uma-medida-protetiva`, `secao=triagem`), ambos com `area=maria-da-penha` e `pagina=/lei-maria-da-penha/` |
| Página depois do aceite | `2026-10-23-02-aceito.png` |

Encontrado e corrigido no teste: a versão 2 do contêiner usava o modo avançado do Modo de Consentimento (o GA4 mandava pings sem cookie mesmo com "Recusar"). A versão 3 exige `analytics_storage` nas tags do GA4 e `ad_storage` no vinculador de conversões, como promete a política de privacidade.

Validação feita pela rede do navegador (Playwright), não pelo Tag Assistant: o resultado é o mesmo (requisições e parâmetros enviados ao Google).
