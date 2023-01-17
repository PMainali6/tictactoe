// start of the tic-tac-toe logic

const restartBtn = document.getElementById('restartBtn');
const gameBoard = document.getElementById('gameboard');
const playerText = document.getElementById('playerText');
const X = "X";
const O = "O";
const spaces = Array(9).fill(null);
let currentPlayer = X;
let count = 0;
const boxes = Array.from(document.getElementsByClassName('box'));
let winningResult = null;
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const togglePlayer = () => {
    currentPlayer = currentPlayer === X ? O : X;
}

const playerWon = () => {
    if(count <= 4) {
        return false;
    } else {
       for(let combo of winningCombo) {
            const [a,b,c] = combo;

            if(spaces[a] && spaces[b] && spaces[c] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])) {
                return [a,b,c];
            }
       }
        return false
    }
}

gameBoard.addEventListener('click', (e) => {
    count += 1;
    const id = e.target.id;

    if(spaces[id]) {
       return;
    } else {
        spaces[id] = currentPlayer;
        e.target.innerHTML = currentPlayer;

        const result = playerWon();
        if(result !== false) {
            playerText.innerHTML = `${currentPlayer} has won`
            winningResult = result;
            winningResult.forEach(id => {
                boxes[id].classList.add('winning-highlights'); 
            })
        }

        togglePlayer();
    }
}, false)

restartBtn.addEventListener('click', () => {
    playerText.innerHTML = 'Tic Tac Toe'
    boxes.forEach(box => {
        box.innerHTML = ''
    })
    winningResult.forEach(id => {
        boxes[id].classList.remove('winning-highlights'); 
    })
    winningResult = null;
    count = 0;
    spaces.fill(null);
    togglePlayer();
})


// pie using input type

const pie = document.getElementById('pie');
const pieInput = document.getElementById('pie-input');

pieInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    pie.style = `--percentage: ${e.target.value}%`
});