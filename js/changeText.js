"use strict";

const cards = document.querySelectorAll(".purple_card");


cards.forEach(card => {
    const button = card.querySelector(".purple_card_button");
    const htmlText = card.querySelector("p");


    button.addEventListener("click", (event) => {
        event.preventDefault();
        
        const resLength = prompt("Введите максимальную длину текста для карточек");
        htmlText.innerHTML = truncate(htmlText.innerHTML, resLength);
    });
});


function truncate(str, maxlength) {
    let constStringChanged = 3;
    if (str.indexOf('...') !== -1) {
        constStringChanged = -3;
    }

    if (str.length + constStringChanged > maxlength) {
        return `${str.slice(0, +maxlength)}...`
    }
    return str;
}


