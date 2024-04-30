//Set scores to keep track of wins
let humanScore = 0;
let computerScore = 0;

//getHUmanChoice() -> humanChoice param & getComputerChoice() -> compChoice param
console.log(playRound(getHumanChoice(), getComputerChoice()));


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
        humanChoice = window.prompt("Enter Rock, Paper, or Scissors");
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
 */

function playRound(humanChoice, compChoice) {

    console.log("User Choice:",humanChoice);

    console.log("Computer Choice", compChoice);

    console.log("");
}