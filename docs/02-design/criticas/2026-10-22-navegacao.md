<!-- critique-ui | modelo: gemini-3.5-flash | imagens: area-desktop.png, home-tablet.png, vitima-mobile.png, menu-mobile.png, esp-mobile.png, home-mapa-mobile.png | tokens in/out: 10574/1750 -->

## 1. Friccao e carga cognitiva

- **Desalinhamento da triagem na página de vítima/Lei Maria da Penha (Screenshots 3 e 4)**: O botão primário em destaque dourado exibe a opção *"Fui vítima de golpe"*, enquanto o contexto da página trata de violência doméstica.
  *Objeção de compra criada*: A vítima de agressão ou ameaça conclui que caiu em uma página genérica ou voltada a crimes patrimoniais/estelionato, aumentando a taxa de rejeição (*bounce rate*) antes de iniciar o contato no WhatsApp.
- **Duplicação de CTA primário na página de Especialidades (Screenshot 5)**: O botão dourado *"Falar no WhatsApp"* aparece imediatamente abaixo do H1 *"Áreas de atuação"* e permanece fixado no rodapé (*sticky bar*).
  *Objeção de compra criada*: Causa poluição visual e empurra a lista real de especialidades (*01 Prisão em Flagrante...*) para baixo da dobra (*below the fold*), forçando rolagem desnecessária para quem procura uma área específica.
- **Falta do link 'Saiba como atuamos para vítimas' abaixo da triagem (Screenshots 3 e 4)**: O bloco de triagem encerra no aviso do 190/180 sem redirecionar para a explicação metodológica da atuação.
  *Objeção de compra criada*: Vítimas que ainda estão hesitantes em falar pelo WhatsApp e buscam entender o sigilo e as medidas protetivas não encontram transição editorial, abandonando a jornada.
- **Microcopy explicativo de implementação no bloco de Endereço (Screenshot 6)**: O texto *"O mapa é do Google Maps e só carrega quando você clicar"* expõe uma regra técnica interna.
  *Objeção de compra criada*: Transmite amadorismo ou falta de acabamento no produto digital, gerando desconfiança em relação à sofisticação do escritório.

---

## 2. Layout e design system

- **Violação da Regra A8 (Ação Principal Unificada)**: Na tela `/especialidades/` em mobile (Screenshot 5), existem dois botões primários dourados com o mesmo rótulo/destino simultaneamente visíveis na viewport (um no topo do conteúdo e outro na barra fixada).
- **Inconsistência de contraste e semântica no Alerta 190/180 (Regra A6 e token `--paper-2`)**: O container de emergência em Screenshots 3 e 4 utiliza fundo neutro secundário (`--paper-2`) e texto em cinza escuro. Elementos de emergência/perigo iminente devem usar tratamento visual destacado para não serem confundidos com notas de rodapé operacionais.
- **Violação da Regra A8 no Header vs. Triagem (Página de Área)**: No Desktop (Screenshot 1), o cabeçalho mantém um botão de WhatsApp com visual verde em pílula ao lado do telefone. Conforme o direcionamento de negócio, na página de área o WhatsApp do cabeçalho deve ter destaque inferior ao da triagem (usando variação em texto/link simples ou botão neutro).
- **Duplicação de ações no bloco de Endereço (Screenshot 6)**: O link em azul *"Como chegar ->"* está posicionado acima do container do mapa, enquanto o botão *"Mostrar mapa"* está dentro do container. Dois elementos de ação para a mesma finalidade geográfica geram ruído de decisão.

---

## 3. Responsividade

- **Overflow horizontal / Scrollbar X ativo (Screenshots 3, 4, 5 e 6)**: Há uma barra de rolagem horizontal visível no rodapé do navegador em resoluções mobile (abaixo de 400px).
  *Causa concreta*: A faixa utilitária superior (`OAB/SP 210.212 · Atendimento 24 horas...`) possui texto longo sem quebra adequada ou `white-space: nowrap` sem restrição de container.
  *Consequência comercial*: A página "dança" lateralmente durante a rolagem vertical em aparelhos celulares, provocando cliques acidentais e desalinhando a barra fixa inferior de conversão (*sticky bar*).
