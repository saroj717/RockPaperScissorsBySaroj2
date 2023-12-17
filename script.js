// Declare variables using getElementById();
var rockBtn = document.getElementById('rockBtn');
var paperBtn = document.getElementById('paperBtn');
var scissorsBtn = document.getElementById('scissorsBtn');
var userScore = document.getElementById('userScore');
var computerScore = document.getElementById('computerScore');
var tieScore = document.getElementById('tieScore');
var message = document.getElementById('message');
var winnerMessage = document.getElementById('winnerMessage');
var finalWinner = document.getElementById('finalWinner');

var userWin = 0;
var computerWin = 0;
var tie = 0;
var options = ['rock', 'paper', 'scissors'];

var computerChoice = '';
var userChoice = '';

// Use addEventListener for user click
rockBtn.addEventListener('click', function() {
  userChoice = 'rock';
  playGame();
  message.innerHTML = `You chose rock. Computer chose ${computerChoice}.`
})
paperBtn.addEventListener('click', function() {
  userChoice = 'paper';
  playGame();
  message.innerHTML = `You chose paper. Computer chose ${computerChoice}.`
})
scissorsBtn.addEventListener('click', function() {
  userChoice = 'scissors';
  playGame();
  message.innerHTML = `You chose scissors. Computer chose ${computerChoice}.`
})

// Compute computerChoice using a function playGame();
function playGame () {
  if (computerWin === 0 && userWin === 0 && tie === 0) {
    userScore.innerHTML = `User Score: `;
    computerScore.innerHTML = `Computer Score: `;
    tieScore.innerHTML = `Tie Score: `
    message.innerHTML = '';
    winnerMessage.innerHTML = '';
    finalWinner.innerHTML = '';
  }
  computerChoice = options[Math.floor(Math.random() * 3)];

  if (computerChoice === userChoice) {
    winnerMessage.innerHTML = "It's a Tie.";
    tie += 1;
    tieScore.innerHTML = `Tie Score: ${tie}`;
  } else if (computerChoice === 'rock' && userChoice === 'paper') {
    winnerMessage.innerHTML = "User is a Winner.";
    userWin += 1;
    userScore.innerHTML = `User Score: ${userWin}`;
  } else if (computerChoice === 'paper' && userChoice === 'scissors') {
    winnerMessage.innerHTML = "User is a Winner.";
    userWin += 1;
    userScore.innerHTML = `User Score: ${userWin}`;
  } else if (computerChoice === 'scissors' && userChoice === 'rock') {
    winnerMessage.innerHTML = "User is a Winner.";
    userWin += 1;
    userScore.innerHTML = `User Score: ${userWin}`;
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    winnerMessage.innerHTML = "Computer is a Winner.";
    computerWin += 1;
    computerScore.innerHTML = `Computer Score: ${computerWin}`;
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    winnerMessage.innerHTML = "Computer is a Winner.";
    computerWin += 1;
    computerScore.innerHTML = `Computer Score: ${computerWin}`;
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    winnerMessage.innerHTML = "Computer is a Winner.";
    computerWin += 1;
    computerScore.innerHTML = `Computer Score: ${computerWin}`;
  } else {
    winnerMessage.innerHTML = "There is something wrong with this game.";
  }
  if(computerWin === 2) {
    finalWinner.innerHTML = "Computer is the Final Winner";
    userWin = 0;
    computerWin = 0;
    tie = 0;
  } else if (userWin === 2) {
    finalWinner.innerHTML = "User is the Final Winner";
    userWin = 0;
    computerWin = 0;
    tie = 0;
  }

}

