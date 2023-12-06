let Light = document.querySelector('img');
let onBtn = document.querySelector('.onSwitch');

function turnOnLight () {
    Light.src = "./img/on.jpg";
}

onBtn.addEventListener('click', turnOnLight )



let offBtn = document.querySelector('.offSwitch');

function turnOffLight () {
    Light.src = "./img/off.jpg";
}

offBtn.addEventListener('click', turnOffLight )
