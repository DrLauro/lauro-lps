// /admin/ é o editor do blog: fora dos buscadores.
export const GET = ({ site }) =>
  new Response(
    ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot', '*']
      .map((ua) => `User-agent: ${ua}\nAllow: /\n${ua === '*' ? 'Disallow: /admin/\n' : ''}`)
      .join('\n') +
      `\nSitemap: ${new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/') + 'sitemap-index.xml', site)}\n`,
  );
