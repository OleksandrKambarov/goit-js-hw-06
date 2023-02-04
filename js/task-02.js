const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const ingredientEl = ingredients.map(({ingredient, value}) => {
  const li = document.createElement('li');
  li.textCotent = ingredients.value;

  li.classList.add('item');
  
  return li
})


ingredientsEl.append(...ingredientEl);
console.log(ingredientEl);