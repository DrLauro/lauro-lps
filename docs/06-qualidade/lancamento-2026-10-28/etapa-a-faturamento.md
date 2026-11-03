# Etapa A: faturamento em modo manual pré-pago (29/10/2026)

Ordem de execução final de 29/10: nenhuma etapa começa sem configuração de pagamento manual. Conferência só de leitura; nada foi alterado, confirmado ou cadastrado.

## O que a conta mostra (Faturamento → Configurações)

| Item | Estado |
|---|---|
| Situação da conta | **cancelada** ("Sua conta não está ativa", botão "Reativar"). A ordem dizia "já reativada"; a tela não confirma |
| Como você fará o pagamento | **Pós-pagamento**: cobrança no 1º dia do mês, ou antes, se o saldo chegar a R$ 1.200,00 |
| Formas de pagamento | nenhuma cadastrada |
| Forma de pagamento automático ativa | nenhuma |
| Opção "Mudar para pagamentos manuais" | **não aparece** na seção "Como você fará o pagamento" (a Central de Ajuda descreve esse caminho em "Opções de pagamento alternativas", e a tela não tem essa opção) |
| Único botão de ação na seção de pagamento | "Corrigir": adicionar forma de pagamento para **pagamentos automáticos** |

Print: `a-faturamento-configuracoes.png`.

## Alternativa que a tela oferece: "Alterar quem paga"

Em Faturamento → Transferências de faturamento há o botão **"Alterar quem paga"**, que cria uma nova configuração de faturamento com outro perfil de pagamentos. O assistente tem 6 passos: Introdução (motivo: mudança de propriedade, verificação do anunciante não concluída, mudança na natureza dos negócios, outro), Confirmação, Saldo pendente, País de faturamento, Perfil de pagamento, Confirmação.

Não passei da Introdução: o passo 2 já é uma confirmação e pode encerrar a configuração atual. Não dá para saber, sem avançar, se o passo 5 permite escolher pagamento manual (Pix ou boleto).

Print, com o ID do perfil mascarado: `a-alterar-quem-paga.png`.

## Resultado

**Critério para seguir não atendido** (configuração de pagamento ≠ manual). Execução parada na Etapa A, conforme a ordem. Decisão do Dr. Lauro.

## Depois do "Reativar" do Dr. Lauro (29/10/2026)

Só leitura. Nada foi confirmado ou cadastrado.

| Item | Estado |
|---|---|
| Situação da conta | sem aviso de cancelada. Avisos agora: "Seus anúncios não estão sendo exibidos. Para retomar a veiculação de anúncios, verifique sua forma de pagamento." e "Não há anúncios sendo veiculados" (campanhas removidas) |
| Saldo | R$ 0,00. Último pagamento: 3 de out., R$ 1.438,31, "Pagamento manual". Link "Fazer um pagamento opcional" no Resumo |
| Como você fará o pagamento | "Selecionadas atualmente: Pós-pagamento" |
| Opções de pagamento alternativas | **aparece agora**: "Pré-pagamento. Transfira dinheiro para cobrir seus custos futuros de publicidade. Os anúncios são interrompidos quando o crédito acaba." |
| Botão "Mudar para pré-pagamento" | **desativado**. Dica ao passar o mouse: "Não é possível mudar a forma de pagamento no momento. Não é possível mudar sua forma de pagamento no momento." |

Prints: `a2-resumo-apos-reativar.png`, `a2-configuracoes-apos-reativar.png`, `a2-pre-pagamento-desativado.png`.

### Caminho 2: "Alterar quem paga"

Passo 1 (Introdução): motivo "Outro", Avançar. Passo 2 (Confirmação), texto exato:

> Verifique as seguintes implicações
>
> Para alterar quem paga, crie ou atribua um perfil para pagamentos à sua conta do Google Ads.
>
> Só é possível mudar essa configuração uma vez.
>
> - Conclua a verificação do anunciante
> - Seu histórico de faturamento vai ficar disponível na página "Transferências de faturamento"
> - Seu limite mínimo de pagamento pode ser diferente do valor atual
> - Em alguns casos, os tributos cobrados e os documentos recebidos podem variar
>
> ☐ Estou ciente das implicações acima e quero prosseguir

Parado aqui, sem marcar a caixa ("Avançar" fica desativado até marcá-la). Print: `a2-alterar-quem-paga-passo2.png`.

## 02/11/2026: Pix de R$ 600,00 em pós-pagamento

- "Mudar para pré-pagamento" continua desativado em 02/11, com a mesma mensagem. Outubro aparece como "O mês ainda está sendo processado" (documentos até o 2º dia útil de novembro). Print: `a3-pre-pagamento-ainda-desativado-2026-11-02.png`.
- Decisão do Dr. Lauro, comunicada pelo Lucas: pagar R$ 600,00 por Pix ("Fazer um pagamento opcional") com a conta ainda em **pós-pagamento**, e rodar a campanha em 3 ciclos de 10 dias para validar as configurações. Isso diverge da ordem de 29/10 (pagamento só em pré-pagamento manual, campanha de 30 dias).
- Atividade de faturamento, 2 de nov.: "Pagamento manual: Pix", -R$ 600,00. Resumo: "Você tem crédito R$ 600,00", "Sem pagamentos futuros". Prints: `a3-pix-600-atividade.png`, `a3-resumo-credito-600.png` (código Pix e dados de cartão mascarados).
- Risco: em pós-pagamento, os anúncios não param quando o crédito acaba; o gasto excedente vira cobrança no fechamento do mês (ou ao chegar a R$ 1.200,00), e não há forma de pagamento cadastrada. O teto de gasto passa a depender só da campanha (orçamento e data de término).
