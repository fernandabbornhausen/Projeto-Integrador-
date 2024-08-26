const ingredientesSalmãoPT = [
    "4 filés de salmão (cerca de 150g cada)",
    "Suco de 2 maracujás",
    "2 colheres de sopa de mel",
    "2 colheres de sopa de molho de soja",
    "2 dentes de alho picados",
    "Sal e pimenta a gosto",
    "2 colheres de sopa de azeite de oliva"
];

const ingredientesSalmãoEN = [
    "4 salmon fillets (about 150g each)",
    "Juice of 2 passion fruits",
    "2 tablespoons honey",
    "2 tablespoons soy sauce",
    "2 cloves garlic, minced",
    "Salt and pepper to taste",
    "2 tablespoons olive oil"
];

const instrucoesSalmãoPT = `
    Em uma tigela pequena, misture o suco de maracujá, o mel, o molho de soja, o alho picado, o sal e a pimenta. Reserve.
    Tempere os filés de salmão com sal e pimenta a gosto.
    Aqueça uma frigideira grande em fogo médio-alto. Adicione o azeite de oliva.
    Coloque os filés de salmão na frigideira e cozinhe por cerca de 4-5 minutos de cada lado, ou até que estejam cozidos conforme desejado.
    Reduza o fogo e despeje o molho de maracujá sobre o salmão. Cozinhe por mais 1-2 minutos, mexendo o molho delicadamente.
    Retire do fogo e sirva imediatamente, acompanhado de arroz integral ou legumes grelhados. O molho de maracujá adiciona um toque tropical delicioso ao salmão grelhado.
`;

const instrucoesSalmãoEN = `
    In a small bowl, mix the passion fruit juice, honey, soy sauce, minced garlic, salt, and pepper. Set aside.
    Season the salmon fillets with salt and pepper to taste.
    Heat a large skillet over medium-high heat. Add the olive oil.
    Place the salmon fillets in the skillet and cook for about 4-5 minutes on each side, or until cooked as desired.
    Reduce the heat and pour the passion fruit sauce over the salmon. Cook for an additional 1-2 minutes, stirring the sauce gently.
    Remove from heat and serve immediately, accompanied by brown rice or grilled vegetables. The passion fruit sauce adds a delicious tropical touch to the grilled salmon.
`;

function changeLanguageSalmão(language) {
    const ingredientesElement = document.getElementById('ingredientes');
    const instrucoesElement = document.getElementById('instrucoes');

    if (language === 'en') {
        ingredientesElement.innerHTML = ingredientesSalmãoEN.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesSalmãoEN.trim();
    } else {
        ingredientesElement.innerHTML = ingredientesSalmãoPT.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesSalmãoPT.trim();
    }
}
