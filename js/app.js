// ** Variables

const keyboard = document.getElementById("qwerty");
const phraseArea = document.getElementById("phrase");
const startButton = document.querySelector(".btn_reset");
const startOverlay = document.getElementById("overlay");
let hearts = document.getElementsByClassName("tries");
let phrase = "";
let missed = 0;

// ** Array of Phrases

const phrases = [
  "it will grow on you",
  "please fasten your seat belts",
  "our door is always open",
  "in the right frame of mind",
  "all that jazz",
  "put on your thinking cap",
  "the root of the matter",
  "engrossed in thought",
  "finish your thought",
  "to the best of my ability",
  "we accept most major credit cards",
  "you scared me half to death",
  "take it to the next level",
  "a bargain at half the price",
  "a chip off the old block",
  "top agricultural producer in america",
  "streets ahead",
  "variety is the spice of life",
];

// ** Functions

// starts event listener for 'start game' button
const startGame = () => {
  startButton.addEventListener("click", (event) => {
    if (startOverlay.style.display !== "none") {
      startOverlay.style.display = "none";
    }
  });
};

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

// ! Begin Current Work Zone

// ! Currently trying to log whether or not it was a match and manipulate the hearts in the scoreboard.....

// Check to see if letter matches
function checkLetter(letterClicked) {
  const letters = document.getElementsByClassName("letter");
  let match = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letterClicked === letters[i].textContent) {
      letters[i].classList.add("show");
      match += 1;
    }
  }
  if (match < 1) {
  }
}

// Event Listener for the Keyboard

function keyListen() {
  keyboard.addEventListener("click", (event) => {
    let letterClicked = event.target.textContent;
    if (event.target.className !== "chosen") {
      checkLetter(letterClicked);
      event.target.className = "chosen";
    }
    console.log(letterClicked);
  });
}

// ! End Currrent Work Zone

// ** Script

//game begins, start game button enabled
startGame();
addPhraseToDisplay(getRandomPhraseAsArray(phrases));
keyListen();
