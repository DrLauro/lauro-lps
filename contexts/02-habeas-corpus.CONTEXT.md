# CONTEXT.md – Página "Habeas Corpus" (/habeas-corpus/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 2 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado habeas corpus" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Habeas Corpus (novo).
- Ser a fonte que buscadores e IAs (Google, ChatGPT, Gemini, Perplexity) leem para associar o Dr. Lauro a esta área.
- Métrica de sucesso: cliques em WhatsApp e ligação por visita (eventos da seção 7).

## 2. Contexto do escritório (igual em todas as páginas)

- Advogado: Lauro de Almeida Neto, advogado criminalista, OAB/SP 210.212, mais de 23 anos de atuação em Direito Penal e Processo Penal.
- Sociedade: Lauro Neto Sociedade Individual de Advocacia, sociedade unipessoal inscrita na OAB/SP, CNPJ 66.317.792/0001-30.
- Endereço: Avenida das Flores, 660, 1º andar, sala 03, Jardim das Flores, Osasco/SP, CEP 06110-100.
- WhatsApp e telefone: (11) 97080-2600 · link base https://wa.me/5511970802600 · tel:+5511970802600
- E-mail: lauroalmeidaneto@adv.oabsp.org.br
- Atendimento: 24 horas, presencial em Osasco e São Paulo e online em todo o Brasil.
- Posicionamento: casos de grande repercussão conduzidos em sigilo; defesa técnica; atendimento imediato.
- Perfis: https://www.linkedin.com/in/dr-lauro-almeida-neto-ba3209327 · https://www.instagram.com/lauro.adv.br/ · https://www.facebook.com/profile.php?id=100008334368444 · https://dr-lauroneto3523.jusbrasil.com.br/
- Prova social: avaliações do Google (hoje 9 avaliações, nota 5,0, via Trustindex). Puxar do widget, nunca digitar à mão.

## 3. Implementação em Astro

- Rota: `src/pages/habeas-corpus/index.astro` (ou coleção de conteúdo `src/content/areas/habeas-corpus.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/habeas-corpus/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado de Habeas Corpus | TJ, STJ e STF | Dr. Lauro (53 caracteres)
- `<meta name="description">`: Habeas corpus preventivo e liberatório com pedido liminar contra prisão ilegal, preventiva e excesso de prazo, no TJ, TRF, STJ e STF. Atendimento 24h. (150 caracteres)
- Canonical: `https://lauro.adv.br/habeas-corpus/`
- H1 (único na página): Advogado de habeas corpus, do Tribunal de Justiça ao STF
- Palavra-chave principal: advogado habeas corpus
- Secundárias (aparecem naturalmente no texto já escrito): habeas corpus urgente, habeas corpus prisão preventiva, habeas corpus liminar, habeas corpus stj, habeas corpus excesso de prazo, trancamento de inquérito
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado de habeas corpus, do Tribunal de Justiça ao STF
- Texto: O habeas corpus é o instrumento mais rápido contra uma prisão ilegal ou uma ameaça de prisão. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, impetra habeas corpus com pedido liminar nos Tribunais de Justiça, nos Tribunais Regionais Federais, no Superior Tribunal de Justiça e no Supremo Tribunal Federal, para clientes de todo o Brasil.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Casos de grande repercussão em sigilo · Atendimento 24 horas · Avaliações 5,0 no Google (widget)

### 5.3 H2: Como atuamos
Analisamos a decisão que mandou prender, ou que ameaça prender, e identificamos a ilegalidade: falta de fundamentação, ausência dos requisitos da prisão preventiva, excesso de prazo ou constrangimento ilegal.

Impetramos o habeas corpus com pedido liminar no tribunal competente e acompanhamos o julgamento, inclusive com sustentação oral quando cabível. Se o pedido for negado, levamos aos tribunais superiores.

### 5.4 H2: Serviços nesta área
Habeas corpus preventivo e liberatório, habeas corpus com pedido liminar, contra prisão preventiva e temporária, por excesso de prazo, contra constrangimento ilegal, para trancamento de inquérito policial ou ação penal nas hipóteses cabíveis, no Tribunal de Justiça, nos Tribunais Regionais Federais, no Superior Tribunal de Justiça e no Supremo Tribunal Federal.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Fundamentação da decisão de prisão e se ela aponta fatos concretos.
- Tempo de prisão sem julgamento.
- Possibilidade de medidas cautelares no lugar da prisão.
- Condições pessoais do preso: residência, trabalho, filhos, saúde.

### 5.6 H2: Casos em que atuamos
**Habeas corpus contra prisão preventiva no TJSP**  
Em caso em que a prisão preventiva foi decretada contra a manifestação do próprio Ministério Público, a defesa demonstrou a ilegalidade da decisão e obteve liminar em habeas corpus no Tribunal de Justiça de São Paulo. (Caso publicado no Jusbrasil do Dr. Lauro.)

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Quanto tempo demora um habeas corpus?**  
  O pedido liminar pode ser analisado em poucos dias. O julgamento definitivo depende do tribunal.
- **Qualquer pessoa pode pedir habeas corpus?**  
  Sim, mas a chance de sucesso depende da técnica: identificar a ilegalidade certa e apresentá-la ao tribunal certo.
- **Se o habeas corpus for negado no Tribunal de Justiça, acabou?**  
  Não. Pode-se recorrer ao Superior Tribunal de Justiça e, em alguns casos, ao Supremo Tribunal Federal.
- **Habeas corpus serve para encerrar um processo?**  
  Em situações excepcionais, sim: o trancamento do inquérito ou da ação penal quando não há justa causa.

### 5.8 Chamada final (FinalCTA)
Prisão ilegal ou ameaça de prisão? Fale agora com o Dr. Lauro. Atendemos clientes de todo o Brasil.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Familiar está preso | familiar-esta-preso | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Habeas%20Corpus%29%3A%20familiar%20est%C3%A1%20preso%20e%20preciso%20de%20habeas%20corpus. |
| Tenho medo de ser preso | tenho-medo-de-ser-preso | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Habeas%20Corpus%29%3A%20tenho%20medo%20de%20ser%20preso. |
| Prisão preventiva decretada | prisao-preventiva-decretada | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Habeas%20Corpus%29%3A%20foi%20decretada%20pris%C3%A3o%20preventiva. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Habeas%20Corpus%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20habeas%20corpus. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="habeas-corpus" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="habeas-corpus"`. Script único no layout:

```html
<script is:inline>
  window.dataLayer = window.dataLayer || [];
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (!el) return;
    window.dataLayer.push({
      event: el.dataset.track,
      area: el.dataset.area || '',
      situacao: el.dataset.situacao || '',
      pagina: location.pathname
    });
  });
