# CONTEXT.md – Página "Crimes Econômicos e Financeiros" (/crimes-economicos-e-financeiros/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 15 de 20 (card 15 da seção Áreas de Atuação). Prioridade de publicação entre as 7 páginas novas: 4.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado lavagem de dinheiro" e termos próximos em contatos pelo WhatsApp ou ligação.
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

- Rota: `src/pages/crimes-economicos-e-financeiros/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-economicos-e-financeiros.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-economicos-e-financeiros/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 20 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando todas as páginas publicadas.

## 4. SEO

- `<title>`: Advogado para Lavagem de Dinheiro e Crimes Financeiros | SP (59 caracteres)
- `<meta name="description">`: Defesa em lavagem de dinheiro, crimes contra o sistema financeiro, evasão de divisas, gestão fraudulenta e pirâmide financeira. Atuação em sigilo. (146 caracteres)
- Canonical: `https://lauro.adv.br/crimes-economicos-e-financeiros/`
- H1 (único na página): Advogado para lavagem de dinheiro e crimes econômicos e financeiros
- Palavra-chave principal: advogado lavagem de dinheiro
- Secundárias (aparecem naturalmente no texto já escrito): advogado crimes financeiros, crime contra o sistema financeiro, evasão de divisas, gestão fraudulenta, advogado pirâmide financeira, bloqueio de bens criminal
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.0 Card na página /especialidades/ (texto aprovado pelo Dr. Lauro)
- Título: 15. Crimes Econômicos e Financeiros
- Descrição: Defesa em investigações e processos por lavagem de dinheiro, crimes contra o sistema financeiro nacional, evasão de divisas, gestão fraudulenta e outras infrações econômicas. Análise de operações financeiras, documentos, provas e medidas patrimoniais.
- Na página principal, o card mostra só número e título. O card só pode ser publicado junto com esta página.

### 5.1 Hero
- H1: Advogado para lavagem de dinheiro e crimes econômicos e financeiros
- Texto: Investigações por lavagem de dinheiro e crimes financeiros costumam começar com quebra de sigilo bancário, bloqueio de bens e busca e apreensão, e envolvem empresas, sócios e operações de anos. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, conduz essas defesas com análise técnica de documentos e operações financeiras e sigilo absoluto.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Cinco destaques independentes, no mesmo padrão das demais páginas: Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google (link atual)

### 5.3 H2: Como atuamos
Na investigação, acompanhamos buscas, depoimentos e o acesso aos autos, e analisamos relatórios de inteligência financeira, quebras de sigilo e a origem dos recursos, para demonstrar a licitude das operações sempre que possível.

Quando há bloqueio de bens, contas ou valores, a defesa pede a liberação do que não tem relação com o fato investigado ou do que é necessário à atividade da empresa e à subsistência da família. No processo, discutimos a tipicidade, a individualização da conduta de cada sócio ou gestor e a competência da Justiça Federal ou Estadual.

### 5.4 H2: Serviços nesta área
- Lavagem de dinheiro e ocultação de bens
- Crimes contra o sistema financeiro nacional
- Evasão de divisas
- Gestão fraudulenta e gestão temerária
- Operação de instituição financeira sem autorização
- Pirâmides financeiras e crimes contra a economia popular
- Falsos investimentos
- Crimes envolvendo criptoativos
- Crimes contra o mercado de capitais
- Investigações financeiras e patrimoniais
- Quebra de sigilo bancário e fiscal
- Bloqueio, sequestro e arresto de bens
- Busca e apreensão de documentos e dispositivos
- Acordo de não persecução penal e colaboração premiada

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Origem dos recursos e documentação das operações.
- Relatórios de inteligência financeira e a legalidade das quebras de sigilo.
- O que cada sócio, gestor ou colaborador efetivamente decidiu ou executou.
- Proporcionalidade dos bloqueios de bens e valores.

