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
  let humanResult = "Tie";

  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    } else if (computerChoice == "paper") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      humanResult = "Lose";
    } else if (computerChoice == "scissors") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanResult = "Win";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanResult = "Win";
    } else if (computerChoice == "paper") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    } else if (computerChoice == "scissors") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      humanResult = "Lose";
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      console.log("You lose! " + humanChoice + " loses to " + computerChoice);
      humanResult = "Lose";
    } else if (computerChoice == "paper") {
      console.log("You win! " + humanChoice + " beats " + computerChoice);
      humanResult = "Win";
    } else if (computerChoice == "scissors") {
      console.log("Tie! " + humanChoice + " ties " + computerChoice);
    }
  } else {
    console.log("invalid human choice");
  }
  return humanResult;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let result = playRound(humanChoice, computerChoice);

    if (result == "Win") {
      humanScore++;
    } else if (result == "Lose") {
      computerScore++;
    }

    console.log("Current score: Human " + humanScore + " Computer " + computerScore);
    console.log();
  }

  if (humanScore > computerScore) {
    console.log("You are the match winner! Huzzah!");
  } else if (humanScore == computerScore) {
    console.log("Tie. No winners or losers.");
  } else if (humanScore < computerScore) {
    console.log("Computer is the match winner. Better luck next time.");
  }
}

function playGameOnButtonPress(buttonId) {
  let result = playRound(buttonId, getComputerChoice());
  if (result == "Win") {
    humanScore++;
  } else if (result == "Lose") {
    computerScore++;
  }
  console.log("Current score: Human " + humanScore + " Computer " + computerScore);
  console.log();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", playGameOnButtonPress.bind(event, button.id))
);

humanScore = 0;
computerScore = 0;

const results = document.getElementById("results");
const score = document.createElement("p");
score.textContent = "Current score: Human " + humanScore + " Computer " + computerScore;
results.appendChild(score);
