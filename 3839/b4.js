const jokes = [
  { joke: "All vampires keep their money in a special place—the blood bank." },
];

const jokeElement = document.querySelector(".joke");
const button = document.querySelector(".get-joke");

button.addEventListener("click", function () {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeElement.textContent = randomJoke.joke;

  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
