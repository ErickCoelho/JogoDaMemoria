let cardsArray = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let cardOpened1;
let cardOpened2;
let cardsCheckQuantity = 0;
let click = 1;


function comparador(){
    return Math.random() - 0.5;
}

cardsArray.sort(comparador);

let cardsQuant = 0;

let gameCards = [];

function distributeCards(){
    cardsQuant = prompt("Com quantas cartas deseja jogar?\n(escolha um valor par entre 4 e 14)");
    const cardsBox = document.querySelector(".cardsbox");
    
    for(let i = 0; i < cardsQuant; i++){
        cardsBox.innerHTML += `<div class="card ${i}" onclick="openCard(this)"><img class="cardimage" src="assets/front.png"></div>`;
    }

    gameCards = cardsArray.slice(0,cardsQuant/2);
    gameCards = gameCards.concat(gameCards).sort(comparador);
}

//alert(gameCards);

function turnDownCards(){
    cardOpened1.innerHTML = `<img class="cardimage" src="assets/front.png">`;
    cardOpened2.innerHTML = `<img class="cardimage" src="assets/front.png">`;
}



function checkPair(){
    if(cardOpened1.innerHTML !== cardOpened2.innerHTML){
        setTimeout(turnDownCards,1000);
    }
    else{
        cardsCheckQuantity += 2;
        if(cardsCheckQuantity == cardsQuant) alert("YOU WIN!!!");
    }

    console.log("check pais");
    //if(cardsCheckQuantity === cardsQuant) alert("Fim de Jogo!");

}

function openCard(elemento){
    if(elemento.innerHTML == `<img class="cardimage" src="assets/front.png">`){

        const test = elemento.classList.toString();
        //alert(test[test.length - 1]);
        const num = parseInt(test[test.length - 1]);
        //alert(gameCards[num]);
        elemento.innerHTML = `<img class="cardimage turned" src="assets/${gameCards[num]}">`;

        
        console.log(elemento);

        if(click == 1) {
            cardOpened1 = elemento;
            console.log("cardOpened1 = " + cardOpened1.innerHTML);
            console.log("cardOpened2 = " + "Empty");
            click++;
        }
        else {
            cardOpened2 = elemento;
            click--;
            console.log("cardOpened1 = " + cardOpened1.innerHTML);
            console.log("cardOpened2 = " + cardOpened2.innerHTML);
            checkPair();
                /*if(cardOpened1.innerHTML !== cardOpened2.innerHTML){
                    cardOpened1.innerHTML = `<img class="cardimage" src="assets/front.png">`;
                    cardOpened2.innerHTML = `<img class="cardimage" src="assets/front.png">`;
                }
                else{
                    cardsCheckQuantity += 2;
                }*/
        }
        console.log("elemento = " + elemento.innerHTML);
        //alert(cardOpened1.innerHTML + cardOpened2.innerHTML);
    }
}


