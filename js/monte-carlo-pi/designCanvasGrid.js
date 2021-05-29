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
    ctx.strokeStyle = '#FF0000'; // Todo: change this value to the given value in the stats.
    ctx.arc(offset, canvas.height - offset, width, -0.5 * Math.PI, 0);
    ctx.stroke();
}

drawCanvas();
drawSideMarks();
drawArc();