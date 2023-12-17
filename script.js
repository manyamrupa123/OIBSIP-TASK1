let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  display.textContent = currentInput === '' ? '0' : currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = 'Error';
  }
}

function calculatePercentage() {
  currentInput = eval(currentInput) / 100;
  display.textContent = currentInput;
}

function calculateSquareRoot() {
  currentInput = Math.sqrt(eval(currentInput));
  display.textContent = currentInput;
}

function toggleSign() {
  currentInput = eval(currentInput) * -1;
  display.textContent = currentInput;
}
