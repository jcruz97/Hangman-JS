function letterButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button class="btn btn-lg btn-primary m-2" id='`+ letter +`' onClick="handleGuess('`+ letter +`')"> ` + letter + `</button>`).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//This function permits the keyboard to be generated for every letter of the alphabet