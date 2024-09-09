// script.js

/**
 * Represents the display element on the calculator.
 * @type {HTMLElement}
 */
let display = document.getElementById('display');

/**
 * Represents the current operand being entered by the user.
 * @type {string}
 */
let currentOperand = '';

/**
 * Represents the previous operand entered by the user.
 * @type {string}
 */
let previousOperand = '';

/**
 * Represents the operation to be performed.
 * @type {string|undefined}
 */
let operation = undefined;

/**
 * Appends a number to the current operand.
 * @param {number} number - The number to be appended.
 */
function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

/**
 * Sets the operation to be performed and calculates the result if necessary.
 * @param {string} op - The operation to be performed.
 */
function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

/**
 * Calculates the result of the operation.
 */
function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

/**
 * Clears the display and resets the operands and operation.
 */
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

/**
function updateDisplay(...args) { display.innerText = currentOperand; }*/
/**
 * Updates the display with the current operand.
 */
button = 'PressMe';
function updateDisplay() {
    display.innerText = currentOperand;
}
// Link the CSS file to the HTML
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/path/to/your/css/file.css';
document.head.appendChild(link);

