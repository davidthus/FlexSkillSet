const wrapper = document.querySelector(".slider-wrapper");
const sliderItems = document.querySelectorAll(".item");
const leftArrows = document.querySelectorAll(".arrow_left");
const rightArrows = document.querySelectorAll(".arrow_right");

leftArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    wrapper.style.transform = "translateX(100vw)";
  });
});

rightArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    wrapper.style.transform = "translateX(-100vw)";
  });
});
