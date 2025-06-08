let count = 0;

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

const checkButtons = () => {
    if (count > 0) {
        decrementButton.disabled = false;
        resetButton.disabled = false;
    } else {
        decrementButton.disabled = true;
        resetButton.disabled = true;
    }
};

const incrementCounter = () => {
    count++;
    countDisplay.textContent = count;
    checkButtons();
};

const decrementCounter = () => {
    if (count > 0) count--;
    countDisplay.textContent = count;
    checkButtons();
};

const resetCounter = () => {
    count = 0;
    countDisplay.textContent = count;
    checkButtons();
};

countDisplay.textContent = count;
checkButtons();

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
