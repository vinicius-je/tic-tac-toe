// Set variables and arrays
let board = ['','','','','','','','',''];
let gameMode = 0;
let playerTime = 0;
let moves = 0;
let gameOver = false;
let symbols = ["o", "x"];
let scoreboard_1 = 0;
let scoreboard_2 = 0;

// All win states
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Handle move players and check if game over
function handleMove(position){

    if(gameOver){
        return
    }

    if(board[position] == ""){
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0;
            showPlayerTimer(playerTime)
        }
    }
    return gameOver;
}

// Check if there winner move & add a point in scoreboard
function isWin(){
    for(let i = 0; i < winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            scoreboard(board[pos1]);
            showWinnerMoves(pos1, pos2, pos3)
            return true
        }
    }
    return false;
}



