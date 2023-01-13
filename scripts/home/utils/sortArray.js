export let mainSearchRecipes = [];
export let mainSearchRecipesIngredients = [];
export let mainSearchRecipesAppliances = [];
export let mainSearchRecipesUstensils = [];
export let arrayOfSearchIngredients = [];

const sortArray = (array) => {
    mainSearchRecipes = [];
    mainSearchRecipesIngredients = [];
    mainSearchRecipesAppliances = [];
    mainSearchRecipesUstensils = [];

    if (searchBar.value.length >= 3) {
        array.forEach((recipe) => {
            if (
                recipe.name.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                mainSearchRecipes.indexOf(recipe) === -1
            ) {
                mainSearchRecipes.push(recipe);
            }
            if (
                recipe.description.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                mainSearchRecipes.indexOf(recipe) === -1
            ) {
                mainSearchRecipes.push(recipe);
            }
            recipe.ingredients.forEach((ingredient) => {
                if (
                    ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                    mainSearchRecipes.indexOf(recipe) === -1
                ) {
                    mainSearchRecipes.push(recipe);
                }
            });
        });
    } else {
        mainSearchRecipes = recipes;
    }

    // Filter with tag

    if (document.querySelectorAll('.tag').length !== 0) {
        document.querySelectorAll('.tag').forEach((tag) => {
            let filteredArray = [];
            mainSearchRecipes.forEach((recipe) => {
                // Ingredients
                if (tag.dataset.type === 'ingredient' && filteredArray.indexOf(recipe) === -1) {
                    recipe.ingredients.forEach((ingredient) => {
                        if (ingredient.ingredient === tag.innerText) {
                            filteredArray.push(recipe);
                        }
                    });
                }

                // Appliances
                if (tag.dataset.type === 'appliance' && filteredArray.indexOf(recipe) === -1) {
                    if (recipe.appliance === tag.innerText) {
                        filteredArray.push(recipe);
                    }
                }
            });
            mainSearchRecipes = filteredArray;
        });
    }

    mainSearchRecipes.forEach((recipe) => {
        // Array of ingredients in mainSearcheRecipes

        recipe.ingredients.forEach((ingredient) => {
            if (mainSearchRecipesIngredients.indexOf(ingredient.ingredient) === -1) {
                mainSearchRecipesIngredients.push(ingredient.ingredient);
            }
        });

        // Array of appliances in mainSearcheRecipes

        if (mainSearchRecipesAppliances.indexOf(recipe.appliance) === -1) {
            mainSearchRecipesAppliances.push(recipe.appliance);
        }

        // Array of ustensils in mainSearcheRecipes

        recipe.ustensils.forEach((ustensils) => {
            if (mainSearchRecipesUstensils.indexOf(ustensils) === -1) {
                mainSearchRecipesUstensils.push(ustensils);
            }
        });
    });
};

export default sortArray;
