import getIngredients from './home/components/getIngredients.js';
import getAppliance from './home/components/getAppliance.js';
import getUstensils from './home/components/getUstensils.js';
import recipeCard from './home/components/recipeCard.js';

const displayData = () => {
    getIngredients();
    getAppliance();
    getUstensils();
    recipeCardContainer.innerHTML = recipeCard();
    ingredientsList.innerHTML = getIngredients();
};

displayData();
