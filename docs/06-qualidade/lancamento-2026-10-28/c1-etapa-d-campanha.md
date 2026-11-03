# Ciclo 1, Etapa D: campanha pausada (03/11/2026)

Conta 741-973-2901. Campanha **GOOG_Search_Criminal_Osasco-SP_C1**, ID **24431831911**, publicada em 03/11/2026 às 09:45 e **pausada às 09:46**. Especificação: `docs/05-marketing/campanha_v5_C1_google_ads.csv` (recebido como `campanha_v5_60dia_10dias_google_ads_editor.csv`). O nome da campanha no arquivo (`_10d`) foi trocado para `_C1`, conforme a ordem.

## 1. Como foi montada

- **Upload em massa pela web** (Ferramentas → Ações em massa → Uploads): recusado duas vezes. O formato do Google Ads Editor não é aceito pela tela, que lê cada linha de local como uma campanha nova ("Está faltando um valor em Tipo de campanha/Orçamento/Anúncios políticos na UE"). Nada foi aplicado.
- **Assistente "Criar uma campanha sem orientação → Pesquisa"**, sem o assistente de leads e sem aceitar sugestões. O assistente cria só o 1º grupo. Os outros 10 grupos, os 3 segundos anúncios, as negativas e os recursos foram criados depois da publicação, com a campanha já pausada.
- **IA Max:** o assistente traz a etapa **ligada por padrão**, com personalização de texto e expansão de URL final. Desliguei tudo antes de publicar.
- **Confirmação de identidade:** ao definir o orçamento, o Google pediu "Confirme sua identidade" (tipo `CAMPAIGN_BUDGET_INCREASE_BEYOND_THRESHOLD`). A confirmação foi feita pelo Lucas. Antes dela, o rascunho não salvava; refiz o grupo 1 depois.

## 2. Configurações (conferidas em Configurações da campanha)

| Item | Valor |
|---|---|
| Rede | só Rede de Pesquisa do Google (sem parceiros, sem Display) |
| Metas de conversão | **específicas da campanha: Leads Criminal C1** (sem Contato e sem Lead telefônico) |
| Lances | Maximizar conversões, sem CPA desejado; aquisição de clientes "igualmente novos e atuais"; retenção desativada |
| Orçamento | R$ 60,00/dia, próprio (não compartilhado) |
| Locais | 8 cidades: Barueri, Carapicuíba, Cotia, Itapevi, Jandira, Osasco, Santana de Parnaíba, São Paulo. Opção **Presença** |
| Idioma | Português |
| Públicos | nenhum |
| IA Max | desativada (personalização de texto e expansão de URL final desativadas) |
| Recursos automáticos | **Desativado**: usar apenas os recursos enviados |
| Correspondência ampla | desativada |
| Programação | todos os dias, 24 h |
| Rotação | Otimizar |
| Datas | **provisórias: 05/11/2026 a 14/11/2026**. Ficaram no futuro para a campanha não veicular antes da pausa. Na ativação, início = dia do "pode ativar" e término = 10º dia (contando o dia da ativação) às 23:59 |

Prints: `c1-d3-revisao-antes-publicar.png`, `c1-d4-campanha-pausada.png`, `c1-d8-locais-presenca.png`, `c1-d9-configuracoes-campanha.png`, `c1-e2-metas-campanha-leads-criminal-c1.png`.

## 3. Grupos, palavras-chave e anúncios

11 grupos, **73 palavras-chave** (só exata e frase) e **14 anúncios responsivos**, todos iguais ao CSV (títulos, descrições, caminhos e URL final com UTM; conferido campo a campo no preenchimento).

| Grupo | Palavras-chave | Anúncios |
|---|---|---|
| Emergência Prisão | 10 | 2 |
| Habeas Corpus | 6 | 1 |
| Criminalista Osasco | 8 | 2 |
| Criminalista São Paulo | 5 | 1 |
| Tráfico de Drogas | 6 | 1 |
| Maria da Penha | 5 | 1 |
| Crimes Sexuais | 6 | 1 |
| Crimes Digitais | 7 | 1 |
| Estelionato e Fraudes | 5 | 1 |
| Ofensas Digitais | 6 | 1 |
| Grande Repercussão e Operações | 9 | 2 |

**Palavras-chave sinalizadas pela política "Sensitive events"** (falso positivo: o texto do Google fala de desastre, conflito ou morte): `"advogado para preso"`, `"advogado para soltar preso"`, `"advogado para tirar preso"` e `"advogado preso por tráfico"`. Pedi **exceção** (revisão manual do Google) em todas, sem alterar o texto. Até a revisão, essas 4 podem ficar sem veicular; as outras 69 não dependem disso. Em Maria da Penha e Crimes Sexuais o primeiro salvamento também não passou, sem nome de política na tela. O grupo foi salvo no segundo envio, com a caixa "Solicitar uma exceção" marcada quando ela apareceu. O status de política de cada palavra-chave fica para a conferência da ativação.

