const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");

const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
let hitposition= 0;
let result = 0;
let currentTime = 30;
let timerId = null;


function randomSquare(){
    squares.forEach((square)=>{
        square.classList.remove('mole');
    });
    let randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole');

    hitposition =randomPosition.id

}
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if (square.id == hitposition)
        {
            result++; 
            score.textContent = result;
            hitposition = null;
        }
    });
});

function moveMole(){
    timerId = setInterval(randomSquare,500)

}

moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timerId)
        alert("Game Over");
        alert("Your final Score is "+result)
    }

}

let countDownTimerId = setInterval(countDown,1000)