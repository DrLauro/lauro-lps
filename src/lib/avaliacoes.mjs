// Nota e total de avaliações do Perfil da Empresa no Google, lidos no build pela Places API (New).
// O contexto proíbe digitar a nota à mão. Sem GOOGLE_PLACES_KEY ou com erro na API, devolve null
// e a faixa de prova mostra só "Avaliações no Google".
const PLACE_ID = 'ChIJuQs39gX_zpQRL9a8M45ssfE';

let pedido;
export function avaliacoesGoogle() {
  const chave = process.env.GOOGLE_PLACES_KEY;
  if (!chave) return Promise.resolve(null);
  pedido ??= fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: { 'X-Goog-Api-Key': chave, 'X-Goog-FieldMask': 'rating,userRatingCount' },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
    .then((d) => (d.rating && d.userRatingCount ? { nota: d.rating, total: d.userRatingCount } : null))
    .catch((e) => {
      console.warn(`[avaliacoes] Places API indisponível (${e.message}); faixa sem a nota.`);
      return null;
    });
  return pedido;
}
