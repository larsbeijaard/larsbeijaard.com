const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const totalWidth = canvas.width;
const totalHeight = canvas.height;

// Decrease the grid with a bit to keep space for the side/bottom marks (0.0, 0.1, etc).
const gridWidth = 480;
const gridHeight = 480;

function drawGridBorders() {
    const offset = totalWidth - gridWidth;

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.rect(offset, 0, gridWidth, gridHeight);
    ctx.stroke();
}

function drawGridLines() {
    const offset = totalWidth - gridWidth;
    const lineSpacing = 10;
    
    ctx.beginPath();
    ctx.strokeStyle = '#ebebeb';

    // Draw the grid lines.
    for (let i = 1; i < gridWidth / lineSpacing; i++) {
        // Horizontal lines.
        ctx.moveTo(offset + 1, lineSpacing * i);
        ctx.lineTo(canvas.width - 1, lineSpacing * i);

        // Vertical lines.
        ctx.moveTo(lineSpacing * i + offset, 1);
        ctx.lineTo(lineSpacing * i + offset, canvas.height - offset - 1);

    }

    ctx.stroke();
}

function drawSideMarks() {
    // Mark zero.
    ctx.fillText('0.0', 0, canvas.height);

    // Horizontal marks.
    for (let i = 1; i < 10; i++) {
        ctx.fillText(`${i / 10}`, 0, canvas.height - (i * 52));
    }

    // Vertical marks.
    for (let i = 1; i < 10; i++) {
        ctx.fillText(`${i / 10}`, i * 50, canvas.height);
    }
}

function drawArc() {
    const offset = 500 - gridWidth;

    ctx.beginPath();
    ctx.strokeStyle = '#FF0000';
    ctx.arc(offset, canvas.height - offset, gridWidth, -0.5 * Math.PI, 0);
    ctx.stroke();
}

drawGridBorders();
drawGridLines();
drawSideMarks();
drawArc();