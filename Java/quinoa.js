const ingredientesPT = [
    "1 xícara de quinoa cozida",
    "1 abacate maduro, cortado em cubos",
    "1 xícara de tomates cereja, cortados ao meio",
    "1 pepino médio, cortado em cubos",
    "1/4 de xícara de coentro fresco picado",
    "Suco de 1 limão",
    "2 colheres de sopa de azeite de oliva",
    "Sal e pimenta a gosto"
];

const ingredientesEN = [
    "1 cup cooked quinoa",
    "1 ripe avocado, diced",
    "1 cup cherry tomatoes, halved",
    "1 medium cucumber, diced",
    "1/4 cup chopped fresh cilantro",
    "Juice of 1 lime",
    "2 tablespoons olive oil",
    "Salt and pepper to taste"
];

const instrucoesPT = `
    Em uma tigela grande, misture a quinoa cozida, o abacate, os tomates cereja, o pepino e o coentro.
    Em um pequeno recipiente, misture o suco de limão, o azeite de oliva, o sal e a pimenta. 
    Despeje sobre a salada e misture bem.
    Sirva imediatamente ou leve à geladeira por 30 minutos para esfriar antes de servir.
    Esta salada é leve, refrescante e cheia de nutrientes.
`;

const instrucoesEN = `
    In a large bowl, combine the cooked quinoa, avocado, cherry tomatoes, cucumber, and cilantro.
    In a small container, mix the lime juice, olive oil, salt, and pepper. 
    Pour over the salad and toss well.
    Serve immediately or refrigerate for 30 minutes to chill before serving.
    This salad is light, refreshing, and full of nutrients.
`;

function changeLanguage(language) {
    const ingredientesElement = document.getElementById('ingredientes');
    const instrucoesElement = document.getElementById('instrucoes');

    if (language === 'en') {
        ingredientesElement.innerHTML = ingredientesEN.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesEN.trim();
    } else {
        ingredientesElement.innerHTML = ingredientesPT.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesPT.trim();
    }
}
