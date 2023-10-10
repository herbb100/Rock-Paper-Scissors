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

/* OLD ONE ROUND CODE
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
*/

let cChoice = getComputerChoice();

const buttonRock = document.querySelector('button.rock');
const buttonPaper = document.querySelector('button.paper');
const buttonScissors = document.querySelector('button.scissors');
const result = document.querySelector('div.result')

function oneRound2(){
    let computerSelection = cChoice.toLowerCase();
    console.log("The computers choice is",computerSelection);

    buttonRock.addEventListener('click',()=>{
        let playerSelection = buttonRock.textContent.toLowerCase();
        console.log("The players choice is",playerSelection);

        if( playerSelection==="rock" && computerSelection === "scissors"){
            result.textContent =`You win! ${playerSelection} beats ${computerSelection}`;
            playerWinCount++

        }else if(playerSelection==="rock"&&computerSelection==="paper"){
            result.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
            computerWinCount++

        }else{
            result.textContent = "Game over!!";        
        }
    });

    buttonPaper.addEventListener('click',()=>{
        let playerSelection = buttonPaper.textContent.toLowerCase();
        console.log("The players choice is",playerSelection);


        if(playerSelection === "paper" && computerSelection === "rock"){
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWinCount++;

        }else if(playerSelection === "paper" && computerSelection === "scissors"){
            result.textContent =`You lose! ${computerSelection} beats ${playerSelection}`;
            computerWinCount++;

        }else{
            result.textContent = "Game over!!";
        }   
    });

    buttonScissors.addEventListener('click', ()=>{
        let playerSelection = buttonScissors.textContent.toLowerCase();
        console.log("The players choice is",playerSelection);

        if(playerSelection === "scissors" && computerSelection === "paper"){
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerWinCount++;

        }else if(playerSelection==="scissors"&&computerSelection==="rock"){
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerWinCount++;

        }else{
        result.textContent = "Game over!!";
        }
    });
};

oneRound2()
 

/*function game(){
    
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
*/








