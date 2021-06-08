import { createGrid, setSideMarks } from '../../setups/grid.js'; 
import { generateSticks } from '../../setups/sticks.js';

const _gridHeight = 375;
const _gridColor = '#000000';

const _markFrom = 0;
const _markTo = 100;
const _markCount = 3;

const _stickCount = 10;
const _stickLow = 10;
const _stickHigh = 100;
const _stickColor = '#368FF5';

createGrid(_gridHeight, _gridColor);
setSideMarks(_markFrom, _markTo, _markCount, _gridHeight);

generateSticks(_stickLow, _stickHigh, _stickCount, _stickColor);
