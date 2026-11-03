# Ciclo 1, Etapa B: isolamento das campanhas antigas (02/11/2026)

Ordem de execução do ciclo 1 (02/11). Conta 741-973-2901.

## 1. Conversões antigas

As 15 continuam na conta; nenhuma foi removida.

| Ação | Antes | Depois |
|---|---|---|
| Ligação Extensão Criminal #1 | Principal | **Secundária** |
| Ligação Botão Criminal #1 | Principal | **Secundária** |
| Ligação Número Site Criminal #1 (status Removido) | Principal | **Secundária** |
| Clique Botão WhatsApp Criminal | Principal | **Secundária** |
| Calls from Smart Campaign Ads | Principal | Principal: ação do sistema (cadeado), sem "Editar configurações" |
| Smart campaign ad clicks to call | Principal | idem |
| Smart campaign map clicks to call | Principal | idem |
| Smart campaign map directions | Principal | idem |
| Business profile - Call / Form / Directions | Principal | idem |
| Clicks to call | Principal | "Otimização de ações: Não editável" |
| Local actions - Directions / Other engagements / Website visits | Principal | hospedadas pelo Google, mesmo tipo de "Clicks to call" (não editáveis) |

As 11 que ficaram principais são do sistema: vêm de campanhas inteligentes ou do Perfil da Empresa e não registram cliques nem chamadas de uma campanha de Pesquisa com as tags do site. Ajuste de 03/11: a campanha nova usa só a meta personalizada **"Leads Criminal C1"**, com as 3 ações novas (Site - WhatsApp (clique), Site - Telefone (clique), Anúncio - Chamada 60s). Contato e Lead telefônico não entram, então as 11 ações do sistema ficam fora da otimização e da coluna Conversões. Prints: `c1-d0-meta-leads-criminal-c1.png` (criação), `c1-e2-metas-campanha-leads-criminal-c1.png` e `c1-e4-metas-personalizadas.png` (meta com 3 ações e 1 campanha).

Print: `c1-b1-conversoes-antigas.png`.

## 2. Metas personalizadas

| Meta | Ações | Origem | Campanhas |
|---|---|---|---|
| Clique Botão Wsap Criminal LP1 | 1 | Site | 0 |
| Ligação Botão Telefonar Criminal #1 | 1 | Chamadas a partir de anúncios | 0 |
| Ligação pela Extensão Criminal #1 | 1 | Chamadas a partir de anúncios | 0 |

Nenhuma vai para a campanha nova. Print: `c1-b2-metas-personalizadas.png`.

## 3. Tag antiga "Lauro ADV - Criminal" (AW-11034973115, GT-WVXDJTBM)

- **Permitir recursos de dados fornecidos pelo usuário:** estava ligado, com "Detectar automaticamente dados enviados pelo usuário" e "E-mail" marcados. **Desligado e salvo.** Print: `c1-b3-tag-antiga-dados-usuario-off.png`.
- **Fluxo antigo do GA4 `G-WL6VECX5F6` ("Meu Negócio"):** retirado dos destinos. O Google só permite remover um destino transferindo-o para outra tag; foi criada a tag "Fluxo antigo GA4 Meu Negocio - sem uso", com configuração padrão, que não está instalada em lugar nenhum. A tag do fluxo novo `G-MMG8ZNG0P6` não foi tocada. Destinos agora: só "Dr. Lauro Almeida Neto" (AW-11034973115). Prints: `c1-b3-remover-fluxo-antigo-revisao.png`, `c1-b3-tag-antiga-destinos.png`.
- **Conversões otimizadas (Metas → Configurações de conversão):** continuam "Gerenciada pela tag do Google. Encontramos alguns problemas." Ao desmarcar "Ativar as conversões otimizadas", o botão Salvar fica desativado e a mudança não é gravada (testado duas vezes, com clique e com teclado). Na prática ficam sem fonte de dados, porque a coleta de dados fornecidos pelo usuário da tag foi desligada. Print: `c1-b3-conversoes-otimizadas-salvar-bloqueado.png`.
- **Evidência no script:** `gtag/js?id=AW-11034973115` baixado de novo em 02/11 (494.127 bytes):
  - `G-WL6VECX5F6`: 0 ocorrências (antes: presente);
  - `G-MMG8ZNG0P6`: 0 ocorrências;
  - `vtp_autoEmailEnabled` e `vtp_isAutoEnabled`: 0 ocorrências como configuração (antes: `vtp_autoEmailEnabled:true`); os nomes `user_data_auto_*` que restam são do código da biblioteca, não de configuração;
  - tags de configuração restantes: `__ogt_auto_events` e `__ogt_ads_datatos` com `"vtp_instanceDestinationId":"AW-11034973115"`.

## 4. Recursos de nível de conta

Só um recurso no nível de conta: **logotipo da empresa** (emblema dourado em fundo preto, de 10/07/2024, "Qualificada"). Nenhum nome da empresa, sitelink, frase de destaque, snippet, imagem, ligação, preço, promoção ou formulário no nível de conta, então não houve remoção. Decisão do Dr. Lauro (03/11): o logotipo sai. **Removido do nível de conta em 03/11** (print `c1-b4-logotipo-removido.png`). Na publicação da campanha nova, o Google vinculou o mesmo logotipo à campanha, e essa associação também foi removida (ver `c1-etapa-d-campanha.md`). Os demais recursos da lista estão ligados às campanhas removidas e não passam para a campanha nova. Print: `c1-b4-recursos-nivel-conta.png`.

## 5. Configurações da conta

| Item | Situação |
|---|---|
| Status da conta | Ativa |
| Aplicação automática de recomendações | Desativado (já estava) |
| Anúncios de alto engajamento | Desativado (já estava) |
| Lista de clientes: "Usar todos os segmentos… nas campanhas de Lances inteligentes ou de segmentação otimizada" | estava ligado; **desligado e salvo** |
| Listas de clientes com base em conversões | Desativadas (já estava) |
| Palavras-chave negativas da conta | Nenhuma |
| Codificação automática | Sim |
| Fuso horário | (GMT-03:00) Brasília |
| Recursos criados automaticamente | não existe opção no nível da conta; será desligado na campanha (Etapa D) |

Print: `c1-b5-configuracoes-conta.png`.

## 6. Verificação do anunciante

Adm. → Conta: declaração "Anúncios financiados por LAURO DE ALMEIDA NETO". Uma tarefa pendente, marcada como **Opcional**: "Responda a uma pergunta sobre quem paga pelos seus anúncios" (o Resumo de políticas a chama de "Confirmation of advertising funding source recommended"). Concluídas: perguntas sobre a organização (24/09/2025), telefone (09/04/2024) e anúncios políticos na UE (30/03/2026). Nada impede a veiculação. Print: `c1-b6-verificacao.png`.
