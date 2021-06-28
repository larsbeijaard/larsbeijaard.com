var speeds = {
    0: 1,
    1: 1,
    2: 1
}

function initializeSpeedListener() {
    const buttons = document.getElementsByClassName('speed');
    
    // Initialize and add listeners for every chart their randomize button.
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', event => {
            changeSpeed(buttons[i].classList[1]);
        });
    }
}

function changeSpeed(id) {
    const speedElement = document.getElementsByClassName(`speed ${id}`)[0];
    var speed = ++speeds[id];

    speedElement.innerHTML = `x${speed}.0`;
}

initializeSpeedListener();
