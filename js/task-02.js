const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listingredients = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const newItem = document.createElement("li");
  
  newItem.classList.add("item");
  newItem.textContent = ingredient;
  
  listingredients.append(newItem);
});