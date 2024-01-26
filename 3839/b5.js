const container = document.querySelector("#container");
const image = document.querySelector("img");
const counter = document.querySelector("#counter");
const number = document.querySelector("#number");

const numbers = image.querySelectorAll("span");

let currentNumber = 0;

let interval = setInterval(runNumber, 100);

function runNumber() {
  currentNumber++;

  number.textContent = currentNumber;

  if (currentNumber >= numbers.length) {
    clearInterval(interval);
  }
}

window.addEventListener("load", function () {
  interval = setInterval(runNumber, 100);
});
