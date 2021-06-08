import { typeError } from './error.js';

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

    // Set the x and y attribute.
    grid.setAttribute('x', sideMarkSpace);
    grid.setAttribute('y', 0);

    // Set the width and height attribute.
    if (typeof height === 'string' || typeof height === 'number') {
        grid.setAttribute('width', gridWidth);
        grid.setAttribute('height', height);
    } else {
        typeError('height', ['string', 'number']);
    }

    // Set the fill and stroke attribute.
    if (typeof color === 'string') {
        grid.setAttribute('fill', 'none');
        grid.setAttribute('stroke', color);
    } else {
        typeError('color', 'string');
    }

    // Add the mark the the svg.
    _svg.appendChild(grid);
}

/**
 * Set the marks on the side of the grid.
 * 
 * @param {number} from The lowest mark value.
 * @param {number} to The highest mark value.
 * @param {number} amount The amount of marks there will be.
 * @param {string} gridHeight The height of the grid.
 */
function setSideMarks(from, to, amount, gridHeight) {
    let yPosition = 0;
    let markSpacing = 0;

    let markValueDifference = 0;
    let markValue = 0;

    if ((typeof gridHeight === 'string' || typeof gridHeight === 'number') && typeof amount === 'number') {
        // The mark's y position.
        yPosition = gridHeight;
        markSpacing = gridHeight / (amount - 1);
    } else {
        typeError(typeof gridHeight, 'gridHeight', ['string', 'number']);
        typeError(typeof amount, 'amount', 'number');
    }

    if (typeof from === 'number' && typeof to === 'number') {
        // The difference between each value. This is used after each
        // generation to increase the markValue.
        markValueDifference = (to - from) / (amount - 1);
        markValue = from;
    } else {
        typeError(typeof from, 'from', 'number');
        typeError(typeof to, 'to', 'number');
    }

    // Create a group element to group all of the marks.
    let marksGroup = document.createElementNS(_ns, 'g');
    marksGroup.setAttribute('id', 'marks');
    _svg.appendChild(marksGroup);

    for (let i = 0; i < amount; i++) {
        // Create a group element for each new mark created.
        let group = document.createElementNS(_ns, 'g');
        group.setAttribute('id', `mark#${markValue}`);
        marksGroup.appendChild(group);

        let mark = document.createElementNS(_ns, 'text');
        mark.setAttribute('x', 0);

        // Apply a y offset by 12 with the last mark, since else it won't
        // be visible due to the grid border.
        let yOffset = i < amount - 1 ? 6 : 12;
        mark.setAttribute('y', yPosition + yOffset);

        // Set the mark text.
        mark.innerHTML = Math.round(markValue);
        markValue += markValueDifference;

        // Draw the mark's stroke.
        drawMarkStokes(yPosition, group);

        // Decrease the y position, since we started at the highest
        // y position.
        yPosition -= markSpacing;

        // Add the mark to the group.
        group.appendChild(mark);
    }
}

/**
 * Draw the strokes next to the marks to give a better indication of where
 * the value of the mark is along the y axis.
 * 
 * @param {string} height The height of the grid.
 * @param {object} group The svg group.
 */
function drawMarkStokes(height, group) {
    const strokeXStart = '4%';
    const strokeXEnd = '5%';
    const strokeColor = '#000000';

    let stroke = document.createElementNS(_ns, 'line');

    // Set the x1 and x2 attribute.
    stroke.setAttribute('x1', strokeXStart);
    stroke.setAttribute('x2', strokeXEnd);
    
    // Set the y1 and y2 attribute.
    if (typeof height === 'string' || typeof height === 'number') {
        stroke.setAttribute('y1', height);
        stroke.setAttribute('y2', height);
    } else {
        typeError(typeof height, 'height', ['string', 'number']);
    }

    // Set the stroke attribute.
    stroke.setAttribute('stroke', strokeColor);

    if (typeof group === 'object') {
        // Add the mark the the svg.
        group.appendChild(stroke);
    } else {
        typeError(typeof group, 'group', 'object');
    }
}

export { createGrid, setSideMarks };
