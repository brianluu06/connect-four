/*----- constants -----*/

var playerLook;

/*----- app's state (variables) -----*/
var playerRed; // x
var playerYellow; // y
var board;
var turn;

/*----- cached element references -----*/



/*----- event listeners -----*/
// document.getElementById('board').addEventListener('click', oneClick);
document.getElementById('button1').addEventListener('click', oneClick);
document.getElementById('button2').addEventListener('click', oneClick);
document.getElementById('button3').addEventListener('click', oneClick);
document.getElementById('button4').addEventListener('click', oneClick);
document.getElementById('button5').addEventListener('click', oneClick);
document.getElementById('button6').addEventListener('click', oneClick);
document.getElementById('button7').addEventListener('click', oneClick);


/*----- functions -----*/
function oneClick(event) {
    var target = event.target;
    // if (target.tagName !== 'TD') return;

    var columnNum = parseInt(event.target.id[6]) - 1;
    // console.log(event.target.id[6]); // 1..for loop
    for (let i = 6; i >= 0; i--) {
        // const element = board[i][columnNum];
        if (i === 6) {
            // console.log(element);
        }

        // if board[i][columnNum] is null 
        // then set it x or y based on turn
        // change turn

        // if (!board[i][columnNum]) {
        //     if (turn === 1) {
        //         board[i][columnNum] = 'x'
        //     }
            
        //     if (turn === 2) {
        //         board[i][columnNum] = 'y'
        //     }

            
        // }

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

    initialize();

}