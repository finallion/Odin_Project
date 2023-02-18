document.addEventListener("DOMContentLoaded", generateButtons);
document.addEventListener("DOMContentLoaded", generateOperatorButtons);

let inputField = document.getElementById("input-div");
let res = document.getElementById("result")
const regex = /\d+[+\-*:=]+\d+/

function generateButtons() {
    const div = document.getElementById("numbers");
    for (let i = 0; i < 10; i++) {
        let button = document.createElement("button");
        button.className = "number-button";
        button.numberVal = i;
        button.textContent = i.toString();
        button.addEventListener("click", addNumberToInput);
        div.appendChild(button);
    }
}

function generateOperatorButtons() {
    const div = document.getElementById("operators");
    for (let i = 0; i < 5; i++) {
        let button = document.createElement("button");

        switch (i) {
            case 0:
                button.textContent = "+";
                break;
            case 1:
                button.textContent = "-";
                break;
            case 2:
                button.textContent = "*";
                break;
            case 3:
                button.textContent = ":";
                break;
            case 4:
                button.textContent = "=";
                break;
        }

        if (i === 4) {
            button.addEventListener("click", operate);
            button.setAttribute("id", "equals-button");
        } else {
            button.addEventListener("click", addNumberToInput);
            button.addEventListener("click", operate);
        }
        div.appendChild(button);
    }
}

function addNumberToInput(e) {
    inputField.textContent += e.currentTarget.textContent;
}

function checkOperator(valOne, valTwo, operator) {
    let result = "";
    switch (operator) {
        case "+":
            result = add(valOne, valTwo);
            break;
        case "-":
            result = subtract(valOne, valTwo);
            break;
        case "*":
            result = multiply(valOne, valTwo);
            break;
        case ":":
            result = divide(valOne, valTwo);
            break;
    }
    return result;
}

function operate(e) {
    let valOne = parseInt(inputField.textContent.split(/[+\-*:=]/)[0])
    let valTwo = parseInt(inputField.textContent.split(/[+\-*:=]/)[1])
    let operator = inputField.textContent.match(/[+\-*:=]/)[0];
    if (e.currentTarget.id === "equals-button") {
        if (validate(valOne, valTwo, operator)) {
            res.textContent = checkOperator(valOne, valTwo, operator);
            validateResult(res.textContent);
        } else {
            alert("Wrong input format.")
        }
    } else {
        if (validate(valOne, valTwo, operator)) {
            let result = checkOperator(valOne, valTwo, operator);
            inputField.textContent = result + inputField.textContent.slice(inputField.textContent.length - 1);
            validateResult(inputField.textContent);
        }
    }
}

function validateResult(input) {
    if (input.includes("Infinity")) {
        alert("Do not divide by zero.");
        reset();
    }
}

function validate(one, two, operator) {
    return regex.test(one + "" + operator + "" + two)
}

function add(one, two) {
    return one + two;
}

function subtract(one, two) {
    return one - two;
}

function multiply(one, two) {
    return one * two;
}

function divide(one, two) {
    return one / two;
}

function reset() {
    inputField.textContent = "";
    res.textContent = "";
}

function undo() {
    inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
}