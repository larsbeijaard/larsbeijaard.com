const _svg = document.getElementById('svg');
const _ns = 'http://www.w3.org/2000/svg';

/**
 * Create a grid.
 * The width property is always 95%, leaving 5% space for the side marks.
 * 
 * @param {string} height The height of the grid.
 * @param {string} color The hex color of the grid.
 */
function createGrid(height, color) {
    // The amount of space reserved for the side marks.
    const sideMarkSpace = '5%';
    const gridWidth = '95%';
    
    let grid = document.createElementNS(_ns, 'rect');

    grid.setAttribute('x', sideMarkSpace);
    grid.setAttribute('y', 0);

    if (typeof height === 'string' || typeof height === 'number') {
        grid.setAttribute('width', gridWidth);
        grid.setAttribute('height', height);
    }

    if (typeof color === 'string') {
        grid.setAttribute('fill', 'none');
        grid.setAttribute('stroke', color);
    }

    _svg.appendChild(grid);
}

function setMarks(from, to, amount, gridHeight) {
    let yPosition = gridHeight;
    let markSpacing = gridHeight / amount;
    let markText = to / amount;

    for (let i = 0; i < amount + 1; i++) {
        let mark = document.createElementNS(_ns, 'text');
        mark.setAttribute('x', 0);

        let yOffset = i < amount ? 6 : 12;
        mark.setAttribute('y', yPosition + yOffset);

        mark.innerHTML = Math.floor(from);
        drawMarkStokes(yPosition);
        from += markText;

        _svg.appendChild(mark);

        yPosition -= markSpacing;
    }
}

function drawMarkStokes(height) {
    let stroke = document.createElementNS(_ns, 'line');
    stroke.setAttribute('x1', '4%');
    stroke.setAttribute('y1', height);
    
    stroke.setAttribute('x2', '5%');
    stroke.setAttribute('y2', height);

    stroke.setAttribute('stroke', '#000000');

    _svg.appendChild(stroke);
}

export { createGrid, setMarks };
