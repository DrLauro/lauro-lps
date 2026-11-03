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
