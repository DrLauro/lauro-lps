# Direção de arte

_Dono: `ux-ui-designer`. Tokens: `docs/02-design/tokens/tokens.css`. Crítica: `docs/02-design/criticas/`._

## Referências

| Fonte | O que levamos | Screenshot |
|---|---|---|
| lauro.adv.br (site atual do cliente) — **principal** | Marinho `#053E7C`, dourado `#D3A518`, azul-gelo `#C2D2DD`, serif editorial em títulos, foto real do Dr. Lauro de terno azul | `benchmark/lauro-0..2.jpg` |
| stj.jus.br | Faixa utilitária escura no topo, divisões de 1 px, cinzas frios, densidade institucional, nada de enfeite | `benchmark/ref-stj.jpg` |

Saímos da referência da casa (SaaS escuro) de propósito: público em emergência criminal precisa ler "instituição jurídica séria", não "ferramenta tech". Fundo claro, marinho e dourado são a identidade que o cliente já tem.

## Decisões

- **Tipografia:** DM Serif Display (títulos; substitui a fonte "DR Exclusive Editorial" do site atual, cuja licença é desconhecida) · Public Sans (texto; tipografia de governo, legível) · IBM Plex Mono (OAB, telefone, CNPJ, rótulos, "§").
- **Dourado** só como preenchimento (botão principal, tendo texto marinho, 7:1) ou sobre marinho. Sobre branco usa `--gold-700` (5,3:1).
- **Raios** contidos (4/8/12): institucional, não app.
- **Fotos:** só as reais do cliente (recorte da capa do site atual). Sem banco de imagem, sem algema, sem imagem gerada — o contexto proíbe e a foto do Dr. Lauro é a prova de autoridade.

## Gate D

1. **Decisão que um gerador default não tomaria:** cada bloco numerado com "§ 1, § 2…" em mono dourado, como parágrafo de lei; e a triagem desenhada como lista de autos (linhas com divisão de 1 px), não como grade de cards.
2. **Paleta:** do site atual do cliente (marinho/dourado/gelo); o STJ deu a estrutura (faixa escura, linhas finas), não a cor.
3. **Assinatura repetível:** marcador "§ n" + divisões de 1 px + números em mono. Aparece em todas as 13 páginas.
4. **Item da lista B que quase usei:** B14 (3 colunas de ícone + título + texto para "O que analisamos"). Troquei por lista de verificação com linhas finas e cabeçalho fixo à esquerda. B11 (texto à esquerda / foto à direita) ficou no hero desktop por ser a identidade do site atual; no celular a foto vira um selo de identidade de 48 px acima do H1.
5. **Sem logo e texto ainda é jurídico?** Sim: "§", serif clássica, marinho + dourado e a faixa institucional remetem a tribunal e código.
