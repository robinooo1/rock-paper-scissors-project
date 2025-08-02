console.log("Hello World"); /* Test */

/* Pseudocode: Elaborate on each step! */
// 1. Write the logic to get the computer choice.
// Write function that lets computer pick between rock, papers or scissors.
// Within the function it should have math.random to pick between the choices.
// Let a certain number (intervall) respresent a choice.
// If given number, it should return that number, hence choice.
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); 
    if (choice === 0) {
        return "Computer pick: Rock";
    } else if (choice === 1) {
        return "Computer pick: Paper";
    } else {
        return "Computer pick: Scissors";
    }
}
console.log(getComputerChoice());

// 2. Write the logic to get the human choice.
// Write prompt method to give user the ability to write the choice in input.
// Depending on given input, a function will, like in step 1, give rock, paper or scissors as output.
function getHumanChoice() {
    let pick = prompt("Pick between Rock, Paper or Scissors");
    if (pick === "Rock") {
        return "Your pick: Rock";
    } else if (pick === "Paper") {
        return "Your pick: Paper";
    } else if (pick === "Paper") {
        return "Your pick: Scissors";
    } else {
        return "Pick again, make sure to spell it right!";
    }
}
console.log(getHumanChoice());

// 3. Declare the players score variables.
 let humanScore = 0;
 let computerScore = 0;

// 4. Write the logic to play a single round.
// Function where it outputs scoreline from new variables: humanScore and computerScore
// Variables will initialize with the value 0. 
// If user input wins: add +1 point to user (humanScore +1 point)
// If computer wins: add +1 point to computer (computerScore +1 point)
// eg If getComputerChoice choose rock, and getHumanChoice choose paper, add 1+ point to computerScore...
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Scissors";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beats Paper";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissors beat Paper";
    } else {
        return "Tie! Both chose the same"
    }
}
console.log(humanScore);
console.log(computerScore);

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();

playRound(humanSelection, computerSelection);

// 5. Write the logic to play the entire game.

