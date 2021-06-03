import { drawPoint, updateStatistics, drawEstimation } from './visualizer.js';

const estimateButton = document.getElementById('estimate');
estimateButton.addEventListener('click', start);

var _generation = 0;
var _estimation = 0;

var _totalPoints = 0;
var _totalPointsInCircle = 0;

var _started = false;

function start() {
    if (!_started) {
        _started = true;

        setInterval(() => {
            _generation++;
    
            // Generate a random point an validate the point.
            const randomPoint = getRandomPoint();
            validatePoint(randomPoint.x, randomPoint.y);
    
            // Estimate the value of PI.
            estimate();
        }, 50);
    }
}

function getRandomPoint() {
    const x = Math.random();
    const y = Math.random();

    return { x, y };
}

function validatePoint(x, y) {
    // Check if the point (x, y) is within the circle radius.
    const sum = Math.pow(x, 2) + Math.pow(y, 2);
    const inCircle = sum <= 1;
    
    const lineOffset = 0.01;

    let pointColor = '#7AD1FF';

    if (inCircle) {
        _totalPointsInCircle++;
        pointColor = '#00FFA2';
    }

    // If the sum is very near the circle line, color the point red.
    if (sum >= (1 - lineOffset) && sum <= (1 + lineOffset)) {
        pointColor = '#FF0000';
    }

    _totalPoints++;

    drawPoint(x, y, pointColor);
}

function estimate() {
    const PI = (4 * _totalPointsInCircle) / _totalPoints;
    const PIDecimals = 12;
    _estimation = PI.toFixed(PIDecimals);

    drawEstimation(_estimation);

    updateStatistics(_generation, _estimation);
}
