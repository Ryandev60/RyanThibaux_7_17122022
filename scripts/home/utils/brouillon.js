const displayFilterList = (list, filteredType, type, color) => {
    //Ingredients
    ingredientsList.innerHTML = displayListElement(filteredIngredients, 'ingredient');
    document.querySelectorAll('.ingredient').forEach((ingredient) => {
        ingredient.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#3282f7', 'ingredient');
            e.target.remove();
        });
    });

    // Appliances
    appliancesList.innerHTML = displayListElement(filteredAppliances, 'appliance');
    document.querySelectorAll('.appliance').forEach((appliance) => {
        appliance.addEventListener('mousedown', (e) => {
            createTag(e.target.innerHTML, '#68d9a4', 'appliance');
            e.target.remove();
        });
    });

    // Ustensils
};