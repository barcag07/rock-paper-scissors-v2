let humanScore = 0; // set human initializer to 0
let computerScore = 0; // set computer initializer to 0
let round = 1; // set round initializer to 0

playGame();

//@return A choice of rock, paper, or scissors
//ranNum is printed for debugging
function getComputerChoice() {

    let ranNum = Math.floor(Math.random () * 3) + 1;
    let compChoice;

        //Assign numbers choice of rock, paper, or scissors
    if (ranNum == 1) {
        compChoice = "Rock";
    }
    else if (ranNum == 2) {
        compChoice = "Paper";
    }
    else {
        compChoice = "Scissors";
    }

    return compChoice/** + " " + ranNum */; //comment used for debugging
}

//@return The users choice
function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = window.prompt("ROUND: " + round + "\nEnter Rock, Paper, or Scissors");
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock") {
            humanChoice = "Rock";
        }
        else if (humanChoice == "paper") {
            humanChoice = "Paper";
        }
        else if (humanChoice == "scissors") {
            humanChoice = "Scissors";
        }
        else {
            humanChoice = "ERROR";
        }

        
    }
    while (humanChoice === "ERROR");

    return humanChoice;

}


/**
 * playRound function plays a round of rock paper scissors
 * @param humanChoice The user's choice
 * @param compChoice The computer's randomly generated choice
 * @return returns the outcome of the round
 */

function playRound(humanChoice, compChoice) {


    console.log("User Choice:",humanChoice);

    console.log("Computer Choice", compChoice);

    console.log("");

    if (humanChoice === "Rock" && compChoice === "Scissors" ||
        humanChoice === "Paper" && compChoice === "Rock" ||
        humanChoice === "Scissors" && compChoice === "Paper") {
            humanScore++;
            return console.log("Congratulations! You win this round");
        }
    else if (humanChoice === "Rock" && compChoice === "Paper" ||
            humanChoice === "Paper" && compChoice === "Scissors" ||
            humanChoice === "Scissors" && compChoice === "Rock") {
                computerScore++;
                return console.log("Sorry...The computer wins this round");
        }
    else if (humanChoice === "Rock" && compChoice === "Rock" ||
            humanChoice === "Paper" && compChoice === "Paper" ||
            humanChoice === "Scissors" && compChoice === "Scissors") {
                humanScore += 0;
                computerScore += 0;
                return console.log("Looks like a tie. Nobody wins this round");
            }
    else {
        return null;
    }
}


/**
 * playGame function plays 5 rounds of rock paper scissors
 * @return The outcome of the game
 */


function playGame() {


    for (round = 1; round <= 5; round++) {
        console.log("ROUND: " + round);
        
        //getHUmanChoice() -> humanChoice param & getComputerChoice() -> compChoice param

        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Score\nUser: " + humanScore + "\tComputer: " + computerScore);
        
        console.log("");
        console.log("");
        console.log("");
    }

    if (humanScore > computerScore) {
        console.log("CONGRATULATIONS!! YOU BEAT THE COMPUTER!");
    }
    else if (humanScore < computerScore) {
        console.log("Sorry...The computer won the game")
    }
    else {
        console.log("Looks like nobody wins. The game ends in a tie");
    }
}