# CONTEXT.md – Página "Tribunal do Júri e Crimes Contra a Vida" (/tribunal-do-juri/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 10 de 13. Fase de publicação: 2.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado tribunal do júri" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Fase 2.
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

- Rota: `src/pages/tribunal-do-juri/index.astro` (ou coleção de conteúdo `src/content/areas/tribunal-do-juri.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/tribunal-do-juri/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado Tribunal do Júri | Homicídio e Feminicídio | SP (56 caracteres)
- `<meta name="description">`: Defesa no Tribunal do Júri em homicídio, tentativa, feminicídio e lesão corporal, e assistência de acusação para famílias de vítimas. Dr. Lauro. (144 caracteres)
- Canonical: `https://lauro.adv.br/tribunal-do-juri/`
- H1 (único na página): Advogado para Tribunal do Júri: homicídio, tentativa e feminicídio
- Palavra-chave principal: advogado tribunal do júri
- Secundárias (aparecem naturalmente no texto já escrito): advogado homicídio, advogado tentativa de homicídio, advogado feminicídio, assistente de acusação, advogado júri osasco, lesão corporal grave
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado para Tribunal do Júri: homicídio, tentativa e feminicídio
- Texto: Crimes dolosos contra a vida são julgados pelo Tribunal do Júri, onde sete jurados decidem o caso depois de ouvir acusação e defesa. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, prepara e conduz a defesa em plenário e também atua como assistente de acusação para famílias de vítimas.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
A defesa começa muito antes do plenário: no inquérito, na fase de pronúncia, em que se discute se o caso vai ou não a júri, e na preparação de testemunhas, perícias e teses.

No plenário, a sustentação oral fala para jurados leigos; a experiência em júri faz diferença. Para famílias de vítimas, a assistência de acusação acompanha o processo e reforça a busca por responsabilização.

### 5.4 H2: Serviços nesta área
- Homicídio simples, qualificado, privilegiado e culposo
- Tentativa de homicídio
- Feminicídio e tentativa de feminicídio
- Vicaricídio
- Lesão corporal leve, grave, gravíssima e seguida de morte
- Tribunal do Júri
- Defesa criminal em crimes contra a vida
- Assistência de acusação em crimes contra a vida

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Laudos de local, necroscópico e balística.
- Legítima defesa e outras excludentes.
- Qualificadoras e se elas se sustentam.
- Possibilidade de desclassificação para crime menos grave.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Quais crimes vão a júri?**  
  Os crimes dolosos contra a vida: homicídio, feminicídio, induzimento ao suicídio, infanticídio e aborto, consumados ou tentados.
- **O réu responde preso até o júri?**  
  Nem sempre. Depende dos fundamentos da prisão; a defesa pode pedir liberdade a qualquer tempo.
- **A família da vítima pode participar do processo?**  
  Sim, como assistente de acusação, por meio de advogado.

### 5.8 Chamada final (FinalCTA)
Júri marcado, prisão por homicídio ou família de vítima? Fale com o Dr. Lauro.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Familiar foi preso por homicídio | familiar-foi-preso-por-homicidio | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tribunal%20do%20J%C3%BAri%20e%20Crimes%20Contra%20a%20Vida%29%3A%20familiar%20foi%20preso%20por%20homic%C3%ADdio. |
| Tenho júri marcado | tenho-juri-marcado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tribunal%20do%20J%C3%BAri%20e%20Crimes%20Contra%20a%20Vida%29%3A%20tenho%20j%C3%BAri%20marcado. |
| Sou familiar da vítima | sou-familiar-da-vitima | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tribunal%20do%20J%C3%BAri%20e%20Crimes%20Contra%20a%20Vida%29%3A%20sou%20familiar%20da%20v%C3%ADtima. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tribunal%20do%20J%C3%BAri%20e%20Crimes%20Contra%20a%20Vida%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20j%C3%BAri. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="juri" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="juri"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/tribunal-do-juri/",
      "url": "https://lauro.adv.br/tribunal-do-juri/",
      "name": "Advogado Tribunal do Júri | Homicídio e Feminicídio | SP",
      "description": "Defesa no Tribunal do Júri em homicídio, tentativa, feminicídio e lesão corporal, e assistência de acusação para famílias de vítimas. Dr. Lauro.",
      "about": "Tribunal do Júri e Crimes Contra a Vida",
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
          "name": "Tribunal do Júri e Crimes Contra a Vida",
          "item": "https://lauro.adv.br/tribunal-do-juri/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quais crimes vão a júri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os crimes dolosos contra a vida: homicídio, feminicídio, induzimento ao suicídio, infanticídio e aborto, consumados ou tentados."
          }
        },
        {
          "@type": "Question",
          "name": "O réu responde preso até o júri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nem sempre. Depende dos fundamentos da prisão; a defesa pode pedir liberdade a qualquer tempo."
          }
        },
        {
          "@type": "Question",
          "name": "A família da vítima pode participar do processo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, como assistente de acusação, por meio de advogado."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Lei Maria da Penha e Violência Doméstica: `/lei-maria-da-penha/`
- Habeas Corpus: `/habeas-corpus/`
- Recursos Criminais e Revisão Criminal: `/recursos-e-revisao-criminal/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Não há caso concreto enviado ainda; não criar seção de casos até receber.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
