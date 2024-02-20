let hr  = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displaytime(){
    let date = new Date;

    // getting hour, min,sec from date
    let hrs  = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hourrotation   = 30*hrs + mins/2;
    let minuterotation = 6*mins;
    let secondrotation = 6*secs;

    hr.style.transform = `rotate(${hourrotation}deg)`;
    min.style.transform = `rotate(${minuterotation}deg)`;
    sec.style.transform = `rotate(${secondrotation}deg)`;
}

setInterval(displaytime, 1000);