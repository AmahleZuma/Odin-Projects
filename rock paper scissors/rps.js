// Making it easy for both PC and user to pick
const choices = ["rock", "paper", "scissors"]
let userChoice;
let computerChoice;

// User turn
function usr_turn() {
    userChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
    return userChoice;
}



// Creating a function for PC to pick a choice
function pc_choice() {
    computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    return computerChoice
}

// Comparison function using if statements
function compare(user, pc) {
    if (computerChoice == userChoice) {
        console.log("It is a tie")
    } else if (computerChoice == "rock" && userChoice == "paper") {
        console.log("Paper beats rock. You WIN");
    } else if (computerChoice == "paper" && userChoice == "rock") {
        console.log("Paper beats rock. You LOSE");
    } else if (computerChoice == "rock" && userChoice == "scissors") {
        console.log("Rock beats scissors. You LOSE");
    } else if (computerChoice == "scissors" && userChoice == "rock") {
        console.log("Rock beats scissors. You WIN");
    } else if (computerChoice == "paper" && userChoice == "scissors") {
        console.log("Scissors beats paper. You WIN");
    } else if (computerChoice == "scissors" && userChoice == "paper") {
        console.log("Scissors beats paper. You LOSE");
    } 
}

// Main function to start game off
function main() {
    usr_turn();
    pc_choice();
    compare(userChoice, computerChoice);

}

main();