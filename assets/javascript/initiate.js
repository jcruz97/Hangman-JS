function letterButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button class="btn btn-lg btn-dark m-2" id='`+ letter +`' onClick="handleGuess('`+ letter +`')"> ` + letter + `</button>`).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//This function permits the keyboard to be generated for every letter of the alphabet

function randomWord() {
    answer = belgian_beer[Math.floor(Math.random() * belgian_beer.length)];
}

//This function randomize an answer in th list provided in the beer_list file