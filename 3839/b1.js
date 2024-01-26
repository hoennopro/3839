const steps = document.querySelectorAll(".step");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");

let step = 1;

nextButton.onclick = () => {
  step++;
  if (step === 5) {
    nextButton.disabled = true;
  }
  steps[step - 1].classList.add("active");
};

previousButton.onclick = () => {
  step--;
  if (step === 1) {
    previousButton.disabled = true;
  }
  steps[step - 1].classList.remove("active");
};
