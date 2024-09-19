//exo 1 Timer-Based Guessing Game

function displayChar(word) {
  for (let i = 0; i < word.length; i++) {
    setTimeout(() => console.log(word[i]), i * 1000);
  }
}

displayChar("Hello");
