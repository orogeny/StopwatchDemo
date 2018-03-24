// global variables
let interval = null;
let time = 0;

const timer = document.getElementById('timer');
const pastTimes = document.getElementById('past-times');

// execute functions
setup();

// functions
function setup() {
    displayTime();

    document.onkeyup = (event) => {
        const key = event.key;
        if (key == 's' || key == 'S') document.getElementById('start-stop').click();
        else if (key == 'r' || key == 'R') document.getElementById('reset').click();
        else if (key == 't' || key == 'T') document.getElementById('record-time').click();
    };

    document.getElementById('start-stop').onclick = () => {
        if (interval == null) {
            // Set an interval to update the time every 1/100th of a second
            interval = setInterval(() => {
                time += 0.01;
                displayTime();
            }, 10);
        }
        else {
            // Stop the clock by clearing the existing interval
            clearInterval(interval);
            interval = null;
        }
    };

    document.getElementById('reset').onclick = () => {
        // Reset time and recorded times
        time = 0;

        // If the clock is stopped, we need to update the time
        if (interval == null) displayTime();

        // Remove past times
        while (pastTimes.firstChild) {
            pastTimes.firstChild.remove();
        }
    };

    document.getElementById('record-time').onclick = () => {
        // Create a new element capturing the time
        const item = document.createElement('LI');
        item.innerHTML = (time == 0)
            ? '0'
            : time.toFixed(2).toString();

        pastTimes.appendChild(item);
    }
}

function displayTime() {
    const text = (time == 0) 
        ? '0' 
        : time.toFixed(2).toString();

    timer.innerHTML = text;
}
