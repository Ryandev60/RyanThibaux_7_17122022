const displayIngredients = (array) => {
    console.log(array);
    let arrayOfIngredients = [];

    if (array === recipes) {
        array.forEach((recipe) => {
            recipe.ingredients.forEach((ingredientsPerRecipe) => {
                if (arrayOfIngredients.indexOf(ingredientsPerRecipe.ingredient) === -1) {
                    arrayOfIngredients.push(ingredientsPerRecipe.ingredient);
                }
            });
        });
    } else {
        arrayOfIngredients = array;
    }

    return arrayOfIngredients
        .map((ingredient) => {
            return `
        <li class="ingredient">${ingredient}</li>
        `;
        })
        .join('');
};

export default displayIngredients;
