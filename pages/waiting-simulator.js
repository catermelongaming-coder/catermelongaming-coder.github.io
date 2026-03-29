const timeEl = document.querySelector(".ws-time");
let time = 0;

setInterval(() => {
    time++;
    timeEl.innerHTML = time;
}, 1000);
