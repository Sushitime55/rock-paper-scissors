function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  // prompt only works on browsers, it cannot be run with node
  let choice = prompt("Enter your choice for rps:");
  return choice;
}

let computerChoice = getComputerChoice();
let yourChoice = getHumanChoice();
console.log("Your choice: " + yourChoice);
console.log("The computer's choice: " + computerChoice);
