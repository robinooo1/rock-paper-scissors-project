console.log("Hello World"); /* Test */

/* Pseudocode: Elaborate on each step! */
// 1. Write the logic to get the computer choice.
// Write function that lets computer pick between rock, papers or scissors.
// Within the function it should have math.random to pick between the choices.
// Let a certain number (intervall) respresent a choice.
// If given number, it should return that number, hence choice.
const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// 2. Write the logic to get the human choice.
// Write prompt method to give user the ability to write the choice in input.
// Depending on given input, a function will, like in step 1, give rock, paper or scissors as output.
function getHumanChoice() {
    let pick = prompt("Pick between Rock, Paper or Scissors");
    if (pick === "Rock") {
        return "Rock";
    } else if (pick === "Paper") {
        return "Paper";
    } else if (pick === "Scissors") {
        return "Scissors";
    } else {
        return "Pick again, make sure to spell it right!";
    }
}


// 3. Declare the players score variables.
let humanScore = 0;
let computerScore = 0;

// 4. Write the logic to play a single round.
// Function where it outputs scoreline from new variables: humanScore and computerScore
// Variables will initialize with the value 0. 
// If user input wins: add +1 point to user (humanScore +1 point)
// If computer wins: add +1 point to computer (computerScore +1 point)
// eg If getComputerChoice choose rock, and getHumanChoice choose paper, add 1+ point to computerScore...
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "Rock" && computerChoice === "Scissors")
       || (humanChoice === "Paper" && computerChoice === "Rock")
       || (humanChoice === "Scissors" && computerChoice === "Paper")) {
       humanScore++;
       score = `Your score: ${humanScore}`;
       result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") 
        || (humanChoice === "Paper" && computerChoice === "Scissors")
        || (humanChoice === "Scissors" && computerChoice === "Rock")) {
        computerScore++;
        score = `Computer score: ${computerScore}`;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`; 
    } else {
        result = `It's a draw! You both have ${humanChoice}.`;
        score = "draw";
    }
    console.log(result);
    console.log(score); 
    
}
console.log(humanScore);
console.log(computerScore);

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Your pick: ${humanSelection}`);
console.log(`Computer pick: ${computerSelection}`);
playRound(humanSelection, computerSelection);


// 5. Write the logic to play the entire game.

