const svg = document.getElementById('svg');

// Since the width of the svg is in percentages, we use this value
// to get the width in pixel units. Used for calculations.
const gridWidth = document.getElementById('width');
const gridHeight = 400;

// The space the marks. Used for decreasing the grid width so the text
// would not interfere with the grid.
const markSpace = 35;

function drawGrid() {
    let grid = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    // Set the x position.
    grid.setAttribute('x', markSpace);

    // Set the width and height.
    grid.setAttribute('width',  gridWidth.offsetWidth - markSpace);
    grid.setAttribute('height', gridHeight);

    // Set the color.
    grid.setAttribute('fill', 'none');
    grid.setAttribute('stroke', '#000000');

    svg.appendChild(grid);
}

function drawMarks() {
    const markCount = 4;
    // Create a mark element (number indications) at the correct y position.
    svg.appendChild(createMarkElement(0, 13, '100'));
    svg.appendChild(createMarkElement(0, (gridHeight / markCount) * 1, '75'));
    svg.appendChild(createMarkElement(0, (gridHeight / markCount) * 2, '50'));
    svg.appendChild(createMarkElement(0, (gridHeight / markCount) * 3, '25'));
    svg.appendChild(createMarkElement(0, (gridHeight / markCount) * 4, '0'));
}

function createMarkElement(x, y, textContent) {
    let mark = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    mark.setAttribute('x', x);
    mark.setAttribute('y', y);
    mark.textContent = textContent;

    return mark;
}

drawGrid();
drawMarks();

export { svg, gridWidth, gridHeight };