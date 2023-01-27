//Function for add different event listener on different filters

const filterByTag = (filterTop, filter, placeholder, list, chevron, selector, displayFilterList, mainPlaceholder) => {
    const checkIfTagExist = () => {
        document.querySelectorAll('.tag').forEach((tag) => {
            document.querySelectorAll(selector).forEach((type) => {
                if (tag.innerText === type.innerText) {
                    type.style.display = 'none';
                    console.log('test');
                }
            });
        });
    };
    // Ingredients
    filterTop.addEventListener('click', () => {
        filter.focus();
        filter.placeholder = `Rechercher un ${placeholder}`;
        filter.classList.add('placeholder-grey');
        list.style.display = 'flex';
        chevron.style.transform = 'rotate(180deg)';
        displayFilterList();
        checkIfTagExist(selector);
    });

    filter.addEventListener('focusout', () => {
        filter.placeholder = mainPlaceholder;
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
            checkIfTagExist(selector);
        });
    });
};

export default filterByTag;
