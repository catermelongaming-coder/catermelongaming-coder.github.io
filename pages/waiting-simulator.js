let time = 0;
let time = document.querySelector("ws-time");
let parsedTime = parseFloat(time.innerHTML);

setInterval(() => {
    parsedtime += 1;
    time.innerHTML = parsedtime;
}, 1000);
