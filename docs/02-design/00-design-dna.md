# Design DNA — padrão visual da casa (C Dev)

Fonte da verdade visual de todo projeto. Vale para `ux-ui-designer`, `software-engineer`,
`qa-engineer`, `orquestrador`, para a thread principal e para tarefas delegadas ao Codex.

Regra de leitura: as seções **A** (princípios) e **B** (proibições) são obrigatórias em
100% dos projetos, independente de nicho, cliente ou tema. A seção **C** é a referência da
casa — o fallback quando o benchmark não produzir direção forte. A seção **D** é o gate que
o `orquestrador` roda antes de aprovar qualquer etapa visual.

---

## A. Princípios invioláveis

Cada item abaixo é verificável. Se não dá pra apontar o valor no arquivo de token, não foi feito.

### A1. Grid e espaçamento
- Base 4px. Escala única no produto inteiro: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- Nenhum valor fora da escala. `padding: 13px` é bug, não escolha.
- Container máximo definido em token (`--container-max`), não improvisado por tela.
- Ritmo vertical: espaçamento entre seções é sempre 2x ou 3x o espaçamento interno da seção.

### A2. Micro-borders (assinatura estrutural)
- Divisão de layout é feita com linha de 1px, não com sombra pesada nem com bloco de cor.
- Tema escuro: `rgba(255,255,255,.08)` padrão, `rgba(255,255,255,.14)` para borda em foco/hover.
- Tema claro: `rgba(0,0,0,.08)` padrão, `rgba(0,0,0,.14)` para foco/hover.
- Proibido `border: 1px solid #ccc` / `#e5e7eb` / qualquer cinza sólido chapado.
- Onde couber, borda com gradiente sutil (topo mais claro que a base) para dar aspecto de
  vidro cortado — em card de destaque, header fixo e modal.

### A3. Elevação
- Máximo 3 níveis (`--elev-1/2/3`). Nada além disso existe.
- Toda sombra tem 2 camadas: contato (curta, opaca) + ambiente (longa, difusa).
  Exemplo nível 2: `0 1px 2px rgba(0,0,0,.24), 0 8px 24px rgba(0,0,0,.16)`.
- Em tema escuro, elevação se comunica principalmente por **superfície mais clara + borda**,
  não por sombra — sombra preta sobre fundo preto não aparece.
- Proibido inventar `box-shadow` novo dentro de um componente.

### A4. Raio de borda
- Exatamente 3 valores no produto: pequeno / médio / grande (ex. `6 / 10 / 16`).
- Definidos em token, escolhidos uma vez, nunca ad-hoc por tela.
- Coerência de aninhamento: raio interno = raio externo menos o padding. Nunca dois raios
  iguais aninhados.

### A5. Tipografia híbrida
- 1 família geométrica para UI e leitura: Inter, Geist, SF Pro ou equivalente.
- 1 família **monospace** obrigatória, usada em: número, métrica, preço, ID, timestamp, badge,
  label de tabela, código, atalho de teclado, contador. Isso é o que separa "ferramenta
  profissional" de "site genérico" — não é decorativo.
- Escala com razão fixa (1.200 ou 1.250), declarada em token. Nada de tamanho solto.
- Máximo 3 pesos no produto inteiro (tipicamente 400 / 500 / 600 ou 400 / 600 / 700).
- `letter-spacing` negativo em título grande (`-0.02em` a `-0.03em`); positivo em label
  maiúsculo pequeno (`0.06em`). Corpo de texto fica em `0`.
- Altura de linha: título `1.1–1.2`, corpo `1.5–1.6`, label `1.3`.
- Largura de medida de leitura: 60–75 caracteres. Nunca parágrafo atravessando 1400px.

### A6. Cor
- Paleta enxuta: 1 primária (com escala 50–950), neutros calibrados (9–11 degraus), 1 accent,
  e as semânticas (success / warning / danger / info). Só isso.
- Neutros nunca são cinza puro: têm temperatura (leve azul, leve quente) coerente com a marca.
- Contraste mínimo AA: 4.5:1 texto corpo, 3:1 texto grande e elemento de interface.
- Cor nunca é o único portador de informação (status também tem ícone ou texto).

