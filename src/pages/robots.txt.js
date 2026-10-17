export const GET = ({ site }) =>
  new Response(
    ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot', '*']
      .map((ua) => `User-agent: ${ua}\nAllow: /\n`)
      .join('\n') +
      `\nSitemap: ${new URL(import.meta.env.BASE_URL.replace(/\/?$/, '/') + 'sitemap-index.xml', site)}\n`,
  );
