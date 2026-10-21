# CONTEXT.md – Página "Crimes Complexos e de Grande Repercussão" (/crimes-complexos/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 9 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado operação policial" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Grande Repercussão e Operações.
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

- Rota: `src/pages/crimes-complexos/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-complexos.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-complexos/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Crimes Complexos e Operações Policiais | SP (57 caracteres)
- `<meta name="description">`: Operações policiais, organização criminosa, lavagem de dinheiro, crimes empresariais e casos de grande repercussão. Defesa em sigilo, 24h. (138 caracteres)
- Canonical: `https://lauro.adv.br/crimes-complexos/`
- H1 (único na página): Crimes complexos e de grande repercussão: defesa conduzida em sigilo
- Palavra-chave principal: advogado operação policial
- Secundárias (aparecem naturalmente no texto já escrito): advogado operação polícia federal, advogado lavagem de dinheiro, advogado organização criminosa, advogado busca e apreensão, advogado crimes empresariais, advogado extorsão
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Crimes complexos e de grande repercussão: defesa conduzida em sigilo
- Texto: Operações policiais, acusações com vários réus, organização criminosa, lavagem de dinheiro, extorsão e crimes empresariais exigem leitura minuciosa de interceptações, mensagens e provas apreendidas. O Dr. Lauro de Almeida Neto atua há mais de 23 anos nesses processos, incluindo casos de grande repercussão, sempre com sigilo absoluto.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Atuamos desde a deflagração da operação: acompanhamento da busca e apreensão, acesso aos autos, análise de interceptações e do material apreendido, e pedidos de liberdade quando há prisão.

No processo, exigimos a individualização da conduta de cada acusado, contestamos provas obtidas de forma ilegal e avaliamos, quando for do interesse do cliente, o acordo de não persecução penal e a colaboração premiada.

### 5.4 H2: Serviços nesta área
Organização criminosa e associação criminosa, lavagem de dinheiro, crimes econômicos, financeiros, tributários e empresariais, corrupção ativa e passiva, peculato, concussão, prevaricação e demais crimes contra a administração pública, crimes contra a fé pública, falsidade ideológica, falsificação e uso de documento falso, extorsão e extorsão mediante sequestro, investigações e processos com vários investigados, investigações financeiras e patrimoniais, busca e apreensão de documentos e dispositivos, acordo de não persecução penal e colaboração premiada.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Legalidade das interceptações, buscas e apreensões.
- Se as mensagens atribuídas ao cliente são dele e em que contexto foram ditas.
- Individualização: o que cada acusado efetivamente fez.
- Pena e regime, para os casos em que a condenação é provável.

### 5.6 H2: Casos em que atuamos
**Extorsão empresarial**  
Na defesa de acusado de extorsão no ambiente empresarial, sustentamos a ausência de prova da ameaça, a falta de individualização da conduta de cada réu e erros na dosimetria da pena e na fixação do regime.

**Associação para o tráfico: absolvição**  
Em processo baseado em conversas de terceiros, sem droga apreendida vinculada ao cliente, a defesa obteve a absolvição da imputação de associação para o tráfico.

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Recebi um mandado de busca. O que faço?**  
  Não dê declarações sem advogado e chame a defesa imediatamente; atendemos 24 horas.
- **Só uma conversa no celular de outra pessoa basta para condenar?**  
  Não deveria. Mensagens de terceiros precisam ser confirmadas por outras provas.
- **O que é acordo de não persecução penal?**  
  É um acordo com o Ministério Público, em crimes sem violência e com pena mínima inferior a 4 anos, que evita o processo mediante condições. Nem sempre é a melhor saída; depende do caso.
- **Meu nome saiu na imprensa. O que fazer?**  
  Não se manifeste sem orientação. A estratégia de defesa inclui como e quando falar publicamente.

### 5.8 Chamada final (FinalCTA)
Operação, mandado ou processo complexo? Fale agora com o Dr. Lauro, em sigilo.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui alvo de operação ou busca | fui-alvo-de-operacao-ou-busca | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Complexos%20e%20de%20Grande%20Repercuss%C3%A3o%29%3A%20fui%20alvo%20de%20opera%C3%A7%C3%A3o%20ou%20busca%20e%20apreens%C3%A3o. |
| Fui preso | fui-preso | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Complexos%20e%20de%20Grande%20Repercuss%C3%A3o%29%3A%20fui%20preso%20em%20opera%C3%A7%C3%A3o. |
| Tenho processo em andamento | tenho-processo-em-andamento | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Complexos%20e%20de%20Grande%20Repercuss%C3%A3o%29%3A%20tenho%20processo%20complexo%20em%20andamento. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Complexos%20e%20de%20Grande%20Repercuss%C3%A3o%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20em%20caso%20complexo. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="crimes-complexos" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="crimes-complexos"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-complexos/",
      "url": "https://lauro.adv.br/crimes-complexos/",
      "name": "Advogado para Crimes Complexos e Operações Policiais | SP",
      "description": "Operações policiais, organização criminosa, lavagem de dinheiro, crimes empresariais e casos de grande repercussão. Defesa em sigilo, 24h.",
      "about": "Crimes Complexos e de Grande Repercussão",
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
          "name": "Crimes Complexos e de Grande Repercussão",
          "item": "https://lauro.adv.br/crimes-complexos/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Recebi um mandado de busca. O que faço?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não dê declarações sem advogado e chame a defesa imediatamente; atendemos 24 horas."
          }
        },
        {
          "@type": "Question",
          "name": "Só uma conversa no celular de outra pessoa basta para condenar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não deveria. Mensagens de terceiros precisam ser confirmadas por outras provas."
          }
        },
        {
          "@type": "Question",
          "name": "O que é acordo de não persecução penal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É um acordo com o Ministério Público, em crimes sem violência e com pena mínima inferior a 4 anos, que evita o processo mediante condições. Nem sempre é a melhor saída; depende do caso."
          }
        },
        {
          "@type": "Question",
          "name": "Meu nome saiu na imprensa. O que fazer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não se manifeste sem orientação. A estratégia de defesa inclui como e quando falar publicamente."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Tráfico de Drogas: `/trafico-de-drogas/`
- Habeas Corpus: `/habeas-corpus/`
- Crimes Digitais: `/crimes-digitais/`
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
