# Stack e decisões

_Dono: `tech-lead`._

- **Astro 5 (SSG), zero JS de UI.** Único JS é o push no `dataLayer` (seção 7 dos contextos). FAQ com `<details>`.
  Astro 6 exige Node ≥ 22.22; a máquina local tem 22.17 — fixado em 5 até atualizar o Node.
- **Uma rota para 13 páginas:** `src/pages/[slug].astro`. O conteúdo vem direto de `contexts/*.CONTEXT.md` via `src/lib/contexts.mjs`. Não há copy duplicada no código: o Dr. Lauro aprova um contexto, o build reflete.
- **Checagem:** `npm run check` (`scripts/check-contexts.mjs`) garante 13 páginas, H1/title/description/canonical coerentes, links de WhatsApp válidos e FAQ idêntico ao JSON-LD. Roda no CI antes do build.
- **SEO/IA:** JSON-LD do contexto injetado como está; `@astrojs/sitemap`; `/robots.txt` liberando Googlebot, Bingbot, OAI-SearchBot e PerplexityBot; `/llms.txt` com as 13 páginas.
- **GTM:** `PUBLIC_GTM_ID` (variável de ambiente). Sem ela o `dataLayer` funciona, só não há container.
- **Trustindex:** widget `22e5e6684c16295dc426ea16e8b` (só nota e total de avaliações, sem textos de depoimento); plano em decisão, ver `docs/08-status/status-atual.md`.
- **Índice `/`:** lista as 13 áreas para revisão. Em produção vira `/especialidades/` (referenciada no breadcrumb do JSON-LD).
