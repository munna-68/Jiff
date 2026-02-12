const recycleButton = document.querySelector(".recycle-btn");
const recycleIcon = document.querySelector(".recycle-icon");

if (recycleButton && recycleIcon) {
  recycleButton.addEventListener("click", () => {
    recycleIcon.classList.remove("spin-once");
    void recycleIcon.offsetWidth;
    recycleIcon.classList.add("spin-once");
  });

  recycleIcon.addEventListener("animationend", () => {
    recycleIcon.classList.remove("spin-once");
  });
}
