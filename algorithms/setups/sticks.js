import { gridHeight } from '../bogosort/js/layout.js';
import { typeError } from './error.js';

const _svg = document.getElementById('svg');
const _ns = 'http://www.w3.org/2000/svg';

/**
 * Generate stick on the grid.
 * 
 * @param {number} from The lowest stick value.
 * @param {number} to The highest stick value.
 * @param {number} amount The amount of stick to be generated.
 * @param {string} color The color of the sticks
 */
function generateSticks(from, to, amount, color) {
    // Create a group element to group all of the sticks.
    let sticksGroup = document.createElementNS(_ns, 'g');
    sticksGroup.setAttribute('id', 'sticks');
    _svg.appendChild(sticksGroup);
    
    if (typeof from === 'number' && typeof to === 'number') {
        // Make sure the lowest value is indeed lower then the highest value.
        if (from >= to) {
            console.error('Make sure the lowest stick value is less then' + 
                          ' the highest stick value.');
        }
    } else {
        typeError(typeof from, 'from', 'number');
        typeError(typeof to, 'to', 'number');
    }

    if (typeof amount === 'number') {
        // Generate a n amount of sticks.
        for (let i = 0; i < amount; i++) {
            let scaleFactor = gridHeight / to;
            let randomHeight = Math.round(from + Math.random() * (to - from));

            // Create a group element for each new mark created.
            let group = document.createElementNS(_ns, 'g');
            group.setAttribute('id', `stick#${randomHeight}`);
            sticksGroup.appendChild(group);

            let stickRect = document.createElementNS(_ns, 'rect');
            stickRect.setAttribute('x', 50 + randomHeight * 5);
            stickRect.setAttribute('y', GetStickYPosition(randomHeight * scaleFactor));
            stickRect.setAttribute('width', 20);
            stickRect.setAttribute('height', randomHeight * scaleFactor);
            stickRect.setAttribute("fill", color);
            group.appendChild(stickRect);

            let stickText = document.createElementNS(_ns, 'text');
            stickText.setAttribute('x', 50 + randomHeight * 5);
            stickText.setAttribute('y', gridHeight - 5);
            stickText.setAttribute('fill', '#FFFFFF');
            stickText.innerHTML = randomHeight;

            group.appendChild(stickText);
        }
    } else {
        typeError(typeof amount, 'amount', 'number');
    }
}

function GetStickYPosition(stickHeight) {
    const yPosition = gridHeight - stickHeight;
    return yPosition;
}

export { generateSticks };
