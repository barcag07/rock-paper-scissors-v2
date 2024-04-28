let compChoice = getComputerChoice();

console.log(compChoice);


//Assign numbers choice of rock, paper, or scissors
if (compChoice == 1) {
    console.log("Rock");
}
else if (compChoice == 2) {
    console.log("Paper");
}
else {
    console.log("Scissors");
}





//@return A random number of 1, 2, or 3 that will be assigned a choice of rock, paper, or scissors
function getComputerChoice() {
    return Math.floor(Math.random () * 3) + 1;
}