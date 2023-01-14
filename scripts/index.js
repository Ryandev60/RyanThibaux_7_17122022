import displayListElement from './home/utils/displayListElement.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray, {
    filteredRecipes,
    filteredIngredients,
    filteredAppliances,
    filteredUstensils,
} from './home/utils/sortArray.js';

const displayData = () => {
    recipeCardContainer.innerHTML = recipeCard(recipes);
    sortArray(recipes);
    displayFilterList();
};

const eventListener = () => {
    searchBar.addEventListener('input', () => {
        if (searchBar.value.length >= 3) {
            sortArray(recipes);
            recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
            displayFilterList();
        } else {
            sortArray(recipes);
            recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
            displayFilterList();
        }
    });
};


const displayFilterList = () => {
    //Ingredients
    ingredientsList.innerHTML = displayListElement(filteredIngredients, 'ingredient');
    document.querySelectorAll('.ingredient').forEach((ingredient) => {
        ingredient.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#3282f7', 'ingredient');
            e.target.remove();
        });
    });

    // Appliances
    appliancesList.innerHTML = displayListElement(filteredAppliances, 'appliance');
    document.querySelectorAll('.appliance').forEach((appliance) => {
        appliance.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#68d9a4', 'appliance');
            e.target.remove();
        });
    });

    // Ustensils
    ustensilsList.innerHTML = displayListElement(filteredUstensils, 'ustensil');
    document.querySelectorAll('.ustensil').forEach((ustensil) => {
        ustensil.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#ed6454', 'ustensil');
            e.target.remove();
        });
    });
};


const filterByTag = () => {
    // Ingredients

    filterIngredientsTop.addEventListener('click', () => {
        filterIngredients.focus();
        if (searchBar.value.length >= 3) {
            filterIngredients.placeholder = 'Rechercher un ingrédient';
            ingredientsList.style.display = 'flex';
            chevronIngredients.style.transform = 'rotate(180deg)';
        } else {
            filterIngredients.placeholder = 'Rechercher un ingrédient';
            ingredientsList.style.display = 'flex';
            chevronIngredients.style.transform = 'rotate(180deg)';
            displayFilterList();
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
        if (searchBar.value.length >= 3) {
            filterAppliances.placeholder = 'Rechercher un appareil';
            appliancesList.style.display = 'flex';
            chevronAppliances.style.transform = 'rotate(180deg)';
        } else {
            filterAppliances.placeholder = 'Rechercher un appareil';
            appliancesList.style.display = 'flex';
            chevronAppliances.style.transform = 'rotate(180deg)';
            displayFilterList();
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

    // Ustensils

    filterUstensilsTop.addEventListener('click', () => {
        filterUstensils.focus();
        if (searchBar.value.length >= 3) {
            filteredUstensils.placeholder = 'Rechercher un ustensile';
            ustensilsList.style.display = 'flex';
            chevronUstensils.style.transform = 'rotate(180deg)';
        } else {
            filteredUstensils.placeholder = 'Rechercher un ustensile';
            ustensilsList.style.display = 'flex';
            chevronUstensils.style.transform = 'rotate(180deg)';
            displayFilterList();
        }
    });

    filterUstensilsTop.addEventListener('focusout', () => {
        filterUstensils.placeholder = 'Ustensiles';
        ustensilsList.style.display = 'none';
        chevronUstensils.style.transform = 'rotate(0deg)';
        filterUstensils.value = '';
    });

    filterUstensils.addEventListener('input', () => {
        document.querySelectorAll('.ustensil').forEach((ustensil) => {
            if (!ustensil.innerHTML.toLowerCase().includes(filterUstensils.value.toLowerCase())) {
                ustensil.style.display = 'none';
            } else {
                ustensil.style.display = 'block';
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
        recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
    });

    sortArray(recipes);
    recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
};

const init = () => {
    filterByTag();
    displayData();
    eventListener();
};
init();
