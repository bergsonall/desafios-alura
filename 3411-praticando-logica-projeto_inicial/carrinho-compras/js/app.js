let valorTotal = 1400;

function limpar(){
    document.getElementById('lista-produtos').textContent = ''
    document.getElementById('valor-total').textContent = ''
}

function adicionar(){
    let produto =  document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valorUni = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * valorUni;
    let carrinho  = document.getElementById('lista-produtos');
    let total = document.getElementById('valor-total');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    valorTotal = valorTotal + subTotal;    
    total.textContent = `R$${valorTotal}`;

}