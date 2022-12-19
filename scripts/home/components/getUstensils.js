const getUstensils = () => {
    let ustensils = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensilsPerRecipe) => {
            if (ustensils.indexOf(ustensilsPerRecipe) === -1) {
                ustensils.push(ustensilsPerRecipe);
            }
        });
    });
};

export default getUstensils;
