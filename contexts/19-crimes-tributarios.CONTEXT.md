# CONTEXT.md – Página "Crimes Tributários" (/crimes-tributarios/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 19 de 20 (card 19 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 6.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado sonegação fiscal" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Não incluir no teste inicial; avaliar após a fase de 10 dias.
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

- Rota: `src/pages/crimes-tributarios/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-tributarios.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-tributarios/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Sonegação Fiscal e Crimes Tributários | SP (56 caracteres)
- `<meta name="description">`: Defesa de empresários, sócios e contadores em sonegação fiscal, crimes contra a ordem tributária e apropriação indébita tributária. Atuação em sigilo. (150 caracteres)
- Canonical: `https://lauro.adv.br/crimes-tributarios/`
- H1 (único na página): Advogado para sonegação fiscal e crimes contra a ordem tributária
- Palavra-chave principal: advogado sonegação fiscal
- Secundárias (aparecem naturalmente no texto já escrito): advogado crime tributário, crime contra a ordem tributária, apropriação indébita tributária, representação fiscal para fins penais, sócio responde por sonegação, parcelamento crime tributário
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 19. Crimes Tributários
- Descrição: Defesa em investigações e ações penais por sonegação fiscal, crimes contra a ordem tributária, fraudes fiscais e outras infrações tributárias de natureza penal. Análise de procedimentos fiscais, documentos contábeis, constituição do crédito tributário e responsabilidade criminal.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Advogado para sonegação fiscal e crimes contra a ordem tributária
- Texto: Uma autuação fiscal pode virar inquérito policial e ação penal contra sócios, administradores e até contadores. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, defende empresários e profissionais em crimes tributários, coordenando a estratégia criminal com a situação do débito na esfera fiscal.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
Analisamos o procedimento fiscal, a constituição definitiva do crédito tributário, os documentos contábeis e quem efetivamente administrava a empresa e decidia sobre os tributos à época dos fatos.

A defesa trabalha em conjunto com a situação do débito: o parcelamento pode suspender o processo e o pagamento integral pode extinguir a punibilidade. No processo, discutimos o dolo, a individualização da conduta de cada sócio e a validade das provas.

### 5.4 H2: Serviços nesta área
- Sonegação fiscal
- Crimes contra a ordem tributária
- Apropriação indébita tributária e previdenciária
- Sonegação de contribuição previdenciária
- Fraudes fiscais
- Notas fiscais falsas ou inidôneas
- Uso de empresas interpostas e laranjas
- Responsabilidade penal de sócios, administradores e contadores
- Representação fiscal para fins penais
- Análise de procedimentos fiscais e documentos contábeis
- Parcelamento e extinção da punibilidade pelo pagamento
- Busca e apreensão em empresas
- Acordo de não persecução penal

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Se o crédito tributário já foi definitivamente constituído.
- Situação do débito: discussão administrativa, parcelamento ou pagamento.
- Quem era o responsável efetivo pela gestão fiscal.
- Se houve fraude ou apenas inadimplência.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Deixar de pagar imposto é crime?**  
  A simples falta de pagamento de tributo declarado, em regra, não é crime. O crime exige fraude ou, na apropriação indébita tributária, cobrança do tributo de terceiros e não repasse de forma contumaz e intencional.
- **Posso ser processado antes de terminar a discussão no Fisco?**  
  Nos crimes materiais contra a ordem tributária, a ação penal depende da constituição definitiva do crédito, ou seja, do fim da discussão administrativa.
- **Pagar ou parcelar o débito resolve o processo criminal?**  
  O parcelamento suspende a pretensão punitiva enquanto estiver sendo cumprido, e o pagamento integral extingue a punibilidade.
- **O contador pode responder por crime tributário?**  
  Pode, se participou da fraude. Executar ordens sem conhecimento da ilicitude é diferente de planejar ou praticar a fraude.

### 5.8 Chamada final (FinalCTA)
Autuação fiscal virou caso criminal? Fale com o Dr. Lauro, em sigilo.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Recebi representação fiscal | recebi-representacao-fiscal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Tribut%C3%A1rios%29%3A%20recebi%20representa%C3%A7%C3%A3o%20fiscal%20para%20fins%20penais. |
| Sou sócio e fui intimado | sou-socio-e-fui-intimado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Tribut%C3%A1rios%29%3A%20sou%20s%C3%B3cio%20e%20fui%20intimado%20em%20crime%20tribut%C3%A1rio. |
| Sou contador e fui citado | sou-contador-e-fui-citado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Tribut%C3%A1rios%29%3A%20sou%20contador%20e%20fui%20envolvido%20em%20investiga%C3%A7%C3%A3o. |
| Outra situação criminal | outra-situacao-criminal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Tribut%C3%A1rios%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20sobre%20crime%20tribut%C3%A1rio. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="tributarios" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="tributarios"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-tributarios/",
      "url": "https://lauro.adv.br/crimes-tributarios/",
      "name": "Advogado para Sonegação Fiscal e Crimes Tributários | SP",
      "description": "Defesa de empresários, sócios e contadores em sonegação fiscal, crimes contra a ordem tributária e apropriação indébita tributária. Atuação em sigilo.",
      "about": "Crimes Tributários",
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
          "name": "Crimes Tributários",
          "item": "https://lauro.adv.br/crimes-tributarios/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Deixar de pagar imposto é crime?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A simples falta de pagamento de tributo declarado, em regra, não é crime. O crime exige fraude ou, na apropriação indébita tributária, cobrança do tributo de terceiros e não repasse de forma contumaz e intencional."
          }
        },
        {
          "@type": "Question",
          "name": "Posso ser processado antes de terminar a discussão no Fisco?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nos crimes materiais contra a ordem tributária, a ação penal depende da constituição definitiva do crédito, ou seja, do fim da discussão administrativa."
          }
        },
        {
          "@type": "Question",
          "name": "Pagar ou parcelar o débito resolve o processo criminal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O parcelamento suspende a pretensão punitiva enquanto estiver sendo cumprido, e o pagamento integral extingue a punibilidade."
          }
        },
        {
          "@type": "Question",
          "name": "O contador pode responder por crime tributário?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pode, se participou da fraude. Executar ordens sem conhecimento da ilicitude é diferente de planejar ou praticar a fraude."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Crimes Econômicos e Financeiros: `/crimes-economicos-e-financeiros/`
- Crimes Complexos e de Grande Repercussão: `/crimes-complexos/`
- Crimes Contra a Administração Pública: `/crimes-contra-a-administracao-publica/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Ao publicar esta página, aplicar o ajuste em /crimes-complexos/ (arquivo AJUSTE-09-crimes-complexos.md).
- O escritório atua na esfera criminal; não prometer defesa no processo administrativo fiscal.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
