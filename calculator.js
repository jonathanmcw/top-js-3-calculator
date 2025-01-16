const numButtons = document.querySelectorAll("button.num");
const operationButtons = document.querySelectorAll("button.operation");
const clearButton = document.querySelector("button.clear");
const display = document.querySelector("#display");
let firstValue = "";
let secondValue = "";
let operator = "";

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
    }
};

numButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (!operator) {
            firstValue += e.target.value;
            display.textContent = firstValue;
            console.log(firstValue);
        } else {
            secondValue += e.target.value;
            display.textContent = secondValue;
            console.log(secondValue);
        }
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value == "=") {
            product = operate(firstValue, secondValue, operator);
            display.textContent = product; 
            firstValue = product;
            // secondValue = "";
        } else {
            operator = e.target.value;
            secondValue = "";
        }
        console.log(operator);
    });
        
});

clearButton.addEventListener('click', (e) => {
    display.textContent = 0;
    firstValue = "";
    secondValue = "";
    operator = "";
})
