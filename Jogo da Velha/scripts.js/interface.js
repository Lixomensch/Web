document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });
    
    const resetButton = document.getElementById('reset');
    if (resetButton) {
        resetButton.addEventListener('click', resetBoard);
    }
});

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("Vencedor: " + board[position])
        }, 10);
    }

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    if (symbol) {
        square.innerHTML = `<div class='symbol'>${symbol}</div>`;
    }
    
}

function resetBoard() {
    board.fill('');
    document.querySelectorAll('.square').forEach(square => {
        square.innerHTML = '';
    });
    gameOver = false;
    currentPlayer = 0;
}