const textInput = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    outputText.textContent = event.currentTarget.value;
});