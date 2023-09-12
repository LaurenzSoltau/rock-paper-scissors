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

function itemPicked() {
    resetIconBackground();
    let playerSelection = this.dataset.pick.toLowerCase();
    this.firstChild.style.backgroundColor = "red";
    playRound(playerSelection);
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    const selectedIcon = document.querySelector(`#${computerSelection}`);
    selectedIcon.style.backgroundColor = "red";
    uppercasePlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    uppercaseComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        displayRoundMessage(`${uppercasePlayerSelection} beats ${uppercaseComputerSelection}. You Win!`);
    } else if (playerSelection === computerSelection) {
        displayRoundMessage(`${uppercasePlayerSelection} draws ${uppercaseComputerSelection}. You draw!`);
    } else {
        computerScore++;
        displayRoundMessage(`${uppercasePlayerSelection} looses against ${uppercaseComputerSelection}. You loose!`);
    }
    updateScores();
}

function displayRoundMessage(message) {
    const roundMessageElement = document.querySelector(".info-text");
    roundMessageElement.textContent = message;
}

function updateScores() {
    const userScoreElement = document.querySelector("#user-score");
    const computerScoreElement = document.querySelector("#computer-score");
    userScoreElement.textContent = `Score: ${playerScore}`;
    computerScoreElement.textContent = `Score: ${computerScore}`;
    determineWinner();
}

function determineWinner() {
    const finalText = document.querySelector("#final-text");
    if (playerScore == 5) {
        finalText.textContent = "Congratulations! You Won.";
        endGame();
    }
    if (computerScore == 5) {
        finalText.textContent = "Too bad! The computer wins.";
        endGame();
    }

}

function endGame() {
    buttons.forEach(button => button.classList.add("no-hover"));
    restartButton.style.display = "block";
}

function resetIconBackground() {
    const icons = Array.from(document.querySelectorAll(".icon"));
    icons.forEach(icon => icon.style.backgroundColor = "transparent");
}

function resetGame() {
    restartButton.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    buttons.forEach(button => button.classList.remove("no-hover"));
    updateScores();
    resetIconBackground();
    const finalText = document.querySelector("#final-text");
    finalText.textContent = "First to Five wins!";
    
}



const buttons = Array.from(document.querySelectorAll(".ui-button"));
buttons.forEach(button => button.addEventListener("click", itemPicked));
const restartButton = document.querySelector("#restart");
restartButton.addEventListener("click", resetGame);




