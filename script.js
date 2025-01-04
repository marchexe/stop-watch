const timerElement = document.getElementById("timer");
let interval = null;
let secondsElapsed = 0;

const padStart = (value) => String(value).padStart(2, "0");

function setTime() {
    let minutes = Math.floor(secondsElapsed / 60);
    let seconds = secondsElapsed % 60;
    timerElement.textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock() {
    if (interval === null) {
        interval = setInterval(timer, 1000);
    }
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}

setTime();
