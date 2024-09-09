
const board = Array(9).fill('');
let player = 0;
const symbols = [String.fromCodePoint(0x2B55), String.fromCodePoint(0x274C)];
let gameOver = false;


function handleMove(position){
    if(!gameOver){    
        if (board[position] === '') {
            board[position] = symbols[player];

            gameOver = checkWinner();

            player = (player === 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}
