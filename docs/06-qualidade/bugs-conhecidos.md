# Bugs conhecidos

## Abertos

Nenhum.

## Corrigidos em 23/10/2026 (T10)

- Endereço de teste (workers.dev) servia o mesmo build da produção. Desligado com `"workers_dev": false`; a regra de noindex dele saiu do `_headers`.

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
