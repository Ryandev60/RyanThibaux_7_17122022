export let arrayOfSearchRecipe = [];
export let arrayOfSearchIngredients = [];

const sortArray = (array, filter) => {
    if (filter === 'search-bar') {
        let tableauCopy = [];
        tableauCopy = array;
        arrayOfSearchRecipe = [];
        console.log(tableauCopy);
        array.forEach((recipe) => {
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
                    arrayOfSearchRecipe.indexOf(recipe) === -1
                ) {
                    arrayOfSearchRecipe.push(recipe);
                }
            });
        });
    }

    if (filter === 'ingredients') {
        console.log(arrayOfSearchIngredients);
        console.log('test copie');
        console.log(arrayOfSearchRecipe);
        arrayOfSearchIngredients = [];
        array.forEach((recipe) => {
            let isSearch = false;
            recipe.ingredients.forEach((ingredient) => {
                if (
                    ingredient.ingredient.toLowerCase().includes(filterIngredients.value.toLowerCase()) &&
                    arrayOfSearchIngredients.indexOf(recipe) === -1
                ) {
                    isSearch = true;
                }
            });

            if (isSearch === true) {
                arrayOfSearchIngredients.push(recipe);
                // arrayOfSearchIngredients.splice(1, arrayOfSearchIngredients.indexOf(recipe))
            } else {
            }
        });
    }

};

export default sortArray;
