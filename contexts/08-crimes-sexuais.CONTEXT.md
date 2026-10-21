# CONTEXT.md – Página "Crimes Sexuais" (/crimes-sexuais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 8 de 13. Fase de publicação: 1.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado crime sexual" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Crimes Sexuais.
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

- Rota: `src/pages/crimes-sexuais/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-sexuais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-sexuais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Acusação de Crime Sexual | Defesa em Sigilo (57 caracteres)
- `<meta name="description">`: Defesa técnica e discreta em acusações de crimes sexuais, do inquérito ao julgamento, em Osasco e São Paulo. Representação de vítimas. Atendimento 24h. (151 caracteres)
- Canonical: `https://lauro.adv.br/crimes-sexuais/`
- H1 (único na página): Defesa em acusações de crimes sexuais, com técnica e absoluta discrição
- Palavra-chave principal: advogado crime sexual
- Secundárias (aparecem naturalmente no texto já escrito): advogado defesa estupro, advogado importunação sexual, advogado assédio sexual, divulgação de conteúdo íntimo, advogado estupro de vulnerável, segredo de justiça
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Defesa em acusações de crimes sexuais, com técnica e absoluta discrição
- Texto: Acusações de crimes sexuais tramitam em segredo de justiça e exigem defesa técnica desde o primeiro depoimento. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, conduz esses casos com sigilo, do inquérito ao julgamento, inclusive em acusações que envolvem arquivos e provas digitais.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Em acusação de estupro de vulnerável (art. 217-A do Código Penal), atuamos na análise da prova oral, no direito ao contraditório e nas garantias do processo, que são o centro da defesa quando a acusação se apoia sobretudo em depoimentos.

Em acusações que envolvem arquivos digitais, a defesa examina a identificação de quem teve acesso ao conteúdo, a autenticidade dos arquivos e a cadeia de custódia da prova. Para vítimas, atuamos na representação e como assistente de acusação.

### 5.4 H2: Serviços nesta área
Estupro e tentativa de estupro, estupro de vulnerável, importunação sexual, assédio sexual, violação sexual mediante fraude, exploração sexual, crimes previstos no Estatuto da Criança e do Adolescente, divulgação não consentida de conteúdo íntimo, crimes sexuais na internet e nas redes sociais e crimes envolvendo conteúdo digital e inteligência artificial. Defesa criminal, representação de vítimas e assistência de acusação.

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Como foi colhido o depoimento da vítima e se houve escuta especializada nos termos da lei.
- Coerência e contradições entre os depoimentos ao longo do processo.
- Laudos periciais e o que eles efetivamente provam.
- Origem, integridade e acesso aos arquivos digitais apreendidos.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Fui chamado para depor na delegacia. Devo ir sem advogado?**  
  Não é recomendável. O que for dito no primeiro depoimento pesa durante todo o processo.
- **O processo fica público?**  
  Não. Crimes sexuais tramitam em segredo de justiça; apenas as partes e seus advogados têm acesso.
- **Posso ser preso durante a investigação?**  
  Pode haver pedido de prisão preventiva; a defesa atua para demonstrar que ela não é necessária e pedir medidas alternativas.

### 5.8 Chamada final (FinalCTA)
Acusação desse tipo exige defesa desde o primeiro dia. Fale com o Dr. Lauro em sigilo, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui intimado a depor | fui-intimado-a-depor | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Sexuais%29%3A%20fui%20intimado%20a%20depor. |
| Estou sendo investigado | estou-sendo-investigado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Sexuais%29%3A%20estou%20sendo%20investigado. |
| Tenho processo em andamento | tenho-processo-em-andamento | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Sexuais%29%3A%20tenho%20processo%20em%20andamento. |
| Sou vítima | sou-vitima | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Sexuais%29%3A%20sou%20v%C3%ADtima%20e%20preciso%20de%20orienta%C3%A7%C3%A3o. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="crimes-sexuais" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="crimes-sexuais"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-sexuais/",
      "url": "https://lauro.adv.br/crimes-sexuais/",
      "name": "Advogado para Acusação de Crime Sexual | Defesa em Sigilo",
      "description": "Defesa técnica e discreta em acusações de crimes sexuais, do inquérito ao julgamento, em Osasco e São Paulo. Representação de vítimas. Atendimento 24h.",
      "about": "Crimes Sexuais",
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
          "name": "Crimes Sexuais",
          "item": "https://lauro.adv.br/crimes-sexuais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Fui chamado para depor na delegacia. Devo ir sem advogado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não é recomendável. O que for dito no primeiro depoimento pesa durante todo o processo."
          }
        },
        {
          "@type": "Question",
          "name": "O processo fica público?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Crimes sexuais tramitam em segredo de justiça; apenas as partes e seus advogados têm acesso."
          }
        },
        {
          "@type": "Question",
          "name": "Posso ser preso durante a investigação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pode haver pedido de prisão preventiva; a defesa atua para demonstrar que ela não é necessária e pedir medidas alternativas."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Lei Maria da Penha e Violência Doméstica: `/lei-maria-da-penha/`
- Crimes Digitais: `/crimes-digitais/`
- Habeas Corpus: `/habeas-corpus/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Segredo de justiça (art. 234-B do CP): nunca publicar detalhes, datas, cidades pequenas ou números de processo.
- Não descrever nem detalhar crimes envolvendo conteúdo sexual de crianças e adolescentes; manter apenas 'crimes previstos no Estatuto da Criança e do Adolescente'.
- Sem imagens sugestivas; usar foto institucional do advogado ou do escritório.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
