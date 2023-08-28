function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    
}

console.log(getComputerChoice());