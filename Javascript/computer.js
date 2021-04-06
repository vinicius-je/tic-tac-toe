let reset_computer = false;

// Generates moves to the computer
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

    if(hasWinner(n)){
        setTimeout(()=>{
            playerWinner(playerTime)
        }, 30)
    }

    handleMove(n);
    updateSquare(n);
    moves++;
}

// computer vs computer mode
function computerVscomputer(){
   let interval = setInterval(() => {
       computer();

       if(gameOver){
           clearInterval(interval);
       }else{
            let n = 0;
            for(let i in board){
                if(board[i] != ""){
                    n++;
                    console.log(n)
                }
                if(n == 9){
                    draw(moves);
                    clearInterval(interval);
                }
            }
       }
   }, 500);
}

// Allow computerVscomputer play again
function resetComputer(){
    if(reset_computer == true){
        computerVscomputer();
    }
}




