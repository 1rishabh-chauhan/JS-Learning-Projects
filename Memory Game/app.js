const cardArray =[
{
    name:'fries',
    img:'images/fries.png'
},
{
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'ice-cream',
    img:'images/ice-cream.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name:'fries',
    img:'images/fries.png'
},
{
    name:'cheeseburger',
    img:'images/cheeseburger.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'ice-cream',
    img:'images/ice-cream.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
]
cardArray.sort(()=>0.5-Math.random());

const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.querySelector('#result');

let cardsChosen=[];
let cardsChosenIds=[];
const cardsWon =[];
function createBoard(){
    for(let i =0; i<12; i++)
    {
        const card =document.createElement('img');
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);
        
    }
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img');
    
    if(cardsChosenIds[0] == cardsChosenIds[1]){
        alert("clicked the same image like a bot")
    }
    else{
            if(cardsChosen[0] == cardsChosen[1]){
            //alert('we found a match')
            cards[cardsChosenIds[0]].setAttribute('src','images/white.png')
            cards[cardsChosenIds[1]].setAttribute('src','images/white.png')
            cards[cardsChosenIds[0]].removeEventListener('click',flipCard)
            cards[cardsChosenIds[1]].removeEventListener('click',flipCard)
            cardsWon.push(cardsChosen);
            
        }
        else{
            cards[cardsChosenIds[0]].setAttribute('src','images/blank.png')
            cards[cardsChosenIds[1]].setAttribute('src','images/blank.png')

        }
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length ==cardArray.length/2)
    {
        resultDisplay.textContent = 'Congratulations you won'
    }
}

function flipCard(i){
    
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);

    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }

    
}

