let time = document.querySelector(".ws-time");
let parsedtime = parseFloat(time.innerHTML);

setInterval(() => {
    parsedtime += 1;
    time.innerHTML = parsedtime;
}, 1);

