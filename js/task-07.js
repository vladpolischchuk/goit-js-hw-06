const inputSize = document.querySelector('#font-size-control');
const outputSizeText = document.querySelector('#text');

inputSize.addEventListener('input', (event) => {
    outputSizeText.style.fontSize = inputSize.value + "px"; 
});