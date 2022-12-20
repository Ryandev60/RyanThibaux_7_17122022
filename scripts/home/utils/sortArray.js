export let arrayOfSearchRecipe = [];


const sortArray = (array) => {
    arrayOfSearchRecipe = []

    recipes.forEach((recipe) => {

        if (
            recipe.name.toLowerCase().includes(searchBar.value.toLowerCase()) &&
            arrayOfSearchRecipe.indexOf(recipe) == -1
        ) {
            arrayOfSearchRecipe.push(recipe);
        }
        if (
            recipe.description.toLowerCase().includes(searchBar.value.toLowerCase()) &&
            arrayOfSearchRecipe.indexOf(recipe) == -1
        ) {
            arrayOfSearchRecipe.push(recipe);
        }
        recipe.ingredients.forEach((ingredient) => {
            if (
                ingredient.ingredient.toLowerCase().includes(searchBar.value.toLowerCase()) &&
                arrayOfSearchRecipe.indexOf(recipe) == -1
            ) {
                arrayOfSearchRecipe.push(recipe);
            }
        });
    });
    console.log(arrayOfSearchRecipe);

};

export default sortArray;
