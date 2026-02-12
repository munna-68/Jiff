const recycleButton = document.querySelector(".recycle-btn");
const recycleIcon = document.querySelector(".recycle-icon");
const img = document.querySelector("img");

recycleButton.addEventListener("click", () => {
  recycleIcon.classList.remove("spin-once");
  void recycleIcon.offsetWidth;
  recycleIcon.classList.add("spin-once");
});

recycleIcon.addEventListener("animationend", () => {
  recycleIcon.classList.remove("spin-once");
});

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=9u65p4LmGldePxWFl3g47ygqlqpM8Bzb&s=cats",
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
