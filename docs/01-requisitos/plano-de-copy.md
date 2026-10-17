# Plano de copy — 13 landing pages

_Dono: `business-analyst`. Fonte do texto: `contexts/NN-<slug>.CONTEXT.md`, seção 5._

## Regra de ouro

O texto da seção 5 de cada contexto está **aprovado pelo Dr. Lauro** e o próprio contexto proíbe reescrever, resumir ou acrescentar promessa. Por isso as páginas exibem esse texto **literalmente** — o build lê direto dos CONTEXT.md (`src/lib/contexts.mjs`) e `npm run check` falha se o FAQ da página divergir do FAQ do JSON-LD.

O trabalho de copy aqui é de **arquitetura e conversão**, não de redação: ordem dos blocos, hierarquia, qual situação vira ação principal, e onde a copy aprovada perde força. Tudo que muda texto está na seção "Sugestões para aprovação" e **não foi aplicado**.

## Estrutura comum (todas as páginas)

| # | Bloco | Função de conversão | Fonte |
|---|---|---|---|
| 1 | Hero: H1 + texto | Confirmar em 3 s que a página é do problema da pessoa | 5.1 |
| 2 | Triagem "Qual é a sua situação?" | 1ª situação = ação principal (dourada); demais em lista; Ligar por último | seção 6 |
| 3 | Faixa de prova | 23 anos · sigilo · 24 h · Google | 5.2 |
| 4 | § Como atuamos | Mostrar método, não promessa | 5.3 |
| 5 | § Serviços nesta área | Cobrir cauda longa de busca (etiquetas em HTML) | 5.4 |
| 6 | § O que analisamos | Prova de técnica | 5.5 |
| 7 | § Casos (só quando há caso aprovado) | Prova de resultado, sem identificar ninguém | 5.6 |
| 8 | § Perguntas frequentes | Quebrar objeção + rich result | 5.7 |
| 9 | Chamada final | Urgência + WhatsApp (1ª situação) e Ligar | 5.8 |
| 10 | Áreas relacionadas + rodapé legal | SEO interno + disclaimer OAB | 5.9 / seção 9 |
| — | Barra fixa no celular | WhatsApp (2/3) + Ligar (1/3), sempre visível | seção 3 |

## Página a página

| # | Página | Busca principal | Quem chega | Ação principal (1ª triagem) | Gancho da chamada final | Casos |
|---|---|---|---|---|---|---|
| 01 | Prisão em flagrante | advogado prisão em flagrante | Familiar de preso, agora | Alguém foi preso agora | "Cada hora conta" | — |
| 02 | Habeas corpus | advogado habeas corpus | Família de preso; quem teme prisão | Familiar está preso | Prisão ilegal ou ameaça | 1 |
| 03 | Tráfico de drogas | advogado tráfico de drogas | Família de preso em flagrante | Foi preso por tráfico agora | "A defesa começa na delegacia" | 1 |
| 04 | Maria da Penha | advogado maria da penha | Vítima **ou** acusado | Sou vítima e preciso de proteção | Sigilo, 24 h | — |
| 05 | Crimes digitais | advogado crimes digitais | Acusado/investigado; vítima | Fui acusado de golpe ou fraude | Sigilo, 24 h | 2 |
| 06 | Golpes e fraudes | advogado golpe pix | Vítima; dono de conta usada | Caí em um golpe | Golpe ou conta usada | 1 |
| 07 | Ofensas digitais | advogado calúnia e difamação | Ofendido; acusado | Fui ofendido na internet | "O prazo corre" | — |
| 08 | Crimes sexuais | advogado crime sexual | Intimado/investigado | Fui intimado a depor | Defesa desde o 1º dia | — |
| 09 | Crimes complexos | advogado operação policial | Alvo de operação | Fui alvo de operação ou busca | Sigilo | 2 |
| 10 | Tribunal do júri | advogado tribunal do júri | Família de preso; família de vítima | Familiar foi preso por homicídio | Júri marcado | — |
| 11 | Execução penal | advogado execução penal | Família de condenado | Familiar está preso | Direitos respeitados | — |
| 12 | Recursos e revisão | advogado recurso criminal | Recém-condenado | Fui condenado agora | "O prazo é curto" | — |
| 13 | Crimes patrimoniais | advogado furto | Família de preso | Foi preso agora | 24 h | 1 |

