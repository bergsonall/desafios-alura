let i = 0;
let lista = [];

function adicionar(){
    let nome = document.getElementById('nome-amigo').value.toUpperCase();
    let listaAmigos = document.getElementById('lista-amigos');

    if(lista.includes(nome)){
        alert('Este nome ja esta presente na lista! Por favor, digite outro nome.')
        return;
    }
    lista.push(nome);
    document.getElementById('nome-amigo').value = '';
    if(nome == ''){
        alert('Digite um nome para adicionar a lista.');
        return;
    }
    if(listaAmigos.textContent == ''){
        document.getElementById('lista-amigos').textContent = `${nome}`;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nome;
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear(){
    if(lista.length < 4){
        alert('Adicione pelo menos 4 participantes para concluir o sorteio.');
        return;
    }
    embaralha(lista);
    while(i < lista.length-1){
        document.getElementById('lista-sorteio').innerHTML += `<p id="lista-sorteio">${lista[i]} -> ${lista[i+1]}</p>`;
        i++;
    }
    document.getElementById('lista-sorteio').innerHTML += `<p id="lista-sorteio">${lista[i]} -> ${lista[0]}</p>`;
    console.log(lista);
    lista = [];
}

function reiniciar(){
    i = 0;
    lista = [];
    document.getElementById('lista-amigos').innerHTML = '<p id="lista-amigos"></p>';
    document.getElementById('lista-sorteio').innerHTML = '<p id="lista-sorteio"></p>';
}