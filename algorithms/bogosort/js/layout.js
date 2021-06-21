import { createGrid, setSideMarks } from '../../setups/grid.js'; 
import { generateSticks } from '../../setups/sticks.js';

const gridHeight = 375;
const _gridColor = '#000000';

const _markFrom = 0;
const _markTo = 100;
const _markCount = 5;

const _stickCount = 3;
const _stickLow = 10;
const _stickHigh = 100;
const _stickColor = '#368FF5';

createGrid(gridHeight, _gridColor);
setSideMarks(_markFrom, _markTo, _markCount, gridHeight);

generateSticks(_stickLow, _stickHigh, _stickCount, _stickColor);

export { gridHeight };
