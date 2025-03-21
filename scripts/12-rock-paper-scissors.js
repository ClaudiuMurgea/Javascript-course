let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}
/*
if(!score) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
} 
*/ 

function showConfirm() {
  let confirmWrapper = document.querySelector('.confirm-buttons');
  confirmWrapper.classList.remove('hide');
}
document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});
document.querySelector('.js-confirm-yes').addEventListener('click', () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  document.querySelector('.js-score').innerHTML = `Wins: 0, Losses: 0, Ties: 0`;
  localStorage.removeItem(score);
  showConfirm();
  autoPlay();
  document.querySelector('.confirm-buttons').classList.add('hide');
});
document.querySelector('.js-confirm-no').addEventListener('click', () => {
  document.querySelector('.confirm-buttons').classList.add('hide');
});
document.querySelector('.js-reset').addEventListener('click', () => {
  showConfirm();
});
document.querySelector('.js-auto').addEventListener('click', () => {
  autoPlay();
});
document.body.addEventListener('keydown', (event) => { 
  if(event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
const computerMove = pickComputerMove();
let result = '';
if(playerMove === 'rock') {
  if(computerMove === 'rock') {
  result = 'Tie.';
  } else if(computerMove === 'paper') {
    result = 'You lose.';
  } else if(computerMove === 'scissors') {
    result = 'You win.';
  }
} else if(playerMove === 'paper') {
  if(computerMove === 'rock') {
    result = 'You win.';
  } else if(computerMove === 'paper') {
    result = 'Tie.';
  } else if(computerMove === 'scissors') {
    result = 'You lose.';
  }
} else if(playerMove === 'scissors') {
  if(computerMove === 'rock') {
  result = 'You lose.';
  } else if(computerMove === 'paper') {
    result = 'You win.';
  } else if(computerMove === 'scissors') {
    result = 'Tie.';
  }
}

if(result === 'You win.') {
  score.wins++;
} else if(result === 'You lose.') {
  score.losses++;
} else if(result === 'Tie.') {
  score.ties++;
}
localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result
document.querySelector('.js-moves').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" alt="" class="img-icon">
<img src="images/${computerMove}-emoji.png" alt="" class="img-icon">
Computer`
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}
function pickComputerMove() {
let computerMove = '';
const randomNumber = Math.random();
  if(randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'rock';
} else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3 ) {
  computerMove = 'paper'; 
} else if(randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'scissors'; 
}
return computerMove;
}

let isAutoPlaying = false;

let intervalId;

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = 'Stop Play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.auto-play-button').innerHTML = 'Start Play';
  }
}
document.body.addEventListener('keydown', (event) => { 
  console.log(event.key);
  if(event.key === 'a' || event.key === ' ') { 
    autoPlay();
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === ' ') {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.js-score').innerHTML = `Wins: 0, Losses: 0, Ties: 0`;
    localStorage.removeItem(score);
  }
});

