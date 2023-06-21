let cardsArray = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

function comparador(){
    return Math.random() - 0.5;
}

cardsArray.sort(comparador);

let cardsQuant = 8;

let gameCards = cardsArray.slice(0,cardsQuant/2);
gameCards = gameCards.concat(gameCards).sort(comparador);

//alert(gameCards);
const cardsBox = document.querySelector(".cardsbox");
for(let i = 0; i < cardsQuant; i++){
    cardsBox.innerHTML += `<div class="card ${i}" onclick="openCard(this)"><img class="cardimage" src="assets/front.png"></div>`
}

function openCard(elemento){
    const test = elemento.classList.toString();
    alert(test[test.length - 1]);
}