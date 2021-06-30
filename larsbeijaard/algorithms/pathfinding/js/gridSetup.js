const _svg = document.getElementsByClassName("svg");
const _ns = "http://www.w3.org/2000/svg";

function InitializeCharts() {
    for (let i = 0; i < _svg.length; i++) {
        drawGrid(i);
    }
}

function drawGrid(svgIndex) {
    const horizontalCubes = 19;
    const verticalCubes = 11;
    const cubeSize = 25;

    // Create a new group element and set its attributes.
    const gridLayout = document.createElementNS(_ns, 'g');
    gridLayout.setAttribute('class', 'grid-layout')
    _svg[svgIndex].appendChild(gridLayout);

    for (let i = 0; i < verticalCubes; i++) {
         // Create a group element to group the row-related elements together.
        const rowGroup = document.createElementNS(_ns, 'g');
        rowGroup.setAttribute('class', `row#${i}`)
        gridLayout.appendChild(rowGroup);

        for (let j = 0; j < horizontalCubes; j++) {
            // Create a new rect element and set its attributes.
            const rect = document.createElementNS(_ns, 'rect');
            rect.setAttribute('x', j * cubeSize);
            rect.setAttribute('y', i * cubeSize);

            rect.setAttribute('width', cubeSize);
            rect.setAttribute('height', cubeSize);
            
            rect.setAttribute('stroke', '#000000');
            rect.setAttribute('stroke-width', '0.05px');
            rect.setAttribute('fill', 'none');

            rect.setAttribute('class', `cube cube#${j}`);
        
            // Add the new element to the svg.
            rowGroup.appendChild(rect);
        }
    }
}

InitializeCharts();