// ** Variables

const keyboard = document.getElementById("qwerty");
const phraseArea = document.getElementById("phrase");
const button = document.querySelector(".btn_reset");
const overlay = document.getElementById("overlay");
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
  "top agricultural producer in america",
  "streets ahead",
  "variety is the spice of life",
];

// ** Functions

// starts event listener for 'start game' button
const startGame = () => {
  button.addEventListener("click", (event) => {
    if (overlay.style.display !== "none") {
      overlay.style.display = "none";
    }
  });
};

// Get Random Phrase
const getRandomPhraseAsArray = (array) => {
  let random = Math.floor(Math.random() * phrases.length);
  let randomPhrase = array[random];
  let phraseArray = Array.from(randomPhrase);
  //!  console.log(phraseArray);
  return phraseArray;
};

// ** Script

//game begins, start game button enabled
startGame();
getRandomPhraseAsArray(phrases);
