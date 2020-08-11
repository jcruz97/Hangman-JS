//This file contains every principal functions needed for the game

//A bunch of variables to begin softly
let answer = '';
let maxTries = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './assets/images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'Congrats mate';
  }
}

function checkIfGameLost() {
  if (mistakes === maxTries) {
    document.getElementById('wordSpotlight').innerHTML = 'The correct beer was: ' + answer;
    document.getElementById('keyboard').innerHTML = "You shouldn"+"'"+"t have another beer...";
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {  //Coupled to a button, if the game is lost or the player is a coward, it will reset the game
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './assets/images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  letterButtons();
}

document.getElementById('maxWrong').innerHTML = maxTries;

randomWord();
letterButtons();
guessedWord();
