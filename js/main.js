/*----- constants -----*/

var playerLookup = {
    '1': 'red',
    '-1': 'yellow',
    'null': 'white',
};

var tieCounter = 0;
var isTie = false;

/*----- app's state (variables) -----*/
var beepAudio = new Audio('Lightsaber.mp3');
var beeptwo = new Audio('Electricity.mp3');

/*----- cached element references -----*/

var messageEl = document.querySelector('h3');
var boardEl = document.getElementById('board');

/*----- event listeners -----*/
document.getElementById('button0').addEventListener('click', handleDrop);
document.getElementById('button1').addEventListener('click', handleDrop);
document.getElementById('button2').addEventListener('click', handleDrop);
document.getElementById('button3').addEventListener('click', handleDrop);
document.getElementById('button4').addEventListener('click', handleDrop);
document.getElementById('button5').addEventListener('click', handleDrop);
document.getElementById('button6').addEventListener('click', handleDrop);

document.getElementById('replay').addEventListener('click', initialize);


/*----- functions -----*/
function handleDrop(event) {
    var target = event.target;
    if (target.tagName !== 'BUTTON' || winner) return;
    var columnNum = parseInt(target.id.charAt(6));
    if (!board[columnNum].includes(null)) return;
    var row = board[columnNum].indexOf(null);
    board[columnNum][row] = turn;
    turn *= -1;
    winner = getWinner();
    tieCounter++;
    if (tieCounter === 42) {
        isTie = true;
    }
    if (turn === 1) beepAudio.play();
    else beeptwo.play(); 
    render();
};

function initialize() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    winner = null;
    turn = 1;
    render();
};

function getWinner() {
    for (var colIdx = 0; colIdx < board.length; colIdx++) {
        for (var rowIdx = 0; rowIdx < board.length; rowIdx++) {
            if (board[colIdx][rowIdx] === null) break;
            winner = checkPosWin(colIdx, rowIdx);
            if (winner) break;
        }
        if (winner) break;
    }
    return winner;
}

function checkPosWin(colIdx, rowIdx) {
    winner = checkUp(colIdx, rowIdx);
    if (winner) return winner;
    winner = checkAcross(colIdx, rowIdx);
    if (winner) return winner;
    winner = checkVerticalup(colIdx, rowIdx);
    if (winner) return winner;
    winner = checkVerticaldown(colIdx, rowIdx);
    if (winner) return winner;


    // winner = checkVerticaldown(colIdx, rowIdx);
    // if (winner) return winner;

}
//stub up function-define// 
function checkUp(colIdx, rowIdx) {
    if (rowIdx > 2) return null;
    var total = Math.abs(board[colIdx][rowIdx] + board[colIdx][rowIdx + 1] + board[colIdx][rowIdx + 2] + board[colIdx][rowIdx + 3]);
    return (total === 4) ? board[colIdx][rowIdx] : null;
}

function checkAcross(colIdx, rowIdx) {
    if (colIdx > 3) return null;
    var total = Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx] + board[colIdx + 2][rowIdx] + board[colIdx + 3][rowIdx]);
    return (total === 4) ? board[colIdx][rowIdx] : null;
};

function checkVerticalup(colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx > 2) return null;
    var total = Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx + 1] + board[colIdx + 2][rowIdx + 2] + board[colIdx + 3][rowIdx + 3]);
    return (total === 4) ? board[colIdx][rowIdx] : null;
}


function checkVerticaldown(colIdx, rowIdx) {
    if (colIdx > 3 || rowIdx < 2) return null;
    var total = Math.abs(board[colIdx][rowIdx] + board[colIdx + 1][rowIdx - 1] + board[colIdx + 2][rowIdx - 2] + board[colIdx + 3][rowIdx - 3]);
    return (total === 4) ? board[colIdx][rowIdx] : null;
}

function render() { // changes the color of the player turn- Transfer state to the DOM
    board.forEach(function (col, colIdx) {
        col.forEach(function (cell, rowIdx) {
            var td = document.getElementById(`col${colIdx}row${rowIdx}`);
            td.style.backgroundColor = playerLookup[cell];
        });
    });
    if (winner) {
        messageEl.textContent = `${playerLookup[winner].toUpperCase()} Wins!`;
    } else if (isTie) {
        messageEl.textContent = `It's a tie!`;
    } else {
        messageEl.textContent = `${playerLookup[turn].toUpperCase()}'s Turn`;
    }
    boardEl.style.visibility = winner ? 'hidden' : 'visible';
}
initialize();