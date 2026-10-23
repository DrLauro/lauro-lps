# Deploy e ambientes

_Dono: `devops-engineer`._

| Ambiente | URL | Como |
|---|---|---|
| Preview | GitHub Pages (`https://lcoutinho7.github.io/lauro-lps/`) | Push em `main` → `.github/workflows/pages.yml` (check + build com `SITE`/`BASE`) |
| Produção | `https://lauro.adv.br/` | Mesmo build sem `SITE`/`BASE` (padrão = lauro.adv.br). Cloudflare Worker `lauro-adv-br` (só estáticos, `wrangler.jsonc`), deploy a cada push em main por `.github/workflows/deploy.yml`. Endereço provisório: https://lauro-adv-br.lauro-adv.workers.dev |

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

## Cloudflare (2026-10-21)

- Conta `00728a10caf986579afe02eafff98ab8`, zona `29d97fdf2e119059170d105d6d83d017` (status pending até trocar os nameservers no registro.br).
- Nameservers a configurar no registro.br: `marty.ns.cloudflare.com` e `ziggy.ns.cloudflare.com`.
- Feito pela API: SSL Full (strict), Always Use HTTPS, subdomínio workers.dev `lauro-adv`, primeiro deploy do Worker.
- Token da API em `.env.cloudflare` (fora do git) e no secret `CLOUDFLARE_API_TOKEN` do GitHub. Validade até 2027-10-22; permissões: Workers Scripts, Zone Read, DNS, Zone Settings, Workers Routes, Single Redirect.
- DNS preparado (2026-10-21): registros de e-mail (MX, SPF, DMARC, DKIM hostingermail-a/b/c, autodiscover, autoconfig) em "DNS only"; A/AAAA antigos da Hostinger e o CNAME do www apagados; lauro.adv.br e www.lauro.adv.br ligados ao Worker como Custom Domains; regra de redirecionamento 301 de www para lauro.adv.br mantendo caminho e query string.
- Nameservers trocados no registro.br em 23/10/2026; zona ativa às 18:45 e certificado emitido minutos depois. T10 conferida no mesmo dia e `"workers_dev": false` publicado: o endereço workers.dev deixou de existir.

## Painel administrativo (23/10/2026)

- OAuth App "Lauro Neto — Painel do site" criado na conta GitHub **DrLauro** (app 3959127). Client ID `Ov23ctNRr69erUmJdfmZ` (público). Homepage `https://lauro.adv.br`, callback `https://auth.lauro.adv.br/callback`.
- Worker de login `lauro-cms-auth` publicado em `auth.lauro.adv.br` (custom domain, sem workers.dev). Código: https://github.com/sveltia/sveltia-cms-auth sem alteração; `wrangler.toml` com `account_id` da conta, `routes = [{ pattern = "auth.lauro.adv.br", custom_domain = true }]`, `workers_dev = false` e as variáveis `GITHUB_CLIENT_ID` e `ALLOWED_DOMAINS = "lauro.adv.br"`.
- Client secret: secret `GITHUB_CLIENT_SECRET` do Worker, gravado com `wrangler secret put` a partir da área de transferência (nunca em arquivo nem no chat).
- Falta: transferir o repositório `LCoutinho7/lauro-lps` para DrLauro, atualizar `repo:` em `public/admin/config.yml` e a URL do preview (Pages), e conferir que os secrets e a variável do Actions continuam no repositório.

## Variáveis de build (22/10/2026)

- `PUBLIC_ENV`: `production` no deploy da Cloudflare, `preview` no GitHub Pages. Só `preview` gera noindex; sem a variável o build é tratado como produção.
- `PUBLIC_GTM_ID`: variável do repositório (`vars.PUBLIC_GTM_ID`). Vazia = sem GTM e sem banner de cookies.
- O CI roda `npm run check:dist` antes do `wrangler deploy`: build que falha na verificação não vai ao ar.

## T10: publicação no domínio definitivo (passo a passo, depois da troca de nameservers)

1. Conferir que a zona saiu de "pending" (nameservers `marty`/`ziggy` ativos) e que `https://lauro.adv.br/` responde pelo Worker (os custom domains do apex e do www já existem).
2. Conferir o 301 de www para o domínio sem www (regra da Cloudflare), HTTPS obrigatório e ausência de loop.
3. Só então acrescentar `"workers_dev": false` no `wrangler.jsonc` e publicar. **Antes disso não**: o deploy desligaria o endereço de teste com o domínio ainda fora do ar.
4. Conferir pelo domínio: as 24 páginas, `/sitemap-index.xml`, `/sitemap-0.xml`, `/og-lauro.jpg`, `/robots.txt`, `/llms.txt` e uma URL inexistente com 404 personalizada.
5. Conferir a entrega de e-mail (MX da Hostinger preservados).
