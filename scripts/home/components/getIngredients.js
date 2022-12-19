const getIngredients = () => {
    let ingredients = [];
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredientsPerRecipe) => {
            if (ingredients.indexOf(ingredientsPerRecipe.ingredient) === -1) {
                ingredients.push(ingredientsPerRecipe.ingredient);
            }
        });
    });

    return ingredients
        .map((ingredient) => {
            return `
        <li>${ingredient}</li>
        `;
        })
        .join('');
};

export default getIngredients;
