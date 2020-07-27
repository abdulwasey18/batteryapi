function chargebattery() {
    let battery = document.getElementById("battery");
    battery.innerHTML = "&#xf244;";
    setTimeout(function() {
        battery.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function() {
        battery.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function() {
        battery.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function() {
        battery.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();

setInterval(chargebattery, 5000);


let batterylevel = document.getElementById("batterylevel");
let batterystatus = document.getElementById("chargingstatus");

let showbattery = function(battery) {
    batterylevel.innerHTML = Math.round(battery.level * 100) + "% remaining";

    batterystatus.innerHTML = (battery.charging) ? "charging" : "not plugged in";


}
navigator.getBattery()
    .then(showbattery);