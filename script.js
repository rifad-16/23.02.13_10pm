const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
const month = date.getMonth();

monthNameEl.innerText = date.toLocaleDateString("en", {
    month: "long"
});

dayNameEl.innerText = date.toLocaleDateString("en", {
    weekday: "long"
});

dayNumberEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sessions = document.getElementById("sessions");

if(hrs >= 12){
    sessions.innerHTML = `PM`;
}
else{
    sessions.innerHTML = `AM`;
}

if (hrs > 12){
    hrs = hrs - 12;
}

hrs = hrs < 10? "0" + hrs : hrs;
minutes = minutes < 10? "0" + minutes : minutes;
seconds = seconds < 10? "0" + seconds : seconds;

document.getElementById("hour").innerHTML = hrs;
document.getElementById("minutes").innerHTML = min;
document.getElementById("seconds").innerHTML = sec;
 }

setInterval(displayTime, 10);
