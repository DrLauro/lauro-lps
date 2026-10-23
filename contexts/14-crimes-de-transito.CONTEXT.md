# CONTEXT.md – Página "Crimes de Trânsito" (/crimes-de-transito/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 14 de 20 (card 14 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 2.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado crime de trânsito" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Crimes de Trânsito (grupo novo, a incluir na campanha após a publicação).
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

- Rota: `src/pages/crimes-de-transito/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-de-transito.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-de-transito/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Crimes de Trânsito e Embriaguez | Osasco/SP (57 caracteres)
- `<meta name="description">`: Embriaguez ao volante, acidente com morte ou lesão, fuga do local e outros crimes do Código de Trânsito. Advogado criminalista 24h, Dr. Lauro. (142 caracteres)
- Canonical: `https://lauro.adv.br/crimes-de-transito/`
- H1 (único na página): Advogado para crimes de trânsito: embriaguez ao volante, acidentes e fuga do local
- Palavra-chave principal: advogado crime de trânsito
- Secundárias (aparecem naturalmente no texto já escrito): advogado embriaguez ao volante, preso por embriaguez, advogado acidente de trânsito com morte, homicídio culposo no trânsito, fuga do local do acidente, advogado lei seca
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 14. Crimes de Trânsito
- Descrição: Defesa em investigações e processos por embriaguez ao volante, homicídio culposo, lesão corporal no trânsito, fuga do local do acidente e outros delitos previstos no Código de Trânsito Brasileiro. Atuação em flagrantes, audiências e recursos criminais.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Advogado para crimes de trânsito: embriaguez ao volante, acidentes e fuga do local
- Texto: Um acidente ou uma abordagem da Lei Seca pode terminar em prisão em flagrante na mesma noite. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação (OAB/SP 210.212), atua em crimes de trânsito desde a delegacia, com atendimento 24 horas em Osasco, São Paulo e região, e acompanha o caso até os recursos.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
No flagrante, o advogado acompanha a ocorrência e o depoimento, confere como foi feita a constatação da embriaguez (etilômetro, exame de sangue, termo de sinais) e pede a fiança ou a liberdade na audiência de custódia.

No processo, examinamos a dinâmica do acidente, a perícia, o local, as imagens e as testemunhas, para discutir culpa, causa do acidente e a pena aplicável. Também orientamos sobre os reflexos na carteira de habilitação.

### 5.4 H2: Serviços nesta área
- Embriaguez ao volante
- Homicídio culposo na direção de veículo
- Lesão corporal culposa no trânsito
- Fuga do local do acidente
- Omissão de socorro no trânsito
- Direção sem habilitação gerando perigo
- Racha ou competição não autorizada
- Entrega da direção a pessoa não habilitada
- Prisão em flagrante por crime de trânsito, fiança e audiência de custódia
- Acordo de não persecução penal, transação penal e suspensão condicional do processo, nas hipóteses cabíveis
- Recursos criminais
- Representação de vítimas e familiares

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Como foi constatada a embriaguez e se o procedimento seguiu a lei.
- Perícia do local, dos veículos e da dinâmica do acidente.
- Velocidade, sinalização, condições da via e conduta da outra parte.
- Possibilidade de acordo, transação penal ou suspensão do processo.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Recusar o bafômetro é crime?**  
  A recusa, por si só, gera infração administrativa, com multa e suspensão do direito de dirigir. O crime de embriaguez pode ser comprovado por outros meios, como exame de sangue, vídeo ou testemunhas.
- **Fui preso por embriaguez ao volante. Tem fiança?**  
  Em regra, sim. A fiança pode ser arbitrada pelo próprio delegado e, se não for, pedida ao juiz na audiência de custódia.
- **Acidente com morte é sempre crime doloso?**  
  Não. Em regra, é homicídio culposo, sem intenção. A acusação de dolo eventual é excepcional e pode ser contestada pela defesa.
- **O que acontece se eu sair do local do acidente?**  
  Fugir do local para evitar responsabilidade é crime autônomo. Prestar socorro e permanecer no local, quando possível, pesa a favor de quem se envolveu no acidente.

### 5.8 Chamada final (FinalCTA)
Prisão por embriaguez ou acidente com vítima? Fale agora com o Dr. Lauro, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Fui preso por embriaguez | fui-preso-por-embriaguez | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Tr%C3%A2nsito%29%3A%20fui%20preso%20por%20embriaguez%20ao%20volante. |
| Me envolvi em acidente com vítima | me-envolvi-em-acidente-com-vitima | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Tr%C3%A2nsito%29%3A%20me%20envolvi%20em%20acidente%20com%20v%C3%ADtima. |
| Recebi intimação | recebi-intimacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Tr%C3%A2nsito%29%3A%20recebi%20intima%C3%A7%C3%A3o%20por%20crime%20de%20tr%C3%A2nsito. |
| Outra situação criminal | outra-situacao-criminal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20de%20Tr%C3%A2nsito%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20crime%20de%20tr%C3%A2nsito. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="transito" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="transito"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-de-transito/",
      "url": "https://lauro.adv.br/crimes-de-transito/",
      "name": "Advogado para Crimes de Trânsito e Embriaguez | Osasco/SP",
      "description": "Embriaguez ao volante, acidente com morte ou lesão, fuga do local e outros crimes do Código de Trânsito. Advogado criminalista 24h, Dr. Lauro.",
      "about": "Crimes de Trânsito",
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
          "name": "Crimes de Trânsito",
          "item": "https://lauro.adv.br/crimes-de-transito/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Recusar o bafômetro é crime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A recusa, por si só, gera infração administrativa, com multa e suspensão do direito de dirigir. O crime de embriaguez pode ser comprovado por outros meios, como exame de sangue, vídeo ou testemunhas."
          }
        },
        {
          "@type": "Question",
          "name": "Fui preso por embriaguez ao volante. Tem fiança?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, sim. A fiança pode ser arbitrada pelo próprio delegado e, se não for, pedida ao juiz na audiência de custódia."
          }
        },
        {
          "@type": "Question",
          "name": "Acidente com morte é sempre crime doloso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Em regra, é homicídio culposo, sem intenção. A acusação de dolo eventual é excepcional e pode ser contestada pela defesa."
          }
        },
        {
          "@type": "Question",
          "name": "O que acontece se eu sair do local do acidente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fugir do local para evitar responsabilidade é crime autônomo. Prestar socorro e permanecer no local, quando possível, pesa a favor de quem se envolveu no acidente."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Prisão em Flagrante e Audiência de Custódia: `/prisao-em-flagrante/`
- Tribunal do Júri e Crimes Contra a Vida: `/tribunal-do-juri/`
- Sou Vítima de um Crime: `/sou-vitima/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Público de urgência noturna e de fim de semana: priorizar os botões no topo e a barra fixa no celular.
- Não usar imagens de acidentes ou vítimas.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
