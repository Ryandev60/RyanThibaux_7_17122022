const listElement = (array, className) => {
    
    return array
        .map((e) => {
            return `
        <li class=${className}>${e}</li>
        `;
        })
        .join('');
};

export default listElement;

