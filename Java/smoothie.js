const ingredientesSmoothiePT = [
    "1 banana madura",
    "1 xícara de espinafre fresco",
    "1/2 abacate maduro",
    "1/2 xícara de leite de amêndoas (ou outro leite vegetal de sua preferência)",
    "1 colher de sopa de sementes de chia (opcional, para mais fibras e ômega-3)",
    "Mel ou adoçante a gosto (opcional)"
];

const ingredientesSmoothieEN = [
    "1 ripe banana",
    "1 cup fresh spinach",
    "1/2 ripe avocado",
    "1/2 cup almond milk (or other plant-based milk of your choice)",
    "1 tablespoon chia seeds (optional, for extra fiber and omega-3)",
    "Honey or sweetener to taste (optional)"
];

const instrucoesSmoothiePT = `
    Coloque todos os ingredientes no liquidificador.
    Bata até obter uma mistura homogênea e cremosa.
    Prove e ajuste o adoçante, se necessário.
    Despeje em um copo e sirva imediatamente. Este smoothie é uma excelente maneira de começar o dia com energia e nutrientes.
`;

const instrucoesSmoothieEN = `
    Place all ingredients in a blender.
    Blend until smooth and creamy.
    Taste and adjust sweetener if needed.
    Pour into a glass and serve immediately. This smoothie is a great way to start the day with energy and nutrients.
`;

function changeLanguageSmoothie(language) {
    const ingredientesElement = document.getElementById('ingredientes');
    const instrucoesElement = document.getElementById('instrucoes');

    if (language === 'en') {
        ingredientesElement.innerHTML = ingredientesSmoothieEN.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesSmoothieEN.trim();
    } else {
        ingredientesElement.innerHTML = ingredientesSmoothiePT.map(ing => `<h5>${ing}</h5>`).join('');
        instrucoesElement.textContent = instrucoesSmoothiePT.trim();
    }
}
