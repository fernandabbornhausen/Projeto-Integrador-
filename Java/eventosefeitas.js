document.getElementById('search-button').addEventListener('click', function() {
    const procurar = document.getElementById('buscar').value.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '');  
    const eventos = document.querySelectorAll('.evento');
    let found = false;

    eventos.forEach(cidade => {
        const cidadeNome = cidade.getAttribute('data-city').toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        if (cidadeNome.includes(procurar)) {
            cidade.classList.remove('hidden');
            found = true;
        } else {
            cidade.classList.add('hidden');
        }
    });

    const noResults = document.getElementById('no-results');
    if (!found && procurar !== '') {
        noResults.style.display = 'block'; 
    } else {
        noResults.style.display = 'none';
    }
});
