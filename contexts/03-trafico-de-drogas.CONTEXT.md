# CONTEXT.md – Página "Tráfico de Drogas" (/trafico-de-drogas/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 3 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado tráfico de drogas" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Tráfico de Drogas (novo).
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

- Rota: `src/pages/trafico-de-drogas/index.astro` (ou coleção de conteúdo `src/content/areas/trafico-de-drogas.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/trafico-de-drogas/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Tráfico de Drogas | Osasco e São Paulo (52 caracteres)
- `<meta name="description">`: Defesa em tráfico de drogas, associação para o tráfico e tráfico privilegiado: flagrante, preventiva, provas digitais e recursos. Fale com o Dr. Lauro. (151 caracteres)
- Canonical: `https://lauro.adv.br/trafico-de-drogas/`
- H1 (único na página): Advogado criminalista para acusação de tráfico de drogas
- Palavra-chave principal: advogado tráfico de drogas
- Secundárias (aparecem naturalmente no texto já escrito): advogado associação para o tráfico, tráfico privilegiado, preso por tráfico, advogado flagrante tráfico, usuário ou traficante, advogado tráfico osasco
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado criminalista para acusação de tráfico de drogas
- Texto: A acusação de tráfico de drogas costuma vir com prisão em flagrante e pedido de prisão preventiva. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, defende acusados de tráfico, associação para o tráfico e tráfico privilegiado desde a delegacia até os tribunais superiores.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
No flagrante, examinamos a abordagem policial, a busca pessoal ou domiciliar, a quantidade e a forma de apreensão, e lutamos pela liberdade na audiência de custódia.

No processo, a defesa questiona a prova: quem era o dono da droga, se havia destinação ao comércio ou ao consumo pessoal, a origem das conversas e prints, e a perícia toxicológica. Quando a condenação é provável, buscamos o tráfico privilegiado, que reduz muito a pena.

### 5.4 H2: Serviços nesta área
- Tráfico de drogas
- Associação para o tráfico
- Compra, venda, oferta, fornecimento, transporte, armazenamento, depósito e guarda de drogas
- Tráfico interestadual e internacional
- Tráfico privilegiado
- Financiamento e custeio do tráfico
- Apreensão de drogas para consumo pessoal
- Prisão em flagrante e preventiva por tráfico
- Busca e apreensão
- Provas digitais
- Perícias toxicológicas
- Dosimetria da pena e causas de diminuição
- Recursos criminais e execução penal em condenações por tráfico

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Legalidade da abordagem e da entrada na casa.
- Se a droga pode ser ligada ao acusado.
- Diferença entre tráfico e consumo pessoal.
- Requisitos do tráfico privilegiado: primariedade, bons antecedentes e não integrar organização criminosa.

### 5.6 H2: Casos em que atuamos
**Absolvição da associação para o tráfico**  
A acusação se apoiava em conversas atribuídas a terceiros e não havia droga apreendida vinculada ao cliente. A defesa demonstrou a insuficiência dessas provas e o cliente foi absolvido da imputação de associação para o tráfico.

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Qual a diferença entre tráfico e uso de drogas?**  
  Depende da quantidade, do local, das circunstâncias e da conduta da pessoa. O usuário não vai preso; o acusado de tráfico pode ser. A defesa trabalha essa diferença desde o flagrante.
- **O que é tráfico privilegiado?**  
  É a redução da pena para quem é primário, tem bons antecedentes e não se dedica a atividades criminosas nem integra organização criminosa. Pode mudar o regime e permitir penas alternativas.
- **Mensagens no celular de outra pessoa bastam para condenar?**  
  Não deveriam. Precisam ser confirmadas por outras provas, como mostrou o caso de absolvição acima.
- **Quem é preso por tráfico pode responder em liberdade?**  
  Sim, depende do caso. A prisão preventiva precisa de fundamentação concreta, e a defesa pode pedir liberdade ou habeas corpus.

### 5.8 Chamada final (FinalCTA)
Acusação de tráfico? A defesa começa na delegacia. Fale agora com o Dr. Lauro, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Foi preso por tráfico agora | foi-preso-por-trafico-agora | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tr%C3%A1fico%20de%20Drogas%29%3A%20foi%20preso%20por%20tr%C3%A1fico%20agora. |
| Tenho processo por tráfico | tenho-processo-por-trafico | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tr%C3%A1fico%20de%20Drogas%29%3A%20tenho%20processo%20por%20tr%C3%A1fico. |
| Fui condenado e quero recorrer | fui-condenado-e-quero-recorrer | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tr%C3%A1fico%20de%20Drogas%29%3A%20fui%20condenado%20por%20tr%C3%A1fico%20e%20quero%20recorrer. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Tr%C3%A1fico%20de%20Drogas%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20tr%C3%A1fico. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="trafico" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="trafico"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/trafico-de-drogas/",
      "url": "https://lauro.adv.br/trafico-de-drogas/",
      "name": "Advogado para Tráfico de Drogas | Osasco e São Paulo",
      "description": "Defesa em tráfico de drogas, associação para o tráfico e tráfico privilegiado: flagrante, preventiva, provas digitais e recursos. Fale com o Dr. Lauro.",
      "about": "Tráfico de Drogas",
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
          "name": "Tráfico de Drogas",
          "item": "https://lauro.adv.br/trafico-de-drogas/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qual a diferença entre tráfico e uso de drogas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende da quantidade, do local, das circunstâncias e da conduta da pessoa. O usuário não vai preso; o acusado de tráfico pode ser. A defesa trabalha essa diferença desde o flagrante."
          }
        },
        {
          "@type": "Question",
          "name": "O que é tráfico privilegiado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É a redução da pena para quem é primário, tem bons antecedentes e não se dedica a atividades criminosas nem integra organização criminosa. Pode mudar o regime e permitir penas alternativas."
          }
        },
        {
          "@type": "Question",
          "name": "Mensagens no celular de outra pessoa bastam para condenar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não deveriam. Precisam ser confirmadas por outras provas, como mostrou o caso de absolvição acima."
          }
        },
        {
          "@type": "Question",
          "name": "Quem é preso por tráfico pode responder em liberdade?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, depende do caso. A prisão preventiva precisa de fundamentação concreta, e a defesa pode pedir liberdade ou habeas corpus."
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
- Crimes Complexos e de Grande Repercussão: `/crimes-complexos/`
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