### 5.6 Casos
Ainda não há caso aprovado para esta área. Deixar o componente `Cases` pronto e oculto; o conteúdo será enviado depois.

### 5.7 H2: Perguntas frequentes
- **Ter dinheiro sem comprovação já é lavagem?**  
  Não. A lavagem exige ocultar ou dissimular valores que vieram de uma infração penal anterior. É preciso provar essa origem ilícita e a intenção de ocultá-la.
- **Meus bens foram bloqueados. Dá para liberar?**  
  Em muitos casos sim, total ou parcialmente, quando os bens não têm relação com o fato investigado ou o bloqueio é desproporcional.
- **Quem julga crimes contra o sistema financeiro?**  
  Em regra, a Justiça Federal.
- **Sócio sem função de gestão pode responder?**  
  A responsabilidade penal é pessoal. Ser sócio, por si só, não basta: a acusação precisa demonstrar a participação de cada um.

### 5.8 Chamada final (FinalCTA)
Investigação financeira, bloqueio de bens ou operação? Fale com o Dr. Lauro, em sigilo.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Tive bens bloqueados | tive-bens-bloqueados | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Econ%C3%B4micos%20e%20Financeiros%29%3A%20tive%20bens%20ou%20contas%20bloqueados. |
| Fui alvo de busca ou operação | fui-alvo-de-busca-ou-operacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Econ%C3%B4micos%20e%20Financeiros%29%3A%20fui%20alvo%20de%20busca%20e%20apreens%C3%A3o%20ou%20opera%C3%A7%C3%A3o. |
| Recebi intimação | recebi-intimacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Econ%C3%B4micos%20e%20Financeiros%29%3A%20recebi%20intima%C3%A7%C3%A3o%20em%20investiga%C3%A7%C3%A3o%20financeira. |
| Outra situação criminal | outra-situacao-criminal | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Econ%C3%B4micos%20e%20Financeiros%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o%20em%20crime%20financeiro. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="economicos" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="economicos"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-economicos-e-financeiros/",
      "url": "https://lauro.adv.br/crimes-economicos-e-financeiros/",
      "name": "Advogado para Lavagem de Dinheiro e Crimes Financeiros | SP",
      "description": "Defesa em lavagem de dinheiro, crimes contra o sistema financeiro, evasão de divisas, gestão fraudulenta e pirâmide financeira. Atuação em sigilo.",
      "about": "Crimes Econômicos e Financeiros",
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
          "name": "Crimes Econômicos e Financeiros",
          "item": "https://lauro.adv.br/crimes-economicos-e-financeiros/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Ter dinheiro sem comprovação já é lavagem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. A lavagem exige ocultar ou dissimular valores que vieram de uma infração penal anterior. É preciso provar essa origem ilícita e a intenção de ocultá-la."
          }
        },
        {
          "@type": "Question",
          "name": "Meus bens foram bloqueados. Dá para liberar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em muitos casos sim, total ou parcialmente, quando os bens não têm relação com o fato investigado ou o bloqueio é desproporcional."
          }
        },
        {
          "@type": "Question",
          "name": "Quem julga crimes contra o sistema financeiro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, a Justiça Federal."
          }
        },
        {
          "@type": "Question",
          "name": "Sócio sem função de gestão pode responder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A responsabilidade penal é pessoal. Ser sócio, por si só, não basta: a acusação precisa demonstrar a participação de cada um."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Crimes Complexos e de Grande Repercussão: `/crimes-complexos/`
- Crimes Tributários: `/crimes-tributarios/`
- Crimes Contra a Administração Pública: `/crimes-contra-a-administracao-publica/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo, número de inquérito, iniciais de partes ou detalhe que permita identificar pessoas.
- Listas de serviços com todos os itens iniciando em letra maiúscula.
- Ao publicar esta página, aplicar o ajuste em /crimes-complexos/ (arquivo AJUSTE-09-crimes-complexos.md).

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
