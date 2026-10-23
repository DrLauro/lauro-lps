// Links de WhatsApp dos botões genéricos (fora da triagem, que usa os links dos CONTEXT.md).
// A mensagem não presume a situação de quem clica: só diz de onde a pessoa veio.
export const WHATSAPP = '5511970802600';

export const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const msgArea = (nomeDaPagina) =>
  `Olá, Dr. Lauro. Vim pelo site, na página ${nomeDaPagina}, e gostaria de atendimento sobre meu caso.`;
export const msgGeral = () => 'Olá, Dr. Lauro. Vim pelo site e gostaria de atendimento sobre meu caso.';
export const msgArtigo = (titulo) =>
  `Olá, Dr. Lauro. Li no site o artigo "${titulo}" e gostaria de atendimento sobre meu caso.`;

// Atributos de um botão de WhatsApp com medição (data-secao diz em que posição da página ele está).
export const waAttrs = (text, { area, situacao, secao }) => ({
  href: waLink(text), target: '_blank', rel: 'noopener',
  'data-track': 'whatsapp_click', 'data-area': area, 'data-situacao': situacao, 'data-secao': secao,
});
