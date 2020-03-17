var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=d362c4077b18b4682fc44e89fb3992b7&units=imperial";
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
/* forecast */
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=d362c4077b18b4682fc44e89fb3992b7&units=imperial"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
 var i = 0;
   var j = 0;
   var week = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
   var date = new Date();
   var day = date.getDay();
   
    while ( i < 40 && j <= 5) 
    {
       var dayId = "day" + j;
       
       
        document.getElementById(dayId).textContent = week[((day + j) % 7)]; 
        
      
        if (jsObject.list[i].dt_txt.includes("18:00:00"))
       {
        var tempId = "temp" + j;
        document.getElementById(tempId).textContent = Math.round(jsObject.list[i].main.temp) + "°";
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array
var iconId = "icon" + j;
let image =  document.createElement('img');
image.setAttribute('src', imagesrc);  // focus on the setAttribute() method
image.setAttribute('alt', desc);
image.className = "icon";
document.querySelector('#' + iconId).appendChild(image); 
j++; 
    }
  
  i++;
}
 
  

  
  });