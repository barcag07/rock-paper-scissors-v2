// let compChoice = getComputerChoice();

console.log(getComputerChoice());




//@return A choice of rock, paper, or scissors
//ranNum is printed for debugging
function getComputerChoice() {

    let ranNum = Math.floor(Math.random () * 3) + 1;

        //Assign numbers choice of rock, paper, or scissors
    if (ranNum == 1) {
        return console.log(ranNum, "Rock");
    }
    else if (ranNum == 2) {
        return console.log(ranNum, "Paper");
    }
    else {
        return console.log(ranNum, "Scissors");
    }
}