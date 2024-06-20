function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        while(sorteados.includes(numero)){
            numero = Math.floor(Math.random() * (ate - de + 1)) + de;
        }
        sorteados.push(numero);
    };
    
    document.getElementById('texto').innerHTML = `Números sorteados: ${sorteados}`;
    document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.add('container__botao');
};

function reiniciar(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('texto').innerHTML = `Números sorteados:`;
    document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
    document.getElementById('btn-reiniciar').classList.remove('container__botao');
    sorteados = [];
}