Nenhuma sugestão do Google foi aplicada (correspondência ampla, "adicionar palavras-chave", títulos sugeridos).

## 4. Negativas

**47 negativas no nível da campanha** (inclui "lauro"), com os tipos do CSV (amplas e de frase). A lista antiga "Lista Negativa Lauro Criminalista" **não** foi aplicada. Print: `c1-d5-negativas.png`.

## 5. Recursos

| Recurso | Qtde | Detalhe |
|---|---|---|
| Sitelinks | 4 | Prisão em Flagrante, Habeas Corpus, Áreas de Atuação, Artigos e Decisões (com as 2 linhas de descrição do CSV) |
| Frases de destaque | 8 | as 8 do CSV |
| Ligação | 1 | Brasil, (11) 97080-2600, relatório de chamadas ativado, gravação desativada, ação de conversão **Anúncio - Chamada 60s**, sem restrição de horário (24 h) |

- **Logotipo antigo:** a publicação vinculou sozinha o logotipo antigo (emblema dourado) à campanha às 09:45. Removi a associação, conforme "logotipo sai" e "nenhum recurso antigo". O logotipo de nível de conta já tinha sido removido antes.
- **Atenção, ligação:** o formulário vem com país "Estados Unidos" e ação de conversão "Usar configurações da conta (**Ligação Extensão Criminal #1**)", a ação antiga. Troquei para Brasil e "Anúncio - Chamada 60s". A configuração de chamadas da conta continua apontando para a ação antiga; ela só vale para recursos de ligação que usem o padrão da conta, e o desta campanha não usa.

A campanha tem **13 recursos**, todos "Em análise" na criação. Prints: `c1-d6-recurso-ligacao.png`, `c1-d7-recursos-campanha.png`.

## 6. Regra automatizada

| Item | Valor |
|---|---|
| Nome | C1 - Pausar se custo >= R$ 540 (ID 62445868; a versão de R$ 570, ID 62445385, foi substituída em 03/11 às 10:50) |
| Tipo | Regras de campanha; aplicada **só** à campanha GOOG_Search_Criminal_Osasco-SP_C1 |
| Condição | Custo >= **R$ 540,00** (e status ativada ou pausada). Ajuste do Lucas em 03/11; era R$ 570,00 |
| Ação | Pausar campanhas |
| Frequência | **Por hora**, a partir de 00:00 |
| Dados | todo o período. A campanha é nova, então equivale a "desde a ativação" |
| E-mail | dr.lauroneto@gmail.com, "somente se houver alterações ou erros" (a pausa gera e-mail) |
| Teste ("Visualizar") | "Aproximadamente 0 campanha seria alterada" nas duas versões (R$ 570 e R$ 540): custo atual R$ 0,00, abaixo do limite, como esperado |

Prints da versão de R$ 570: `c1-d10-regra-visualizar.png`, `c1-d11-regra-config.png`, `c1-d12-regra-salva.png`. Versão de R$ 540: `c1-d15-regra-540-visualizar.png`, `c1-d16-regra-540-salva.png`.

**Limite da trava:** os dados de custo do Google chegam com até cerca de 3 horas de atraso, e o gasto diário pode chegar a 2× o orçamento (R$ 120,00) num dia isolado. A margem entre R$ 540,00 e o crédito de R$ 600,00 é de R$ 60,00 (um dia de orçamento), então a regra reduz o risco, mas não garante um teto exato. As outras travas (orçamento e data de término) continuam valendo.

## 7. Verificações depois da publicação

- **URLs finais:** as 14 URLs (10 de anúncio e 4 de sitelink) retornam **200 sem redirecionamento**, com UTM e `gclid` preservados (curl, 03/11).
- **Status dos anúncios:** 14 anúncios, "Não qualificada" porque a campanha está pausada e com início em 05/11; 2 ainda "Em análise" (Grande Repercussão e Operações, Ofensas Digitais). Print: `c1-d13-anuncios-status.png`.
- **Diagnóstico e visualização de anúncios** ("advogado criminalista osasco", Osasco, português, celular): "Seu anúncio não está sendo exibido". Motivo: "não há palavras-chave na sua conta que correspondem à consulta", porque a ferramenta só considera campanhas ativas, e a [advogado criminalista osasco] existe no grupo Criminalista Osasco. **Refazer na ativação.** Print: `c1-d14-diagnostico-anuncio.png`.

## 8. Na ativação (só com o "pode ativar" escrito do Dr. Lauro)

