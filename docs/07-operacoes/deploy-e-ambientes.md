# Deploy e ambientes

_Dono: `devops-engineer`._

| Ambiente | URL | Como |
|---|---|---|
| Preview | GitHub Pages (`https://lcoutinho7.github.io/lauro-lps/`) | Push em `main` → `.github/workflows/pages.yml` (check + build com `SITE`/`BASE`) |
| Produção | `https://lauro.adv.br/` | Mesmo build sem `SITE`/`BASE` (padrão = lauro.adv.br). Hospedagem a definir |

Fora de `lauro.adv.br` toda página sai com `noindex, nofollow` e o canonical aponta para o domínio final — o preview não concorre com o site no Google.

Local: `npm run dev` · `npm run check` · `npm run build`. No Git Bash, prefixe `MSYS_NO_PATHCONV=1` ao passar `BASE=/…/`.
