const getAppliance = () => {
    let appliances = [];
    recipes.forEach((recipe) => {
        if (appliances.indexOf(recipe.appliance) === -1) {
            appliances.push(recipe.appliance);
        }
    });
};

export default getAppliance;
