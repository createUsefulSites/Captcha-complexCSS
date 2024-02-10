"use strict";

const symbolsWrapper = document.querySelector(".symbols_wrapper");
const backMain = document.querySelector(".captcha_back");
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const captchaButton = document.querySelector(".captcha_button");
const inputText = document.querySelector(".captcha_input");
const body = document.querySelector("body");

function generateSymbol() {
    const res = alphabet[Math.round(Math.random() * alphabet.length-1)];
    if (res === undefined) {
        return alphabet[3];
    }
    return res
}

let captchaSymbols = "";
for (let i = 0; i < 6; ++i) {
    const newSymbol = generateSymbol();
    captchaSymbols += newSymbol;
    symbolsWrapper.insertAdjacentHTML("beforeend", `<div>${newSymbol}</div>`);
}


let isActive = false;
inputText.addEventListener("input", inputHandler);
function inputHandler() {
    captchaButton.addEventListener('click', buttonHandler);
    if (inputText.value === captchaSymbols) {
        captchaButton.style.backgroundColor = "#FFCC02";
        isActive = true;
    }
    else {
        captchaButton.style.backgroundColor = "rgba(128, 128, 128, 0.367)";
        isActive = false;
    }
}

function buttonHandler() {
    if (isActive) {
        backMain.classList.toggle('none');
        body.style.overflow = 'scroll';
    }
    else {
        inputText.removeEventListener("input", inputHandler);
        captchaButton.removeEventListener('click', buttonHandler);
        alert('Ошибка, введите другую капчу');
        inputHandlerAndResultSum();
    }
}

function generateSum() {
    return [Math.round(Math.random() * 50), Math.round(Math.random() * 50)]
}

const resSumArr = generateSum();
const summa = resSumArr.reduce((sum, item) => {
    return sum + item
});

function inputHandlerAndResultSum() {
    symbolsWrapper.innerHTML = '';
    symbolsWrapper.insertAdjacentHTML('beforeend', `<div></div><div>${resSumArr[0]}</div><div>+</div><div>${resSumArr[1]}</div>`);

    inputText.addEventListener('input', InputHandlerResult);
    inputText.removeEventListener('input', inputHandlerAndResultSum);
}

function lastButtonHandler() {
    if (success) {
        backMain.classList.toggle('none');
        body.style.overflow = 'scroll';
        captchaButton.removeEventListener('click', lastButtonHandler);
        inputText.removeEventListener('input', InputHandlerResult);
    }
    else {
        location.reload();
        alert("Неправильный ввод капчи");
    }
}

let success = true;
function InputHandlerResult() {

    captchaButton.addEventListener('click', lastButtonHandler);
    
    if (inputText.value == summa) {
        captchaButton.style.backgroundColor = "#FFCC02";
        success = true;
    }

    else {
        captchaButton.style.backgroundColor = "rgba(128, 128, 128, 0.367)";
        success = false;
    }
}










