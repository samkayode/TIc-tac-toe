window.onload = function(){
const board = document.getElementById("board")
const cells = document.querySelectorAll(".cell");
const status = document.getElementById('status');
const reset = document.getElementById("reset");


let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;


function checkWin(){
    const winPatterns =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        gameActive = false;
        status.innerText = `${currentPlayer} wins!`;
        return;
    }
}

if (!gameBoard.includes('')) {
    gameActive = false;
    status.innerText = "It's a draw!";
}

currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
status.innerText = `Player ${currentPlayer}'s turn`;
}
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameBoard[index] === '' && gameActive) {
            cell.innerText = currentPlayer;
            gameBoard[index] = currentPlayer;
            checkWin();
        }
    });
});
reset.addEventListener('click', () => {
    cells.forEach((cell, index) => {
        cell.innerText = '';
        gameBoard[index] = '';
    });
    gameActive = true;
    status.innerText = `Player ${currentPlayer}'s turn`;
});
}