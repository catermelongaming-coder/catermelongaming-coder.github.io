const timeEl = document.querySelector(".ws-time");
const unit = document.querySelector(".ws-unit");

let time = 0;

setInterval(() => {
    time++;

    if (time < 60) {
        timeEl.innerHTML = time;
        unit.innerHTML = "seconds";
    } else {
        timeEl.innerHTML = Math.floor(time / 60);
        unit.innerHTML = "minutes";
    }

}, 250);
