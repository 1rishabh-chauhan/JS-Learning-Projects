const grid = document.querySelector('.grid');
const resultDisplay= document.querySelector('#result-display')
let currentShooterIndex = 202;
let width = 15
let direction = 1
let invadersID
let movingRight = true;
let aliensRemoved = []
let result = 0
//construction of squares inside grid and con
for (let i = 0; i < 225; i++){
    const square = document.createElement('div');
    grid.appendChild(square);    
}
const squares =Array.from(document.querySelectorAll('.grid div'))

//alien Ivaders array
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]
function draw(){
    for(let i = 0; i < alienInvaders.length; i++){
        if(!aliensRemoved.includes(i))
        squares[alienInvaders[i]].classList.add('invader')

    }
}
draw()
function remove(){
    for(let i = 0; i<alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.remove('invader')
    }
}
//add a shooter at current Shooter index
squares[currentShooterIndex].classList.add('shooter')

//move shooter and check for edge collision
function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter');
    switch(e.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !== 0){
            currentShooterIndex -=1
            }
            break;
        case 'ArrowRight':
            if(currentShooterIndex % width < width-1){
                currentShooterIndex +=1
            }
            break;        
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown',moveShooter)
//auto move invadere
function moveInvaders(){
    const checkLeftEdge = alienInvaders[0] % width === 0;
    const checkRightEdge = alienInvaders[alienInvaders.length-1]%width === width-1;
    remove()
    //condition for edge collision fpr invaders, in which case they are moving downwards
    //by one step and changing direction
    if(checkRightEdge &&  movingRight ){
        for(let i = 0; i< alienInvaders.length;i++){
            alienInvaders[i] +=width +1;
            direction = -1;
            movingRight = false
        }

    }
    if(checkLeftEdge && !movingRight ){
        for(let i = 0; i< alienInvaders.length;i++){
            alienInvaders[i] +=width -1;
            direction = 1;
            movingRight = true
        }

    }
    //movement until an edge is encountered
    for(let i = 0; i< alienInvaders.length;i++){
        alienInvaders[i] +=direction;
    }
    //reconstruction of alien Invaders after imposoing the new values
    draw()
    //check for loose,
    if (squares[currentShooterIndex].classList.contains('invader','shooter')){
    resultDisplay.innerHTML = "Game over";
    clearInterval(invadersID)
    }
    //condition to check if the alien Invaders hit the bottom of the grid


    //win condition
    if(aliensRemoved.length === alienInvaders.length){
        resultDisplay.innerHTML = "You Win";
        clearInterval(invadersID)
    }
}

invadersID = setInterval(moveInvaders,500);

//shoot aliens
function shoot(e){
    let laserId
    let currentLaserIndex = currentShooterIndex;
    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser');
        if(squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.add('boom');
            setTimeout(()=>squares[currentLaserIndex].classList.remove('boom'),300)
            clearInterval(laserId)
            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
            aliensRemoved.push(alienRemoved)
            result++
            resultDisplay.textContent = result;
            

        }
    }
    switch(e.key)
        {
            case 'ArrowUp':
                laserId = setInterval(moveLaser,100)
        }
}
document.addEventListener('keydown',shoot)