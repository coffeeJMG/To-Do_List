<<<<<<< HEAD
const clock = document.querySelector("#screen-header_clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText=`${hours}:${minutes}:${seconds}`;
}


getClock();
=======
const clock = document.querySelector("#screen-header_clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText=`${hours}:${minutes}:${seconds}`;
}


getClock();
>>>>>>> 4401234ba11e19e6431fb515006bdeec01ca3e78
setInterval(getClock, 1000)