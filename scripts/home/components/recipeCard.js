
const recipeCard = (array) => {

    return array
        .map((recipe) => {
            return `
            <article class="card">
    <div class="card-top"></div>
    <div class="card-bottom">
        <div class="card-bottom-top">
            <h2>${recipe.name}</h2>
            <p class="time"><i class="fa-regular fa-clock"></i> ${recipe.time} min</p>

        </div>
        <div class="card-bottom-bottom">
            <ul>
                ${recipe.ingredients
                .map((ingredient) => {
                return `<li><span> ${ingredient.ingredient}</span> ${
                    ingredient.quantity ? ': ' + ingredient.quantity : ''
                    } ${ingredient.unit ? ingredient.unit : ''}</li>`;
                })
                .join('')}
            </ul>
            <p>${recipe.description}</p>
        </div>

    </div>
</article>`;
        })
        .join('');
};

export default recipeCard;