</script>
```

No GTM, os eventos `whatsapp_click` e `phone_click` disparam a conversão do Google Ads e o evento do GA4 de mesmo nome. Não remover os parâmetros UTM e o `gclid` da URL.

## 8. Dados estruturados (JSON-LD)

Inserir no `<head>` pelo componente `JsonLd`. O texto do FAQ precisa ser idêntico ao exibido na página.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://lauro.adv.br/#escritorio",
      "name": "Lauro Neto Sociedade Individual de Advocacia",
      "alternateName": "Dr. Lauro de Almeida Neto – Advogado Criminalista",
      "url": "https://lauro.adv.br/",
      "telephone": "+5511970802600",
      "email": "lauroalmeidaneto@adv.oabsp.org.br",
      "taxID": "66.317.792/0001-30",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida das Flores, 660, 1º andar, sala 03",
        "addressLocality": "Osasco",
        "addressRegion": "SP",
        "postalCode": "06110-100",
        "addressCountry": "BR"
      },
      "areaServed": [
        "Osasco",
        "São Paulo",
        "Brasil"
      ],
      "openingHours": "Mo-Su 00:00-23:59",
      "founder": {
        "@id": "https://lauro.adv.br/#advogado"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dr-lauro-almeida-neto-ba3209327",
        "https://www.instagram.com/lauro.adv.br/",
        "https://www.facebook.com/profile.php?id=100008334368444",
        "https://dr-lauroneto3523.jusbrasil.com.br/"
      ]
    },
    {
      "@type": "Attorney",
      "@id": "https://lauro.adv.br/#advogado",
      "name": "Lauro de Almeida Neto",
      "description": "Advogado criminalista, OAB/SP 210.212, com mais de 23 anos de atuação em Direito Penal.",
      "url": "https://lauro.adv.br/",
      "telephone": "+5511970802600",
      "worksFor": {
        "@id": "https://lauro.adv.br/#escritorio"
      },
      "sameAs": [
        "https://www.linkedin.com/in/dr-lauro-almeida-neto-ba3209327",
        "https://www.instagram.com/lauro.adv.br/",
        "https://www.facebook.com/profile.php?id=100008334368444",
        "https://dr-lauroneto3523.jusbrasil.com.br/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://lauro.adv.br/habeas-corpus/",
      "url": "https://lauro.adv.br/habeas-corpus/",
      "name": "Advogado de Habeas Corpus | TJ, STJ e STF | Dr. Lauro",
      "description": "Habeas corpus preventivo e liberatório com pedido liminar contra prisão ilegal, preventiva e excesso de prazo, no TJ, TRF, STJ e STF. Atendimento 24h.",
      "about": "Habeas Corpus",
      "provider": {
        "@id": "https://lauro.adv.br/#escritorio"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://lauro.adv.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Áreas de atuação",
          "item": "https://lauro.adv.br/especialidades/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Habeas Corpus",
          "item": "https://lauro.adv.br/habeas-corpus/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto tempo demora um habeas corpus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O pedido liminar pode ser analisado em poucos dias. O julgamento definitivo depende do tribunal."
          }
        },
        {
          "@type": "Question",
          "name": "Qualquer pessoa pode pedir habeas corpus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, mas a chance de sucesso depende da técnica: identificar a ilegalidade certa e apresentá-la ao tribunal certo."
          }
        },
        {
          "@type": "Question",
          "name": "Se o habeas corpus for negado no Tribunal de Justiça, acabou?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Pode-se recorrer ao Superior Tribunal de Justiça e, em alguns casos, ao Supremo Tribunal Federal."
          }
        },
        {
          "@type": "Question",
          "name": "Habeas corpus serve para encerrar um processo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em situações excepcionais, sim: o trancamento do inquérito ou da ação penal quando não há justa causa."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Prisão em Flagrante e Audiência de Custódia: `/prisao-em-flagrante/`
- Recursos Criminais e Revisão Criminal: `/recursos-e-revisao-criminal/`
- Tráfico de Drogas: `/trafico-de-drogas/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- O caso do HC no TJSP está publicado no Jusbrasil; confirmar com o Dr. Lauro antes de publicar e não citar número de processo.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
