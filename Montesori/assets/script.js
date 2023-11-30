// Accordion in FAQ
function toggleAnswer(id) {
  const answers = document.querySelectorAll(".panel");
  answers.forEach((answer) => {
    if (answer.id === `answer${id}`) {
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    } else {
      answer.style.display = "none";
    }
  });
}

// Show the answer for the first question by default
document.getElementById("answer1").style.display = "block";

// Lightslider
let isSliderInitialized = false;

$(document).ready(function () {
  function initOrDestroySlider() {
    if ($(window).width() < 768) {
      if (!isSliderInitialized) {
        $(".card-container").lightSlider({
          item: 1,
          slideMove: 1,
          slideMargin: 1,
          controls: true,
          pager: true,
        });
        isSliderInitialized = true;
      }
    } else {
      if (isSliderInitialized) {
        $(".card-container").lightSlider("destroy");
        isSliderInitialized = false;
      }
    }
  }

  initOrDestroySlider();
  $(window).resize(initOrDestroySlider);
});

// ORDER input field
function increment() {
  document.querySelector(".number-input").stepUp();
}

function decrement() {
  document.querySelector(".number-input").stepDown();
}
