var display = document.getElementById('display');
var operand1 = '';
var operator = '';
var operand2 = '';

var buttons = document.querySelectorAll('.button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');

    if (value === '+' || value === '-' || value === '*' || value === '/') 
    {
      operator = value;
    } 
    else if (value === '=') 
    {
      if (operand1 !== '' && operator !== '' && operand2 !== '') 
      {
        var result = calculate(operand1, operator, operand2);
        display.textContent = result;
        operand1 = result;
        operand2 = '';
        operator = '';
      }
    } 
    else if (value === 'C') 
    {
      clearDisplay();
    } 
    else 
    {
      if (operator === '') 
      {
        operand1 += value;
        display.textContent = operand1;
      } 
      else 
      {
        operand2 += value;
        display.textContent = operand2;
      }
    }
  });
}

// Function to calculate the result
function calculate(operand1, operator, operand2) {
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);

  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  if (operator === '/') {
    if (operand2 === 0) {
      return 'Error';
    }
    return operand1 / operand2;
  }
}

// Function to clear the display
function clearDisplay() {
  operand1 = '';
  operator = '';
  operand2 = '';
  display.textContent = '';
}
