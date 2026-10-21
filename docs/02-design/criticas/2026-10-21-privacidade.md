<!-- critique-ui | modelo: gemini-3.5-flash | imagens: priv-desktop.png, priv-mobile.png, priv-mobile-meio.png | tokens in/out: 7269/1839 -->

## 1. Friccao e carga cognitiva

*   **Remoção do CTA de contato no header móvel (Imagem 2 vs Imagem 1):** No desktop, o número `(11) 97080-2600` está em destaque na barra superior. No mobile (< 400px), o botão desaparece completamente e não há ícone substituto. 
    *   *Objeção de compra:* O potencial cliente em situação jurídica de urgência (direito criminal) acessa o site pelo celular, não encontra um meio direto de ligação imediata na primeira dobra e abandona a página para buscar outro advogado no Google.
*   **Cabeçalho utilitário topo (`--navy-900`) ocupando 3 linhas no mobile (Imagem 2):** As informações "OAB/SP 210.212", "Atendimento 24 horas", "Osasco", "São Paulo", "Online em todo o Brasil" empilham-se verticalmente, gerando um bloco escuro excessivamente alto antes do logo da empresa.
    *   *Objeção de compra:* O usuário precisa rolar a tela antes mesmo de ver o nome do escritório ou o título do documento, transmitindo uma impressão de layout quebrado e pouca maturidade digital.
*   **Massa de texto densa no título em caixa alta com fonte Serif no mobile (Imagem 2):** O título principal em "DM Serif Display" em caixa alta ocupa 5 linhas consecutivas no celular, criando um bloco visualmente pesado e de difícil varredura visual.
    *   *Objeção de compra:* O leitor sente cansaço visual imediato e desiste de validar os termos de sigilo profissional, diminuindo a confiança na governança de dados do escritório.

---

## 2. Layout e design system

*   **Violação da regra de tipografia para títulos em mobile (DNA Visual A5):** O título principal e os subtítulos da política usam a fonte `--font-display` ("DM Serif Display") em caixa alta completa. Em telas menores que 400px, a combinação de traços finos/grossos da fonte serifada em caixa alta resulta em glifos espremidos e falta de respiro vertical (`--lh-tight` de `1.12` fica estrangulado).
*   **Violação do Princípio de Ação Principal no Header Mobile (DNA Visual A8 e A12):** O header mobile contém apenas a marca/logo, eliminando o único elemento interativo de conversão da tela sem compensação de layout.
*   **Violação de espaçamento e ritmo vertical (DNA Visual A1):** O espaçamento abaixo do container do título ("Última atualização: 21 de outubro de 2026.") até a linha divisória e desta até o item "1. APRESENTAÇÃO..." não segue os degraus da escala de 4px (`--s-8` / `--s-12`), parecendo uma margem solta em vez de um ritmo proporcional.
*   **Violação da especificação de micro-border (DNA Visual A2):** A linha divisória horizontal abaixo da Hero utiliza uma cor de linha cinza genérica descalibrada em vez do token especificado `--border` (`rgba(2, 33, 63, .10)`).

---

## 3. Responsividade

*   **Barra superior topo (`--navy-900`):** Em telas abaixo de 400px, o texto sem quebra tratada vira um bloco vertical de 3 linhas com altura superior a 80px.
*   **Hero de Título:** O título "POLÍTICA DE PRIVACIDADE, PROTEÇÃO DE DADOS E SIGILO PROFISSIONAL" quebra em 5 linhas verticais. Somado ao topo utilitário, empurra todo o conteúdo real da política (a partir do Item 1) para fora da visualização inicial da tela (below the fold).
*   **Endereço de e-mail e URLs no corpo da política (Imagem 3):** O e-mail `lauroalmeidaneto@adv.oabsp.org.br` no item 2 do texto corre risco de gerar scroll horizontal em telas de 320px caso o container não possua a propriedade `overflow-wrap: break-word` ou `word-break: break-all`.

---

