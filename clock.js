function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";

    // Wechsel auf Nachmittag
    if (hrs == 0) hrs = 12;
    if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
    }

    // immer 2-stellig anzeigen: h - min - sec; alternativ zu padStart, gem. Google Recherche
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs} ${period}`;
    
    document.getElementById("clock").innerHTML = time;
}

setInterval(clock, 1000);

// <Countdown bis> Definition - Aufgabe 2.
let countDownDate = new Date("Feb 17, 2022 17:00:00");

// Intervall in Sekundentakt
let interval = undefined;
function updateTime() {
    // "Time gap, sprich Zeitspanne"
    let distance = countDownDate - Date.now();

    // Zeitberechnungen: d - h - min - sec
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / 1000 / 60) % 60);
    let seconds = Math.floor((distance / 1000) % 60);

    // Anzeige des Timers in h - min - sec / id="timer"
    document.getElementById("timer").innerHTML = hours + "h " + minutes + "min " + seconds + "sec ";

    // Schlusstext nach Beendigung des Countdowns
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "TIME'S UP";
    }
};
// Aufgabe 3. - in Absprache mit Ralph:
//document.querySelector(".date-button").addEventListener("click", function () {
function startCountdown() {
    clearInterval(interval);
    countDownDate = new Date(document.querySelector(".date-input").value);
    interval = setInterval(updateTime, 100);
};