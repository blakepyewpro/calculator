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