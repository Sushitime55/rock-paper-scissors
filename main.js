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
  if (humanScore >= 5 || computerScore >= 5) {
    humanScore = 0;
    computerScore = 0;
    const gameGrats = document.getElementById("grats");
    gameGrats.textContent = "";
  }

  let computerChoice = getComputerChoice();
  let result = playRound(buttonId, computerChoice);
  let resultText = "";

  if (result == "Win") {
    humanScore++;
    resultText = "You " + result + "! " + buttonId + " beats " + computerChoice;
  } else if (result == "Lose") {
    computerScore++;
    resultText = "You " + result + ". " + buttonId + " loses to " + computerChoice;
  } else if ((result = "Tie")) {
    resultText = "You " + result + "d. " + buttonId + " ties " + computerChoice;
  }

  console.log("Current score: Human " + humanScore + " Computer " + computerScore);
  console.log();

  // update text on browser
  const gameResult = document.getElementById("result");
  gameResult.textContent = resultText;
  const score = document.getElementById("score");
  score.textContent = "Current score: Human " + humanScore + " Computer " + computerScore;

  // announce winner
  if (humanScore >= 5 || computerScore >= 5) {
    const winner = humanScore >= 5 ? "Player" : "Computer";
    const gameGrats = document.getElementById("grats");
    gameGrats.textContent =
      winner + " has 5 points. " + winner + " is the overall winner! Play again?";
  }
}

// rps buttons. pass arguments by binding them to function
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", playGameOnButtonPress.bind(event, button.id))
);

// initialize scores as global variables. not the best idea but works for now
humanScore = 0;
computerScore = 0;
