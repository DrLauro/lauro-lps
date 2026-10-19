# Blog alimentado pelo Jusbrasil

_Dono: `tech-lead`. Implementado em 2026-10-19._

## Como funciona hoje

1. `src/lib/jusbrasil.mjs` lê o RSS público do perfil (`https://dr-lauroneto3523.jusbrasil.com.br/rss`) durante o build.
2. Se o feed falhar (captcha, timeout ou HTTP diferente de 200), o build usa o último snapshot salvo em `src/data/jusbrasil.json`. O blog nunca some por causa de uma falha do Jusbrasil.
3. Saídas:
   - Seção § 5 da home com os 4 artigos mais recentes.
   - Página `/blog/` com todos.
   - API estática `/api/jusbrasil.json`, que outro site (por exemplo, o WordPress da outra desenvolvedora) pode consumir.
4. O GitHub Actions refaz o build a cada 6 h (`schedule` em `.github/workflows/pages.yml`). Publicou no Jusbrasil, aparece no site em até 6 h.
5. `npm run check` testa o parser com um item no formato real do feed.

Não há servidor, banco nem chave. O "API" é um JSON estático gerado a cada build.

## Limite que define o desenho

Só o RSS pode ser lido por máquina. A página do artigo devolve **HTTP 403 com captcha** para requisições automáticas, e o `robots.txt` do Jusbrasil traz `User-agent: * / Disallow: /`. Contornar isso com navegador headless seria burlar a proteção anti-robô. Não foi feito, e não recomendo: quebra sem aviso e arrisca o perfil do Dr. Lauro.

Por isso, hoje cada post mostra título, data e trecho, com link para ler no Jusbrasil.

## De-para: publicação do Jusbrasil → post do blog

Levantado em 2026-10-19 sobre o artigo 7605115884 (HC no TJSP, prisão preventiva contra manifestação do MP).

| Campo no Jusbrasil | Onde aparece lá | Campo no blog | Disponível via RSS? | Tratamento |
|---|---|---|---|---|
| ID do artigo | URL `/artigos/<id>/` | `id` | sim | chave única, deduplicação |
| URL | `<link>` do RSS; canonical `www.jusbrasil.com.br/artigos/<slug>/<id>` | `url` (fonte) | sim | link "Ler no Jusbrasil" |
| Título | `<title>` do RSS, H1, `og:title` | `title` | sim | texto puro |
| Data de publicação | `<pubDate>` do RSS, `datePublished` | `date` | sim | ISO; exibido dd/mm/aaaa no fuso de SP |
| Trecho | `<description>` do RSS (~350 caracteres), `og:description` | `excerpt` | sim | HTML do Google News removido, termina em "…" |
| Subtítulo (linha fina) | parágrafo abaixo do H1 | `subtitle` | **não** | — |
| Corpo | `articleBody` (JSON-LD) e `<p>` do artigo (~6.400 caracteres) | `body` | **não** | se importado: manter só `<p>`; links `entity-cite` para processo ou lei no Jusbrasil viram texto |
| Imagem de capa | `og:image` 1200×675 (foto enviada pelo autor) | `cover` | **não** | — |
| Data de atualização | `dateModified` | `updated` | **não** | — |
| Palavras-chave | `keywords` (legislação citada: arts. 282, 311, 312, 313 do CPP; Lei 13.964/2019) | `tags` | **não** | viraria filtro por tema |
| Ficha do caso | bloco final: nº do HC, tribunal e câmara, relator, processo de origem, vara, data da decisão | `caso` | **não** | atenção: identifica processo e partes (ver abaixo) |
| Autor | `author` (nome, cargo, bio, URL do perfil) | — | — | fixo; é sempre o Dr. Lauro (`src/lib/office.mjs`) |
| Enquete "Você está preso…? Sim/Não" | widget dentro do artigo | — | — | descartar (captação do próprio Jusbrasil) |
| "Informações relacionadas" | rodapé | — | — | descartar (conteúdo de terceiros) |
| Publisher, breadcrumb, logo | JSON-LD | — | — | descartar; o blog usa o JSON-LD do escritório |

## Decisão (2026-10-19)

Lucas escolheu a **opção B** com editor Decap (ou compatível). Dr. Lauro aprova manter número de processo, vara e relator nos artigos e manter os posts não criminais. Hospedagem de produção: ver `docs/07-operacoes/deploy-e-ambientes.md`.

### Opções avaliadas

| Opção | Como | Prós | Contras |
|---|---|---|---|
| **A. RSS (implementada)** | automático, link para o Jusbrasil | zero manutenção, nenhum risco | post mostra só o trecho; leitor sai do site; o conteúdo não gera SEO para lauro.adv.br |
| **B. Site primeiro (recomendada)** | Dr. Lauro publica no blog do site (Markdown ou CMS gratuito como Decap) e replica no Jusbrasil com link para o site | o original fica no domínio dele (SEO e IA citam lauro.adv.br); texto completo, capa e tags; leitor fica perto do WhatsApp | muda o hábito dele; precisa de um editor simples |
| **C. Importação manual** | ele cola o texto e um script gera o post com os campos do de-para | texto completo no site | trabalho manual; conteúdo duplicado do Jusbrasil, que tem domínio mais forte e tende a ficar como original no Google (exige `canonical` para o Jusbrasil ou `noindex`) |
| D. Raspagem headless | navegador automatizado contornando o captcha | automático e completo | burla anti-robô e o robots.txt; quebra sem aviso; risco ao perfil. **Descartada** |

Pontos de atenção:
- **Dados identificáveis.** Os artigos trazem número de processo, vara, relator e datas. As LPs proíbem isso nos casos. No blog, o próprio Dr. Lauro publicou, mas importar o texto completo (B ou C) exige o ok dele sobre manter esses dados.
- **Nem todo post é criminal.** Exemplos: "Freelancer e vínculo de emprego" (trabalhista) e dois sobre IA. Hoje entra tudo. Se ele quiser, um filtro por palavra ou por lista resolve.
- **Hospedagem.** O registro.br só registra domínio e DNS, não hospeda site. A produção precisa de um host com build agendado: GitHub Actions na conta do escritório, ou Cloudflare Pages/Netlify (grátis) com deploy hook acionado por cron. O GitHub desliga workflows `schedule` depois de 60 dias sem commits no repositório.
