# CONTEXT.md – Página "Ofensas Digitais e Crimes Contra a Honra" (/ofensas-digitais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 7 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado calúnia e difamação" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Ofensas Digitais.
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

- Rota: `src/pages/ofensas-digitais/index.astro` (ou coleção de conteúdo `src/content/areas/ofensas-digitais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/ofensas-digitais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado Calúnia, Difamação e Ofensas na Internet | SP (54 caracteres)
- `<meta name="description">`: Foi ofendido ou acusado nas redes? Queixa-crime e defesa em calúnia, difamação e injúria na internet. Prazo de 6 meses. Fale com o Dr. Lauro. (141 caracteres)
- Canonical: `https://lauro.adv.br/ofensas-digitais/`
- H1 (único na página): Ofendido ou acusado de ofensa nas redes sociais? Advogado para crimes contra a honra
- Palavra-chave principal: advogado calúnia e difamação
- Secundárias (aparecem naturalmente no texto já escrito): advogado difamação internet, advogado injúria redes sociais, queixa-crime, como processar quem me difamou, perfil falso, advogado crimes contra a honra
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Ofendido ou acusado de ofensa nas redes sociais? Advogado para crimes contra a honra
- Texto: O Dr. Lauro de Almeida Neto atua dos dois lados dos crimes contra a honra praticados na internet: para quem foi caluniado, difamado ou injuriado e quer responsabilizar o autor por queixa-crime, e para quem é acusado de uma publicação ofensiva. Mais de 23 anos de atuação criminal, atendimento 24 horas e sigilo absoluto.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Para quem foi ofendido: identificamos a autoria da publicação, preservamos as provas antes que sejam apagadas e apresentamos a queixa-crime dentro do prazo. Esse prazo é de 6 meses a partir do dia em que a vítima descobre quem é o autor; depois disso, o direito se perde.

Para quem foi acusado: analisamos se o texto realmente configura calúnia, difamação ou injúria, se a autoria está provada e se as provas eletrônicas são válidas. Muitas acusações não se sustentam quando se separa crítica, opinião e ofensa.

### 5.4 H2: Serviços nesta área
Calúnia, difamação e injúria, praticadas presencialmente ou na internet e nas redes sociais (Facebook, Instagram, TikTok, WhatsApp e outras plataformas); queixa-crime; defesa de quem é acusado; representação de vítimas.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: Diferença entre calúnia, difamação e injúria
- Calúnia: atribuir falsamente a alguém um crime.
- Difamação: atribuir um fato que ofende a reputação, mesmo que não seja crime.
- Injúria: ofender a dignidade ou o decoro com xingamentos ou qualificações negativas.
- Quando a ofensa é feita pelas redes sociais, a pena pode ser aumentada.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Print da ofensa é suficiente?**  
  É o começo. O ideal é registrar a publicação em ata notarial ou com ferramenta de preservação de prova, com link e data, antes que seja apagada.
- **Dá para descobrir quem está por trás de um perfil falso?**  
  Em muitos casos sim, com pedido judicial às plataformas para fornecer os dados de acesso.
- **Posso pedir indenização além do processo criminal?**  
  Sim. A ação criminal e a ação de indenização podem caminhar juntas.

### 5.8 Chamada final (FinalCTA)
Foi ofendido ou acusado nas redes? O prazo corre. Fale agora com o Dr. Lauro.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui ofendido na internet | fui-ofendido-na-internet | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Ofensas%20Digitais%20e%20Crimes%20Contra%20a%20Honra%29%3A%20fui%20ofendido%20na%20internet. |
| Fui acusado de ofender alguém | fui-acusado-de-ofender-alguem | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Ofensas%20Digitais%20e%20Crimes%20Contra%20a%20Honra%29%3A%20fui%20acusado%20de%20ofender%20algu%C3%A9m. |
| Recebi uma intimação | recebi-uma-intimacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Ofensas%20Digitais%20e%20Crimes%20Contra%20a%20Honra%29%3A%20recebi%20uma%20intima%C3%A7%C3%A3o%20por%20ofensa. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Ofensas%20Digitais%20e%20Crimes%20Contra%20a%20Honra%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20ofensa%20na%20internet. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="ofensas-digitais" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="ofensas-digitais"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/ofensas-digitais/",
      "url": "https://lauro.adv.br/ofensas-digitais/",
      "name": "Advogado Calúnia, Difamação e Ofensas na Internet | SP",
      "description": "Foi ofendido ou acusado nas redes? Queixa-crime e defesa em calúnia, difamação e injúria na internet. Prazo de 6 meses. Fale com o Dr. Lauro.",
      "about": "Ofensas Digitais e Crimes Contra a Honra",
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
          "name": "Ofensas Digitais e Crimes Contra a Honra",
          "item": "https://lauro.adv.br/ofensas-digitais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Print da ofensa é suficiente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É o começo. O ideal é registrar a publicação em ata notarial ou com ferramenta de preservação de prova, com link e data, antes que seja apagada."
          }
        },
        {
          "@type": "Question",
          "name": "Dá para descobrir quem está por trás de um perfil falso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em muitos casos sim, com pedido judicial às plataformas para fornecer os dados de acesso."
          }
        },
        {
          "@type": "Question",
          "name": "Posso pedir indenização além do processo criminal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. A ação criminal e a ação de indenização podem caminhar juntas."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Crimes Digitais: `/crimes-digitais/`
- Lei Maria da Penha e Violência Doméstica: `/lei-maria-da-penha/`
- Golpes e Fraudes Digitais: `/golpes-e-fraudes-digitais/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Ainda não há caso concreto publicado; não criar seção de casos até o Dr. Lauro enviar um.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
