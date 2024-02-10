const basket = document.querySelector(".basket");
const rightSideBlock = document.querySelector(".right_side_basket");
const basketButton = document.querySelector(".right_section_button");
const basketClose = document.querySelector(".close_right_side");
const donateSum = document.querySelector(".donate_sum");


const newInput = Accumulator(Math.round(Math.random() * 10000));
donateSum.innerHTML = `Cумма пожертвований: ${newInput.value}`;
basket.addEventListener("click", () => {

    rightSideBlock.classList.toggle('none');
    setTimeout(() => {
        rightSideBlock.style.right = "0";
        basket.classList.toggle('none');
    }, 0);

    basketButton.addEventListener("click", (e) => {
        e.preventDefault();

        newInput.read();
    });
    
    basketClose.onclick = () => {
        rightSideBlock.style.right = "-25vw";
        setTimeout(() => {
            basket.classList.toggle('none');
            rightSideBlock.classList.toggle('none');
        }, 410);
    };

});


function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        const temp = prompt("Сколько вы хотите пожертвовать?");
        if (!isNaN(temp) && temp >= 0) {
            this.value += +temp;
            donateSum.innerHTML = `Cумма пожертвований: ${newInput.value}`;
        }
    }
    return this
}


