const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listingredients = document.querySelector('#ingredients');

const newItems = ingredients.map(ingredient => {
  const newEl = document.createElement("li");
  
  newEl.classList.add("item");
  newEl.textContent = ingredient;
  return newEl;
});

listingredients.append(...newItems);