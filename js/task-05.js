const textInput = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
        outputText.textContent = event.currentTarget.value;
    } else {
        outputText.textContent = 'Anonymous';
    };
});