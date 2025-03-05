// 0 = rock
// 1 = paper
// 2 = scissors


const nameMatrix = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
} 

const sourceMatrix = {
    0: "./images/rock.png",
    1: "./images/paper.png",
    2: "./images/scissors.png"
}

let isRunning = true;

let playerScore = 0;
let computerScore = 0;

const infoText = document.querySelector(".info-text");
const playerChoiceContainer = document.querySelector("#player-choice");
const computerChoiceContainer = document.querySelector("#computer-choice");
const playerScoreboard = document.querySelector("#player-score");
const computerScoreboard = document.querySelector("#computer-score");

document.querySelector("#restart").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    infoText.textContent = "Click a symbol to start the game!";
    if (playerChoiceContainer.hasChildNodes()) {
        playerChoiceContainer.removeChild(playerChoiceContainer.lastChild);
    }
    if(computerChoiceContainer.hasChildNodes()) {
        computerChoiceContainer.removeChild(computerChoiceContainer.lastChild);
    }

    playerScoreboard.textContent = `Player Score ${playerScore}`;
    computerScoreboard.textContent = `${computerScore} Computer Score`;
    isRunning = true;
    document.querySelectorAll(".symbol").forEach(symbol => {
        symbol.classList.add("hover");
    });

});

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
// 1 means human won, 0 means draw and -1 means computer won.
function determineWinner(humanChoice, computerChoice) {
    const gameMatrix = {
        0: {
            0: 0,
            1: -1,
            2: 1
        },
        1: {
            0: 1,
            1: 0,
            2: -1
        },
        2: {
            0: -1,
            1: 1,
            2: 0
        }
    }
    return gameMatrix[humanChoice][computerChoice];
}

function checkGameOver() {
    if (playerScore < 5 && computerScore < 5) {
        return;
    }
    if (playerScore >= 5) {
        infoText.textContent = "You reached 5 Points and Won!";
    } else {
        infoText.textContent = "The Computer reached 5 Points. You Lost!";
    }
    document.querySelectorAll(".symbol").forEach(symbol => {
        symbol.classList.remove("hover");
    }) 
    isRunning = false;
}

function playRound(humanChoice, computerChoice) {
    if (!isRunning) {
        return;
    }
    const humanImg = document.createElement("img");
    const computerImg = document.createElement("img");

    humanImg.src = sourceMatrix[humanChoice];
    computerImg.src = sourceMatrix[computerChoice];
    humanImg.classList.add("choice-img");
    computerImg.classList.add("choice-img");
    if (playerChoiceContainer.hasChildNodes()) {
    playerChoiceContainer.removeChild(playerChoiceContainer.lastChild);
    }
    playerChoiceContainer.appendChild(humanImg);

    if (computerChoiceContainer.hasChildNodes()) {
    computerChoiceContainer.removeChild(computerChoiceContainer.lastChild);
    }
    computerChoiceContainer.appendChild(computerImg);

    let didPlayerWin = determineWinner(humanChoice, computerChoice);
    humanChoice = nameMatrix[humanChoice];
    computerChoice = nameMatrix[computerChoice];
    
    if (didPlayerWin == 1) {
        playerScore++;
        infoText.textContent = `${humanChoice} beats ${computerChoice}. You Won!`;
    } else if (didPlayerWin == -1) {
        computerScore++;
        infoText.textContent = `${computerChoice} beats ${humanChoice}. You Lost!`;
    } else {
        infoText.textContent = `${humanChoice} and ${computerChoice} draws!`
    }

    playerScoreboard.textContent = `Player Score ${playerScore}`;
    computerScoreboard.textContent = `${computerScore} Computer Score`;

    checkGameOver();
}

const symbols = document.querySelectorAll(".symbol");
symbols.forEach(symbol => {
    symbol.addEventListener("click", (e) => {
        playRound(e.target.dataset.id, getComputerChoice());
    });
});



console.log(getComputerChoice());