1. Mudar a data de início para o dia da ativação e a de término para o 9º dia seguinte às 23:59 (10 dias contando o da ativação).
2. Ativar a campanha e registrar a data e a hora.
3. Refazer o Diagnóstico de anúncios para "advogado criminalista osasco" e "advogado habeas corpus".
4. Na Etapa F, acompanhar a campanha e o andamento da revisão das 4 palavras-chave barradas, além dos recursos.

## 9. Ativação (03/11/2026)

Autorização escrita do Dr. Lauro, repassada pelo Lucas: "pode ativar a campanha GOOG_Search_Criminal_Osasco-SP_C1".

| Item | Valor |
|---|---|
| Datas na campanha | início **03/11/2026**, término **12/11/2026**. No Google Ads, a data de término vale até as 23:59 desse dia, no fuso da conta (GMT-03:00). São 10 dias contando o da ativação |
| Ativação | **03/11/2026 às 11:36:34** (horário de Brasília) |
| Status logo depois | "Qualificada (limitada)": o recurso de ligação ainda estava em revisão |

Prints: `c1-f1-datas-ativacao.png`, `c1-f2-campanha-ativada.png`.

### Diagnóstico de anúncios (11:40, Osasco, português, celular)

| Consulta | Resultado |
|---|---|
| advogado criminalista osasco | "Seu anúncio não está sendo exibido. Nenhum resultado de diagnóstico foi encontrado porque não há palavras-chave na sua conta que correspondem à consulta" |
| advogado habeas corpus | mesmo resultado |

As duas palavras-chave existem e estão **Qualificada**: [advogado criminalista osasco] no grupo Criminalista Osasco e "advogado habeas corpus" no grupo Habeas Corpus. A leitura mais provável é que o diagnóstico ainda não enxerga a campanha recém-ativada. Ele é refeito na Etapa F. Prints: `c1-f3-diagnostico-criminalista-osasco.png`, `c1-f4-diagnostico-habeas-corpus.png`.

### Status na ativação

- **Anúncios:** os 14 estão **Qualificada**, com eficácia de 6 "Bom", 6 "Médio" e 2 "Ruim" (Habeas Corpus e um dos anúncios de Grande Repercussão). Print: `c1-f5-anuncios-status.png`.
- **Palavras-chave:**
  - 53 Qualificada;
  - 16 "Não qualificada: Baixo volume de pesquisas". Esse status é do Google e pode mudar sozinho;
  - **4 "Reprovado (Eventos sensíveis)"**: "advogado para preso", "advogado para soltar preso", "advogado para tirar preso" e "advogado preso por tráfico".
- **Revisão das 4 reprovadas:** o Histórico de contestação está vazio ("Você ainda não contestou nenhuma decisão"). A caixa "Solicitar uma exceção" marcada na criação não abriu contestação, e o detalhe da palavra-chave não oferece o botão "Contestar". Print: `c1-f7-historico-contestacao.png`.
- **Gerenciador de políticas:** 10 recursos "Aprovado (limitado)" pela política "Ato criminoso na publicidade personalizada". Essa política só restringe a segmentação por públicos personalizados, e a campanha não usa públicos. Print: `c1-f6-gerenciador-politicas.png`.
- **Pré-pagamento:** a nova tentativa de "Mudar para pré-pagamento" fica para 05/11. Em 03/11 o botão continuava desativado.

### Ajustes de 03/11, depois da ativação (ordem do Lucas)

**Avisos da conta (12:20).** Nada foi cadastrado.
- **Visão geral, cartão Faturamento:** "Adicionar uma forma de pagamento — Adicione uma forma de pagamento para manter seus anúncios em exibição". É um alerta, não um bloqueio.
- O aviso anterior, "Não há anúncios sendo veiculados… verifique sua forma de pagamento", **não aparece mais**.
- **Diagnóstico da conta:** "Sua nova campanha só está qualificada para veicular anúncios para um público-alvo limitado", com "Impressões: problemas detectados". Itens listados: "O recurso de ligação está em revisão" e "A nova estratégia de lances está na fase de aprendizado".
- **Faturamento → Resumo:** "Você tem crédito R$ 600,00" e nenhum pagamento futuro.
- **Avisos flutuantes:** "1 campanha será finalizada em breve", efeito da data de término 12/11, e "Proteja sua conta contra atividades não autorizadas".

Prints: `c1-f8-visao-geral-avisos.png`, `c1-f9-faturamento-resumo-avisos.png`.

**Substituição das palavras-chave reprovadas.**
- As 4 reprovadas por "Eventos sensíveis" foram **removidas**, sem contestação.
- A tela mostrou o erro "Não foi possível aplicar sua alteração a nenhuma palavra-chave selecionada", mas só na segunda tentativa: a primeira já tinha sido aplicada, com atraso. Conferido em seguida: 69 palavras-chave e nenhuma das 4 na lista.

