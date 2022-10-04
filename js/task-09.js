function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const outputText = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  outputText.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});