### A7. Motion de alta resposta
- Duração: `120–200ms` para interação de interface. `240–320ms` só para entrada de camada
  (modal, drawer, página). Acima de `400ms` só em animação decorativa de hero.
- Easing padrão: `cubic-bezier(.2, 0, 0, 1)`. Saída pode usar `cubic-bezier(.4, 0, 1, 1)`.
- Hover muda estado **real**: borda, superfície, elevação ou glow — nunca só `opacity`.
- Anima só `transform` e `opacity`. Animar `width`/`height`/`top`/`left` é bug de performance.
- `@media (prefers-reduced-motion: reduce)` obrigatório em todo produto.
- Estado de foco (`:focus-visible`) tem anel visível e é navegável por teclado, sempre.

### A8. Densidade e propósito
- A interface é ferramenta, não folder. Card gigante com 3 palavras é desperdício de tela.
- Toda tela tem UMA ação principal, visualmente dominante. As demais são secundárias de verdade
  (peso, cor e tamanho diferentes), não três botões do mesmo tamanho lado a lado.
- Whitespace é composição, não sobra. Se o espaço não separa grupos com intenção, está errado.

### A9. Atalhos e afeto de produto profissional
- Produto de uso repetido (dashboard, painel, CRM, admin) precisa de atalho de teclado visível
  na própria tela: `Cmd+K` para busca/comando, `Esc` para fechar, `Enter` para confirmar,
  `/` para focar busca.
- Atalho aparece renderizado em `<kbd>` com a fonte monospace, não escondido em documentação.

### A10. Estados: nenhum é opcional
Toda tela e todo componente interativo especifica: `default`, `hover`, `active/pressed`,
`focus-visible`, `disabled`, `loading`, `empty`, `error`.
- Empty state nunca é tela em branco: tem título, uma frase de contexto e um CTA.
- Loading usa skeleton com a forma do conteúdo real, não spinner centralizado genérico.
- Error diz o que houve e o que fazer agora, não "Algo deu errado".

### A11. Conteúdo real
Zero Lorem Ipsum. Zero "Título aqui", "Card 1", "Feature 2", `foo@bar.com`.
Microcopy real e específica do produto — inclusive em wireframe e em comp.

### A12. Responsivo é decisão, não consequência
Breakpoints declarados em token. Layout de mobile é **desenhado**, não é o desktop espremido.
Alvo de toque mínimo 44x44px. Tabela em mobile vira lista/card, não scroll horizontal infinito.

---

## B. Proibições — o que denuncia UI feita por IA

Presença de qualquer item abaixo **bloqueia** a aprovação da etapa.

1. Gradiente roxo→azul (ou teal→roxo) genérico como identidade.
2. Blob/orbe/glow flutuante decorativo sem função no layout.
3. `rounded-2xl` (ou raio grande único) aplicado em absolutamente tudo.
4. Emoji do sistema usado como ícone de interface.
5. Métrica, depoimento, logo de cliente ou número inventado para "encher" a tela.
6. Card dentro de card dentro de card.
7. Grid de cards todos do mesmo tamanho e mesmo peso visual, sem hierarquia.
8. Componente de Bootstrap / MUI / shadcn cru, sem token do projeto aplicado.
9. Ilustração cartoon de pessoa (estilo "Corporate Memphis" / undraw).
10. `text-gray-500` (ou equivalente) como única ferramenta de hierarquia.
11. Hero sempre no padrão texto-à-esquerda / imagem-à-direita.
12. Sombra `0 4px 6px rgba(0,0,0,.1)` copiada do default do framework.
13. Ícone de biblioteca diferente misturado na mesma tela; outline e filled sem regra.
14. Seção "Features" com 3 colunas de ícone + título + parágrafo, todas idênticas.
15. Botão primário e secundário com o mesmo peso visual.
16. Texto sobre imagem sem camada de contraste, ficando ilegível.
17. Font-family default do navegador ou `system-ui` sozinho como escolha tipográfica.

Biblioteca de ícone: `lucide-react` é o padrão (stroke 1.5–2px, tamanhos 16/20/24).
Trocar exige justificativa escrita na direção de arte.

