// Set the target dates for the countdowns (in UTC)
const targetDate = new Date("2023-12-31T00:00:00Z").getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const countdownContainers = document.querySelectorAll(".product-card");

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownContainers.forEach((container) => {
      const countdownValues = container.querySelectorAll(".countdown-value");
      countdownValues[0].textContent = String(days).padStart(2, "0");
      countdownValues[1].textContent = String(hours).padStart(2, "0");
      countdownValues[2].textContent = String(minutes).padStart(2, "0");
      countdownValues[3].textContent = String(seconds).padStart(2, "0");
    });
  } else {
    countdownContainers.forEach((container) => {
      const countdownValues = container.querySelectorAll(".countdown-value");
      countdownValues.forEach((value) => (value.textContent = "00"));
    });
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown values
updateCountdown();

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

// Navbar toggle burger menu
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

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
