// TODO: Make the fade(x); async so the fading needs to finish first before executing new statements.

const element = document.getElementById("greeting");

const greetings = [
    'Hello',
    'Ni hao',
    'Hola',
    'Konnichiwa',
    'Hallo',
    'Buongiorno'
];

// Set the initial value to 1 since we pre-set the greeting text with index 0.
var currentGreetingIndex = 0;
element.innerText = greetings[0];

function changeGreetingElement() {
    // The interval duration is milliseconds.
    const intervalDuration = 3000;

    setInterval(() => {
        fade(0);
    }, intervalDuration);
}

function showElement() {
    element.innerText = getNext();
    fade(1);
}

function getNext() {
    // Select the next greeting message, and reset the currentGreetingIndex 
    // if the currentGreetingIndex is the same as the length of the greetings array.
    currentGreetingIndex = currentGreetingIndex < greetings.length - 1
                           ? currentGreetingIndex + 1
                           : 0;

    return greetings[currentGreetingIndex];
}

function fade(targetOpacity) {
    let opacity = Math.abs(targetOpacity - 1);
    // The interval duration is milliseconds.
    const intervalDuration = 20;

    // Hold a reference to the setInterval() to be able to stop the interval.
    const interval = setInterval(() => {
        // Based on the targetOpacity, increment or decrement the opacity and apply it to the element.
        opacity = targetOpacity == 1
                  ? opacity + 0.1
                  : opacity - 0.1;

        element.style.opacity = opacity;

        // Stop the fading effect when the element is fully visible (opacity = 1) or invisible (opacity = 0).
        if (((element.style.opacity <= targetOpacity) && (targetOpacity == 0)) ||
             (element.style.opacity >= targetOpacity) && (targetOpacity == 1)) {
            clearInterval(interval);
            
            if (targetOpacity != 1) {
                showElement();
            }
        }
    }, intervalDuration);
}

changeGreetingElement();
