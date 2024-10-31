const rock = 1;
const paper = 2;
const scissors = 3;
// I made the choice variable global
const choice = prompt("Choose: rock(1), paper(2), scissors(3)");


// Creating a function that displays/tests for what I have picked
function display(option) {
    console.log(`Your choice is ${choice}`)
}


// Main function to start game off
function main() {
    display(choice);
}

main();