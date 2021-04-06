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
    }else if(choice == 2){
         computerVscomputer();
         reset_computer = true;
    }
 
    gameMode = choice;
}

// Get id from square, handle player move, handle computer move
function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(hasWinner(position)){
        setTimeout(()=>{
            playerWinner(playerTime)
        }, 30)
    }else{
        handleMove(position);
        draw(moves);
        moves++;
    }

    if(gameMode == 1){
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
    console.log(moves)
    if(moves >= 8 && gameOver == false){
        setTimeout(()=>{
            alert("Draw")
            clearInterval(interval);
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
    resetComputer();
}

// Check if has a winner
function hasWinner(position){
    if(handleMove(position)){
        return true;
    }else{
        return false;
    }
}











