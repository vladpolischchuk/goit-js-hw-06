const valueMurkup = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementNumberAction = () => {
    counterValue -= 1;
    valueMurkup.textContent = counterValue;
};

const incrementNumberAction = () => {
    counterValue += 1; 
    valueMurkup.textContent = counterValue;
};

decrementButton.addEventListener('click',decrementNumberAction);
incrementButton.addEventListener('click',incrementNumberAction);