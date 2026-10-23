# CONTEXT.md – Página "Crimes Patrimoniais" (/crimes-patrimoniais/)

Projeto: novo site do escritório do Dr. Lauro de Almeida Neto, em Astro (astro.build). Página 13 de 13. Fase de publicação: 3.

Este arquivo é a especificação completa da página. O texto da seção 5 é final e aprovado para uso; não reescrever, não resumir e não acrescentar promessas. Dúvidas de conteúdo vão para o Dr. Lauro antes de publicar.

## 1. Objetivo da página

- Converter visitantes que buscam "advogado furto" e termos próximos em contatos pelo WhatsApp ou ligação.
- Servir de página de destino do grupo de anúncios do Google Ads: Fase 3 (só se sobrar verba).
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

- Rota: `src/pages/crimes-patrimoniais/index.astro` (ou coleção de conteúdo `src/content/areas/crimes-patrimoniais.md` renderizada por `src/pages/[slug].astro`). URL final com barra: `https://lauro.adv.br/crimes-patrimoniais/` (`trailingSlash: 'always'` no astro.config).
- Layout: o mesmo `BaseLayout` das demais páginas, mantendo a identidade visual atual do escritório (cores, tipografia, logotipo).
- Componentes reutilizáveis entre as 13 páginas: `Hero`, `TriageButtons`, `ProofBar`, `HowWeWork`, `ServicesList`, `Analysis`, `Cases` (opcional), `FAQ`, `FinalCTA`, `StickyMobileCTA`, `JsonLd`.
- Página estática (SSG), sem framework de UI no cliente. JavaScript apenas no script de medição (seção 7). FAQ com `<details>/<summary>`, sem JS.
- Imagens com `astro:assets` (`<Image>`), formato WebP/AVIF, largura máxima 1200 px, `alt` descritivo. Foto institucional real do Dr. Lauro ou do escritório; nada de banco de imagens com algemas, sangue ou cenas sugestivas.
- Desempenho: LCP abaixo de 2,5 s no 4G, Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- Barra fixa no rodapé do celular (`StickyMobileCTA`) com dois botões: WhatsApp e Ligar, sempre visíveis.
- Integrações globais (no layout, uma vez): Google Tag Manager, `@astrojs/sitemap`, `robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot, e `/llms.txt` na raiz listando as 13 páginas.

## 4. SEO

- `<title>`: Advogado para Furto, Roubo e Estelionato | Osasco e SP (54 caracteres)
- `<meta name="description">`: Defesa em furto, roubo, latrocínio, estelionato, receptação e apropriação indébita, da delegacia ao recurso. Advogado criminalista 24h, Dr. Lauro. (146 caracteres)
- Canonical: `https://lauro.adv.br/crimes-patrimoniais/`
- H1 (único na página): Advogado para furto, roubo, estelionato e receptação
- Palavra-chave principal: advogado furto
- Secundárias (aparecem naturalmente no texto já escrito): advogado roubo, advogado estelionato, advogado receptação, advogado latrocínio, advogado apropriação indébita, furto no trabalho
- Open Graph: `og:title` = title, `og:description` = description, `og:image` = foto institucional 1200 × 630, `og:locale` = pt_BR.
- Hierarquia: H1 no topo; cada bloco da seção 5 é um H2; perguntas do FAQ são H3 dentro do `<summary>`.

## 5. Estrutura e texto final (na ordem)

### 5.1 Hero
- H1: Advogado para furto, roubo, estelionato e receptação
- Texto: Acusações de furto, roubo, estelionato e receptação são as mais comuns na área criminal e muitas vezes começam com prisão em flagrante. O Dr. Lauro de Almeida Neto, advogado criminalista com mais de 23 anos de atuação, atua desde a delegacia até os recursos.
- Logo abaixo: os botões de triagem da seção 6 e o botão Ligar.

### 5.2 Faixa de prova (ProofBar)
Mais de 23 anos na área criminal · Sigilo absoluto · Casos de grande repercussão · Atendimento 24 horas · Avaliações no Google

### 5.3 H2: Como atuamos
Analisamos o reconhecimento do acusado, que é a principal prova nesses crimes e frequentemente feito fora das regras do art. 226 do Código de Processo Penal, além de imagens, objetos apreendidos e depoimentos.

Buscamos o arquivamento, a absolvição ou, quando a condenação é provável, a desclassificação e a melhor pena e regime possíveis.

### 5.4 H2: Serviços nesta área
- Furto simples e qualificado
- Roubo simples, com arma de fogo ou arma branca, em concurso de pessoas, com restrição da liberdade da vítima ou com resultado lesão grave
- Latrocínio
- Extorsão e extorsão mediante sequestro
- Estelionato
- Apropriação indébita
- Receptação simples e qualificada
- Dano

Exibir como lista de etiquetas (chips) ou lista simples; todo o texto precisa estar no HTML, não em imagem.

### 5.5 H2: O que analisamos em todo caso
- Reconhecimento pessoal ou por foto e se seguiu a lei.
- Imagens de câmeras e sua origem.
- Se o objeto apreendido pode ser ligado ao acusado.
- Valor do bem, primariedade e possibilidade de pena menor.

### 5.6 H2: Casos em que atuamos
**Furto no ambiente de trabalho: investigação arquivada**  
Em acusação de furto no ambiente de trabalho, a defesa demonstrou a falta de provas e a investigação foi arquivada.  
Publicação: jusbrasil:7604915091

**Roubo: absolvição por falta de prova judicial**  
Acusados de roubo depois de abordados em veículo com alerta de furto, os clientes foram reconhecidos apenas na delegacia. A defesa sustentou a insuficiência das provas do inquérito e as falhas do reconhecimento (art. 226 do Código de Processo Penal), e a ação penal foi julgada improcedente.  
Publicação: jusbrasil:7512770959

