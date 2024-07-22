function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.3) {
        return "rock";
    } else if (num > 0.3 && num <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

//let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

let roundsPlayed = 0;
const maxRounds = 5;

let hScore = document.querySelector(".humanScore");
let cScore = document.querySelector(".computerScore");

let matchResult = document.querySelector(".lowerText");


function playGame() {


    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            let humanChoice = "rock";
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }

    })

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            humanChoice = "paper";
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }

    })

    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            humanChoice = "scissors";
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }

    })


    function playRound(humanChoice, computerChoice) {
        roundsPlayed += 1;
        if (humanChoice === computerChoice) {
            matchResult.textContent = "Well thats a draw. ";
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            matchResult.textContent = "Paper beats rock, you lose. ";
            computerScore += 1;
            cScore.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            matchResult.textContent = "Rock crashes scissors and you won. ";
            humanScore += 1
            hScore.textContent = `Your score: ${humanScore}`;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            matchResult.textContent = "Paper beats rock, you win. ";
            humanScore += 1;
            hScore.textContent = `Your score: ${humanScore}`;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            matchResult.textContent = "Scissors cuts paper, you lose. ";
            computerScore += 1;
            cScore.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            matchResult.textContent = "You lose, rock beats scissors. ";
            computerScore += 1;
            cScore.textContent = `Computer score: ${computerScore}`;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            matchResult.textContent = "You win, scissors cuts paper. ";
            humanScore += 1;
            hScore.textContent = `Your score: ${humanScore}`;
        }

        if (roundsPlayed === maxRounds) {
            let finalResult;
            if (humanScore > computerScore) {
                finalResult = " Congratulations! You won the game!";
            } else if (humanScore < computerScore) {
                finalResult = " Sorry, you lost the game.";
            } else {
                finalResult = " It's a draw!";
            }
            matchResult.textContent += finalResult;
        }

    }
}
playGame();

let playAgain = document.querySelector(".again");
playAgain.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    hScore.textContent = "Your score: 0";
    cScore.textContent = "Computer score: 0";
    matchResult.textContent = "";

});
