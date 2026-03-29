let time = 0;

setInterval(() => {
    time += 1;
    document.querySelector("ws-time").innerHTML = time;
}, 1000);
