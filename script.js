const scaleHTML = document.querySelector('.scale__html');
const buttonHTML = document.querySelector('.button__html');

const scaleCSS = document.querySelector('.scale__css');
const buttonCSS = document.querySelector('.button__css');




let generalLong;
let valueNow = 0;
let step;
let generalLongString;

function isFill(stepInput) {
    let inputStep = document.querySelector('.step__html').value;
    step = Number(inputStep);
    

    if (valueNow <= 100) {
        generalLong = step + valueNow;

        let id = setInterval(valueSkale, 20);

        function valueSkale() {

            if (valueNow < generalLong && valueNow < 100) {

                valueNow++;
                scaleHTML.textContent = valueNow + '%';

            } else {
                clearInterval(id)
            }

            generalLongString = valueNow + '%';
            scaleHTML.style.width = generalLongString;

        }
    }
}

buttonHTML.onclick = function () {
    isFill();
}


