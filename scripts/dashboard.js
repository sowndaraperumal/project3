const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const indicatorparent = document.querySelector(".controls ul");
var sectionIndex = 0;

function setIndex() {
  document.querySelector(".controls .selected").classList.remove("selected");
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}
document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    sectionIndex = ind;

    setIndex();
    indicator.classList.add("selected");
  });
});
rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  setIndex();
  indicatorparent.children[sectionIndex].classList.add("selected");
});

leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  setIndex();
  indicatorparent.children[sectionIndex].classList.add("selected");
});
const titles = document.querySelectorAll(".accordion-container .title");
const arrows = document.querySelectorAll(".arrows");
const contents = document.querySelectorAll(".accordion-container .content");

function hidePanel() {
  contents.forEach(function (content) {
    content.classList.remove("show");
  });
}

titles.forEach(function (title) {
  title.addEventListener("click", function () {
    hidePanel();
    title.nextElementSibling.classList.add("show");
  });
});
