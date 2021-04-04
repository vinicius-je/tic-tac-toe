// Add click event on squares
document.addEventListener("DOMContentLoaded", ()=>{

    let squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })

    showPlayerTimer(playerTime);
})

// Get the game mode (player vs player or player vs computer)
function player(choice){

    let stage = document.getElementById("stage")
    let choicePlayer = document.getElementById("choicePlayer")
    let players = document.getElementById("players-box");
    let playAgain = document.getElementById("playAgain");

    stage.style.display="flex";
    choicePlayer.style.display="none";
    players.style.display="flex";
    playAgain.style.display="block";

    if(choice == 1){
        let scoreboard = document.getElementsByClassName("player")[1];
        scoreboard.innerHTML = `Computer = <span id="player-2">0</span>`;
    }
 
    gameMode = choice;
}

// Get id from square, handle player move, handle computer move
function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(()=>{
            playerWinner(playerTime)
        }, 30)
    }else{
        handleMove(position);
        draw(moves);
        moves++;
    }

    if(gameMode == 1){
       /* computer() */
        setTimeout(computer, 300);
    }
    updateSquare(position);
}

// Display symbol in square
function updateSquare(position){
        let square = document.getElementById(position.toString());
        let symbol = board[position];

        square.innerHTML = `<div class="${symbol}"></div>`
}

// Clean all squares
function cleanSquares(){
    let squares = document.querySelectorAll(".square") ;
    squares.forEach((square) =>{
        square.innerHTML = "";
    })
}

// generates a move to the computer
function computer(){

    let n = Math.floor(Math.random() * 9);
    let emptySquare = 0;

    for(let i of board){
        if(i === "")
        emptySquare++;
    }
  
    while(board[n] != "" && emptySquare > 1){
        n = Math.floor(Math.random() * 9);
    }

    if(handleMove(n)){
       setTimeout(()=>{
            playerWinner(playerTime)
       }, 30)}

    handleMove(n);
    updateSquare(n);
    moves++;
}

// Show the player's turn
function showPlayerTimer(player){
    let playerTimer = document.getElementsByClassName("player") 
    
    if(player == 0){
        playerTimer[0].classList.add("playerTimer")
        playerTimer[1].classList.remove("playerTimer") 
    }else if(player == 1){
        playerTimer[0].classList.remove("playerTimer") 
        playerTimer[1].classList.add("playerTimer")
    }
}

// Display players scoreboard
function scoreboard(result){
    if(result == "o"){
        let player_1 = document.getElementById("player-1");
        scoreboard_1++;
        player_1.innerText = scoreboard_1;
    }else{
        let player_2 = document.getElementById("player-2");
        scoreboard_2++;
        player_2.innerText = scoreboard_2;
    }
}

// Display the winning player
function playerWinner(player){
    if(player == 0){
        alert("Player 1 Win")
    }else if(player == 1 && gameMode == 1){
        alert("Computer Win")
    }else{
        alert("Player 2 Win")
    }
}

// Display draw
function draw(moves){
    if(moves == 8){
        setTimeout(()=>{
            alert("Draw")
        }, 50)
    }
}

// Reset variables
function playAgain(){
    playerTime = 0;
    gameOver = false;
    board = ['','','','','','','','',''];
    moves = 0;
    cleanSquares();
    showPlayerTimer(playerTime);
}











