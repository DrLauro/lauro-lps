# Bugs conhecidos

## Abertos

- **Vínculo de 2 casos com a publicação não confirmado** (Execução Penal e Recursos). Os dois artigos do STJ têm temas parecidos e o Jusbrasil bloqueia leitura automática; o vínculo foi feito pelo resumo. Conferir no Jusbrasil. Ver `docs/08-status/status-atual.md`.
- **Endereço de teste indexável pelo HTML.** O workers.dev serve o mesmo build da produção (sem `<meta name="robots">`). Mitigado: `X-Robots-Tag: noindex` para o host do workers.dev em `public/_headers`, e canonical apontando para lauro.adv.br. Resolve de vez com `"workers_dev": false` na T10.

## Corrigidos na rodada de 22/10/2026

- Botão final e barra fixa das áreas enviavam a mensagem da primeira opção da triagem (ex.: acusado mandando "sou vítima"). Agora mensagem neutra com o nome da página.
- Serviços quebrados em etiquetas sem sentido ("Psicológica", "Inclusive cães e gatos"). O parser agora exige lista e falha o build com frase corrida.
- Título de artigo antigo no /blog/ com as iniciais da parte. `check:dist` passa a barrar iniciais e número de processo no texto visível.
- Cache de conteúdo do Astro mantinha artigo apagado quando a coleção ficava vazia (só local; o CI começa limpo). Build agora roda com `--force`.
- CLS de 0,36 na home (troca de fonte empurrava a triagem). Fontes do topo pré-carregadas: 0,01.
- Rolagem horizontal de 3 px no celular com o novo cabeçalho (marca sem encolher).
- Botões com atributo `hidden` continuavam visíveis (`.btn` vencia o `hidden`). Regra global.

## Verificações automáticas

- `npm run check`: coerência dos 20 CONTEXT.md (FAQ = JSON-LD, serviços em lista, Crimes Digitais × Golpes com no máximo 2 serviços iguais, publicações existentes).
- `npm run check:dist` (depois do build, também no CI antes do deploy): números e mensagens de WhatsApp, `data-secao` válido, canonical, noindex só no preview, sem "Attorney", 404 presente e fora do sitemap, aviso 190/180, link para vítimas, sem "(Caso publicado no Jusbrasil...)", sem dado identificável.
