# CONTEXT.md – Página "Crimes de Armas de Fogo" (/crimes-de-armas-de-fogo/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 17 de 20 (card 17 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 3.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado porte ilegal de arma" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Crimes de Armas (grupo novo, a incluir na campanha após a publicação).
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

- Rota: `src/pages/crimes-de-armas-de-fogo/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-de-armas-de-fogo.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-de-armas-de-fogo/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Porte Ilegal e Posse de Arma de Fogo | SP (55 caracteres)
- `<meta name="description">`: Defesa em posse irregular, porte ilegal, disparo e armas de uso restrito ou proibido, do flagrante ao recurso. Advogado criminalista 24h, Dr. Lauro. (148 caracteres)
- Canonical: `https://lauro.adv.br/crimes-de-armas-de-fogo/`
- H1 (único na página): Advogado para porte ilegal e posse irregular de arma de fogo
- Palavra-chave principal: advogado porte ilegal de arma
- Secundárias (aparecem naturalmente no texto já escrito): posse irregular de arma, preso com arma, arma de uso restrito, disparo de arma de fogo, estatuto do desarmamento, CAC criminal
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 17. Crimes de Armas de Fogo
- Descrição: Defesa em acusações de posse irregular, porte ilegal, disparo de arma de fogo e delitos envolvendo armas de uso restrito ou proibido. Análise da legalidade da apreensão, perícia, classificação da arma e circunstâncias da prisão.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Advogado para porte ilegal e posse irregular de arma de fogo
- Texto: A apreensão de uma arma quase sempre vem com prisão em flagrante, e a diferença entre posse, porte e tipo de arma muda completamente a pena. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, atua desde a delegacia nesses casos, inclusive para atiradores, caçadores e colecionadores com problemas na documentação.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
No flagrante, examinamos a abordagem, a busca pessoal, veicular ou domiciliar e a forma de apreensão, e atuamos pela fiança ou pela liberdade na audiência de custódia.

No processo, a defesa discute a classificação da arma, o laudo pericial, se a arma funcionava, a situação do registro e da autorização e a diferença entre posse dentro de casa e porte fora dela, que define o crime e a pena.

### 5.4 H2: Serviços nesta área
- Posse irregular de arma de fogo de uso permitido
- Porte ilegal de arma de fogo de uso permitido
- Posse e porte de arma de uso restrito ou proibido
- Disparo de arma de fogo
- Omissão de cautela
- Comércio ilegal e tráfico de armas, munições e acessórios
- Numeração raspada ou suprimida
- Arma em situação irregular de atiradores, caçadores e colecionadores (CAC)
- Prisão em flagrante, fiança e audiência de custódia
- Perícia de armas
- Recursos criminais

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Legalidade da abordagem e da busca.
- Laudo pericial: tipo, calibre, funcionamento e classificação da arma.
- Situação do registro e da autorização de posse ou porte.
- Se a arma estava em casa, no local de trabalho ou em via pública.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Qual a diferença entre posse e porte de arma?**  
  Posse é manter a arma dentro de casa ou no local de trabalho, sendo o responsável legal. Porte é levar a arma consigo fora desses lugares. O porte ilegal é mais grave.
- **Posse irregular de arma tem fiança?**  
  Em regra, sim. No caso de arma de uso permitido, a fiança pode ser arbitrada pelo próprio delegado.
- **Ter a arma registrada impede a prisão?**  
  O registro autoriza a posse em casa, não o porte na rua. Sair com a arma sem autorização de porte pode configurar crime.
- **O tipo de arma muda a pena?**  
  Sim. Armas de uso restrito ou proibido e numeração raspada têm penas bem maiores do que as de uso permitido.

### 5.8 Chamada final (FinalCTA)
Prisão ou apreensão de arma? A defesa começa na delegacia. Fale com o Dr. Lauro, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui preso com arma | fui-preso-com-arma | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Armas%20de%20Fogo%29%3A%20fui%20preso%20com%20arma%20de%20fogo. |
| Arma apreendida em casa | arma-apreendida-em-casa | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Armas%20de%20Fogo%29%3A%20arma%20foi%20apreendida%20em%20casa. |
| Sou CAC e tive problema | sou-cac-e-tive-problema | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Armas%20de%20Fogo%29%3A%20sou%20CAC%20e%20tive%20problema%20com%20arma%20ou%20documenta%C3%A7%C3%A3o. |
| Outra situação criminal | outra-situacao-criminal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Armas%20de%20Fogo%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20arma%20de%20fogo. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="armas" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="armas"`. Script único no layout:

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
      "@type": "Person",
      "@id": "https://lauro.adv.br/#advogado",
      "name": "Lauro de Almeida Neto",
      "jobTitle": "Advogado criminalista",
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
      "@id": "https://lauro.adv.br/crimes-de-armas-de-fogo/",
      "url": "https://lauro.adv.br/crimes-de-armas-de-fogo/",
      "name": "Advogado para Porte Ilegal e Posse de Arma de Fogo | SP",
      "description": "Defesa em posse irregular, porte ilegal, disparo e armas de uso restrito ou proibido, do flagrante ao recurso. Advogado criminalista 24h, Dr. Lauro.",
      "about": "Crimes de Armas de Fogo",
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
          "name": "Crimes de Armas de Fogo",
          "item": "https://lauro.adv.br/crimes-de-armas-de-fogo/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual a diferença entre posse e porte de arma?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Posse é manter a arma dentro de casa ou no local de trabalho, sendo o responsável legal. Porte é levar a arma consigo fora desses lugares. O porte ilegal é mais grave."
          }
        },
        {
          "@type": "Question",
          "name": "Posse irregular de arma tem fiança?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, sim. No caso de arma de uso permitido, a fiança pode ser arbitrada pelo próprio delegado."
          }
        },
        {
          "@type": "Question",
          "name": "Ter a arma registrada impede a prisão?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O registro autoriza a posse em casa, não o porte na rua. Sair com a arma sem autorização de porte pode configurar crime."
          }
        },
        {
          "@type": "Question",
          "name": "O tipo de arma muda a pena?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Armas de uso restrito ou proibido e numeração raspada têm penas bem maiores do que as de uso permitido."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Prisão em Flagrante e Audiência de Custódia: `/prisao-em-flagrante/`
- Habeas Corpus: `/habeas-corpus/`
- Tráfico de Drogas: `/trafico-de-drogas/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Sem imagens de armas: o Google Ads restringe anúncios e páginas com armas em destaque.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
