const generation = document.getElementById('generation');
const estimation = document.getElementById('estimation');

var totalPoints = 0;
var totalPointsInCircle = 0;

function getRandomPoint() {
    const x = Math.random();
    const y = Math.random();

    return { x, y };
}

function drawPointOnGrid() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const point = getRandomPoint();

    const result = (Math.pow(point.x, 2) + Math.pow(point.y, 2));
    
    if (result <= 1) {
        totalPointsInCircle++;
    }

    ctx.beginPath();
    if (result >= 0.99 && result <= 1.01) {
        ctx.fillStyle = '#FF0000';
    } else {
        ctx.fillStyle = (Math.pow(point.x, 2) + Math.pow(point.y, 2)) <= 1 ? '#00FFA2' : '#7AD1FF';
    }
    ctx.arc(20 + (point.x * 480), Math.abs((point.y * 480) - 480), 2, 0, 2 * Math.PI);
    ctx.fill();

    totalPoints++;
}

function updateStats() {
    generation.innerText = totalPoints;
    estimation.innerText = (4 * totalPointsInCircle / totalPoints).toFixed(10);
}

setInterval(() => {
    drawPointOnGrid();
    updateStats();
}, 1);