document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let result = '';

    function updateDisplay(value) {
        display.textContent = value;
    }

    function clearCalculator() {
        firstOperand = '';
        operator = '';
        secondOperand = '';
        result = '';
        updateDisplay('0');
    }

    function calculate() {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = num2;
        }

        updateDisplay(result.toString());
        firstOperand = result.toString();
        secondOperand = '';
    }

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                if (operator === '') {
                    firstOperand += value;
                    updateDisplay(firstOperand);
                } else {
                    secondOperand += value;
                    updateDisplay(secondOperand);
                }
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
            } else if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearCalculator();
            }
        });
    });
});
