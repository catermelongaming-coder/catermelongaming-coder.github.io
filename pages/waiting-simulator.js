let time = document.querySelector("ws-time");
let parsedTime = parseFloat(time.innerHTML);

console.log(document.querySelector(".ws-time"));

setInterval(() => {
    parsedtime += 1;
    time.innerHTML = parsedtime;
}, 1000);