Novas palavras-chave (correspondência de frase):

| Palavra-chave | Grupo | Resultado |
|---|---|---|
| "advogado relaxamento de prisão" | Emergência Prisão | incluída; Pendente, Em análise |
| "advogado liberdade provisória" | Emergência Prisão | incluída; Pendente, Em análise |
| "advogado preso em flagrante" | Emergência Prisão | **barrada na inclusão por "Sensitive events"; não incluída**, conforme a ordem (sem variações). Print: `c1-f10-novas-palavras-sinalizadas.png` |
| "advogado prisão preventiva" | Habeas Corpus | incluída; Pendente, Em análise |
| "advogado flagrante tráfico" | Tráfico de Drogas | incluída; Não qualificada: Baixo volume de pesquisas, Em análise |

Total na campanha: **73 palavras-chave**.

### Checagem das 18h (03/11/2026, por volta de 18:00)

A checagem das 15h não rodou: o agendamento só dispara com a sessão ociosa, e ela estava ocupada. Ficou valendo a das 18h.

**Métricas de hoje (03/11), campanha `GOOG_Search_Criminal_Osasco-SP_C1`:**

| Impressões | Cliques | CTR | Custo | Conversões |
|---|---|---|---|---|
| 24 | 0 | 0,00% | R$ 0,00 | 0,00 |

- Status da campanha: "Qualificada (limitada)", com o motivo "O recurso de ligação está em revisão". Estratégia: Maximizar conversões; orçamento de R$ 60,00/dia.
- Como houve impressões, a investigação de "zero impressões" não se aplicou. Nada foi alterado.
- Prints: `c1-f13-metricas-hoje-18h.png`, `c1-f14-linha-campanha-hoje-18h.png`.

**Diagnóstico de anúncios** (Osasco, português, celular). Não pesquisamos no Google nem clicamos em anúncios.

| Busca | Resultado |
|---|---|
| advogado criminalista osasco | "Seu anúncio não está sendo exibido". A busca correspondeu a [advogado criminalista osasco] no grupo Criminalista Osasco. Motivo informado: "Não sabemos por que seus anúncios não estão aparecendo nessa pesquisa" |
| advogado habeas corpus | "Seu anúncio não está sendo exibido". A busca correspondeu a "advogado habeas corpus" no grupo Habeas Corpus. Motivo: **"Seu anúncio tem uma classificação baixa nessa pesquisa"** |

- O diagnóstico agora encontra as palavras-chave, o que não acontecia às 11:40.
- O resultado vale para uma simulação, não para todas as buscas. As 24 impressões do dia mostram que a campanha veicula.
- A classificação baixa em Habeas Corpus tende a melhorar quando a estratégia de lances sair da fase de aprendizado. O anúncio desse grupo também tem eficácia "Ruim".
- Prints: `c1-f15-diagnostico-criminalista-osasco-18h.png`, `c1-f16-diagnostico-habeas-corpus-18h.png`.

**Palavras-chave novas:**

| Palavra-chave | Status às 18h |
|---|---|
| "advogado relaxamento de prisão" | Qualificada |
| "advogado liberdade provisória" | Qualificada |
| "advogado prisão preventiva" | Qualificada |
| "advogado flagrante tráfico" | Não qualificada: Baixo volume de pesquisas (não é reprovação; não foi removida) |

Nenhuma foi reprovada. Prints: `c1-f17-palavras-habeas-18h.png`, `c1-f18-palavras-trafico-18h.png`.

**Conversões (verificado às 17:46, a pedido do Lucas)**

A meta padrão "Clique de saída" aparece com **"Configuração incorreta"**. O Google explica: "As metas precisam incluir pelo menos uma ação de conversão principal para serem usadas na otimização de campanhas e nos relatórios de resultados".

- **Causa:** a única ação dessa meta é a antiga "Clique Botão WhatsApp Criminal". Ela passou a Secundária na Etapa B, de propósito, e mostra "Requer atenção" porque está sem dados.
- **Efeito na campanha:** nenhum. A campanha usa só a meta personalizada "Leads Criminal C1", com 3 ações e 1 campanha.
- **Ações novas:** as 3 estão como Principal, com status "Não há conversões recentes". É o esperado, porque nenhuma conversão veio de clique em anúncio até agora.
- **Decisão:** nada foi alterado. Voltar a ação antiga para Principal desfaria o isolamento da Etapa B.
- Prints: `c1-f11-meta-clique-de-saida.png`, `c1-f12-metas-personalizadas.png`.
