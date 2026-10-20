# Deploy e ambientes

_Dono: `devops-engineer`._

| Ambiente | URL | Como |
|---|---|---|
| Preview | GitHub Pages (`https://lcoutinho7.github.io/lauro-lps/`) | Push em `main` → `.github/workflows/pages.yml` (check + build com `SITE`/`BASE`) |
| Produção | `https://lauro.adv.br/` | Mesmo build sem `SITE`/`BASE` (padrão = lauro.adv.br). Hospedagem a definir |

Fora de `lauro.adv.br` toda página sai com `noindex, nofollow` e o canonical aponta para o domínio final — o preview não concorre com o site no Google.

Local: `npm run dev` · `npm run check` · `npm run build`. No Git Bash, prefixe `MSYS_NO_PATHCONV=1` ao passar `BASE=/…/`.

## Situação atual de lauro.adv.br (verificado 2026-10-19)

- Domínio registrado no registro.br, com DNS delegado para a Hostinger (`helios`/`aster.dns-parking.com`).
- O site atual é WordPress na Hostinger (LiteSpeed, `platform: hostinger`).
- **O e-mail também está na Hostinger** (MX `mx1`/`mx2.hostinger.com`). Qualquer troca de DNS precisa recriar os registros MX, SPF, DKIM e DMARC antes de mudar os nameservers. Cancelar o plano da Hostinger pode derrubar o e-mail.

### Registros de e-mail a preservar na troca de DNS (lidos do DNS público em 2026-10-20)

| Tipo | Nome | Valor |
|---|---|---|
| MX | `@` | `mx1.hostinger.com` (prioridade 5) |
| MX | `@` | `mx2.hostinger.com` (prioridade 10) |
| TXT | `@` | `v=spf1 include:_spf.mail.hostinger.com ~all` |
| TXT | `_dmarc` | `v=DMARC1; p=none` |
| CNAME | `hostingermail-a._domainkey` | `hostingermail-a.dkim.mail.hostinger.com` |
| CNAME | `hostingermail-b._domainkey` | `hostingermail-b.dkim.mail.hostinger.com` |
| CNAME | `hostingermail-c._domainkey` | `hostingermail-c.dkim.mail.hostinger.com` |
| CNAME | `autodiscover` | `autodiscover.mail.hostinger.com` |
| CNAME | `autoconfig` | `autoconfig.mail.hostinger.com` |

No Cloudflare, os CNAME de e-mail ficam **sem proxy** (nuvem cinza). O e-mail continua dependendo do plano da Hostinger estar pago.
