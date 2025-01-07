let firstBuffer = "0";
let firstBufferDec = false;
let secondBuffer = "0";
let secondBufferDec = false;
let secondBufferActive = false;
let operator = "none";

const display = document.querySelector("#display");
display.textContent = firstBuffer;

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => numberBtnClicked("0"));
const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => numberBtnClicked("1"));
const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => numberBtnClicked("2"));
const btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => numberBtnClicked("3"));
const btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => numberBtnClicked("4"));
const btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => numberBtnClicked("5"));
const btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => numberBtnClicked("6"));
const btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => numberBtnClicked("7"));
const btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => numberBtnClicked("8"));
const btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => numberBtnClicked("9"));

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    firstBuffer = "0";
    firstBufferDec = false;
    secondBuffer = "0";
    secondBufferDec = false;
    secondBufferActive = false;
    display.textContent = firstBuffer;
});
const deleteBtn = document.querySelector("#delete");
deleteBtn.addEventListener("click", () => {
    if (!secondBufferActive) {
        if (firstBuffer.length == 1) {
            firstBuffer = "0";
        } else if (firstBuffer.at(0) == "-" && firstBuffer.length == 2) {
            firstBuffer = "-0";
        } else {
            if (firstBuffer.at(-1) == ".") {
                firstBufferDec = false;
            }
            firstBuffer = firstBuffer.slice(0, firstBuffer.length - 1);
        }
        display.textContent = firstBuffer;
    } else if (secondBufferActive) {
        if (secondBuffer.length == 1) {
            secondBuffer = "0";
        } else if (secondBuffer.at(0) == "-" && secondBuffer.length == 2) {
            secondBuffer = "-0";
        } else {
            if (secondBuffer.at(-1) == ".") {
                secondBufferDec = false;
            }
            secondBuffer = secondBuffer.slice(0, secondBuffer.length - 1);
        }
        display.textContent = secondBuffer;
    }
});
const PosNegBtn = document.querySelector("#pos-neg");
PosNegBtn.addEventListener("click", () => {
    if (!secondBufferActive) {
        if (firstBuffer.at(0) == "-") {
            firstBuffer = firstBuffer.slice(1, firstBuffer.length);
            display.textContent = firstBuffer;
        } else {
            if (firstBuffer.length < 14) {
                firstBuffer = "-" + firstBuffer;
                display.textContent = firstBuffer;
            }
        }
    } else if (secondBufferActive) {
        if (secondBuffer.at(0) == "-") {
            secondBuffer = secondBuffer.slice(1, secondBuffer.length);
            display.textContent = secondBuffer;
        } else {
            if (secondBuffer.length < 14) {
                secondBuffer = "-" + secondBuffer;
                display.textContent = secondBuffer;
            }
        }
    }
});

const divideBtn = document.querySelector("#divide");
divideBtn.addEventListener("click", () => operatorClicked("divide"));
const multiplyBtn = document.querySelector("#multiply");
multiplyBtn.addEventListener("click", () => operatorClicked("multiply"));
const minusBtn = document.querySelector("#minus");
minusBtn.addEventListener("click", () => operatorClicked("minus"));
const plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click", operatorClicked("plus"));
const equalBtn = document.querySelector("#equal");

function numberBtnClicked(number) {
    if (!secondBufferActive) {
        if (firstBuffer == "0") {
            firstBuffer = number;
        } else if (firstBuffer == "-0") {
            firstBuffer = "-" + number;
        } else if (firstBuffer.length < 14) {
            firstBuffer += number;
        }
        display.textContent = firstBuffer;
    } else if (secondBufferActive) {
        if (secondBuffer == "0") {
            secondBuffer = number;
        } else if (secondBuffer == "-0") {
            secondBuffer = "-" + number;
        } else if (secondBuffer < 14) {
            secondBuffer += number;
        }
        display.textContent = secondBuffer;
    }
}

function operatorClicked(choice) {
    if (!secondBufferActive && operator == "none") {
        secondBufferActive = true;
        operator = choice;
        display.textContent = secondBuffer;
    }
}