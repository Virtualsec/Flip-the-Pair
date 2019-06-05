const cards = document.querySelectorAll('.main-card');
let hasflippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcard(){
    this.classList.toggle('flip'); 

    if(!hasflippedCard){
        //first card clicked
        hasflippedCard = true;
        firstCard = this;
    }else{
        //second card clicked
        hasflippedCard = false;
        secondCard = this;
     
        matchCard();  
    }
}
 
function matchCard(){  
    //Cards Matched
    if(firstCard.dataset.img === secondCard.dataset.img){
        removeFlip();
    }else{
    //Cards not Matched
        addFlip();
    }
}

function removeFlip(){
    firstCard.removeEventListener('click',flipcard);
    secondCard.removeEventListener('click',flipcard);
}

function addFlip(){
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        },1500);
}


cards.forEach(card => card.addEventListener('click',flipcard));