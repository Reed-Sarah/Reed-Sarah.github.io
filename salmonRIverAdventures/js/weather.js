var apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.420206&lon=-116.317118&appid=d362c4077b18b4682fc44e89fb3992b7&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    

    var windSpeed = jsObject.wind.speed;
    var temp = jsObject.main.temp;
    document.getElementById('windSpeed').textContent = windSpeed.toPrecision(3);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = temp.toPrecision(3);
 

    if (windSpeed >= 3 && temp <= 50)
    {
var windChill = (35.74 + .6215 * temp - 35.75 * windSpeed ** .16 + .4275 * temp * windSpeed ** .16).toPrecision(3) + "&#00176;F";
    }
else
{
var windChill = "N/A";
}

document.getElementById("windChill").innerHTML = windChill;
 });
//id=5606338