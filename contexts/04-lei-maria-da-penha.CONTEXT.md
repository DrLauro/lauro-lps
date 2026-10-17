# CONTEXT.md – Página "Lei Maria da Penha e Violência Doméstica" (/lei-maria-da-penha/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 4 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado maria da penha" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Maria da Penha (novo).
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

- Rota: `src/pages/lei-maria-da-penha/index.astro` (ou coleção de conteúdo `src/content/areas/lei-maria-da-penha.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/lei-maria-da-penha/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado Lei Maria da Penha | Defesa e Vítimas | Osasco (55 caracteres)
- `<meta name="description">`: Medidas protetivas, defesa de acusados e representação de vítimas de violência doméstica em Osasco e São Paulo. Atendimento 24h e sigilo. (137 caracteres)
- Canonical: `https://lauro.adv.br/lei-maria-da-penha/`
- H1 (único na página): Advogado para casos de Lei Maria da Penha e violência doméstica
- Palavra-chave principal: advogado maria da penha
- Secundárias (aparecem naturalmente no texto já escrito): medida protetiva, revogar medida protetiva, advogado violência doméstica, descumprimento de medida protetiva, advogado para vítima de violência doméstica, acusado maria da penha
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado para casos de Lei Maria da Penha e violência doméstica
- Texto: Casos de violência doméstica envolvem família, filhos, casa e liberdade, e quase sempre exigem providências urgentes. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, atua tanto na defesa de quem é acusado quanto na representação de vítimas, com sigilo e atendimento 24 horas.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Casos de grande repercussão em sigilo · Atendimento 24 horas · Avaliações 5,0 no Google (widget)

### 5.3 H2: Como atuamos
Para vítimas: pedido de medidas protetivas de urgência, acompanhamento na delegacia e no processo e atuação como assistente de acusação, para que a violência seja interrompida e responsabilizada.

Para acusados: análise da medida protetiva e do inquérito, pedido de revisão ou revogação quando cabível, orientação para evitar o descumprimento, que é crime, e defesa no processo, inclusive contra prisão preventiva.

### 5.4 H2: Serviços nesta área
Lei Maria da Penha, violência doméstica e familiar, violência física, psicológica, sexual, patrimonial, moral e vicária, lesão corporal no contexto doméstico, ameaça, perseguição, violência psicológica contra a mulher, calúnia, difamação e injúria, medidas protetivas de urgência (concessão, revisão, revogação e descumprimento), prisão preventiva em contexto de violência doméstica, defesa de investigados e acusados, representação de vítimas e assistência de acusação.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- O que a medida protetiva proíbe e por quanto tempo.
- Provas do processo: depoimentos, mensagens, laudos.
- Situação dos filhos e da residência.
- Risco de prisão preventiva e como evitá-la.

### 5.6 H2: Casos em que atuamos
**Representação da vítima com medidas protetivas mantidas**  
Atuando para a vítima, a defesa dos interesses dela levou a um pedido incomum: a revogação da prisão do investigado, para que ele voltasse a cuidar da própria mãe e a vítima pudesse reorganizar a vida. O juízo deferiu o pedido e manteve todas as medidas protetivas, inclusive afastamento, proibição de contato e sigilo do novo endereço da vítima. (Caso publicado no Jusbrasil do Dr. Lauro.)

**Acusação de ameaça baseada em prints: absolvição**  
Na defesa de acusado de ameaça contra ex-companheira, a defesa demonstrou que o print apresentado tinha data diferente da descrita na denúncia, sem cadeia de custódia, e que a suposta confissão na delegacia era genérica e feita sem advogado. O acusado foi absolvido por falta de provas. (Caso publicado no Jusbrasil do Dr. Lauro.)

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Como pedir uma medida protetiva?**  
  Na delegacia, no Ministério Público, na Defensoria ou por meio de advogado. O juiz pode decidir em até 48 horas.
- **Recebi uma medida protetiva. Posso ir até a casa ou falar com a vítima?**  
  Não, se a medida proibir. Descumprir medida protetiva é crime e pode levar à prisão, mesmo que a outra parte concorde com o contato.
- **A vítima pode retirar a queixa?**  
  Depende do crime. Na lesão corporal em violência doméstica, por exemplo, o processo continua mesmo que a vítima desista.
- **Medida protetiva pode ser revogada?**  
  Sim, quando não houver mais risco. O pedido é feito ao juiz, com fundamentos e provas.

### 5.8 Chamada final (FinalCTA)
Vítima ou acusado em caso de violência doméstica? Fale com o Dr. Lauro, em sigilo, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Sou vítima e preciso de proteção | sou-vitima-e-preciso-de-protecao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Lei%20Maria%20da%20Penha%20e%20Viol%C3%AAncia%20Dom%C3%A9stica%29%3A%20sou%20v%C3%ADtima%20e%20preciso%20de%20medida%20protetiva. |
| Recebi uma medida protetiva | recebi-uma-medida-protetiva | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Lei%20Maria%20da%20Penha%20e%20Viol%C3%AAncia%20Dom%C3%A9stica%29%3A%20recebi%20uma%20medida%20protetiva. |
| Fui acusado | fui-acusado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Lei%20Maria%20da%20Penha%20e%20Viol%C3%AAncia%20Dom%C3%A9stica%29%3A%20fui%20acusado%20na%20Lei%20Maria%20da%20Penha. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Lei%20Maria%20da%20Penha%20e%20Viol%C3%AAncia%20Dom%C3%A9stica%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20viol%C3%AAncia%20dom%C3%A9stica. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="maria-da-penha" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="maria-da-penha"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/lei-maria-da-penha/",
      "url": "https://lauro.adv.br/lei-maria-da-penha/",
      "name": "Advogado Lei Maria da Penha | Defesa e Vítimas | Osasco",
      "description": "Medidas protetivas, defesa de acusados e representação de vítimas de violência doméstica em Osasco e São Paulo. Atendimento 24h e sigilo.",
      "about": "Lei Maria da Penha e Violência Doméstica",
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
          "name": "Lei Maria da Penha e Violência Doméstica",
          "item": "https://lauro.adv.br/lei-maria-da-penha/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como pedir uma medida protetiva?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na delegacia, no Ministério Público, na Defensoria ou por meio de advogado. O juiz pode decidir em até 48 horas."
          }
        },
        {
          "@type": "Question",
          "name": "Recebi uma medida protetiva. Posso ir até a casa ou falar com a vítima?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não, se a medida proibir. Descumprir medida protetiva é crime e pode levar à prisão, mesmo que a outra parte concorde com o contato."
          }
        },
        {
          "@type": "Question",
          "name": "A vítima pode retirar a queixa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do crime. Na lesão corporal em violência doméstica, por exemplo, o processo continua mesmo que a vítima desista."
          }
        },
        {
          "@type": "Question",
          "name": "Medida protetiva pode ser revogada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, quando não houver mais risco. O pedido é feito ao juiz, com fundamentos e provas."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Prisão em Flagrante e Audiência de Custódia: `/prisao-em-flagrante/`
- Tribunal do Júri e Crimes Contra a Vida: `/tribunal-do-juri/`
- Ofensas Digitais e Crimes Contra a Honra: `/ofensas-digitais/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Página com dois públicos: o botão de vítima deve ter o mesmo destaque que o de acusado.
- Se a pessoa estiver em perigo imediato, exibir também: ligue 190 ou 180 (Central de Atendimento à Mulher).

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
