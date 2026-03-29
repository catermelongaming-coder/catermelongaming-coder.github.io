let time = 0;

setInterval(() => {
    time += 1;
    document.getElementById("ws-time").innerText = time;
}, 1000);
