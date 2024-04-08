let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg");

let userResult = document.querySelector("#user-score");
let compResult = document.querySelector("#comp-score");

const genComputerhoice= ()=>{
    const options = ["rock","paper","scissors"];
    const rand= Math.floor(Math.random()*3);
    return options[rand];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Its a Draw, Play again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,computerChoice) =>{
    if (userWin===true) {
        console.log("user won");
        msg.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;

    } else {
        console.log("user lost")
        msg.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;


    }
}
const playGame = (userChoice) => {
    console.log(userChoice +` was clicked`);
    const computerChoice = genComputerhoice();
    console.log('computer choice is '+computerChoice)
    if (userChoice === computerChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice=== "paper"?false:true;
        } else if(userChoice==="paper"){
            userWin = computerChoice === "scissors"?false:true;
        }
        else{
            userWin = computerChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
    userResult.innerText = userScore;
    compResult.innerText = compScore;
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("Id");
        playGame(userChoice);
    });
});