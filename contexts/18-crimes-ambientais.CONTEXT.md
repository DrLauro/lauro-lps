# CONTEXT.md – Página "Crimes Ambientais" (/crimes-ambientais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 18 de 20 (card 18 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 7.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado crime ambiental" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Não incluir na campanha por enquanto.
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

- Rota: `src/pages/crimes-ambientais/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-ambientais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-ambientais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Crimes Ambientais e Maus-Tratos a Animais | SP (60 caracteres)
- `<meta name="description">`: Defesa de pessoas e empresas em maus-tratos a animais, crimes contra a fauna e a flora, poluição e outras infrações penais ambientais. Dr. Lauro. (145 caracteres)
- Canonical: `https://lauro.adv.br/crimes-ambientais/`
- H1 (único na página): Advogado para crimes ambientais e maus-tratos a animais
- Palavra-chave principal: advogado crime ambiental
- Secundárias (aparecem naturalmente no texto já escrito): advogado maus-tratos a animais, crime contra a fauna, crime contra a flora, poluição crime, empresa crime ambiental, auto de infração ambiental
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 18. Crimes Ambientais
- Descrição: Defesa em investigações e processos por maus-tratos a animais, crimes contra a fauna e a flora, poluição e outras infrações penais ambientais. Atuação na análise de autos de infração, laudos periciais, responsabilidade penal e medidas cautelares.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Advogado para crimes ambientais e maus-tratos a animais
- Texto: Crimes ambientais alcançam pessoas físicas e também empresas, que podem responder criminalmente. Uma denúncia de maus-tratos, um desmatamento ou uma autuação por poluição costumam gerar, ao mesmo tempo, processo administrativo e inquérito. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, conduz a defesa criminal nesses casos.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
Analisamos o auto de infração, os laudos técnicos e periciais e o nexo entre a conduta de cada pessoa ou da empresa e o dano apontado.

Avaliamos as saídas previstas em lei, como transação penal, suspensão condicional do processo e acordo de não persecução penal, e a reparação do dano quando ela favorece o cliente. Quando o caso vai a julgamento, discutimos a autoria, a prova do dano e a responsabilidade da pessoa jurídica.

### 5.4 H2: Serviços nesta área
- Maus-tratos a animais, inclusive cães e gatos
- Crimes contra a fauna, caça e pesca ilegais
- Crimes contra a flora, desmatamento e queimadas
- Poluição
- Crimes contra o ordenamento urbano e o patrimônio cultural
- Crimes contra a administração ambiental
- Responsabilidade penal da pessoa jurídica
- Análise de autos de infração e laudos periciais
- Transação penal e suspensão condicional do processo
- Acordo de não persecução penal
- Medidas cautelares

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Auto de infração, laudos e vistorias.
- Quem tomou a decisão ou praticou a conduta, na pessoa física e na empresa.
- Prova do dano e do nexo com a conduta.
- Possibilidade de acordo e reparação do dano.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Empresa pode ser processada criminalmente por crime ambiental?**  
  Sim. A lei permite a responsabilização penal da pessoa jurídica, com penas como multa, restrição de direitos e prestação de serviços à comunidade.
- **Maus-tratos a cães e gatos dá prisão?**  
  A pena para maus-tratos a cães e gatos é de reclusão e é mais alta do que a dos demais animais. A defesa analisa as provas e as alternativas cabíveis.
- **O processo administrativo e o criminal são a mesma coisa?**  
  Não. São independentes. Uma multa administrativa não impede o processo criminal, e o contrário também é verdadeiro.

### 5.8 Chamada final (FinalCTA)
Autuação ou denúncia por crime ambiental? Fale com o Dr. Lauro.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui denunciado por maus-tratos | fui-denunciado-por-maus-tratos | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Ambientais%29%3A%20fui%20denunciado%20por%20maus-tratos%20a%20animais. |
| Minha empresa foi autuada | minha-empresa-foi-autuada | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Ambientais%29%3A%20minha%20empresa%20foi%20autuada%20por%20crime%20ambiental. |
| Recebi intimação | recebi-intimacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Ambientais%29%3A%20recebi%20intima%C3%A7%C3%A3o%20por%20crime%20ambiental. |
| Outra situação criminal | outra-situacao-criminal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Ambientais%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20crime%20ambiental. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="ambientais" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="ambientais"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-ambientais/",
      "url": "https://lauro.adv.br/crimes-ambientais/",
      "name": "Advogado para Crimes Ambientais e Maus-Tratos a Animais | SP",
      "description": "Defesa de pessoas e empresas em maus-tratos a animais, crimes contra a fauna e a flora, poluição e outras infrações penais ambientais. Dr. Lauro.",
      "about": "Crimes Ambientais",
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
          "name": "Crimes Ambientais",
          "item": "https://lauro.adv.br/crimes-ambientais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Empresa pode ser processada criminalmente por crime ambiental?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A lei permite a responsabilização penal da pessoa jurídica, com penas como multa, restrição de direitos e prestação de serviços à comunidade."
          }
        },
        {
          "@type": "Question",
          "name": "Maus-tratos a cães e gatos dá prisão?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pena para maus-tratos a cães e gatos é de reclusão e é mais alta do que a dos demais animais. A defesa analisa as provas e as alternativas cabíveis."
          }
        },
        {
          "@type": "Question",
          "name": "O processo administrativo e o criminal são a mesma coisa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. São independentes. Uma multa administrativa não impede o processo criminal, e o contrário também é verdadeiro."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Crimes Econômicos e Financeiros: `/crimes-economicos-e-financeiros/`
- Crimes Tributários: `/crimes-tributarios/`
- Recursos Criminais e Revisão Criminal: `/recursos-e-revisao-criminal/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Sem imagens de animais feridos ou cenas de maus-tratos.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
