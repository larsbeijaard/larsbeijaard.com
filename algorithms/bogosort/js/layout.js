import { createGrid, setSideMarks } from '../../setups/grid.js'; 

const gridHeight = 375;
const gridColor = '#000000';

const markFrom = 0;
const markTo = 100;
const markCount = 3;

createGrid(gridHeight, gridColor);
setSideMarks(markFrom, markTo, markCount, gridHeight);
