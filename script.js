function getComputerChoice(){
    const max = 2;
    const min = 0;
    
    let a = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(a);
    let choice = [];
    choice.push("Rock","Paper","Scissors");
    return choice[a]
}
let playerWinCount = 0
let computerWinCount = 0 

//
function oneRound(playerSelection,computerSelection){
    if(playerSelection==="rock"&&computerSelection==="scissors"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerWinCount++
    }else if(playerSelection==="scissors"&&computerSelection==="paper"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerWinCount++
    }else if(playerSelection==="paper"&&computerSelection==="rock"){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerWinCount++
    }else if(playerSelection==="paper"&&computerSelection==="scissors"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerWinCount++
    }else if(playerSelection==="scissors"&&computerSelection==="rock"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerWinCount++ 
    }else if(playerSelection==="rock"&&computerSelection==="paper"){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerWinCount++
    }else{
        console.log("Game over")
    }
}

function game(){
    
    for (let i = 0;i < 5;i++){
        let pChoice = prompt("what do you pick btwn Rock,Paper and Scissors?").toLowerCase();
        let cChoice = getComputerChoice().toLowerCase();
        console.log(cChoice,"-computer choice");
        console.log(pChoice,"-players choice");

        oneRound(pChoice,cChoice);
           
    }
    console.log("Computer wins",computerWinCount)
    console.log("Player wins",playerWinCount)
    if(playerWinCount>computerWinCount){
        console.log("YOU WIN THE FIVE ROUND GAME!!!")
    }else{
        console.log("YOU LOSE THE FIVE ROUND GAME!!!")
    }
}

game()









