# CONTEXT.md – Página "Recursos Criminais e Revisão Criminal" (/recursos-e-revisao-criminal/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 12 de 13. Fase de publicação: 2.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado recurso criminal" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Fase 2 (nacional).
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

- Rota: `src/pages/recursos-e-revisao-criminal/index.astro` (ou coleção de conteúdo `src/content/areas/recursos-e-revisao-criminal.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/recursos-e-revisao-criminal/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Recurso Criminal e Revisão Criminal | STJ (55 caracteres)
- `<meta name="description">`: Apelação, recurso especial e extraordinário, agravos, embargos e revisão criminal no TJ, STJ e STF. Advogado criminalista para todo o Brasil. (141 caracteres)
- Canonical: `https://lauro.adv.br/recursos-e-revisao-criminal/`
- H1 (único na página): Recursos criminais e revisão criminal, do Tribunal de Justiça ao STF
- Palavra-chave principal: advogado recurso criminal
- Secundárias (aparecem naturalmente no texto já escrito): apelação criminal, revisão criminal, recurso especial criminal, advogado stj criminal, reabilitação criminal, anular condenação
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Recursos criminais e revisão criminal, do Tribunal de Justiça ao STF
- Texto: Uma condenação em primeiro grau não é o fim. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, elabora recursos no Tribunal de Justiça e nos tribunais superiores e ajuíza revisão criminal para rever condenações definitivas, atendendo clientes de todo o Brasil.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Os prazos são curtos: a apelação, por exemplo, deve ser interposta em 5 dias. Analisamos a sentença ponto a ponto em busca de nulidades, erros na prova e na dosimetria da pena.

Depois do trânsito em julgado, a revisão criminal pode rever a condenação quando há prova nova, decisão contrária à prova dos autos ou documentos falsos. Também atuamos na reabilitação criminal.

### 5.4 H2: Serviços nesta área
Apelação criminal, recurso em sentido estrito, embargos de declaração, embargos infringentes e de nulidade, agravo regimental, agravo interno, recurso especial, recurso extraordinário, agravo em recurso especial e extraordinário, revisão criminal e reabilitação criminal.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Nulidades do processo.
- Se a prova sustenta a condenação.
- Dosimetria da pena e regime.
- Prova nova que permita revisão criminal.

### 5.6 H2: Casos em que atuamos
**Condenação definitiva corrigida no STJ**  
Em condenação já transitada em julgado por furto qualificado, a defesa levou ao Superior Tribunal de Justiça a tese de que a quebra do vidro do próprio veículo subtraído não qualifica o furto. A Sexta Turma concedeu a ordem de ofício: o crime foi desclassificado para furto simples, com regime aberto e substituição da prisão por penas restritivas de direitos. (Caso publicado no Jusbrasil do Dr. Lauro.)

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Qual o prazo para recorrer de uma condenação criminal?**  
  Em regra, 5 dias para a apelação, contados da intimação. Perder o prazo pode tornar a condenação definitiva.
- **O que é revisão criminal?**  
  É a ação para rever uma condenação já definitiva, em hipóteses previstas em lei, como prova nova de inocência.
- **Posso recorrer em liberdade?**  
  Depende do caso. A defesa pode pedir para que o condenado recorra solto.

### 5.8 Chamada final (FinalCTA)
Condenado ou com processo nos tribunais? O prazo é curto. Fale com o Dr. Lauro.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui condenado agora | fui-condenado-agora | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Recursos%20Criminais%20e%20Revis%C3%A3o%20Criminal%29%3A%20fui%20condenado%20e%20quero%20recorrer. |
| Condenação já transitou | condenacao-ja-transitou | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Recursos%20Criminais%20e%20Revis%C3%A3o%20Criminal%29%3A%20a%20condena%C3%A7%C3%A3o%20j%C3%A1%20transitou%20em%20julgado. |
| Recurso no STJ ou STF | recurso-no-stj-ou-stf | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Recursos%20Criminais%20e%20Revis%C3%A3o%20Criminal%29%3A%20preciso%20de%20recurso%20no%20STJ%20ou%20STF. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Recursos%20Criminais%20e%20Revis%C3%A3o%20Criminal%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20recurso. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="recursos" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="recursos"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/recursos-e-revisao-criminal/",
      "url": "https://lauro.adv.br/recursos-e-revisao-criminal/",
      "name": "Advogado para Recurso Criminal e Revisão Criminal | STJ",
      "description": "Apelação, recurso especial e extraordinário, agravos, embargos e revisão criminal no TJ, STJ e STF. Advogado criminalista para todo o Brasil.",
      "about": "Recursos Criminais e Revisão Criminal",
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
          "name": "Recursos Criminais e Revisão Criminal",
          "item": "https://lauro.adv.br/recursos-e-revisao-criminal/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual o prazo para recorrer de uma condenação criminal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, 5 dias para a apelação, contados da intimação. Perder o prazo pode tornar a condenação definitiva."
          }
        },
        {
          "@type": "Question",
          "name": "O que é revisão criminal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É a ação para rever uma condenação já definitiva, em hipóteses previstas em lei, como prova nova de inocência."
          }
        },
        {
          "@type": "Question",
          "name": "Posso recorrer em liberdade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do caso. A defesa pode pedir para que o condenado recorra solto."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Habeas Corpus: `/habeas-corpus/`
- Execução Penal: `/execucao-penal/`
- Tribunal do Júri e Crimes Contra a Vida: `/tribunal-do-juri/`
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
