/*----- constants -----*/

var playerLook;

/*----- app's state (variables) -----*/
var playerRed;
var playerYellow;
var board;
    

/*----- cached element references -----*/



/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', oneClick);
document.getElementById('1').addEventListener('click', oneClick);

/*----- functions -----*/
function oneClick(event) {
    var target = event.target;
    if (target.tagName !== 'TD') return;

    console.log(event.target);
};

function initialize (){

    board = [
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,],
        [null, null, null, null, null, null,]
    ];
    winner = null;
    turn = 1;
};