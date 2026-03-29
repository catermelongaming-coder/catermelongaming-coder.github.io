const timeEl = document.querySelector(".ws-time");
const unit = document.querySelector(".ws-unit");

let time = 0;

setInterval(() => {
    time++;

    if (time < 60) {
        timeEl.innerHTML = time;
        unit.innerHTML = "seconds";
    } else {
        let minutes = time / 60;
        timeEl.innerHTML = minutes.toFixed(2);
        unit.innerHTML = "minutes";
    }

}, 1000);
