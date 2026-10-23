# CONTEXT.md – Página "Sou Vítima de um Crime" (/sou-vitima/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 20 de 20 (card 20 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado para vítima de crime" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Vítimas (grupo novo, a incluir na campanha após a publicação; palavras de vítima de golpe, agressão e ofensa).
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

- Rota: `src/pages/sou-vitima/index.astro` (ou coleção de conteúdo `src/content/areas/sou-vitima.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/sou-vitima/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Vítima de Crime | Queixa-Crime e Assistência (58 caracteres)
- `<meta name="description">`: Foi vítima de golpe, agressão, ameaça, ofensa ou crime contra a família? Advogado criminalista para representar a vítima, da delegacia ao tribunal. (147 caracteres)
- Canonical: `https://lauro.adv.br/sou-vitima/`
- H1 (único na página): Fui vítima de um crime: advogado para defender os seus direitos
- Palavra-chave principal: advogado para vítima de crime
- Secundárias (aparecem naturalmente no texto já escrito): assistente de acusação, queixa-crime, representação criminal, advogado vítima de golpe, advogado vítima de agressão, advogado para família de vítima
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 20. Sou Vítima de um Crime
- Descrição: Atuação na defesa dos direitos e interesses das vítimas de crimes, com acompanhamento desde a delegacia e a investigação policial até o processo judicial e os tribunais. Assistência jurídica na representação criminal, apresentação de queixa-crime, requerimento de diligências, habilitação como assistente de acusação e acompanhamento das medidas judiciais cabíveis.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Fui vítima de um crime: advogado para defender os seus direitos
- Texto: A vítima também tem direito a advogado no processo criminal. Sem acompanhamento, prazos se perdem, provas desaparecem e a vítima fica sem voz no inquérito e no julgamento. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, representa vítimas e seus familiares desde a delegacia até os tribunais, com sigilo e atendimento 24 horas.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
Na fase policial, registramos a ocorrência com as provas certas, apresentamos a representação ou a queixa-crime dentro do prazo, pedimos diligências e medidas de proteção e acompanhamos a vítima em depoimentos e reconhecimentos.

No processo, o advogado pode atuar como assistente de acusação: propõe provas, participa das audiências e do júri, apresenta argumentos e recorre. Também pedimos que a sentença fixe valor mínimo de reparação dos danos e acompanhamos as medidas judiciais para a recuperação de valores, quando cabíveis.

### 5.4 H2: Serviços nesta área
- Representação criminal
- Queixa-crime
- Requerimento de abertura de inquérito e de diligências
- Medidas protetivas de urgência
- Acompanhamento em depoimentos e reconhecimentos
- Habilitação como assistente de acusação
- Atuação no Tribunal do Júri ao lado da acusação
- Pedido de reparação de danos na sentença
- Medidas para bloqueio e recuperação de valores em golpes e fraudes
- Representação de vítimas de violência doméstica, crimes sexuais, crimes contra a honra, golpes digitais, crimes de trânsito e crimes contra a vida, e de seus familiares

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: Prazos e cuidados que a vítima precisa conhecer
- Em crimes como calúnia, difamação, injúria, ameaça e, em regra, estelionato, a vítima tem 6 meses, contados de quando sabe quem é o autor, para apresentar a queixa ou a representação.
- Provas digitais devem ser preservadas antes de serem apagadas: link, data e registro em ata notarial ou ferramenta de preservação.
- Laudos, exames e boletins médicos devem ser feitos o quanto antes.
- Familiares de vítimas de homicídio também podem atuar no processo como assistentes de acusação.

### 5.6 H2: Casos em que atuamos
**Representação da vítima com medidas protetivas mantidas**  
Atuando para a vítima em caso de violência doméstica, a defesa dos interesses dela levou a um pedido incomum: a revogação da prisão do investigado, para que ele voltasse a cuidar da própria mãe e a vítima pudesse reorganizar a vida. O juízo deferiu o pedido e manteve todas as medidas protetivas, inclusive afastamento, proibição de contato e sigilo do novo endereço da vítima. (Caso publicado no Jusbrasil do Dr. Lauro.)

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **A vítima precisa de advogado se já existe promotor?**  
  O promotor representa o Estado. O advogado da vítima representa os interesses dela: acompanha cada passo, propõe provas, recorre e pede a reparação dos danos.
- **O que é assistente de acusação?**  
  É o advogado da vítima ou da família habilitado no processo para atuar ao lado do Ministério Público, com direito a propor provas, participar das audiências e recorrer.
- **Qual o prazo para a vítima agir?**  
  Depende do crime. Em vários casos, como crimes contra a honra e, em regra, estelionato, o prazo é de 6 meses a partir de quando a vítima sabe quem é o autor.
- **A vítima pode ser indenizada no processo criminal?**  
  Sim. O juiz pode fixar na sentença um valor mínimo de reparação dos danos, sem prejuízo da ação de indenização.

### 5.8 Chamada final (FinalCTA)
Foi vítima de um crime? Não perca prazos nem provas. Fale com o Dr. Lauro, em sigilo, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui vítima de golpe | fui-vitima-de-golpe | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Sou%20V%C3%ADtima%20de%20um%20Crime%29%3A%20fui%20v%C3%ADtima%20de%20golpe. |
| Fui agredido ou ameaçado | fui-agredido-ou-ameacado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Sou%20V%C3%ADtima%20de%20um%20Crime%29%3A%20fui%20agredido%20ou%20amea%C3%A7ado. |
| Fui ofendido na internet | fui-ofendido-na-internet | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Sou%20V%C3%ADtima%20de%20um%20Crime%29%3A%20fui%20ofendido%20na%20internet. |
| Perdi um familiar | perdi-um-familiar | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Sou%20V%C3%ADtima%20de%20um%20Crime%29%3A%20perdi%20um%20familiar%20em%20um%20crime%20ou%20acidente. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="vitima" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="vitima"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/sou-vitima/",
      "url": "https://lauro.adv.br/sou-vitima/",
      "name": "Advogado para Vítima de Crime | Queixa-Crime e Assistência",
      "description": "Foi vítima de golpe, agressão, ameaça, ofensa ou crime contra a família? Advogado criminalista para representar a vítima, da delegacia ao tribunal.",
      "about": "Sou Vítima de um Crime",
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
          "name": "Sou Vítima de um Crime",
          "item": "https://lauro.adv.br/sou-vitima/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "A vítima precisa de advogado se já existe promotor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O promotor representa o Estado. O advogado da vítima representa os interesses dela: acompanha cada passo, propõe provas, recorre e pede a reparação dos danos."
          }
        },
        {
          "@type": "Question",
          "name": "O que é assistente de acusação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "É o advogado da vítima ou da família habilitado no processo para atuar ao lado do Ministério Público, com direito a propor provas, participar das audiências e recorrer."
          }
        },
        {
          "@type": "Question",
          "name": "Qual o prazo para a vítima agir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende do crime. Em vários casos, como crimes contra a honra e, em regra, estelionato, o prazo é de 6 meses a partir de quando a vítima sabe quem é o autor."
          }
        },
        {
          "@type": "Question",
          "name": "A vítima pode ser indenizada no processo criminal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim. O juiz pode fixar na sentença um valor mínimo de reparação dos danos, sem prejuízo da ação de indenização."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Golpes e Fraudes Digitais: `/golpes-e-fraudes-digitais/`
- Lei Maria da Penha e Violência Doméstica: `/lei-maria-da-penha/`
- Crimes Contra a Honra e Ofensas Digitais: `/ofensas-digitais/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Exibir junto aos botões, em destaque: "Em perigo agora? Ligue 190. Violência contra a mulher: 180."
- Página que concentra o atendimento a vítimas: nas páginas de Golpes, Ofensas Digitais, Maria da Penha, Crimes Sexuais e Tribunal do Júri, o botão de vítima também deve apontar para cá como link secundário ("Saiba como atuamos para vítimas").
- Não prometer recuperação de valores.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
