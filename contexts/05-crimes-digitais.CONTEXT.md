# CONTEXT.md – Página "Crimes Digitais" (/crimes-digitais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 5 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado crimes digitais" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Crimes Digitais.
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

- Rota: `src/pages/crimes-digitais/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-digitais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-digitais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado de Crimes Digitais em Osasco e São Paulo (49 caracteres)
- `<meta name="description">`: Advogado de crimes digitais: invasão de dispositivos e contas, uso indevido de dados, autoria e provas digitais. Criminalista 24h em Osasco e SP. (145 caracteres)
- Canonical: `https://lauro.adv.br/crimes-digitais/`
- H1 (único na página): Advogado de crimes digitais em Osasco e São Paulo, com atendimento 24 horas
- Palavra-chave principal: advogado crimes digitais
- Secundárias (aparecem naturalmente no texto já escrito): advogado crime cibernético, advogado crimes virtuais, invasão de dispositivo, prova digital, print de whatsapp como prova, advogado fraude eletrônica
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado de crimes digitais em Osasco e São Paulo, com atendimento 24 horas
- Texto: O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação (OAB/SP 210.212), atua em investigações e processos envolvendo invasão de dispositivos, acesso indevido a contas, uso ilícito de dados e outras infrações praticadas por meios digitais, em Osasco, São Paulo e em todo o Brasil. A defesa começa pela análise de autoria, registros eletrônicos, provas digitais e perícias, tanto para pessoas investigadas ou acusadas quanto para vítimas.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Analisamos de onde vieram prints, fotos, áudios e registros, e se a cadeia de custódia foi respeitada. Sem origem confirmada e sem perícia, a prova digital pode ser contestada.

Para vítimas, preservamos as provas, identificamos o caminho do dinheiro e levamos o caso à polícia e ao Judiciário.

### 5.4 H2: Serviços nesta área
- Invasão de dispositivo informático
- Invasão de contas bancárias e digitais
- Uso ilícito de dados
- Extorsão digital
- Estelionato eletrônico
- Fraudes no WhatsApp e nas redes sociais (Facebook, Instagram, TikTok e outras)
- Falsificação de documentos e crimes patrimoniais no ambiente digital
- Análise de autoria e de registros eletrônicos
- Provas digitais, perícia e reconhecimento por fotografia
- Defesa de investigados e acusados
- Representação de vítimas

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Origem e integridade de prints, fotos, áudios e registros.
- Se a autoria está provada ou só presumida pela titularidade de uma conta ou chave Pix.
- Se o reconhecimento por foto seguiu o art. 226 do Código de Processo Penal.
- Se houve perícia e se ela pode ser contestada por assistente técnico.

### 5.6 H2: Casos em que atuamos
**Fraude bancária com documento falsificado**  
Uma contratação feita em nome do cliente foi contestada com perícia na assinatura e análise dos registros eletrônicos da operação. A prova pericial confirmou a tese da defesa e a cobrança foi julgada improcedente.

**Transferência por Pix e reconhecimento por fotografia**  
Na defesa de cliente apontado como suspeito a partir de uma transferência bancária e de fotos, questionamos a origem das imagens, as irregularidades do reconhecimento e a falta de provas que ligassem o acusado ao fato.

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Print de WhatsApp serve como prova?**  
  Pode servir, mas sozinho é frágil: sem a origem confirmada e sem perícia, a defesa pode contestar sua autenticidade.
- **Fui identificado só porque o Pix caiu na minha conta. Isso basta para condenar?**  
  Não necessariamente. Ser titular da conta não prova, por si só, que a pessoa participou do golpe; é preciso demonstrar autoria e intenção.
- **A polícia pode olhar meu celular apreendido?**  
  Em regra, o acesso ao conteúdo depende de autorização judicial. Acesso sem ordem pode tornar a prova ilícita.

### 5.8 Chamada final (FinalCTA)
Investigado ou acusado de crime digital? Fale agora com o Dr. Lauro. Atendimento 24 horas, em sigilo.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui acusado de golpe ou fraude | fui-acusado-de-golpe-ou-fraude | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Digitais%29%3A%20fui%20acusado%20de%20golpe%20ou%20fraude. |
| Estou sendo investigado | estou-sendo-investigado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Digitais%29%3A%20estou%20sendo%20investigado%20por%20crime%20digital. |
| Tenho processo em andamento | tenho-processo-em-andamento | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Digitais%29%3A%20tenho%20processo%20por%20crime%20digital. |
| Fui vítima de golpe | fui-vitima-de-golpe | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Digitais%29%3A%20fui%20v%C3%ADtima%20de%20golpe. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="crimes-digitais" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="crimes-digitais"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-digitais/",
      "url": "https://lauro.adv.br/crimes-digitais/",
      "name": "Advogado de Crimes Digitais em Osasco e São Paulo",
      "description": "Advogado de crimes digitais: invasão de dispositivos e contas, uso indevido de dados, autoria e provas digitais. Criminalista 24h em Osasco e SP.",
      "about": "Crimes Digitais",
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
          "name": "Crimes Digitais",
          "item": "https://lauro.adv.br/crimes-digitais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Print de WhatsApp serve como prova?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pode servir, mas sozinho é frágil: sem a origem confirmada e sem perícia, a defesa pode contestar sua autenticidade."
          }
        },
        {
          "@type": "Question",
          "name": "Fui identificado só porque o Pix caiu na minha conta. Isso basta para condenar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não necessariamente. Ser titular da conta não prova, por si só, que a pessoa participou do golpe; é preciso demonstrar autoria e intenção."
          }
        },
        {
          "@type": "Question",
          "name": "A polícia pode olhar meu celular apreendido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, o acesso ao conteúdo depende de autorização judicial. Acesso sem ordem pode tornar a prova ilícita."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Golpes e Fraudes Digitais: `/golpes-e-fraudes-digitais/`
- Ofensas Digitais e Crimes Contra a Honra: `/ofensas-digitais/`
- Crimes Patrimoniais: `/crimes-patrimoniais/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- O caso de fraude bancária foi decidido na esfera cível (improcedência da cobrança); não descrever como absolvição.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
