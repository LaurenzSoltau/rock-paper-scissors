let computerScore = 0;

let playerScore = 0;

function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.` 
    } else if (playerSelection == computerSelection) {
        return "You Draw!"
    } else {
        computerScore++;
        return `You loose! ${playerSelection} looses against ${computerSelection}.`
    }
}

function getPlayerChoice() {
    return prompt("rock, paper, scissors. Tippe deine Wahl");
}

function getFinalResult() {
    if (playerScore > computerScore) {
        return `You won the Game! Player: ${playerScore} Computer: ${computerScore}.`;
    } else if (playerScore < computerScore) {
        return `You lost the Game! Player: ${playerScore} Computer: ${computerScore}.`;
    } else {
        return `You drawed the game! Player: ${playerScore} Computer: ${computerScore}.`;
    }
}

function printScore() {
    console.log(`Player: ${playerScore} Computer: ${computerScore}.`);
}

function game() {
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        console.log(playRound(playerChoice, computerChoice));
        printScore();
    }
    let result = getFinalResult();
    console.log(result)
}

game();