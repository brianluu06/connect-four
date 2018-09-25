/*----- constants -----*/

var playerLook;
// "1" = yellow
// "-1" = red

/*----- app's state (variables) -----*/


/*----- cached element references -----*/




/*----- event listeners -----*/
document.getElementById('button0').addEventListener('click', oneClick);
document.getElementById('button1').addEventListener('click', oneClick);
document.getElementById('button2').addEventListener('click', oneClick);
document.getElementById('button3').addEventListener('click', oneClick);
document.getElementById('button4').addEventListener('click', oneClick);
document.getElementById('button5').addEventListener('click', oneClick);
document.getElementById('button6').addEventListener('click', oneClick);


/*----- functions -----*/
function oneClick(event) {
    var target = event.target;
    if (target.tagName !== 'BUTTON') return;
     var columnNum = parseInt(target.id.charAt(6));
     if (!board[columnNum].includes(null)) return;
    var row = board[columnNum].indexOf(null);
    console.log(event.target.id[6]); // 1..for loop
     board[columnNum][row] = turn;
    if (turn === 1) {
         board[columnNum][row] = '1';
    };
    if (turn === 2) {
        board[columnNum][row] = '-1';
    };
    turn *= -1;



    console.log(board);



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
};


function render (){  //forEach

}




initialize();