---

## C. Referência da casa — "SaaS Moderno Premium"

Estética Tech Contemporânea (linhagem Linear / Vercel / Raycast): minimalismo chique da Apple
com eficiência utilitária do Figma. Ferramenta de alta performance para profissional exigente.

**Fallback obrigatório**: quando o benchmark do nicho não produzir direção forte e justificada,
o projeto nasce com esta referência. Sair dela exige justificativa escrita em
`docs/02-design/direcao-de-arte.md`.

```css
:root {
  /* superfície */
  --bg:            #0B0B0C;
  --surface-1:     #121214;
  --surface-2:     #17171A;
  --surface-3:     #1D1D21;

  /* borda */
  --border:        rgba(255,255,255,.08);
  --border-strong: rgba(255,255,255,.14);

  /* texto */
  --text:          #EDEDEF;
  --text-muted:    #A0A0A8;
  --text-subtle:   #6E6E78;

  /* marca */
  --accent:        #5B5BD6;
  --accent-hover:  #6E6EE8;
  --accent-fg:     #FFFFFF;

  /* semântico */
  --success:       #3DD68C;
  --warning:       #F5A524;
  --danger:        #E5484D;

  /* tipografia */
  --font-ui:       "Inter", -apple-system, system-ui, sans-serif;
  --font-mono:     "JetBrains Mono", "SF Mono", ui-monospace, monospace;

  /* raio */
  --radius-sm: 6px;  --radius-md: 10px;  --radius-lg: 16px;

  /* elevação */
  --elev-1: 0 1px 2px rgba(0,0,0,.32);
  --elev-2: 0 1px 2px rgba(0,0,0,.32), 0 8px 24px rgba(0,0,0,.24);
  --elev-3: 0 1px 2px rgba(0,0,0,.32), 0 16px 48px rgba(0,0,0,.32);

  /* motion */
  --dur-fast: 120ms;  --dur: 160ms;  --dur-slow: 280ms;
  --ease: cubic-bezier(.2, 0, 0, 1);
}
```

Assinaturas dessa referência: micro-border de 1px em tudo que divide; label e número em
monospace; hover que acende a borda em vez de mudar a cor do fundo; atalho `Cmd+K` visível;
densidade alta.

---

## D. Prova de não-genérico (gate)

Antes de fechar a direção de arte, o `ux-ui-designer` responde **por escrito** em
`docs/02-design/direcao-de-arte.md`:

1. Qual decisão visual desta tela um gerador default **nunca** tomaria? (cite a decisão específica)
2. De qual referência do benchmark veio a paleta, e por que ela em vez da referência da casa?
3. Qual é a assinatura visual repetível deste produto — o detalhe que aparece em todas as telas
   e que alguém reconheceria sem ver o logo?
4. Qual item da lista B eu quase usei, e com o que substituí?
5. Se eu tirar o logo e o texto, ainda dá para dizer de que nicho é este produto? Por quê?

Resposta vaga ("usei cores modernas", "segui boas práticas") não conta como resposta —
o `orquestrador` devolve a etapa.

---

## E. Handoff (por que UI genérica acontece)

O texto morre no caminho entre designer e código. O que atravessa é arquivo:

- `docs/02-design/tokens/tokens.css` — custom properties. **Única** fonte de valor visual.
- `docs/02-design/tokens/tokens.ts` — mesmos valores para consumo em JS/Tailwind.
- `docs/02-design/comps/<tela>.html` — comp de alta fidelidade, autocontido, importando os tokens.
- `docs/02-design/motion.md` — tabela elemento / gatilho / duração / easing / fallback reduced-motion.

Valor visual hard-coded em componente (hex, px de espaçamento, ms de transição) é **bug**:
sobe para o designer ajustar o token, não se resolve inventando no componente.

Tarefa delegada ao Codex roda sandboxada no diretório do projeto e **não enxerga `~/.claude/`** —
por isso este arquivo é copiado para `docs/02-design/00-design-dna.md` em todo projeto, e todo
prompt de UI enviado ao Codex precisa citar os caminhos relativos do DNA, dos tokens e do comp.
