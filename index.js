const dot = document.querySelectorAll(".dot");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const cardWrapper1 = document.querySelector(".card-wrapper.one");
const cardWrapper2 = document.querySelector(".card-wrapper.two");
const cardWrapper3 = document.querySelector(".card-wrapper.three");

const selectDot = (e) => {
  dot.forEach((dot) => dot.classList.remove("selected"));
  e.target.classList.add("selected");

  cardWrapper1.classList.add("hide");
  cardWrapper2.classList.add("hide");
  cardWrapper3.classList.add("hide");

  if (e.target.classList.contains("dot-1")) {
    cardWrapper1.classList.remove("hide");
  } else if (e.target.classList.contains("dot-2")) {
    cardWrapper2.classList.remove("hide");
  } else if (e.target.classList.contains("dot-3")) {
    cardWrapper3.classList.remove("hide");
  }
};

const addListener = () => {
  dot1.addEventListener("click", selectDot);
  dot2.addEventListener("click", selectDot);
  dot3.addEventListener("click", selectDot);
};

addListener();
