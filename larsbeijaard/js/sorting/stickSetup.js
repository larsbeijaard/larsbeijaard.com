const _svg = document.getElementsByClassName("svg");
const _ns = "http://www.w3.org/2000/svg";

function initializeRandomizeListener() {
    const buttons = document.getElementsByClassName('randomize');
    
    // Initialize and add listeners for every chart their randomize button.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', event => {
            clearChart(buttons[i].classList[1]);
            drawSticks(buttons[i].classList[1]);
        });
    }
}

function InitializeCharts() {
    for (let i = 0; i < _svg.length; i++) {
        drawSticks(i);
    }
}

function drawSticks(svgIndex) {
    const chartHeight = 270;

    const stickCount = 15;

    const minValue = 10;
    const maxValue = 101;
    
    const width = 30;
    const heightMultiplication = 2.7;
    const spacing = 31.5;

    // Create a group element that contain all of the sticks.
    const allSticksGroup = document.createElementNS(_ns, 'g');
    allSticksGroup.setAttribute('id', `stick-group#${svgIndex}`);
    _svg[svgIndex].appendChild(allSticksGroup);
    
    for (let i = 0; i < stickCount; i++) {
        // Create a group element to group the stick-related elements together.
        const stickGroup = document.createElementNS(_ns, 'g');
        
        // Generate a random height for the stick.
        var height = Math.floor(Math.random() * (maxValue - minValue) + minValue);
        
        stickGroup.setAttribute('class', `stick#${i} ${height}`);

        // Create a new rect element and set its attributes.
        const stick = document.createElementNS(_ns, 'rect');
        stick.setAttribute('height', height * heightMultiplication);
        stick.setAttribute('width', width);

        stick.setAttribute('rx', '2px');
        stick.setAttribute('ry', '2px');

        stick.setAttribute('x', i * spacing);
        stick.setAttribute('y', chartHeight - height * heightMultiplication);

        stick.setAttribute('fill', '#4865db');
        
        // Add the new element to the svg.
        stickGroup.appendChild(stick);
        allSticksGroup.appendChild(stickGroup);

        drawStickText(stickGroup, i * spacing, height);
    }
}

function drawStickText(stickGroup, stickXPostion, stickHeight) {
    const xOffset = 15;
    const yPosition = 262;

    // Create a new text element and set its attributes.
    const text = document.createElementNS(_ns, 'text');
    text.setAttribute('x', stickXPostion + xOffset);
    text.setAttribute('y', yPosition);

    text.setAttribute('fill', '#FFFFFF');

    text.setAttribute('font-size', '13px');
    text.setAttribute('text-anchor', 'middle');

    // Set the value of the text component to the floored height.
    text.innerHTML = stickHeight;

    // Add the new element to the svg.
    stickGroup.appendChild(text);
}

function clearChart(svgIndex) {
    const stickGroup = document.getElementById(`stick-group#${svgIndex}`);
    _svg[svgIndex].removeChild(stickGroup);
}

initializeRandomizeListener();
InitializeCharts();
