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
            constructGridCube(j * cubeSize, i * cubeSize, cubeSize, j, rowGroup)
        }
    }
}

function constructGridCube(x, y, size, cubeIndex, parent) {
        // Create a new rect element and set its attributes.
        const rect = document.createElementNS(_ns, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);

        rect.setAttribute('width', size);
        rect.setAttribute('height', size);
        
        rect.setAttribute('stroke', '#000000');
        rect.setAttribute('stroke-width', '0.05px');
        rect.setAttribute('fill', 'none');

        rect.setAttribute('class', `cube cube#${cubeIndex}`);
    
        // Add the new element to the svg.
        parent.appendChild(rect);
}

InitializeCharts();