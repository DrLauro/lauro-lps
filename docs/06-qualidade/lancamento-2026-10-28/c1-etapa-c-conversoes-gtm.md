# Ciclo 1, Etapa C: conversões e GTM (02/11/2026)

## 1. Ações de conversão novas (Google Ads 741-973-2901)

| Ação | Código | Categoria (meta) | Origem | Contagem | Janela de clique | Valor | Rótulo |
|---|---|---|---|---|---|---|---|
| Site - WhatsApp (clique) | 7887357586 | Contato | Site, evento manual com código | Uma | 30 dias | R$ 1 (ver nota) | `cVszCJKN_rAdELun8Y0p` |
| Site - Telefone (clique) | 7887357592 | Lead telefônico | Chamadas de visitas ao site: "Alguém faz uma ligação clicando em um número no meu site" (código no site) | Uma | 30 dias | Não usar valor | `nup5CJiN_rAdELun8Y0p` |
| Anúncio - Chamada 60s | — | Lead telefônico | Chamadas a partir de anúncios | Uma | 30 dias, duração mínima 60 s | Não usar valor | — |

- As três são **principais**, com atribuição baseada em dados. Conversões otimizadas desativadas na ação de WhatsApp.
- **Nota sobre o valor do WhatsApp:** para ações de site da categoria Contato, a tela só oferece "valores diferentes" ou "mesmo valor"; não existe "Não usar valor". Ficou R$ 1 (valor padrão). Com "Maximizar conversões" sem CPA, o lance considera o número de conversões, não o valor.
- **Nota sobre a ação de telefone:** a categoria Lead telefônico não aceita a fonte "Site" genérica; a opção equivalente é "Chamadas de visitas ao site → clique no número", que também usa tag no site com rótulo próprio (origem exibida: "Cliques no número de telefone").
- A conta agora tem 18 ações: as 15 antigas e as 3 novas.

## 2. GTM (GTM-5V9CSW5J)

- Duas tags "Acompanhamento de conversões do Google Ads" (`awct`), código de conversão 11034973115:
  - "Google Ads - Conversão WhatsApp (clique)": rótulo `cVszCJKN_rAdELun8Y0p`, acionador `CE - whatsapp_click`;
  - "Google Ads - Conversão Telefone (clique)": rótulo `nup5CJiN_rAdELun8Y0p`, acionador `CE - phone_click`;
  - consentimento adicional exigido: `ad_storage`; uma vez por evento; conversões otimizadas desligadas.
- Entraram por importação com "Combinar" (prévia: 2 adicionadas, 0 modificadas, 0 excluídas). A tag antiga GT- não foi instalada; nenhum item automático foi acrescentado.
- Print: `c1-c2-gtm-tag-whatsapp.png`.

## 3. Testes

Navegador limpo a cada cenário (sem cookies nem `localStorage`), clique no WhatsApp e no telefone do cabeçalho da home. O link do WhatsApp foi bloqueado no teste para não abrir a conversa.

| Cenário | Horário (BRT) | Resultado |
|---|---|---|
| Preview do espaço de trabalho, aceitar | 21:25:48 (WhatsApp), 21:25:53 (telefone) | 1 conversão por clique |
| Preview, aceitar, com rótulos registrados | 21:26:37 (WhatsApp), 21:26:42 (telefone) | WhatsApp: `label=cVszCJKN_rAdELun8Y0p`; telefone: `label=nup5CJiN_rAdELun8Y0p` |
| Preview, recusar | 21:26:06 e 21:26:10 | só `gtm.js`; nenhuma requisição ao Google Ads ou ao GA4; nenhum cookie |
| **Produção (v5 publicada)**, aceitar | 21:34:18 (WhatsApp), 21:34:22 (telefone) | igual ao Preview: 1 conversão por clique, rótulos novos; cookies `_ga`, `_ga_MMG8ZNG0P6`, `_gcl_au` |
| Produção, recusar | 21:34:37 e 21:34:41 | só `gtm.js`; nenhum cookie |

- Cada conversão aparece em três endereços (`googleadservices.com/pagead/conversion`, `googleadservices.com/ccm/conversion` e `googleads.g.doubleclick.net/pagead/viewthroughconversion`), todos com o mesmo rótulo e o mesmo disparo: é o envio padrão de uma única conversão.
- **IDs na rede com aceite:** `GTM-5V9CSW5J`, `G-MMG8ZNG0P6` e `AW-11034973115` (`gtag/destination?id=AW-11034973115`). Nenhuma requisição a `G-WL6VECX5F6`, a `GT-WVXDJTBM` ou a rótulos antigos.
- O script `gtag/destination?id=AW-11034973115` (494.137 bytes) não contém `G-WL6VECX5F6` nem configuração de coleta automática de e-mail.
- **Para descontar:** 8 conversões de teste (4 de WhatsApp, 4 de telefone) nos horários acima, sem `gclid`, ou seja, sem clique de anúncio. Também há `page_view` e eventos de clique de teste no GA4 nos mesmos horários.

## 4. Publicação

Versão 6, "v5 - conversões Google Ads", publicada em 02/11/2026 às 21:27. JSON exportado em `docs/07-operacoes/gtm-container.json`. Prints: `c1-c4-gtm-v5-envio.png`, `c1-c4-gtm-v5-publicada.png`.

## 5. Vínculo GA4 ↔ Google Ads

Propriedade "Dr. Lauro" vinculada à conta 741-973-2901 em 02/11/2026 ("Concluídas (1)"):

- publicidade personalizada: **desativada** (nenhum público do GA4 vai para o Ads);
- acesso do Google Ads aos recursos do Analytics: **desativado**;
- codificação automática: já ativa na conta do Ads;
- nenhum evento do GA4 importado como conversão.

Prints: `c1-c5-ga4-vinculo-config.png`, `c1-c5-ga4-vinculo-criado.png`.
