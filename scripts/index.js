import displayIngredients from './home/utils/displayIngredients.js';
import getAppliance from './home/utils/getAppliance.js';
import getUstensils from './home/utils/getUstensils.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray, {
    arrayOfSearchIngredients,
    mainSearchRecipes,
    mainSearchRecipesIngredients,
    mainSearchRecipesAppliances,
    mainSearchRecipesUstensils,
} from './home/utils/sortArray.js';

let newRecipes = recipes;

const displayData = () => {
    getAppliance();
    getUstensils();
    recipeCardContainer.innerHTML = recipeCard(newRecipes);
    ingredientsList.innerHTML = displayIngredients(newRecipes);
    
};

const eventListener = () => {

    searchBar.addEventListener('input', () => {
        if (searchBar.value.length > 2) {
            sortArray(newRecipes);
            recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
        } else if (searchBar.value.length === 2) {
            recipeCardContainer.innerHTML = recipeCard(newRecipes);
            ingredientsList.innerHTML = displayIngredients(newRecipes);
            document.querySelectorAll('.ingredient').forEach((ingredient) => {
                ingredient.addEventListener('mousedown', (e) => {
                    createTag(e.target.innerHTML, '#3282f7',"ingredient");
                    e.target.remove();
                });
            });
            
        }
    });


    filterIngredientsTop.addEventListener('click', () => {
        filterIngredients.focus();
        if (searchBar.value.length < 3) {
            filterIngredients.placeholder = 'Rechercher un ingrédient';
            ingredientsList.style.display = 'flex';
            chevronIngredients.style.transform = 'rotate(180deg)';
        } else {
            filterIngredients.placeholder = 'Rechercher un ingrédients';
            ingredientsList.style.display = 'grid';
            chevronIngredients.style.transform = 'rotate(180deg)';
            ingredientsList.innerHTML = displayIngredients(mainSearchRecipesIngredients);
            document.querySelectorAll('.ingredient').forEach((ingredient) => {
                ingredient.addEventListener('mousedown', (e) => {
                    createTag(e.target.innerHTML, '#3282f7', "ingredient");
                    e.target.remove();
                });
            });
        }
    });

    filterIngredients.addEventListener('focusout', () => {b
        filterIngredients.placeholder = 'Ingrédients';

        ingredientsList.style.display = 'none';
        chevronIngredients.style.transform = 'rotate(0deg)';
        filterIngredients.value = '';
    });

    filterIngredients.addEventListener('input', () => {
        document.querySelectorAll('.ingredient').forEach((ingredient) => {
            if (!ingredient.innerHTML.toLowerCase().includes(filterIngredients.value.toLowerCase())) {
                ingredient.style.display = 'none';
            } else {
                ingredient.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.ingredient').forEach((ingredient) => {
        ingredient.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#3282f7',"ingredient");
            e.target.remove();
        });
    });
    // FILTER TAG S
    let testArray = []
    const createTag = (value, color, type) => {
        const tag = document.createElement('li');
        tag.innerHTML = value;
        tag.classList.add('tag');
        tag.dataset.type = type;
        tag.style.backgroundColor = color;
        tagContainer.appendChild(tag);

        const deleteTag = document.createElement('i');
        deleteTag.classList.add('fa-regular');
        deleteTag.classList.add('fa-circle-xmark');
        tag.appendChild(deleteTag);

        deleteTag.addEventListener('click', (e) => {
             e.target.parentNode.remove();
             sortArray(newRecipes);
             recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
            
        });

        console.log("here");
        sortArray(newRecipes)
        recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);

     

        // FILTER TAG E

    };
  

};

const init = () => {
    displayData();
    eventListener();
};
init();
