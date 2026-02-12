const recycleButton = document.querySelector(".recycle-btn");
const recycleIcon = document.querySelector(".recycle-icon");
const img = document.querySelector("img");
const loadingIndicator = document.querySelector(".loading-indicator");

const API_KEY = "9u65p4LmGldePxWFl3g47ygqlqpM8Bzb";
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

function buildGifUrl() {
  return `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${getRandomPhrase()}`;
}

function showLoading() {
  loadingIndicator.classList.remove("hidden");
  recycleButton.disabled = true;
}

function hideLoading() {
  loadingIndicator.classList.add("hidden");
  recycleButton.disabled = false;
}

function requestGif() {
  showLoading();
  fetch(buildGifUrl())
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.error("Unable to load GIF:", error);
      hideLoading();
    });
}

document.addEventListener("DOMContentLoaded", requestGif);

recycleButton.addEventListener("click", () => {
  requestGif();
  recycleIcon.classList.remove("spin-once");
  void recycleIcon.offsetWidth;
  recycleIcon.classList.add("spin-once");
});

recycleIcon.addEventListener("animationend", () => {
  recycleIcon.classList.remove("spin-once");
});

img.addEventListener("load", () => {
  hideLoading();
});

img.addEventListener("error", () => {
  hideLoading();
});
