function temperature() {
    var c = parseFloat(document.getElementById("celsius").value);
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f.toFixed(2);
}

function weight() {
    var kg = parseFloat(document.getElementById("kilo").value);
    var p = kg * 2.205;
    document.getElementById("pounds").value = p.toFixed(2);
}

function distance() {
    var km = parseFloat(document.getElementById("km").value);
    var m = km / 1.609;
    document.getElementById("miles").value = m.toFixed(2);
}

// Add event listeners to buttons
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("temperature-btn").addEventListener("click", temperature);
    document.getElementById("weight-btn").addEventListener("click", weight);
    document.getElementById("distance-btn").addEventListener("click", distance);
});
