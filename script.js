function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    let result = "";
    switch (randomChoice) {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
    }

    return result;
}


function getHumanChoice() {
    let humanChoice = prompt("Please choose");
    return humanChoice.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let didPlayerWin;
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                didPlayerWin = false;
            } else if (computerChoice == "scissors") {
                didPlayerWin = true;
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                didPlayerWin = true;
            } else if (computerChoice == "scissors") {
                didPlayerWin = false;
            }
        }

        if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                didPlayerWin = false;
            } else if (computerChoice == "paper") {
                didPlayerWin = true;
            }
        }
        if (humanChoice == computerChoice) {
            console.log("Draw! No Points!");
            return;
        }
        
        if (didPlayerWin) {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}.`)
            humanScore++;
        } else {
            console.log(`You Lost! ${computerChoice} beats ${humanChoice}.`)
            computerScore++;
        }
    }
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();

