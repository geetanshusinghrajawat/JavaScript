// const num = Math.floor(Math.random() * 100 + 1)
// const form = document.querySelector('.form')
// const result = document.querySelector('.resultParas')
// let GuessRemaining = 10
// const Arr = []
// let index = 0;
// console.log(num)
// form.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const guess = parseInt(document.querySelector('#guessField').value)
//     console.log(guess)
//     while(index < 10){
//         if (guess !=num){
//             Arr.push(guess)
//             GuessRemaining = GuessRemaining - 1;
//             index++;
//             console.log("index: " + index)
//             result.innerHTML = `previous guesses: ${Arr}
//             Guess remaining: ${GuessRemaining}`
//             // if(index >= 10){
//             //     result.innerHTML = `Reached maximum guesses, your guess were ${Arr}`
//             // }
//             break;
//         }
//         else if(guess == num){
//             result.innerHTML = `You guessed the right Number & your previous guess were ${Arr}`
//             index = 10
//             break;
//         }
//     }
//     })
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert(`Please enter a valid Number`);
  } else {
    prevGuess.push(guess);
    if (numGuess == 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed the right Number`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is High`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