Fases de publicação (dos contextos): 01–09 fase 1 · 10–12 fase 2 · 13 fase 3. O preview publica as 13.

## Microcopy de interface criada por nós (precisa de ok do Dr. Lauro)

Não está nos contextos; é rótulo de interface, não promessa:

- "Qual é a sua situação?" — título da triagem
- "Áreas relacionadas" — bloco de links internos
- "Caso 01", "Caso 02" — rótulo dos casos
- "WhatsApp" / "Ligar" — barra fixa do celular (o contexto pede exatamente esses dois botões)
- Faixa de prova: o item do Google aparece como **"Avaliações no Google"** (link para o perfil), sem a nota. O contexto proíbe digitar a nota à mão — ela entra quando o widget Trustindex for instalado.

## Sugestões para aprovação (NÃO aplicadas)

Globais:
1. **Hero longo no celular.** Os textos do hero têm 55–70 palavras; em 390 px empurram a triagem para baixo da dobra em várias páginas. Proposta: manter o texto inteiro, mas aprovar uma frase-resumo de até 14 palavras acima dele (ex. 01: "As primeiras horas decidem se a pessoa volta para casa.").
2. ~~Números divergentes~~ — **decidido 2026-10-17: "mais de 23 anos"** (igual ao site atual e ao Jusbrasil). Trocado nos 13 contextos, inclusive JSON-LD e rodapé. "+6.000 casos" do site atual não entrou: não está nos contextos.
3. **Casos novos tirados do Jusbrasil do Dr. Lauro (2026-10-17) — validar no preview.** Resumidos sem nome, número de processo, vara ou data:
   - 01 Flagrante: HC no TJSP, liberdade de cliente primário preso por tráfico.
   - 04 Maria da Penha: (a) representação da vítima, prisão revogada a pedido dela com protetivas mantidas; (b) absolvição em ameaça baseada em print sem cadeia de custódia.
   - 11 Execução: pena reduzida no STJ após condenação definitiva (tráfico privilegiado). **Confirmar se o caso é do Dr. Lauro** — o artigo comenta o HC sem dizer quem atuou.
   - 12 Recursos: HC no STJ desclassificou furto qualificado para simples após trânsito em julgado.
   - 13 Patrimoniais: 2º caso, absolvição em roubo por reconhecimento só na delegacia.
   - **Sem caso no Jusbrasil:** 07 Ofensas digitais, 08 Crimes sexuais, 10 Tribunal do júri — bloco segue oculto até o Dr. Lauro mandar.

Por página:
- **07 Ofensas digitais** — a frase de serviços não vira etiqueta bem ("praticadas presencialmente ou na internet…" sai como etiqueta solta). Proposta de texto: "Calúnia, difamação, injúria, ofensas em redes sociais (Facebook, Instagram, TikTok, WhatsApp e outras plataformas), queixa-crime, defesa de quem é acusado, representação de vítimas."
- **06 Golpes** — o prazo de 6 meses da representação está no corpo mas não na chamada final. Proposta: "Golpe, fraude ou conta usada por golpistas? O prazo de 6 meses corre. Fale agora com o Dr. Lauro."
- **11 Execução penal** — chamada final é a mais fraca das 13. Proposta: "Um cálculo de pena errado pode custar meses de prisão. Peça a conferência ao Dr. Lauro."
- **12 Recursos** — tornar o prazo concreto: "Condenado? A apelação tem prazo de 5 dias. Fale com o Dr. Lauro."