## 4. Acessibilidade

*   **Alvo de toque (Touch Target) insuficiente nos links do texto (Imagem 1 e 3):** Os links `www.lauro.adv.br` e `lauroalmeidaneto@adv.oabsp.org.br` estão renderizados no meio do texto com a altura de linha padrão (`--lh-body: 1.6`), resultando em uma área clicável de aproximadamente 24px de altura, descumprindo o mínimo de `48px` (`--tap`) exigido no contrato visual para dispositivos móveis.
*   **Contraste do texto em Monospace no Hero (Imagem 1 e 2):** As informações "DR. LAURO DE ALMEIDA NETO · OAB/SP 210.212" e "Última atualização..." usam a cor `--text-subtle` (`--ink-3` / `#5B6A79`) sobre o fundo `--navy-50` (`#EEF3F8`). O contraste resultante fica próximo do limite inferior de 4.5:1 para fontes de tamanho pequeno (`--fs-xs`: 0.8rem).
*   **Ausência de anel de foco visível (`:focus-visible`) nos links:** Os links no corpo do texto não apresentam estilo de foco customizado com a cor `--focus` (`--navy-500`) ao serem navegados via teclado.

---

## 5. Correcoes (ordenadas por impacto/esforco)

| Prioridade | Problema | Correcao | Esforco |
| :--- | :--- | :--- | :--- |
| **P0** | Perda do CTA de telefone/contato no header mobile. | Adicionar ícone de telefone/WhatsApp clicável com alvo de toque `--tap` (48px) no canto superior direito do header mobile. | Baixo |
| **P0** | Barra superior (`--navy-900`) ocupando altura excessiva no mobile. | No mobile, ocultar texto secundário ("Osasco · São Paulo..."), mantendo apenas "OAB/SP 210.212" e "Atendimento 24h" em linha única com `text-overflow: ellipsis`. | Baixo |
| **P1** | Título principal sufocando a dobra no mobile (5 linhas em Serif). | Reduzir o tamanho da fonte do título no breakpoint `< 768px` de `--fs-2xl` para `--fs-lg` (1.5625rem) e ajustar o `letter-spacing` para `-0.01em`, mantendo o texto em caixa alta original do cliente. | Baixo |
| **P1** | Alvo de toque dos links inline (`lauroalmeidaneto@...`) abaixo de 48px. | Adicionar `padding: var(--s-1) 0` e `display: inline-block` nos links do texto da política para garantir área de toque segura sem desalinhar o texto. | Baixo |
| **P1** | Quebra de layout potencial por e-mails/URLs longas em telas finas. | Aplicar `overflow-wrap: break-word` na classe de estilo do corpo do texto da política (`.policy-body`). | Baixo |
| **P2** | Borda divisória fora da especificação do design system. | Substituir a borda atual por `border-bottom: 1px solid var(--border)`. | Baixo |
| **P2** | Contraste marginal na meta-informação em monospace. | Alterar a cor de `--text-subtle` (`--ink-3`) para `--text-muted` (`--ink-2`) no bloco do autor e data de atualização. | Baixo |

---

## 6. Reprojeto (so se valer a pena)

Nada estrutural - os ajustes acima bastam.
---

## Triagem (Claude, 2026-10-21)

- **Aplicado:** título com 5 linhas no celular. Agora usa `--fs-lg` abaixo de 768px (classe `h1--long`), e o texto continua em caixa alta como o cliente mandou.
- **Aplicado:** `overflow-wrap: break-word` em `.prose`, para o e-mail longo não estourar em telas estreitas.
- **Descartado:** telefone no cabeçalho do celular e topbar em uma linha. São decisões do site inteiro (o topo é definitivo pelo PRD A1), fora do escopo desta página.
- **Descartado:** área de toque de links dentro do texto. Link inline é exceção no WCAG 2.5.8.
- **Descartado (falso):** borda e contraste da data. Já usam `--border` e uma cor de texto com contraste AA.
