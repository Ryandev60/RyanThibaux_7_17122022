// Import
import listElement from './home/components/listElement.js';
import recipeCard from './home/components/recipeCard.js';
import sortArray, {
    filteredRecipes,
    filteredIngredients,
    filteredAppliances,
    filteredUstensils,
} from './home/utils/sortArray.js';
// Global variables
let lessThan3 = true;

// Add event listener searchbar
searchBar.addEventListener('input', () => {
    // Searchbar start filter when 3 characters are write else if we reset
    if (searchBar.value.length >= 3) {
        sortArray(recipes);
        recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
        displayFilterList();
        lessThan3 = false;
        if (filteredRecipes.length === 0) {
            console.log('test');
            recipeCardContainer.innerHTML = `
            <div class="not-found">
            <img src="./assets/images/icon-grey.jpg">
                 <p>Aucune recette ne correspond à votre recherche !</p>
            </div>
`;
        }
    } else if (searchBar.value.length < 3 && lessThan3 === false) {
        sortArray(recipes);
        recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
        displayFilterList();
        lessThan3 = true;
    }
});

// Function to display filter lists
const displayFilterList = () => {
    //Ingredients
    ingredientsList.innerHTML = listElement(filteredIngredients, 'ingredient');
    // Add event listener on each ingredients
    document.querySelectorAll('.ingredient').forEach((ingredient) => {
        ingredient.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#3282f7', 'ingredient');
            e.target.remove();
        });
    });

    // Appliances
    appliancesList.innerHTML = listElement(filteredAppliances, 'appliance');
    // Add event listener on each appliances
    document.querySelectorAll('.appliance').forEach((appliance) => {
        appliance.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#68d9a4', 'appliance');
            e.target.remove();
        });
    });

    // Ustensils
    ustensilsList.innerHTML = listElement(filteredUstensils, 'ustensil');
    // Add event listener on each ustensils
    document.querySelectorAll('.ustensil').forEach((ustensil) => {
        ustensil.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#ed6454', 'ustensil');
            e.target.remove();
        });
    });
};

//Function for add different event listener on different filters
const filterByTag = () => {
    // Ingredients
    filterIngredientsTop.addEventListener('click', () => {
        filterIngredients.focus();
        filterIngredients.placeholder = 'Rechercher un ingrédient';
        ingredientsList.style.display = 'flex';
        chevronIngredients.style.transform = 'rotate(180deg)';
        displayFilterList();
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
        filterAppliances.placeholder = 'Rechercher un appareil';
        appliancesList.style.display = 'flex';
        chevronAppliances.style.transform = 'rotate(180deg)';
        displayFilterList();
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
        filterUstensils.placeholder = 'Rechercher un ustensile';
        ustensilsList.style.display = 'flex';
        chevronUstensils.style.transform = 'rotate(180deg)';
        displayFilterList();
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

// Function for create tag

const createTag = (value, color, type) => {
    // Create tag
    const tag = document.createElement('li');
    tag.innerHTML = value;
    tag.classList.add('tag');
    tag.dataset.type = type;
    tag.style.backgroundColor = color;
    tagContainer.appendChild(tag);

    // Create xmark icon for delete tag
    const deleteTag = document.createElement('i');
    deleteTag.classList.add('fa-regular');
    deleteTag.classList.add('fa-circle-xmark');
    tag.appendChild(deleteTag);

    // Event listener for delete tag
    deleteTag.addEventListener('click', (e) => {
        e.target.parentNode.remove();
        sortArray(recipes);
        recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
    });

    // Filter array on display the result
    sortArray(recipes);
    recipeCardContainer.innerHTML = recipeCard(filteredRecipes);
};

// Function for initialize the project
const init = () => {
    filterByTag();
    recipeCardContainer.innerHTML = recipeCard(recipes);
    sortArray(recipes);
    displayFilterList();
};
init();
