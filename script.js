// Get DOM elements
const decrementButton = document.getElementById('decrement');
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const clearButton = document.getElementById('clear');
const errorDisplay = document.getElementById('error');
const currentCountDisplay = document.getElementById('currentCount');

let count = 0;

// Function to update count display
function updateCountDisplay() {
    countDisplay.innerText = count;
    currentCountDisplay.innerText = `Your Current Count is: ${count}`;
}

// Function to increment count
function incrementCount() {
    count++;
    updateCountDisplay();
    updateClearButtonVisibility();
    updateErrorDisplay();
}

// Function to decrement count
function decrementCount() {
    if (count > 0) {
        count--;
        updateCountDisplay();
        updateClearButtonVisibility();
        updateErrorDisplay();
    } else {
        showError();
    }
}

// Function to clear count
function clearCount() {
    count = 0;
    updateCountDisplay();
    updateClearButtonVisibility();
    hideError();
}

// Function to update visibility of clear button
function updateClearButtonVisibility() {
    if (count > 0) {
        clearButton.style.display = 'inline-block';
    } else {
        clearButton.style.display = 'none';
    }
}

// Function to show error message
function showError() {
    errorDisplay.style.display = 'block';
}

// Function to hide error message
function hideError() {
    errorDisplay.style.display = 'none';
}

// Function to update error display based on count
function updateErrorDisplay() {
    if (count === 0) {
        showError();
    } else {
        hideError();
    }
}

// Event listeners
incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);
clearButton.addEventListener('click', clearCount);
