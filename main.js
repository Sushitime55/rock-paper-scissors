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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log("Your choice: " + humanChoice);
  console.log("The computer's choice: " + computerChoice);

  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    } else if (computerChoice == "paper") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      computerScore++;
    } else if (computerChoice == "scissors") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    } else if (computerChoice == "paper") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    } else if (computerChoice == "scissors") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      computerScore++;
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      computerScore++;
    } else if (computerChoice == "paper") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanScore++;
    } else if (computerChoice == "scissors") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    }
  } else {
    console.log("invalid human choice");
  }
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);
console.log(humanScore);
