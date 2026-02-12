const recycleButton = document.querySelector(".recycle-btn");
const recycleIcon = document.querySelector(".recycle-icon");
const img = document.querySelector("img");

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=9u65p4LmGldePxWFl3g47ygqlqpM8Bzb&s=${getRandomPhrase()}`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});

const gifPhrases = [
  "dogzoomies",
  "confusedreaction",
  "funnycats",
  "epicfail",
  "randommeme",
  "sleepycat",
  "laughingreaction",
  "dogfail",
  "awkwardmoment",
  "animalreaction",
  "chaosmeme",
  "exciteddog",
  "catstare",
  "wtfreaction",
  "cuteanimals",
  "dramaticcat",
  "randomfunny",
  "guiltydog",
  "unexpectedmoment",
  "funnygif",
  "angrycat",
  "relatablememe",
  "confuseddog",
  "animalfail",
  "memegif",
  "dogchaos",
  "shockedreaction",
  "funnyanimals",
  "catfail",
  "weirdbutfunny",
  "happydog",
  "reactiongif",
  "awkwardreaction",
  "randomreaction",
  "sleepydog",
  "funnydogs",
  "catchaos",
  "epicreaction",
  "randomgif",
  "dogsideeye",
  "confusedcat",
  "chaosenergy",
  "animalchaos",
  "funnyfail",
  "catknockover",
  "unexpectedfail",
  "dogconfused",
  "memereaction",
  "purechaos",
];

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * gifPhrases.length);
  return gifPhrases[randomIndex];
}

recycleButton.addEventListener("click", () => {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=9u65p4LmGldePxWFl3g47ygqlqpM8Bzb&s=${getRandomPhrase()}`,
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
  recycleIcon.classList.remove("spin-once");
  void recycleIcon.offsetWidth;
  recycleIcon.classList.add("spin-once");
});

recycleIcon.addEventListener("animationend", () => {
  recycleIcon.classList.remove("spin-once");
});
