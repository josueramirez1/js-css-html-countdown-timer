const sliderFill = document.querySelector(".fill");
const timeLeftText = document.querySelector("#time-left");
const customSlider = document.querySelector(".custom-slider");
const countdownInSecondsText = document.querySelector("h3");
let startCount = 60;
let timeLeft = startCount;

const timerId = setInterval(() => {
  timeLeft--;
  timeLeftText.textContent = timeLeft;
  sliderFill.style.width = (timeLeft / startCount) * 100 + "%";
  if (timeLeft <= 0) {
    clearInterval(timerId);
    timeLeftText.textContent = "HAPPY NEW YEAR!";
    customSlider.remove();
    countdownInSecondsText.remove();
    suprise();
  }
}, 1000);

function suprise() {
  const colors = [
    "rgba(255,100,97,0.5)",
    "rgba(97,168,255,0.5)",
    "rgba(247, 255, 97, 0.5)",
    "rgba(97,255,184, 0.5)",
    "rgba(255,255,255,0.5)",
  ];

  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const circleElement = document.createElement("div");
      circleElement.classList.add("circle");
      circleElement.style.left = Math.floor(Math.random() * 100) + "%";
      circleElement.style.top = Math.floor(Math.random() * 100) + "%";
      circleElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      timeLeftText.append(circleElement);
    }, i * 5);
  }
}
