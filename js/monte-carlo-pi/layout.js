const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = 480;
const height = 480;

function drawCanvas() {
    const markOffset = 500 - width;

    ctx.beginPath();
    ctx.rect(markOffset, 0, width, height);
    ctx.stroke();
}

function drawGridLines() {
    const offset = 500 - width;
    const lineOffset = 10;

    // Vertical lines.
    for (let i = 2; i <= width / lineOffset; i++) {
        ctx.beginPath();
        ctx.strokeStyle = '#ebebeb'
        ctx.moveTo((offset / 2) + (lineOffset * i), 0 + 1);
        ctx.lineTo((offset / 2) + (lineOffset * i), canvas.height - offset - 1);
        ctx.stroke();
    }

    // Horizontal lines.
    for (let i = 0; i <= height / lineOffset - 2; i++) {
        ctx.beginPath();
        ctx.strokeStyle = '#ebebeb'
        ctx.moveTo(offset + 1, (offset / 2) + (lineOffset * i));
        ctx.lineTo(canvas.width - 1, (offset / 2) + (lineOffset * i));
        ctx.stroke();
    }
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
    const offset = 500 - width;

    ctx.beginPath();
    ctx.strokeStyle = '#FF0000';
    ctx.arc(offset, canvas.height - offset, width, -0.5 * Math.PI, 0);
    ctx.stroke();
}

drawCanvas();
drawGridLines();
drawSideMarks();
drawArc();