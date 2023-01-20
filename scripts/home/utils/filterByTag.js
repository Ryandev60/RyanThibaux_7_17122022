//Function for add different event listener on different filters

const filterByTag = (filterTop, filter, placeholder, list, chevron, selector,displayFilterList) => {
    // Ingredients
    filterTop.addEventListener('click', () => {
        filter.focus();
        filter.placeholder = `Rechercher un ${placeholder}`;
        filter.classList.add('placeholder-grey');
        list.style.display = 'flex';
        chevron.style.transform = 'rotate(180deg)';
        displayFilterList;
    });

    filter.addEventListener('focusout', () => {
        filter.placeholder = 'Ingrédients';
        filter.classList.remove('placeholder-grey');
        list.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
        filter.value = '';
    });

    filter.addEventListener('input', () => {
        document.querySelectorAll(selector).forEach((selector) => {
            if (!selector.innerHTML.toLowerCase().includes(filter.value.toLowerCase())) {
                selector.style.display = 'none';
            } else {
                selector.style.display = 'block';
            }
        });
    });
};

export default filterByTag;