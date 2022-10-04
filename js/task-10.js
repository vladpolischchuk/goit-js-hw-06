function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberBoxes = document.querySelector("input");
const buttonCreateBoxes = document.querySelector("[data-create]");
const buttonDestroyBoxes = document.querySelector("[data-destroy]");
const outputMurkupBoxes = document.querySelector("#boxes");

function createBoxes(number) {
  if (number) {
    outputMurkupBoxes.innerHTML = "";
    
    for (let i = 0; i < number; i++) {
      const murkupBoxes = `<div style="width:${30 + i * 10}px; height:${30 + i * 10}px; background-color:${getRandomHexColor()}" ></div>`;
      outputMurkupBoxes.insertAdjacentHTML("beforeend", murkupBoxes);
    }
  };
};

buttonCreateBoxes.addEventListener("click", () => {
  createBoxes(inputNumberBoxes.value);
});

buttonDestroyBoxes.addEventListener("click", () => {
  outputMurkupBoxes.innerHTML = ""
});

