document.addEventListener('DOMContentLoaded',()=>
{
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentplayer = document.querySelector('#current-player')
    let currentPlayer = 1;

    const winnningArrays=[
        // Horizontal
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
        [42, 43, 44, 45], [43, 44, 45, 46], [44, 45, 46, 47], [45, 46, 47, 48],
        
        // Vertical
        [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [21, 28, 35, 42],
        [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [22, 29, 36, 43],
        [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [23, 30, 37, 44],
        [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [24, 31, 38, 45],
        [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [25, 32, 39, 46],
        [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [26, 33, 40, 47],
        [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [27, 34, 41, 48],
    
        // Diagonal (top-left to bottom-right)
        [0, 8, 16, 24], [1, 9, 17, 25], [2, 10, 18, 26], [3, 11, 19, 27],
        [7, 15, 23, 31], [8, 16, 24, 32], [9, 17, 25, 33], [10, 18, 26, 34],
        [14, 22, 30, 38], [15, 23, 31, 39], [16, 24, 32, 40], [17, 25, 33, 41],
        [21, 29, 37, 45], [22, 30, 38, 46], [23, 31, 39, 47], [24, 32, 40, 48],
    
        [6, 12, 18, 24], [5, 11, 17, 23], [4, 10, 16, 22], [3, 9, 15, 21],
        [13, 19, 25, 31], [12, 18, 24, 30], [11, 17, 23, 29], [10, 16, 22, 28],
        [20, 26, 32, 38], [19, 25, 31, 37], [18, 24, 30, 36], [17, 23, 29, 35],
        [27, 33, 39, 45], [26, 32, 38, 44], [25, 31, 37, 43], [24, 30, 36, 42]
    ];;
    function checkBoard(){
        for(let y = 0;y < winnningArrays.length;y++){
            const square1 = squares[winnningArrays[y][0]]
            const square2 = squares[winnningArrays[y][1]]
            const square3 = squares[winnningArrays[y][2]]
            const square4 = squares[winnningArrays[y][3]]
        
        //check those squares to see if they all have the class of player-blue
            if(
                square1.classList.contains('player-blue')&&
                square2.classList.contains('player-blue')&&
                square3.classList.contains('player-blue')&&
                square4.classList.contains('player-blue'))
                {
                    result.innerHTML = 'Blue Wins'
                }
            //check those squares to see if they all have the class of player-red
            if(
                square1.classList.contains('player-red')&&
                square2.classList.contains('player-red')&&
                square3.classList.contains('player-red')&&
                square4.classList.contains('player-red'))
                {
                    result.innerHTML = 'Red Wins'
                }
            }
    }
    for(let i =0; i < squares.length;i++){
        squares[i].onclick = ()=>{
        //If the square below your current square is taken, you can go on top of it
        if(squares[i+7].classList.contains('taken')&& !squares[i].classList.contains('taken')){
            if (currentPlayer == 1){
                squares[i].classList.add('taken')
                squares[i].classList.add('player-blue')
                currentPlayer = 2
                displayCurrentplayer.textContent = 'Red'
            }
            else if(currentPlayer == 2){
                squares[i].classList.add('taken')
                squares[i].classList.add('player-red')
                currentPlayer = 1
                displayCurrentplayer.textContent = 'Blue'
            }
            
        }
        else alert('can\'t go here')
        checkBoard()
    }
    }
})