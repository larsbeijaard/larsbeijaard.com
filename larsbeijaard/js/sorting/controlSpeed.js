// TODO: find a better way to keep track of the current speed of algorithms.

var speeds = {
    // algorithm : speed
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
    var speed = getNextSpeed(id);

    // Update the HTML element with the new speed text.
    // For example: if the new speed is 2, the text will be put as 'x2.0'.
    speedElement.innerHTML = `x${speed}.0`;
}

function getNextSpeed(speedsID) {
    const maxSpeed = 4;
    
    for (const [key, value] in speeds) {
        // Find the key that matches the speeds ID.
        if (speedsID === key) {
            var currentSpeed = speeds[speedsID];
            // Calculate the new speed value.
            var newSpeed = currentSpeed < maxSpeed ? ++currentSpeed : currentSpeed = 1;

            // Update the kvp in the speeds variable.
            speeds[speedsID] = newSpeed;

            return newSpeed;
        }
    }

    return 1;
}

initializeSpeedListener();
