// ** Variables

const keyboard = document.getElementById("qwerty");
const phraseArea = document.getElementById("phrase");
const startButton = document.querySelector(".btn_reset");
const startOverlay = document.getElementById("overlay");
const resetButton = document.querySelector(".btn_new");

let phrase = "";
let missed = 0;

// ** Array of Phrases

const phrases = [
  "it will grow on you",
  "please fasten your seat belts",
  "our door is always open",
  "in the right frame of mind",
  "low impact",
  "all that jazz",
  "put on your thinking cap",
  "the root of the matter",
  "after dark",
  "make a mountain out of a molehill",
  "engrossed in thought",
  "finish your thought",
  "two ships that pass in the night",
  "all dressed up and nowhere to go",
  "to the best of my ability",
  "one potato two potato three potato four",
  "we accept most major credit cards",
  "you scared me half to death",
  "double whammy",
  "access denied",
  "call me when you get a second",
  "take it to the next level",
  "your call cannot be completed as dialed",
  "a bargain at half the price",
  "a chip off the old block",
  "top agricultural producer in america",
  "equal footing",
  "streets ahead",
  "optimal wellness",
  "variety is the spice of life",
];

// ** Functions

// starts event listener for 'start game' button
function startGame() {
  startButton.addEventListener("click", (event) => {
    if (startOverlay.style.display !== "none") {
      startOverlay.style.display = "none";
    }
  });
  addPhraseToDisplay(getRandomPhraseAsArray(phrases));
}

// Get Random Phrase
const getRandomPhraseAsArray = (array) => {
  let random = Math.floor(Math.random() * phrases.length);
  let randomPhrase = array[random];
  phrase = Array.from(randomPhrase);
  return phrase;
};

function addPhraseToDisplay(phraseArray) {
  for (let i = 0; i < phraseArray.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = phraseArray[i];
    if (li.textContent === " ") {
      li.className = "space";
    } else {
      li.className = "letter";
    }
    phraseArea.firstElementChild.appendChild(li);
  }
}

// Event Listener for the Keyboard

function keyListen() {
  keyboard.addEventListener("click", (event) => {
    let letterClicked = event.target.textContent;
    if (
      event.target.className !== "chosen" &&
      event.target.parentNode.className === "keyrow"
    ) {
      checkLetter(letterClicked);
      event.target.className = "chosen";
      checkWin();
    }
  });
}

// Check to see if letter matches
function checkLetter(letterClicked) {
  let hearts = document.getElementsByClassName("hearts");
  const letters = document.getElementsByClassName("letter");
  let match = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letterClicked === letters[i].textContent) {
      letters[i].classList.add("show");
      match += 1;
    }
  }
  if (match < 1) {
    hearts[0].src = "images/lostHeart.png";
    hearts[0].removeAttribute("class");
    missed += 1;
  }
}
// check win wfucntion

function checkWin() {
  const letter = document.getElementsByClassName("letter");
  const show = document.getElementsByClassName("show");
  const title = document.querySelector(".title");
  if (letter.length === show.length) {
    startOverlay.className = "win";
    title.textContent = `You got it right! Fantastic Job.... Please try again!`;
    startButton.textContent = "Restart";
    startOverlay.style.display = "flex";
    endGame();
  }
  if (missed > 4) {
    startOverlay.className = "lose";
    title.textContent = `You have run out of tries... Please try again!`;
    startButton.textContent = "Restart";
    startOverlay.style.display = "flex";
    endGame();
  }
}

//reset board
function endGame() {
  resetBoard();
  startGame();
}

function resetBoard() {
  let ul = phraseArea.firstElementChild;
  ul.innerHTML = "";

  let hearts = document.getElementsByClassName("tries");
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].firstElementChild.src = "images/liveHeart.png";
    hearts[i].firstElementChild.className = "hearts";
  }
  let keys = keyboard.getElementsByTagName("button");
  for (let i = 0; i < keys.length; i++) {
    keys[i].classList.remove("chosen");
  }
  missed = 0;
}

// ** Script

//game begins, start game button enabled

startGame();
keyListen();
