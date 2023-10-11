function getComputerChoice(){
    const max = 2;
    const min = 0;
    
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(a);
    let choice = [];
    choice.push("Rock","Paper","Scissors");
    return choice[a];
}

let playerWinCount = 0;
let computerWinCount = 0;
let draws = 0;


const buttonRock = document.querySelector('button.rock');
const buttonPaper = document.querySelector('button.paper');
const buttonScissors = document.querySelector('button.scissors');
const result = document.querySelector('div.result');

function gameResult(playerWins,computerWins,drawnGames){
    let gamesPlayed = playerWins + computerWins + drawnGames;
    if(gamesPlayed === 5){
        if(playerWins > computerWins){
            result.textContent = "YOU HAVE WON THE FIVE ROUND GAME!!!";
        }else{
            result.textContent = "you have lost the five round game :(";
        };
        playerWinCount = 0;
        computerWinCount = 0;
        draws = 0;
    };
};



buttonRock.addEventListener('click',()=>{
    
    let playerSelection = buttonRock.textContent.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log("The computers choice is",computerSelection);
    console.log("The players choice is",playerSelection);
    
    

    if( playerSelection === "rock" && computerSelection === "scissors"){
        result.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
        playerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else if(playerSelection === "rock" && computerSelection==="paper"){
        result.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
        computerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else{
        result.textContent = "Game over!!";
        draws++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);        
    }
});

buttonPaper.addEventListener('click',()=>{
    let playerSelection = buttonPaper.textContent.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log("The computers choice is",computerSelection);
    console.log("The players choice is",playerSelection);


    if(playerSelection === "paper" && computerSelection === "rock"){
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        result.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
        computerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else{
        result.textContent = "Game over!!";
        draws++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);
    }   
});

buttonScissors.addEventListener('click', ()=>{
    let playerSelection = buttonScissors.textContent.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    console.log("The computers choice is",computerSelection);
    console.log("The players choice is",playerSelection);

    if(playerSelection === "scissors" && computerSelection === "paper"){
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerWinCount++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);

    }else{
        result.textContent = "Game over!!";
        draws++;
        console.log(`player win count is ${playerWinCount} and the computer has won ${computerWinCount}`);
        gameResult(playerWinCount,computerWinCount,draws);
    }
});










