let firstBuffer = "0";
let firstBufferDec = false;
let secondBuffer = "0";
let secondBufferDec = false;
let secondBufferActive = false;

const display = document.querySelector("#display");
display.textContent = firstBuffer;

const btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => numberBtnClicked("0"));
const btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => numberBtnClicked("1"));
const btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => numberBtnClicked("2"));
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");

const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const PosNegBtn = document.querySelector("#pos-neg");

const divideBtn = document.querySelector("#divide");
const multiplyBtn = document.querySelector("#multiply");
const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const equalBtn = document.querySelector("#equal");

function numberBtnClicked(number) {
    if (!secondBufferActive) {
        if (firstBuffer == "0") {
            firstBuffer = number;
        } else if (firstBuffer == "-0") {
            firstBuffer = "-" + number;
        } else {
            firstBuffer += number;
        }
        display.textContent = firstBuffer;
    } else if (secondBufferActive) {
        if (secondBuffer == "0") {
            secondBuffer = number;
        } else if (secondBuffer == "-0") {
            secondBuffer = "-" + number;
        } else {
            secondBuffer += number;
        }
        display.textContent = secondBuffer;
    }
}