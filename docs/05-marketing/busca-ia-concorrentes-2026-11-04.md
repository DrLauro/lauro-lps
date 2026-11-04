# Busca por IA: concorrentes em Osasco (04/11/2026)

## Teste

**Pergunta feita ao ChatGPT** (guia anônima): "Preciso de advogado criminalista em osasco para audiencia de custodia, meu irmão foi preso".

**Ordem da resposta:**
1. Dr. Felipe Brandão;
2. D'Angelo e Silvestrini Advogadas;
3. **Dr. Lauro**;
4. Dr. Marcos Roberto.

**Foto errada:** ao lado do Dr. Lauro apareceu a foto de uma palestra do IMESB, com o Prof. Alamiro Velludo Salvador Netto. Provável confusão de nomes.

## O que os sites têm

| Site | robots.txt | llms.txt | Dados estruturados | Conteúdo sem JavaScript |
|---|---|---|---|---|
| felipebrandaoadvcriminal.adv.br | não tem (404) | não tem | nenhum | vazio: só `<div id="root">` |
| dsadvogadas.com.br | Yoast, libera tudo | não tem | WebSite e WebPage (Yoast) | sim; cita avaliações e o Google Maps |
| drmarcosrobertoosasco.com.br | não tem (404) | não tem | LegalService básico | sim, uma página |
| lauro.adv.br | libera Googlebot, Bingbot, OAI-SearchBot e PerplexityBot | tem (20 áreas) | LegalService + Person; faltava `image` | sim, 24 páginas |

**Conclusão.** A posição no ChatGPT não vem do site: o 1º colocado entrega a página vazia para robôs que não executam JavaScript. Os sinais prováveis são outros:
- o índice do Bing;
- o Perfil da Empresa (Google) e o Bing Places, com nota, avaliações, fotos e horário;
- citações em outros sites.

O `llms.txt` não é confirmado por nenhuma IA grande.

## Plano

1. ~~Acrescentar `image` em Person e LegalService e o Perfil da Empresa em `sameAs`~~: feito em `src/lib/contexts.mjs`, em 04/11. A imagem provisória é `og-lauro.jpg`, a trocar por `retrato-quadrado.jpg`.
2. Enviar o site ao Bing Webmaster Tools (importar do Search Console) e ligar o IndexNow.
3. Bing Places: importar o Perfil da Empresa do Google.
4. Perfil da Empresa: fotos reais (pedido em `docs/02-design/fotos-dr-lauro/LEIAME.md`), categoria, horário 24h, descrição e campanha de avaliações.
5. Comparar nota e número de avaliações com os três concorrentes.
6. Repetir o teste no ChatGPT e no Perplexity depois de 2 a 4 semanas.

Perfil da Empresa do Dr. Lauro: kgmid `/g/11gkccsxjx`.
