# CONTEXT.md – Página "Prisão em Flagrante e Audiência de Custódia" (/prisao-em-flagrante/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 1 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado prisão em flagrante" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Emergência Prisão.
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

- Rota: `src/pages/prisao-em-flagrante/index.astro` (ou coleção de conteúdo `src/content/areas/prisao-em-flagrante.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/prisao-em-flagrante/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Prisão em Flagrante 24h | Osasco e SP (51 caracteres)
- `<meta name="description">`: Familiar preso? Advogado criminalista 24 horas para flagrante, audiência de custódia e liberdade provisória em Osasco e São Paulo. Fale agora. (142 caracteres)
- Canonical: `https://lauro.adv.br/prisao-em-flagrante/`
- H1 (único na página): Advogado para prisão em flagrante e audiência de custódia, 24 horas
- Palavra-chave principal: advogado prisão em flagrante
- Secundárias (aparecem naturalmente no texto já escrito): advogado audiência de custódia, advogado 24 horas, advogado para preso, liberdade provisória, advogado delegacia osasco, advogado criminalista plantão
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado para prisão em flagrante e audiência de custódia, 24 horas
- Texto: Quando alguém é preso em flagrante, as primeiras horas decidem se a pessoa volta para casa ou continua presa. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação (OAB/SP 210.212), vai até a delegacia, acompanha o depoimento e atua na audiência de custódia, dia e noite, em Osasco, São Paulo e região.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Na delegacia: o advogado acompanha a lavratura do flagrante e o depoimento, verifica se os direitos do preso foram respeitados e orienta o que dizer e o que não dizer.

Na audiência de custódia, que deve acontecer em até 24 horas após a prisão, a defesa pede o relaxamento da prisão ilegal, a liberdade provisória com ou sem fiança, ou medidas cautelares no lugar da prisão. Se a prisão for mantida, entramos com habeas corpus.

### 5.4 H2: Serviços nesta área
- Acompanhamento em delegacia
- Investigação criminal e inquérito policial
- Depoimentos, interrogatórios e reconhecimentos
- Diligências policiais
- Busca e apreensão
- Prisão em flagrante, prisão preventiva e prisão temporária
- Audiência de custódia
- Relaxamento e revogação de prisão
- Liberdade provisória
- Fiança e dispensa de fiança
- Prisão domiciliar
- Medidas cautelares diversas da prisão

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Se a prisão foi legal: situação de flagrante, comunicação ao juiz e à família, direito ao silêncio e ao advogado.
- Se houve violência ou abuso na abordagem.
- Se o caso permite liberdade provisória, fiança ou medidas cautelares.
- Antecedentes, residência e trabalho, que pesam a favor da liberdade.

### 5.6 H2: Casos em que atuamos
**Preso em flagrante por tráfico: liberdade concedida pelo TJSP**  
Cliente primário, preso em flagrante por suposto tráfico de drogas, teve a prisão convertida em preventiva. Em habeas corpus, a defesa demonstrou a falta de fundamentos concretos para manter a prisão e o Tribunal de Justiça de São Paulo concedeu a liberdade por unanimidade, com medidas cautelares. (Caso publicado no Jusbrasil do Dr. Lauro.)

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Quanto tempo a pessoa fica presa até a audiência de custódia?**  
  A audiência de custódia deve acontecer em até 24 horas após a prisão. É nela que o juiz decide se a pessoa responde em liberdade.
- **O que fazer quando um familiar é preso?**  
  Chame um advogado criminalista imediatamente, separe documentos pessoais e comprovantes de residência e trabalho do preso, e evite falar sobre os fatos por telefone.
- **O preso precisa falar na delegacia?**  
  Não. Todo preso tem direito ao silêncio e a ser assistido por advogado. Falar sem orientação pode prejudicar a defesa.
- **Fiança é sempre possível?**  
  Não. Depende do crime e da situação. Quando cabível, o advogado pode pedir a fiança ou até a dispensa dela para quem não pode pagar.

### 5.8 Chamada final (FinalCTA)
Alguém foi preso agora? Cada hora conta. Fale com o Dr. Lauro, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Alguém foi preso agora | alguem-foi-preso-agora | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Pris%C3%A3o%20em%20Flagrante%20e%20Audi%C3%AAncia%20de%20Cust%C3%B3dia%29%3A%20algu%C3%A9m%20foi%20preso%20agora. |
| Vai ter audiência de custódia | vai-ter-audiencia-de-custodia | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Pris%C3%A3o%20em%20Flagrante%20e%20Audi%C3%AAncia%20de%20Cust%C3%B3dia%29%3A%20vai%20ter%20audi%C3%AAncia%20de%20cust%C3%B3dia. |
| Fui chamado na delegacia | fui-chamado-na-delegacia | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Pris%C3%A3o%20em%20Flagrante%20e%20Audi%C3%AAncia%20de%20Cust%C3%B3dia%29%3A%20fui%20chamado%20para%20depor%20na%20delegacia. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Pris%C3%A3o%20em%20Flagrante%20e%20Audi%C3%AAncia%20de%20Cust%C3%B3dia%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20pris%C3%A3o. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="flagrante" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="flagrante"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/prisao-em-flagrante/",
      "url": "https://lauro.adv.br/prisao-em-flagrante/",
      "name": "Advogado para Prisão em Flagrante 24h | Osasco e SP",
      "description": "Familiar preso? Advogado criminalista 24 horas para flagrante, audiência de custódia e liberdade provisória em Osasco e São Paulo. Fale agora.",
      "about": "Prisão em Flagrante e Audiência de Custódia",
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
          "name": "Prisão em Flagrante e Audiência de Custódia",
          "item": "https://lauro.adv.br/prisao-em-flagrante/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto tempo a pessoa fica presa até a audiência de custódia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A audiência de custódia deve acontecer em até 24 horas após a prisão. É nela que o juiz decide se a pessoa responde em liberdade."
          }
        },
        {
          "@type": "Question",
          "name": "O que fazer quando um familiar é preso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chame um advogado criminalista imediatamente, separe documentos pessoais e comprovantes de residência e trabalho do preso, e evite falar sobre os fatos por telefone."
          }
        },
        {
          "@type": "Question",
          "name": "O preso precisa falar na delegacia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Todo preso tem direito ao silêncio e a ser assistido por advogado. Falar sem orientação pode prejudicar a defesa."
          }
        },
        {
          "@type": "Question",
          "name": "Fiança é sempre possível?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Depende do crime e da situação. Quando cabível, o advogado pode pedir a fiança ou até a dispensa dela para quem não pode pagar."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Habeas Corpus: `/habeas-corpus/`
- Tráfico de Drogas: `/trafico-de-drogas/`
- Lei Maria da Penha e Violência Doméstica: `/lei-maria-da-penha/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
