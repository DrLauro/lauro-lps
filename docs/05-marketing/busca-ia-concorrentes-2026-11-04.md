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

## Execução (04/11/2026, noite)

**Perfil da Empresa** (Google Maps):

| Perfil | Nota | Avaliações | Categoria | Horário |
|---|---|---|---|---|
| Dr. Lauro | 5,0 | 188 | Advogado criminal | 24h |
| Felipe Brandão | 5,0 | 135 | Advogado criminal | 24h |
| Marcos Roberto | 5,0 | 17 | Advogado | 24h |

O perfil do Dr. Lauro tem o atributo "Se identifica como uma empresa de empreendedoras" (empresa liderada por mulheres). Confirmar se é intencional. Print: `gbp-lauro-2026-11-04.png`.

**Dados estruturados** (commits `a1ac30b` e `e6c17a7`):
- `Person.image`: `dr-lauro-almeida-neto.jpg`;
- `LegalService.image`: fachada, sala e retrato;
- `logo`: `logo-lauro-neto.png`;
- `geo` e `hasMap` (CID 17415820592027588143), tirados do Perfil da Empresa;
- o Perfil da Empresa entrou em `sameAs`.

**Bing Webmaster Tools.** Login com a conta Google do Dr. Lauro.
- **Search Console:** a importação não encontrou nenhum site. O lauro.adv.br **não está no Search Console** dessa conta.
- **Verificação:** feita pelo arquivo `BingSiteAuth.xml` (commit `dd6836e`).
- **Sitemap:** `sitemap-index.xml` enviado. Prints: `bing-webmaster-verificado.png`, `bing-sitemap-enviado.png`.

**IndexNow.** Chave publicada em `/<chave>.txt` (commit `7fc9fc4`); as 24 URLs do sitemap foram enviadas para api.indexnow.org, que respondeu HTTP 202 (aceito; a chave ainda seria validada).

**Bing Places.** O login aceita só conta Microsoft, conta corporativa ou Facebook; não há opção Google. Depende do Dr. Lauro.

**Search Console.**
- Propriedade de domínio `lauro.adv.br` **verificada** com um registro TXT `google-site-verification` novo, criado na Cloudflare pela API.
- Os registros de e-mail (MX, SPF, DKIM e DMARC da Hostinger) **não foram tocados**.
- Sitemap `https://lauro.adv.br/sitemap-index.xml` enviado.
- Prints: `search-console-verificado.png`, `search-console-sitemap.png`.
- Para manter a verificação, **não apagar esse registro TXT**.

**Preview do GitHub Pages (04/11).**
- A implantação do commit `f12f8fe` estourou o tempo limite de 10 minutos, preso em "updating_pages" no lado do GitHub.
- A produção (Cloudflare) não foi afetada.
- A 3ª tentativa passou.

**Bing Places.** Importado do Perfil da Empresa do Google em 04/11/2026, com sincronização semanal. Nada foi alterado no Google nem no e-mail.
- Situação: "Publicação pendente". O Bing leva de 7 a 12 dias para publicar e avisa por e-mail.
- Vieram:
  - nome, endereço (Av. das Flores, 660), telefone (11) 97080-2600 e site;
  - categoria, horário 24/7 e horários especiais;
  - 14 fotos, a descrição, Instagram, Facebook e WhatsApp.
- O atributo "Pertencente a mulheres" veio junto, espelho do "empreendedoras" do Google. Corrigir no Google: com a sincronização semanal, a correção chega ao Bing sozinha.
- Site importado como `https://www.lauro.adv.br/`. Funciona porque o www responde com 301 para a raiz.
- Print: `bing-places-importado.png`.
