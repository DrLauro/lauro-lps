# CONTEXT.md – Página "Golpes e Fraudes Digitais" (/golpes-e-fraudes-digitais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 6 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado golpe pix" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Crimes Digitais (palavras de golpe).
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

- Rota: `src/pages/golpes-e-fraudes-digitais/index.astro` (ou coleção de conteúdo `src/content/areas/golpes-e-fraudes-digitais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/golpes-e-fraudes-digitais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Golpe do Pix e Fraude Bancária | Dr. Lauro (56 caracteres)
- `<meta name="description">`: Caiu em golpe do Pix, da falsa central ou do falso advogado? Ou foi acusado de participar? Advogado criminalista para vítimas e acusados. (137 caracteres)
- Canonical: `https://lauro.adv.br/golpes-e-fraudes-digitais/`
- H1 (único na página): Golpe do Pix, falsa central e falso advogado: advogado para vítimas e acusados
- Palavra-chave principal: advogado golpe pix
- Secundárias (aparecem naturalmente no texto já escrito): golpe do falso advogado, golpe da falsa central, advogado fraude bancária, conta usada em golpe, laranja golpe pix, estelionato pix
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Golpe do Pix, falsa central e falso advogado: advogado para vítimas e acusados
- Texto: Golpes digitais têm dois lados: quem perdeu dinheiro e quem teve a conta usada, muitas vezes sem saber, e passou a ser investigado. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, atende os dois, com rapidez, porque nesses casos prazo e preservação de provas fazem diferença.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Para vítimas: registro da ocorrência com as provas certas, representação criminal dentro do prazo de 6 meses (no estelionato, a investigação depende dela na maior parte dos casos), rastreio do destino do dinheiro e atuação para responsabilizar os autores.

Para quem teve a conta usada: demonstramos a ausência de participação e de intenção, analisando movimentação, contexto e a forma como a conta foi obtida pelos golpistas.

### 5.4 H2: Serviços nesta área
- Golpes por Pix
- Golpe da falsa central de atendimento
- Golpe do falso funcionário de banco
- Golpe do falso advogado
- Estelionato e estelionato eletrônico
- Fraudes bancárias
- Fraudes em empréstimos e financiamentos
- Fraudes em compras e vendas pela internet
- Invasão de contas bancárias e digitais
- Golpes por aplicativos de mensagens e redes sociais
- Representação de vítimas
- Defesa de investigados

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Data em que a vítima soube do golpe e de quem é o autor, que define o prazo.
- Comprovantes, conversas e dados das contas que receberam o dinheiro.
- Para o investigado: como a conta foi aberta ou cedida e se houve proveito.
- Perícia nos registros eletrônicos quando houver dúvida de autoria.

### 5.6 H2: Casos em que atuamos
**Fraude bancária com documento falsificado**  
Contratação feita em nome do cliente foi derrubada com perícia na assinatura e nos registros eletrônicos; a cobrança foi julgada improcedente.

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Caí no golpe do Pix. Ainda dá para fazer algo?**  
  Sim. Quanto antes, melhor: registre a ocorrência, avise o banco e procure um advogado para a representação criminal e as medidas cabíveis.
- **O que é o golpe do falso advogado?**  
  Criminosos se passam pelo advogado de um processo real e pedem pagamento de taxas para liberar valores. Desconfie de qualquer cobrança por WhatsApp e confirme diretamente com o escritório.
- **Minha conta foi usada em golpe sem eu saber. Vou ser condenado?**  
  Não necessariamente. É preciso provar que você participou e sabia do golpe. A defesa trabalha exatamente essa prova.
- **Qual o prazo para a vítima agir?**  
  No estelionato, em regra, 6 meses a partir de quando a vítima sabe quem é o autor para fazer a representação.

### 5.8 Chamada final (FinalCTA)
Golpe, fraude ou conta usada por golpistas? Fale agora com o Dr. Lauro.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Caí em um golpe | cai-em-um-golpe | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Golpes%20e%20Fraudes%20Digitais%29%3A%20ca%C3%AD%20em%20um%20golpe. |
| Minha conta foi usada em golpe | minha-conta-foi-usada-em-golpe | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Golpes%20e%20Fraudes%20Digitais%29%3A%20minha%20conta%20foi%20usada%20em%20golpe%20e%20estou%20sendo%20investigado. |
| Recebi intimação | recebi-intimacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Golpes%20e%20Fraudes%20Digitais%29%3A%20recebi%20intima%C3%A7%C3%A3o%20sobre%20golpe. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Golpes%20e%20Fraudes%20Digitais%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20golpe%20digital. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="golpes" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="golpes"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/golpes-e-fraudes-digitais/",
      "url": "https://lauro.adv.br/golpes-e-fraudes-digitais/",
      "name": "Advogado para Golpe do Pix e Fraude Bancária | Dr. Lauro",
      "description": "Caiu em golpe do Pix, da falsa central ou do falso advogado? Ou foi acusado de participar? Advogado criminalista para vítimas e acusados.",
      "about": "Golpes e Fraudes Digitais",
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
          "name": "Golpes e Fraudes Digitais",
          "item": "https://lauro.adv.br/golpes-e-fraudes-digitais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Caí no golpe do Pix. Ainda dá para fazer algo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. Quanto antes, melhor: registre a ocorrência, avise o banco e procure um advogado para a representação criminal e as medidas cabíveis."
          }
        },
        {
          "@type": "Question",
          "name": "O que é o golpe do falso advogado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Criminosos se passam pelo advogado de um processo real e pedem pagamento de taxas para liberar valores. Desconfie de qualquer cobrança por WhatsApp e confirme diretamente com o escritório."
          }
        },
        {
          "@type": "Question",
          "name": "Minha conta foi usada em golpe sem eu saber. Vou ser condenado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não necessariamente. É preciso provar que você participou e sabia do golpe. A defesa trabalha exatamente essa prova."
          }
        },
        {
          "@type": "Question",
          "name": "Qual o prazo para a vítima agir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No estelionato, em regra, 6 meses a partir de quando a vítima sabe quem é o autor para fazer a representação."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Crimes Digitais: `/crimes-digitais/`
- Crimes Patrimoniais: `/crimes-patrimoniais/`
- Ofensas Digitais e Crimes Contra a Honra: `/ofensas-digitais/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Página voltada também a vítimas; não prometer recuperação de valores.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
