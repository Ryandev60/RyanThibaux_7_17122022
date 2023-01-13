const displayAppliance = (array) => {
    let arrayOfAppliances = [];

    if (array === recipes) {
        array.forEach((recipe) => {
            if (arrayOfAppliances.indexOf(recipe.appliance) === -1) {
                arrayOfAppliances.push(recipe.appliance);
            }
        });
    } else {
        arrayOfAppliances = array;
    }

    console.log(arrayOfAppliances);

    return arrayOfAppliances
        .map((appliance) => {
            return `
        <li class="appliance">${appliance}</li>
        `;
        })
        .join('');
};

export default displayAppliance;
