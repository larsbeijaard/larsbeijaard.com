import { canvasContext, gridSize, offset } from './layout.js';

const _generationCount = document.getElementById('generation');
const _estimation = document.getElementById('estimation');

var _estimationXOffset = 60;

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

function drawEstimation(estimation) {
    const svg = document.getElementById('svg');
    const polyline = document.getElementById('polyline');
    const line = document.getElementById('yAxis');

    const gridHeight = 400;
    const gridWidth = 500;

    if (_estimationXOffset >= gridWidth) {
        polyline.setAttribute('points', `60 ${Math.abs((estimation * 100) - gridHeight) / 2}`);
        _estimationXOffset =  60;
    }

    let point = svg.createSVGPoint();
    point.x = _estimationXOffset;
    point.y = Math.abs((estimation * 100) - gridHeight) / 2;

    line.setAttribute('y1', Math.abs((estimation * 100) - gridHeight) / 2);
    line.setAttribute('y2', Math.abs((estimation * 100) - gridHeight) / 2);

    polyline.points.appendItem(point);

    _estimationXOffset += 10;
}

export { drawPoint, updateStatistics, drawEstimation };
