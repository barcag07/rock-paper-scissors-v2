let humanScore = 0; // set human initializer to 0
let computerScore = 0; // set computer initializer to 0
let round = 1; // set round initializer to 0

let wlt = "";
// let win = "Congratulations! You win this round\n\n";
// let lose = "Sorry...The computer wins this round\n\n";
// let tie = "Looks like a tie. Nobody wins this round";

// playGame();

//@return A choice of rock, paper, or scissors
//ranNum is printed for debugging
let compChoice = "";
function getComputerChoice() {

    let ranNum = Math.floor(Math.random () * 3) + 1;
    // let compChoice;

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

    console.log("Computer Choice:", compChoice);

    console.log("");

    let win = "Congratulations! You win this round\n\n";
    let lose = "Sorry...The computer wins this round\n\n";
    let tie = "Looks like a tie. Nobody wins this round";

    if (humanChoice === "Rock" && compChoice === "Scissors" ||
        humanChoice === "Paper" && compChoice === "Rock" ||
        humanChoice === "Scissors" && compChoice === "Paper") {
            humanScore++;

            return wlt = win;

        }
    else if (humanChoice === "Rock" && compChoice === "Paper" ||
            humanChoice === "Paper" && compChoice === "Scissors" ||
            humanChoice === "Scissors" && compChoice === "Rock") {
                computerScore++;
                return wlt = lose;
        }
    else if (humanChoice === "Rock" && compChoice === "Rock" ||
            humanChoice === "Paper" && compChoice === "Paper" ||
            humanChoice === "Scissors" && compChoice === "Scissors") {
                humanScore += 0;
                computerScore += 0;
                return wlt = tie;
            }

    else {
        return null;
    }
}


/**
 * playGame function plays 5 rounds of rock paper scissors
 * @return The outcome of the game
 */


// function playGame() {


//     for (round = 1; round <= 5; round++) {
//         console.log("ROUND: " + round);
        
//         //getHUmanChoice() -> humanChoice param & getComputerChoice() -> compChoice param

//         console.log(playRound(getHumanChoice(), getComputerChoice()));
//         console.log("Score\nUser: " + humanScore + "\tComputer: " + computerScore);
        
//         console.log("");
//         console.log("");
//         console.log("");
//     }

//     if (humanScore > computerScore) {
//         console.log("CONGRATULATIONS!! YOU BEAT THE COMPUTER!");
//     }
//     else if (humanScore < computerScore) {
//         console.log("Sorry...The computer won the game")
//     }
//     else {
//         console.log("Looks like nobody wins. The game ends in a tie");
//     }
// }
function checkGame(round) {
    if (round > 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        if(humanScore > computerScore) {
            finalOutcome.textContent = "CONGRATULATIONS!! YOU BEAT THE COMPUTER!";
        }
        else if (humanScore < computerScore) {
            finalOutcome.textContent = "Sorry...The computer won the game";
        }
        else {
            finalOutcome.textContent = "Looks like nobody wins. The game ends in a tie."
        }
    }
    
}

const body = document.querySelector("body");

const rps = document.querySelector("div");

let userChoice = "";
const rock = document.createElement("button");
rock.textContent = "Rock";
if(round <= 5) {
    rock.addEventListener("click", () => {
        userChoice = rock.textContent;
        getComputerChoice();
        userCompChoice.innerHTML = `You Picked: ${userChoice}<br>The Computer Picked: ${compChoice}`;
        playRound(rock.textContent, compChoice);
        score.innerHTML = `ROUND ${round}`;
        roundOutcome.innerHTML = `Round Results: ${wlt}`;
        tally.innerHTML = `USER POINTS: ${humanScore}&nbsp;COMPUTER POINTS: ${computerScore}`;
        round++;
        checkGame(round);
    });
}

rps.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
if (round <= 5) {
    paper.addEventListener("click", () => {
    userChoice = paper.textContent;
    getComputerChoice();
    userCompChoice.innerHTML = `You Picked: ${userChoice}<br>The Computer Picked: ${compChoice}`;
    playRound(paper.textContent, compChoice);
    score.innerHTML = `ROUND ${round}`;
    roundOutcome.innerHTML = `Round Results: ${wlt}`;
    tally.innerHTML = `USER POINTS: ${humanScore}&nbsp;COMPUTER POINTS: ${computerScore}`;
    round++;
    checkGame(round);
});
}

rps.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
if (round <= 5) {
    scissors.addEventListener("click", () => {
    userChoice = scissors.textContent;
    getComputerChoice();
    userCompChoice.innerHTML = `You Picked: ${userChoice}<br>The Computer Picked: ${compChoice}`;
    playRound(scissors.textContent,compChoice);
    score.innerHTML = `ROUND ${round}`;
    roundOutcome.innerHTML = `Round Results: ${wlt}`;
    tally.innerHTML = `USER POINTS: ${humanScore}&nbsp;COMPUTER POINTS: ${computerScore}`;
    round++;
    checkGame(round);
    });
}

rps.appendChild(scissors);

body.appendChild(rps);



const results = document.createElement("div");
results.setAttribute("class", "results")

const score = document.createElement("p");
score.innerHTML = `ROUND 1`;
results.appendChild(score);

const userCompChoice = document.createElement("p");
//innerHTML was used so that we can create a line break
userCompChoice.innerHTML = `You Picked:</br>The Computer Picked:`;
results.appendChild(userCompChoice);


const roundOutcome = document.createElement("p");
roundOutcome.textContent = "Round Results:";
results.appendChild(roundOutcome);

const tally = document.createElement("p");
tally.innerHTML = `USER POINTS: 0 &nbsp; COMPUTER POINTS: 0`;
// tally.innerHTML = `USER POINTS: ${}&nbsp;COMPUTER POINTS: ${}`;
results.appendChild(tally);

const finalOutcome = document.createElement("p");
finalOutcome.innerHTML = ""

// if(humanScore > computerScore) {
//     finalOutcome.textContent = "CONGRATULATIONS!! YOU BEAT THE COMPUTER!";
// }
// else if (humanScore < computerScore) {
//     finalOutcome.textContent = "Sorry...The computer won the game";
// }
// else {
//     finalOutcome.textContent = "Looks like nobody wins. The game ends in a tie."
// }

results.appendChild(finalOutcome);

body.appendChild(results);