import getIngredients from './home/components/getIngredients.js';
import getAppliance from './home/components/getAppliance.js';
import getUstensils from './home/components/getUstensils.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray from './home/utils/sortArray.js';
import { arrayOfSearchRecipe } from './home/utils/sortArray.js';

const displayData = () => {
    getIngredients();
    getAppliance();
    getUstensils();
    recipeCardContainer.innerHTML = recipeCard(recipes);
    ingredientsList.innerHTML = getIngredients();

    searchBar.addEventListener("input",() => {
        if (searchBar.value.length > 2) {
            sortArray();
            console.log(arrayOfSearchRecipe);
            recipeCardContainer.innerHTML = recipeCard(arrayOfSearchRecipe);
        }
    
    });
};

displayData();
