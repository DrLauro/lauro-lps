<!-- critique-ui | modelo: gemini-3-flash-preview | imagens: home-desktop.png, home-mobile.png, esp-desktop.png, blog-desktop.png, lp-mobile.png | tokens in/out: 9540/1364 -->

Esta é uma análise técnica baseada estritamente nos documentos de design (DNA) e tokens fornecidos, com foco em conversão e redução de carga cognitiva.

## 1. Friccao e carga cognitiva
*   **Menu de situações no Hero:** O uso do ícone do WhatsApp (verde) em todas as opções secundárias ("Fui vítima", "Recebi intimação") cria uma ambiguidade de destino. O usuário não sabe se será levado para uma página informativa ou se abrirá o chat imediatamente. **Consequência:** Hesitação no clique (paralisia de decisão), reduzindo a taxa de conversão do Hero.
*   **Cards de Artigos (Grid):** A variação de altura nos títulos dos cards desalinha o componente "Ler artigo". O olho do usuário precisa "caçar" o link em cada card em vez de seguir uma linha horizontal previsível. **Consequência:** Aumento do tempo de processamento visual e abandono da seção antes da leitura.
*   **Seção "Como funciona o atendimento":** O uso de números grandes e texto corrido sem separação clara por bordas (conforme `A2`) faz com que o fluxo pareça um bloco de texto denso. **Consequência:** O usuário pula a seção de autoridade/processo por percebê-la como "leitura pesada".

## 2. Layout e design system
*   **Violação A5 (Tipografia Monospace):** Os números das seções (`§ 1`, `§ 2`) e os números da lista de Áreas de Atuação (`01`, `02`) estão em fonte Serif ou Sans. O contrato visual exige **IBM Plex Mono** para números e indicadores. Isso remove o aspecto de "ferramenta profissional" e torna o site genérico.
*   **Violação A4 (Raio de borda):** Os botões do Hero e do rodapé parecem utilizar um raio de borda superior a `radius-lg (12px)` ou são totalmente arredondados (pílula). O contrato define um estilo institucional e contido.
*   **Violação A2 (Micro-borders):** Os cards de "Artigos e Decisões" apresentam uma borda superior grossa em dourado. O DNA proíbe divisões com blocos de cor, exigindo linhas de 1px `rgba(0,0,0,.08)`.
*   **Violação A1 (Ritmo Vertical):** O espaçamento entre o número da seção (`§ 1`) e o título da seção está inconsistente com a escala de 4px, parecendo um valor manual. Além disso, o espaçamento entre as seções (ex: entre Áreas e Atendimento) não respeita a regra de 2x ou 3x o espaçamento interno.

## 3. Responsividade
*   **Faixa de 5 Credenciais (Mobile):** Abaixo de 400px, a grade 2x2 deixa a 5ª credencial ("Avaliações no Google") isolada em uma linha única, quebrando a simetria e criando um "buraco" visual à direita.
*   **Lista de Áreas de Atuação:** No mobile, o link ocupa 100% da largura, mas o chevron (`->`) fica muito distante do texto em telas de 390px, dificultando a associação visual de que toda a linha é clicável.
*   **Cards de Artigos:** A pilha vertical de cards em mobile cria uma "scroll fatigue" (fadiga de rolagem). Com 6 artigos, o usuário precisa de ~4 scrolls completos para passar pela seção e chegar ao CTA final.

## 4. Acessibilidade
*   **Contraste (Botão Dourado):** O botão "Alguém foi preso agora" com fundo `--gold-500` e texto branco (ou ícone branco) falha no contraste WCAG AA. O token `--gold-700` é o único indicado para legibilidade sobre branco/claro.
*   **Alvo de Toque (Mobile):** Os links da lista `/especialidades` e os itens de "Serviços nesta área" na página interna parecem ter altura inferior a `48px` (token `--tap`), dificultando o clique por usuários com destreza motora reduzida ou em movimento.
*   **Ordem de Foco:** O botão de WhatsApp flutuante (mencionado como artefato, mas presente na lógica) pode interceptar o foco do teclado antes do CTA principal da página se não for indexado corretamente.

## 5. Correcoes (ordenadas por impacto/esforco)

| Prioridade | Problema | Correcao | Esforco |
| :--- | :--- | :--- | :--- |
| P0 | Contraste do CTA Principal | Alterar texto/ícone do botão dourado para `--navy-900` ou usar `--gold-700` com texto branco. | Baixo |
| P0 | Tipografia Monospace | Aplicar `var(--font-mono)` em todos os números (01, 02, §1, §2). | Baixo |
| P1 | Ambiguidade de ícones no Hero | Trocar ícones de WhatsApp das opções secundárias por ícones de contexto (ex: documento para intimação) ou o chevron padrão. | Baixo |
| P1 | Grid de Credenciais Mobile | Transformar em um carrossel horizontal sutil ou lista 1x1 com ícones menores para reduzir altura vertical. | Médio |
| P2 | Alinhamento de Cards | Fixar altura mínima para o slot do título nos cards de artigos para garantir alinhamento do "Ler artigo". | Baixo |
| P2 | Micro-borders | Remover borda grossa superior dos cards e aplicar borda 1px `rgba` conforme regra A2. | Baixo |

## 6. Reprojeto
**Nada estrutural - os ajustes acima bastam.**
O layout segue a sobriedade institucional esperada para o nicho criminalista. A correção da tipografia monospace e dos tokens de borda será suficiente para elevar o site de "template" para "ferramenta profissional de advocacia".
---

## Triagem (Claude, 2026-10-21)

| Item | Decisão |
|---|---|
| "Ler artigo" desalinhado entre cards da mesma linha | **Real.** Card virou coluna flex e o link vai para a base (`margin-top: auto`). |
| Números e "§" fora da mono | Falso: estão em IBM Plex Mono. |
| Botões em pílula | Falso: `--radius-md`. |
| Texto branco no botão dourado | Falso: texto e ícone em `--navy-900`. |
| Borda dourada nos cards | Acento de 2px à esquerda, padrão dos cards de caso já aprovado nas LPs. Mantido. |
| Ícone de WhatsApp nas opções da triagem | Deliberado: todas abrem o WhatsApp com a mensagem da situação. Mantido. |
| 5ª credencial sozinha na linha no celular | Deliberado: ocupa a largura toda para não deixar buraco. Mantido. |
| Alvos de toque em /especialidades | Falso: linhas com 64 px de altura. |
| Fadiga de rolagem com 6 cards | O limite de 6 é do PRD do cliente. Mantido. |
