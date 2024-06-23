let pista = 100;
let superior = 200;
let inferior = 400;

function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;

    console.log(ingresso)
    
    if(ingresso == 'pista'){
        if(pista >= qtd){
            pista = pista - qtd;
            document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${pista}</span>`
        } else {
            alert('Quantidade de ingressos indisponivel.')
        }
    } else if (ingresso == 'inferior'){
        if (inferior >= qtd){
            inferior = inferior - qtd;
            document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-inferior">${inferior}</span>`
        } else {
            alert('Quantidade de ingressos indisponivel.')
        }
    } else {
        if (superior >= qtd){
            superior = superior - qtd;
            document.getElementById('qtd-superior').innerHTML = `<span id="qtd-superior">${superior}</span>`
        } else {
            alert('Quantidade de ingressos indisponivel.')
        }
    }
}