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
        // The (-/+)1 is there because then the grid borders are not overdrawn by the line.

        // Horizontal lines.
        ctx.moveTo(offset + 1, lineSpacing * i);
        ctx.lineTo(canvas.width - 1, lineSpacing * i);

        // Vertical lines.
        ctx.moveTo((lineSpacing * i) + offset, 1);
        ctx.lineTo((lineSpacing * i) + offset, (canvas.height - offset) - 1);
    }

    ctx.stroke();
}

function drawSideMarks() {
    const offset = totalWidth - gridWidth;
    const markCount = 10;
    const textSize = 7.0;

    ctx.beginPath();
    ctx.strokeStyle = '#000000';

    // Mark zero (0.0).
    ctx.fillText('0.0', 0, canvas.height - 1);

    // Horizontal and vertical mark one (1.0).
    ctx.fillText('1.0', 0, textSize + 1);
    ctx.fillText('1.0', canvas.width - 15, canvas.height - 1);

    for (let i = 1; i < markCount; i++) {
        /*
         * Formula:
         *  ((canvas.height - offset) + (textSize / 2)) and (offset - textSize):
         *      Returns the start position for the text. The offset is there
         *      to place the text besides the border instead of the actual canvas.height positition
         *      (which would be located further down). And the (textSize / 2) places the mark a 
         *      bit further down, so that the mark's center is also centered with a drawn line.
         * 
         *  (i * (gridWidth / markCount)) return the evenly spaced position. That is so because
         *  then the marks are evenly spaced from each other.
         */

        // Horizontal marks.
        ctx.fillText(i / markCount, (offset - textSize) + (i * (gridWidth / markCount)), canvas.height - 1);
        
        // Vertical lines.
        ctx.fillText(i / markCount, 1, ((canvas.height - offset) + (textSize / 2)) - (i * (gridWidth / markCount)));
    }

    ctx.stroke();
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