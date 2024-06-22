function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`)
    let img = gameClicado.querySelector('.dashboard__item__img')
    let btn = gameClicado.querySelector('.dashboard__item__button')

    if(btn.classList.contains('dashboard__item__button--return')){
        btn.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        btn.innerText = 'Alugar'
    } else {
        btn.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        btn.innerText = 'Devolver'
    }
}