import { gridHeight } from './layout.js';

const activeStickColor = '#65F51D';
const targetStickColor = '#F55C4E';
const defaultStickColor = '#368FF5';

const iterateSpeed = 1;

const sticks = document.getElementsByClassName('stick');

document.getElementById('sort').addEventListener('click', () => {
    sort();
});

async function sort() {
    for (let i = 0; i < sticks.length; i++) {
        const stickA = i;
        const stickB = Math.floor(Math.random() * (sticks.length - 1));
        await swap(stickA, stickB);

        await new Promise(resolve => setTimeout(resolve, iterateSpeed));
    }

    // Todo: replace this with a check if the array is sorted.
    sort();
}

async function swap(stickIndexA, stickIndexB) {
    // Change colors to see which stick are selected.
    sticks[stickIndexA].setAttribute('fill', activeStickColor);
    sticks[stickIndexB].setAttribute('fill', targetStickColor);

    const stickIndexAX = sticks[stickIndexA].getAttribute('height');
    const stickIndexBX = sticks[stickIndexB].getAttribute('height');

    // Swap the sticks.
    sticks[stickIndexA].setAttribute('height', stickIndexBX);
    sticks[stickIndexB].setAttribute('height', stickIndexAX);

    // Change the y element to place the stick back to the bottom of the grid.
    sticks[stickIndexA].setAttribute('y', Math.abs(stickIndexBX - gridHeight));
    sticks[stickIndexB].setAttribute('y', Math.abs(stickIndexAX - gridHeight));

    await new Promise(resolve => setTimeout(resolve, iterateSpeed));
    
    // Reset the colors.
    sticks[stickIndexA].setAttribute('fill', defaultStickColor);
    sticks[stickIndexB].setAttribute('fill', defaultStickColor);
}
