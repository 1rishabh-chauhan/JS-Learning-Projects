const gameBoard = document.querySelector('#gameboard');
const playerDisplay = document.querySelector('#player');
const infoDisplay = document.querySelector('#info-display');
const width = 8
let playerGo = 'black';
playerDisplay.textContent = 'black';
const startPieces = [ 
    rook, knight ,bishop, queen ,king , bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight ,bishop, queen ,king , bishop, knight, rook,
]

function createBoard(){
    startPieces.forEach((startPiece,i)=>{
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece

        //adding draggable feature to peices 
        square.firstChild?.setAttribute('draggable',true)

        square.setAttribute('square-id', i)
        const row = Math.floor((63-i)/8)+1
        if (row%2 === 0) {
            square.classList.add(i % 2 === 0 ? "beige" : "brown")
        }else{
            square.classList.add(i % 2 === 0 ? "brown" : "beige")
        }
        if(i<=15) {
            square.firstChild.firstChild.classList.add('black')
        }
        if(i>=48){
            square.firstChild.firstChild.classList.add('white')
        }
        gameBoard.appendChild(square)
    })

}
createBoard()
let startPositionID
let draggedElement

const allSquares = document.querySelectorAll("#gameboard .square")
allSquares.forEach(square =>{
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

function dragStart(e){
    startPositionID = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target
    
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
        e.stopPropagation()
        console.log(e.target);
        const correctGo = draggedElement.firstChild.classList.contains(playerGo)
        const taken= e.target.classList.contains('piece')
        const valid = checkIfValid(e.target)
        const opponentGo = (playerGo === 'white') ? 'black' : 'white'
        const takenByOpponent= e.target.firstChild?.classList.contains(opponentGo)
         if (correctGo){
            //must check this first
            if(takenByOpponent && valid){
                e.target.parentNode.append(draggedElement)
                e.target.remove()
                changePlayer()
                return
            }
            // then check this
            if(taken &&!takenByOpponent){
                infoDisplay.textContent = "You cannot go here."
                setTimeout(()=>{infoDisplay.textContent = ""},2000)
                return
            }
            if (valid){
                e.target.append(draggedElement)
                console.log("valid")
                changePlayer()
                return
            }
         }
        
        
       // changePlayer()
        
}

function checkIfValid(target){
    const targetId = +(target.getAttribute('square-id')) || +(target.parentNode.getAttribute('square-id'))
    const startId = +startPositionID
    const piece = draggedElement.id
    console.log(targetId);
    console.log(startId);
    console.log(piece);

    switch(piece){
        case 'pawn' :
            const starterRow = [8,9,10,11,12,13,14,15]
            if(
                starterRow.includes(startId) && startId + width === targetId || startId +width === targetId
                ){
                    return true
            }
    }

}
``


function changePlayer(){
    if(playerGo === 'black'){
        reverseIds()
        playerGo = 'white'
        playerDisplay.textContent = 'white'
    }else{
        revertIds()
        playerGo = 'black'
        playerDisplay.textContent = 'black'
    }
}
function reverseIds(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>
            square.setAttribute('square-id',(width*width -1)-i)
        )
}
function revertIds(){
    const allSquares = document.querySelectorAll(".square")
    allSquares.forEach((square, i) =>
            square.setAttribute('square-id',i)
        )
}