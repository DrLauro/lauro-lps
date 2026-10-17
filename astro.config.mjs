import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Produção: https://lauro.adv.br/. Preview no GitHub Pages: SITE e BASE vêm do workflow.
export default defineConfig({
  site: process.env.SITE ?? 'https://lauro.adv.br',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
