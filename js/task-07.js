const inputSize = document.querySelector('#font-size-control');
const outputSizeText = document.querySelector('#text');

outputSizeText.style.fontSize = inputSize.value + "px";

inputSize.addEventListener('input', (event) => {
    outputSizeText.style.fontSize = event.currentTarget.value + "px"; 
});