- **Compressão do botão 'Menu' no Header mobile (Screenshot 4)**: O botão `Menu` é espremido contra a borda direita da tela devido ao vazamento da faixa utilitária topo, reduzindo a área útil de clique.

---

## 4. Acessibilidade

- **Alvo de toque violado nos links de emergência 190 e 180 (Regra A12 e token `--tap: 48px`)**: Os números `190` e `180` (Screenshots 3 e 4) são links sublinhados inline dentro de um parágrafo de texto, oferecendo uma área clicável de aproximadamente 20x16px (abaixo do padrão mínimo de 48x48px).
- **Dependência de ícone para identificação de canal (Regra A6)**: Os botões da lista de triagem (Screenshots 2, 3 e 4) dependem exclusivamente do ícone verde do WhatsApp no lado esquerdo para indicar a abertura do aplicativo. O texto da opção em si não explicita a ação de abertura externa.

---

## 5. Correcoes (ordenadas por impacto/esforco)

| Prioridade | Problema | Correcao | Esforco |
| :--- | :--- | :--- | :--- |
| **P0** | Scroll horizontal travando telas mobile abaixo de 400px (Screenshots 3, 4, 5, 6). | Aplicar `max-width: 100vw`, `overflow-x: hidden` no container pai e permitir quebra de linha na faixa topo (`OAB/SP...`). | Baixo |
| **P0** | Opção primária errada na triagem da página de violência doméstica (Screenshot 3). | Ajustar a regra de dados do componente de triagem por página para que o botão dourado principal seja *"Fui agredido ou ameaçado"* ou *"Sou vítima de violência"*. | Baixo |
| **P1** | Duplicação de CTA no topo de `/especialidades/` (Screenshot 5). | Remover o botão dourado inline do topo da lista em mobile, mantendo apenas a fixação no rodapé e a lista de especialidades imediatamente abaixo do H1. | Baixo |
| **P1** | Ausência do link 'Saiba como atuamos para vítimas' abaixo do bloco 190/180. | Inserir link de texto com seta (`Saiba como atuamos para vítimas ->`) posicionado logo abaixo do bloco de emergência 190/180. | Baixo |
| **P1** | Alvos de toque reduzidos nos números de emergência 190/180 (Screenshots 3 e 4). | Transformar `190` e `180` em botões de acionamento rápido (*chips* ou pílulas clicáveis) com altura e largura mínimas de `48px` (`--tap`). | Baixo |
| **P2** | Reduzir o destaque do WhatsApp do cabeçalho em relação à triagem na página de área. | Alterar o botão de WhatsApp do header para estilo neutro/outline sem preenchimento colorido nas páginas de área. | Baixo |
| **P2** | Microcopy técnico e duplo CTA no bloco de Endereço (Screenshot 6). | Substituir a frase técnica por *"Clique para carregar a localização interativa"* e unificar o link *"Como chegar"* com a ação do mapa. | Baixo |

---

## 6. Reprojeto (so se valer a pena)

Nada estrutural - os ajustes acima bastam.
---

## Triagem (Claude, 2026-10-22)

- **Aplicado:** rolagem horizontal de 3 px no celular (a marca não encolhia e empurrava o botão Menu). A marca agora encolhe abaixo de 1024 px.
- **Aplicado:** 190 e 180 viram botões de 48 × 48 px, ainda dentro do aviso discreto.
- **Aplicado antes da crítica:** em 1280 px os links do menu quebravam e encostavam na marca; telefone do cabeçalho só com ícone abaixo de 1280 px (o número continua no rótulo acessível).
- **Descartado:** trocar a primeira opção da triagem de /sou-vitima/ e de Maria da Penha. Vem do CONTEXT.md aprovado pelo Dr. Lauro.
- **Descartado:** tirar o botão de WhatsApp abaixo do H1 de /especialidades/. A rodada de 22/10 pede esse botão.
- **Descartado (falso):** falta do link para vítimas em /sou-vitima/. A própria página de vítimas não linka para si mesma.
- **Descartado:** WhatsApp do cabeçalho mais neutro. Já é botão de contorno, sem preenchimento; a triagem é dourada.
- **Descartado:** fundir "Como chegar" com o mapa. São ações diferentes: rota no Google (nova aba) e visualização no próprio site.
