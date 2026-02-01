
const container = document.querySelector('#container');
const btnCustom = document.querySelector('#btn-custom');
const btnClear = document.querySelector('#btn-clear');

let currentSize = 16;

btnCustom.addEventListener('click', () => {
    let userInput = prompt("¿How much squares you need for each side? (Maximum 100)");
     
    if (userInput === null) return;

    size = parseInt(userInput);
   
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please, enter a number from 1 to 100");
    }
});

btnClear.addEventListener('click', () => {
    createGrid(currentSize);
});

function createGrid(size) {
    currentSize = size;
    container.innerHTML = '';

    container.style.width = '600px';
    container.style.height = '600px';

    const squareSize = 600 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.backgroundColor = 'white';

        div.style.border = "0.1px solid rgba(0,0,0,0.1)";

        div.addEventListener('mouseenter', () => {
            const favoriteColors = ['black', 'red', 'green'];

            const randomIndex = Math.floor(Math.random() * favoriteColors.length);
            
            div.style.backgroundColor = favoriteColors[randomIndex];
            div.style.border = "none";
        });

        container.appendChild(div);
    }
}

createGrid(16);