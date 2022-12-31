export let mainSearchRecipes = [];
export let mainSearchRecipesIngredients = [];
export let mainSearchRecipesAppliances = [];
export let mainSearchRecipesUstensils = [];
export let arrayOfSearchIngredients = [];

const sortArray = (array, filter) => {
    if (filter === 'search-bar') {
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
    }

    document.querySelectorAll('.tag').forEach((tag) => {
            console.log(tag.innerText);
            console.log(tag.dataset.type);
            if (tag.dataset.type === "ingredient") {
                console.log("true");
            }
    })
};

export default sortArray;