Sem nome de cliente, número de processo, vara de cidade pequena ou data que permita identificar alguém.

### 5.7 H2: Perguntas frequentes
- **Reconhecimento por foto basta para condenar?**  
  Não. Os tribunais superiores exigem que o reconhecimento siga o procedimento legal e seja confirmado por outras provas.
- **Fui acusado de furto no trabalho. O que fazer?**  
  Não assine confissões nem dê declarações sem advogado; procure a defesa antes de qualquer depoimento.
- **Estelionato depende de representação da vítima?**  
  Em regra, sim, desde 2019, com algumas exceções.

### 5.8 Chamada final (FinalCTA)
Acusado de furto, roubo ou estelionato? Fale agora com o Dr. Lauro, 24 horas.
Botões: Falar no WhatsApp (mensagem da primeira opção de triagem) e Ligar (11) 97080-2600.

### 5.9 Rodapé da página (antes do rodapé global)
Lauro de Almeida Neto é advogado criminalista em Osasco/SP, OAB/SP 210.212, com mais de 23 anos de atuação. Atendimento presencial em Osasco e São Paulo e online em todo o Brasil. Lauro Neto Sociedade Individual de Advocacia, CNPJ 66.317.792/0001-30. Os casos citados não representam garantia de resultado.

## 6. Botões de triagem e links de WhatsApp

Cada botão abre o WhatsApp com uma mensagem própria. Usar exatamente estes links:

| Botão | `data-situacao` | Link |
| --- | --- | --- |
| Foi preso agora | foi-preso-agora | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Patrimoniais%29%3A%20foi%20preso%20por%20furto%20ou%20roubo%20agora. |
| Fui acusado | fui-acusado | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Patrimoniais%29%3A%20fui%20acusado%20de%20crime%20patrimonial. |
| Tenho processo em andamento | tenho-processo-em-andamento | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Patrimoniais%29%3A%20tenho%20processo%20em%20andamento. |
| Outra situação | outra-situacao | https://wa.me/5511970802600?text=Ol%C3%A1%2C%20Dr.%20Lauro%2C%20vim%20pelo%20site%20%28Crimes%20Patrimoniais%29%3A%20preciso%20de%20orienta%C3%A7%C3%A3o. |
| Ligar | ligar | tel:+5511970802600 |

Os botões abrem em nova aba (`target="_blank" rel="noopener"`) e têm altura mínima de 48 px no celular.

## 7. Medição (Google Tag Manager)

Todo botão de WhatsApp recebe `data-track="whatsapp_click" data-area="patrimoniais" data-situacao="<valor da tabela>"`; o botão Ligar recebe `data-track="phone_click" data-area="patrimoniais"`. Script único no layout:

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
      "@id": "https://lauro.adv.br/crimes-patrimoniais/",
      "url": "https://lauro.adv.br/crimes-patrimoniais/",
      "name": "Advogado para Furto, Roubo e Estelionato | Osasco e SP",
      "description": "Defesa em furto, roubo, latrocínio, estelionato, receptação e apropriação indébita, da delegacia ao recurso. Advogado criminalista 24h, Dr. Lauro.",
      "about": "Crimes Patrimoniais",
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
          "name": "Crimes Patrimoniais",
          "item": "https://lauro.adv.br/crimes-patrimoniais/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Reconhecimento por foto basta para condenar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não. Os tribunais superiores exigem que o reconhecimento siga o procedimento legal e seja confirmado por outras provas."
          }
        },
        {
          "@type": "Question",
          "name": "Fui acusado de furto no trabalho. O que fazer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não assine confissões nem dê declarações sem advogado; procure a defesa antes de qualquer depoimento."
          }
        },
        {
          "@type": "Question",
          "name": "Estelionato depende de representação da vítima?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Em regra, sim, desde 2019, com algumas exceções."
          }
        }
      ]
    }
  ]
}
```

## 9. Links internos

- Prisão em Flagrante e Audiência de Custódia: `/prisao-em-flagrante/`
- Golpes e Fraudes Digitais: `/golpes-e-fraudes-digitais/`
- Recursos Criminais e Revisão Criminal: `/recursos-e-revisao-criminal/`
- Página de casos: `/casos/` · Sobre o advogado: `/quem-somos/` · Contato: `/contato/`
- Esta página também deve ser listada em `/especialidades/` e no `llms.txt`.

## 10. Regras de conteúdo e conformidade

- Não alterar o texto da seção 5 sem aprovação do Dr. Lauro.
- Sem promessa de resultado, sem "o melhor", "nº 1" ou "garantido".
- Sem nome de cliente, número de processo ou detalhe que permita identificar pessoas.
- Caso do furto arquivado está publicado no Jusbrasil; confirmar antes de usar.

## 11. Critérios de aceite

- [ ] URL, title, description, H1 e canonical exatamente como na seção 4.
- [ ] Todos os textos da seção 5 presentes em HTML, na ordem indicada.
- [ ] Todos os botões da seção 6 abrem o WhatsApp com a mensagem correta; o Ligar abre o discador.
- [ ] Eventos `whatsapp_click` e `phone_click` aparecem no modo de visualização do GTM com `area` e `situacao` preenchidos.
- [ ] JSON-LD válido no teste de pesquisa aprimorada do Google, sem erros.
- [ ] Lighthouse mobile ≥ 90 em Performance, Acessibilidade e SEO.
- [ ] Barra fixa de WhatsApp e Ligar visível no celular em toda a rolagem.
- [ ] Página no sitemap e acessível sem login.
