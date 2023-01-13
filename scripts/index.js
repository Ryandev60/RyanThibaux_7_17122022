import displayIngredients from './home/utils/displayIngredients.js';
import displayAppliance from './home/utils/displayAppliance.js';
import getUstensils from './home/utils/getUstensils.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray, {
    arrayOfSearchIngredients,
    mainSearchRecipes,
    mainSearchRecipesIngredients,
    mainSearchRecipesAppliances,
    mainSearchRecipesUstensils,
} from './home/utils/sortArray.js';

const displayData = () => {
    recipeCardContainer.innerHTML = recipeCard(recipes);
    displayFilterList(recipes,recipes);
};

const eventListener = () => {
    searchBar.addEventListener('input', () => {
        console.log(searchBar.value.length);
        if (searchBar.value.length >= 3) {
            sortArray(recipes);
            recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
            displayFilterList(mainSearchRecipesIngredients, mainSearchRecipesAppliances);
        } else {
            sortArray(recipes);
            recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
            displayFilterList(recipes,recipes);
        }
    });
};

const displayFilterList = (arrayForIngredients,arrayForAppliances) => {
    ingredientsList.innerHTML = displayIngredients(arrayForIngredients);
    document.querySelectorAll('.ingredient').forEach((ingredient) => {
        ingredient.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#3282f7', 'ingredient');
            e.target.remove();
        });
    });
    appliancesList.innerHTML = displayAppliance(arrayForAppliances);
    document.querySelectorAll('.appliance').forEach((appliance) => {
        appliance.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#68d9a4', 'appliance');
            e.target.remove();
        });
    });
};

const filterByTag = () => {
    // Ingredients

    filterIngredientsTop.addEventListener('click', () => {
        filterIngredients.focus();
        if (searchBar.value.length < 3) {
            filterIngredients.placeholder = 'Rechercher un ingrédient';
            ingredientsList.style.display = 'flex';
            chevronIngredients.style.transform = 'rotate(180deg)';
        } else {
            filterIngredients.placeholder = 'Rechercher un ingrédient';
            ingredientsList.style.display = 'grid';
            chevronIngredients.style.transform = 'rotate(180deg)';
            displayFilterList(recipes,recipes);
        }
    });

    filterIngredients.addEventListener('focusout', () => {
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

    // Appliances

    filterAppliancesTop.addEventListener('click', () => {
        filterAppliances.focus();
        if (searchBar.value.length < 3) {
            filterAppliances.placeholder = 'Rechercher un appareil';
            appliancesList.style.display = 'flex';
            chevronAppliances.style.transform = 'rotate(180deg)';
        } else {
            filterAppliances.placeholder = 'Rechercher un appareil';
            appliancesList.style.display = 'grid';
            chevronAppliances.style.transform = 'rotate(180deg)';
            displayFilterList(recipes,recipes);
        }
    });

    filterAppliancesTop.addEventListener('focusout', () => {
        filterAppliances.placeholder = 'Appareils';
        appliancesList.style.display = 'none';
        chevronAppliances.style.transform = 'rotate(0deg)';
        filterAppliances.value = '';
    });

    filterAppliances.addEventListener('input', () => {
        document.querySelectorAll('.appliance').forEach((appliance) => {
            if (!appliance.innerHTML.toLowerCase().includes(filterAppliances.value.toLowerCase())) {
                appliance.style.display = 'none';
            } else {
                appliance.style.display = 'block';
            }
        });
    });
};

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
        sortArray(recipes);
        recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
    });

    sortArray(recipes);
    recipeCardContainer.innerHTML = recipeCard(mainSearchRecipes);
};

const init = () => {
    filterByTag();
    displayData();
    eventListener();
};
init();
