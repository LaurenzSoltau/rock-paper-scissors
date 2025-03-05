// 0 = rock
// 1 = paper
// 2 = scissors


const nameMatrix = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
} 

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





console.log(getComputerChoice());