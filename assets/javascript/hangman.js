//This file contains every principal functions needed for the game

//A bunch of variables to begin softly
let answer = '';
let maxTries = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

//Main function, it will handle all functions to know where the gamer is.
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

//For every mistake made, the function will take a updated picture of the hangman from the images folder.
function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './assets/images/' + mistakes + '.jpg';
}

//The following checkers will secure that the game is won or lost.
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

//Coupled to a button, if the game is lost or the player is a coward, it will reset the game
function reset() {  
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './assets/images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  letterButtons();
}

document.getElementById('maxWrong').innerHTML = maxTries;

//Functions called from the 'initiate.js' file.
randomWord();
letterButtons();

guessedWord();
