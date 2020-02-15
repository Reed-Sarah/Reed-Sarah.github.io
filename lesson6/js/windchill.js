var windSpeed = document.getElementById("windSpeed").innerHTML;
var temp = document.getElementById("temp").innerHTML;

if (windSpeed >= 3 && temp <= 50)
var windChill = (35.74 + .6215 * temp - 35.75 * windSpeed ** .16 + .4275 * temp * windSpeed ** .16).toPrecision(3);
else
var windChill = "N/A"

document.getElementById("windChill").innerHTML = windChill;