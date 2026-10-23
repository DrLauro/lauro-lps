# Pipeline State — Lauro Neto Advocacia — 13 Landing Pages

Controla ordem de execução dos agentes pra construção do projeto do zero. Mantido pelo subagente `orquestrador`. Ver "Orquestração com gate de aprovação" no CLAUDE.md.

| Etapa | Agente | Status | Aprovado em |
|---|---|---|---|
| 1 | product-strategist | aprovado (escopo/KPIs vêm prontos nos CONTEXT.md, seção 1) | 2026-10-17 |
| 2 | business-analyst | em-revisão (`01-requisitos/plano-de-copy.md`; sugestões aguardam Dr. Lauro) | |
| 3 | ux-ui-designer | em-revisão (direção de arte, tokens, crítica Gemini aplicada) | |
| 3 | tech-lead | em-revisão (`03-arquitetura/stack-e-decisoes.md`) | |
| 4 | project-manager | pendente | |
| 5 | software-engineer | em-revisão (13 páginas no preview) | |
| 6 | qa-engineer | pendente (Lighthouse, GTM, teste de pesquisa aprimorada) | |
| 7 | devops-engineer | em-andamento (preview no ar: https://drlauro.github.io/lauro-lps/ — produção em https://lauro.adv.br desde 23/10; repo na conta DrLauro) | |

Status possíveis: pendente / em-andamento / em-revisão / aprovado / bloqueado.

Nota: etapas 1–5 feitas na thread principal (sem spawn de subagente) porque os contextos já trazem escopo, SEO e texto aprovados — o pipeline completo seria custo sem ganho.
