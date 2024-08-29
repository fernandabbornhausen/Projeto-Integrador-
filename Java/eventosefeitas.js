document.getElementById('search-button').addEventListener('click', 
    function(){
    const procurar = document.getElementById('buscar').value.toLowerCase();
    const eventos = document.querySelectorAll('.evento');
    let found = false;
    const hidden = cidade.classList.remove('hidden');

    eventos.forEach(cidade => {
        const cidadeNome = cidade.getAttribute('data-city').toLowerCase();

        if(cidadeNome.includes(procurar)) {
            hidden = true;
            //cidade.style.display= 'block';
            found = true;
        }
        else {
            cidade.classList.add('hidden');
            //cidade.style.display = 'none';
        }
    });

    const noResults = document.getElementById('no-results');
    if (!found && procurar !== '') {
        noResults.style.display = 'block';
    }
    else {
        noResults.style.display = 'none';
    }
});