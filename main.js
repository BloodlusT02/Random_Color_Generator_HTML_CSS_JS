const colorEl = document.getElementById('color');
const generateEl = document.getElementById('generate');
const stopEl = document.getElementById('stop');
const bodyEl = document.querySelector('body');
const iEl = document.querySelector('i');

let intervalId = null;

const generateColor = () => {
    let hexa = "1234567890ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor(Math.random() * 16)];
    }
    colorEl.value = color;
    return color;
};

const startChangingColor = () => {

    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
        colorEl.disabled = false;
    }

    function changeColor() {
        bodyEl.style.backgroundColor = generateColor();
    };
};

const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
    colorEl.disabled = false;
};


const copyText = () => {
    colorEl.select();
    document.execCommand("copy");
};

generateEl.addEventListener('click', startChangingColor);
stopEl.addEventListener('click', stopChangingColor);
iEl.addEventListener('click', copyText)


