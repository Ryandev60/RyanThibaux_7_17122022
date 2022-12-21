import getIngredients from './home/components/getIngredients.js';
import getAppliance from './home/components/getAppliance.js';
import getUstensils from './home/components/getUstensils.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray, { arrayOfSearchIngredients } from './home/utils/sortArray.js';
import { arrayOfSearchRecipe } from './home/utils/sortArray.js';

const displayData = () => {
    getIngredients();
    getAppliance();
    getUstensils();
    recipeCardContainer.innerHTML = recipeCard(recipes);
    ingredientsList.innerHTML = getIngredients();

    searchBar.addEventListener('input', () => {
        if (searchBar.value.length > 2) {
            sortArray(recipes, 'search-bar');
            recipeCardContainer.innerHTML = recipeCard(arrayOfSearchRecipe);
        }
        else if (searchBar.value.length === 2){
             recipeCardContainer.innerHTML = recipeCard(recipes);
        }
    });

    filterIngredients.addEventListener('input', () => {
        if (searchBar.value.length > 2) {
            sortArray(arrayOfSearchRecipe, 'ingredients');
            recipeCardContainer.innerHTML = recipeCard(arrayOfSearchIngredients);
        }
        if (searchBar.value.length < 3) {
            sortArray(recipes, 'ingredients');
            recipeCardContainer.innerHTML = recipeCard(arrayOfSearchIngredients);
        }
    });
};

displayData();
