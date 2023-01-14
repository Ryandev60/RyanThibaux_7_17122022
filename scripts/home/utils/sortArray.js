export let filteredRecipes = [];
export let filteredIngredients = [];
export let filteredAppliances = [];
export let filteredUstensils = [];

const sortArray = (array) => {
    filteredRecipes = [];
    filteredIngredients = [];
    filteredAppliances = [];
    filteredUstensils = [];

    if (searchBar.value.length >= 3) {
        array.forEach((recipe) => {
            if (
                recipe.name.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                filteredRecipes.indexOf(recipe) === -1
            ) {
                filteredRecipes.push(recipe);
            }
            if (
                recipe.description.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                filteredRecipes.indexOf(recipe) === -1
            ) {
                filteredRecipes.push(recipe);
            }
            recipe.ingredients.forEach((ingredient) => {
                if (
                    ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                    filteredRecipes.indexOf(recipe) === -1
                ) {
                    filteredRecipes.push(recipe);
                }
            });
        });
    } else {
        filteredRecipes = recipes;
    }

    // Filter with tag

    if (document.querySelectorAll('.tag').length !== 0) {
        document.querySelectorAll('.tag').forEach((tag) => {
            let filteredArray = [];
            filteredRecipes.forEach((recipe) => {
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

                // Ustensils
                if (tag.dataset.type === 'ustensil' && filteredArray.indexOf(recipe) === -1) {
                    recipe.ustensils.forEach((ustensil) => {
                        if (ustensil === tag.innerText) {
                            filteredArray.push(recipe);
                        }
                    });
                }
            });

            filteredRecipes = filteredArray;
        });
    }

    filteredRecipes.forEach((recipe) => {
        // Array of ingredients in filteredRecipes

        recipe.ingredients.forEach((ingredient) => {
            if (filteredIngredients.indexOf(ingredient.ingredient) === -1) {
                filteredIngredients.push(ingredient.ingredient);
            }
        });

        // Array of appliances in filteredRecipes

        if (filteredAppliances.indexOf(recipe.appliance) === -1) {
            filteredAppliances.push(recipe.appliance);
        }

        // Array of ustensils in filteredRecipes

        recipe.ustensils.forEach((ustensils) => {
            if (filteredUstensils.indexOf(ustensils) === -1) {
                filteredUstensils.push(ustensils);
            }
        });
    });
};

export default sortArray;
