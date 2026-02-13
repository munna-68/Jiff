const randomizeButton = document.querySelector(".randomize-btn");
const randomizeIcon = document.querySelector(".randomize-icon");
const img = document.querySelector("img");
const loadingIndicator = document.querySelector(".loading-indicator");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");

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

function buildGifUrl(searchString) {
  let url;
  if (searchString) {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchString}`;
  } else {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${getRandomPhrase()}`;
  }
  return url;
}

function showLoading() {
  loadingIndicator.classList.remove("hidden");
  randomizeButton.disabled = true;
}

function hideLoading() {
  loadingIndicator.classList.add("hidden");
  randomizeButton.disabled = false;
}

function requestGif(searchString) {
  showLoading();
  fetch(buildGifUrl(searchString))
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

searchButton.addEventListener("click", () => {
  if (searchInput.value) {
    let searchRequest = searchInput.value.trim();
    console.log(searchRequest);
    requestGif(searchRequest);
  } else {
    console.log("No Input value");
  }
});

randomizeButton.addEventListener("click", () => {
  requestGif();
  randomizeIcon.classList.remove("spin-once");
  void randomizeIcon.offsetWidth;
  randomizeIcon.classList.add("spin-once");
});

randomizeIcon.addEventListener("animationend", () => {
  randomizeIcon.classList.remove("spin-once");
});

img.addEventListener("load", () => {
  hideLoading();
});

img.addEventListener("error", () => {
  hideLoading();
});
