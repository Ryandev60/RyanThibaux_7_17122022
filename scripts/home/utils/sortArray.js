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

        array.forEach((recipe) => {
            if (
                recipe.name.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                mainSearchRecipes.indexOf(recipe) == -1
            ) {
                mainSearchRecipes.push(recipe);
            }
            if (
                recipe.description.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                mainSearchRecipes.indexOf(recipe) == -1
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

    // Filter with tag


    if (document.querySelectorAll('.tag').length !== 0) {
    let newArray = [];

        document.querySelectorAll('.tag').forEach((tag) => {
            console.log(tag.innerText);
            console.log(tag.dataset.type);
            mainSearchRecipes.forEach((recipe) => {
                if (tag.dataset.type === 'ingredient') {
                    recipe.ingredients.forEach((ingredient) => {
                        if (ingredient.ingredient === tag.innerText) {
                            newArray.push(recipe);
                        }
                    });
                }
            });
        });

        mainSearchRecipes = newArray;
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
