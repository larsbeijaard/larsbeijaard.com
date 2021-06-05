import { svg, gridWidth, gridHeight } from './layout.js';

document.getElementById('randomize').addEventListener('click', () => {
    generateRandomSticks(50);
});

function generateRandomSticks(amount) {
    const maxHeight = 100;
    const spacing = 1;
    let xOffset = 35;

    for (let i = 0; i < amount; i++) {
        const height = 1 + (Math.floor(Math.random() * (maxHeight - 1))) * 4;

        // The width is the highest amount of stick there could be fit into the graph with the
        // correct spacing and not touching each other.
        const width = (gridWidth.offsetWidth - (35 + (amount * spacing) - spacing)) / amount;

        let stick = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        stick.setAttribute('class', 'stick');

        // Set the x and y position.
        stick.setAttribute('x', xOffset);
        stick.setAttribute('y', Math.abs(height - gridHeight));

        // Set the width and height.
        stick.setAttribute('width', width);
        stick.setAttribute('height', height);

        // Set the color.
        stick.setAttribute('fill', '#368FF5');

        xOffset += width + spacing;

        // Replace the stick element if the stick elements were already created.
        // If the stick elements aren't yet created, create a new stick element.
        if (stickCreated(amount)) {
            svg.replaceChild(stick, document.getElementsByClassName('stick')[i]);
        } else {
            svg.appendChild(stick);
        }
    }
}

function stickCreated(amount) {
    return amount == document.getElementsByClassName('stick').length;
}
