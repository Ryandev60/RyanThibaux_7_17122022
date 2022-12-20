
const recipeCard = (array) => {

    return array
        .map((recipe) => {
            return `
            <article class="card">
     <div class="card-top"></div>
     <div class="card-bottom">
         <div class="card-bottom-left">
             <h2>${recipe.name}</h2>
             <ul>
                 ${recipe.ingredients
                     .map((ingredient) => {
                         return `<li><span> ${ingredient.ingredient}</span> ${
                             ingredient.quantity ? ': ' + ingredient.quantity : ''
                         } ${ingredient.unit ? ingredient.unit : ''}</li>`;
                     })
                     .join('')}
             </ul>
         </div>
         <div class="card-bottom-right">
             <p>${recipe.description}</p>
         </div>

     </div>
 </article>`;
        })
        .join('');
};

export default recipeCard;
