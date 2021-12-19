const meter = document.getElementById("meter");
const currentDate = new Date().getDate();
const endDate = new Date("25 December 2021").getDate();
const msg = document.getElementById("message");

function festiveLoader() {
    meter.setAttribute("value", currentDate);
    meter.setAttribute("max", endDate);
    meter.setAttribute("low", 7);
    meter.setAttribute("high", 14);
    meter.setAttribute("optimum", 22);
   
    if (currentDate === endDate) {
        msg.textContent = "️️️Merry Christmas!";
        msg.style.fontFamily = "'Mountains of Christmas', cursive";
        msg.style.fontSize = "2.25rem";
    }
}

festiveLoader();



