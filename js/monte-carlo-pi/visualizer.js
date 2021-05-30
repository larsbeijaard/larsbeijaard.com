import { canvasContext, gridSize, offset } from './layout.js';

const _generationCount = document.getElementById('generation');
const _estimation = document.getElementById('estimation');

function drawPoint (x, y, hexColor) {
    const radius = 1;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;

    canvasContext.beginPath();
    canvasContext.fillStyle = hexColor;
    canvasContext.arc(offset + (x * gridSize), Math.abs((y * gridSize) - gridSize), radius, startAngle, endAngle);
    canvasContext.fill();
}

function updateStatistics(generation, estimation) {
    var generationWithPunctuation = generation.toLocaleString();
    _generationCount.innerText = generationWithPunctuation;

    _estimation.innerText = estimation;
}

export { drawPoint, updateStatistics };
