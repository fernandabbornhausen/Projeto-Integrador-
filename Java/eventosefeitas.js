document.getElementById('search-button').addEventListener('click', function() {
    const procurar = document.getElementById('buscar').value.toLowerCase();
    const eventos = document.querySelectorAll('.evento');
    let found = false;

    eventos.forEach(cidade => {
        const cidadeNome = cidade.getAttribute('data-city').toLowerCase();

        if (cidadeNome.includes(procurar)) {
            cidade.classList.remove('hidden'); // Mostra a cidade correspondente
            found = true;
        } else {
            cidade.classList.add('hidden'); // Esconde a cidade que não corresponde
        }
    });

    const noResults = document.getElementById('no-results');
    if (!found && procurar !== '') {
        noResults.style.display = 'block'; // Mostra a mensagem de "Nenhum resultado"
    } else {
        noResults.style.display = 'none'; // Esconde a mensagem de "Nenhum resultado"
    }
});
