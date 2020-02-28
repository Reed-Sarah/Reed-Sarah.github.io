update = new Date(document.lastModified)
theMonth = update.getMonth() 
theDate = update.getDate()
theYear = update.getFullYear()
theDay = update.getDay()

var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];


var dayWord = daysInWeek[theDay];
var monthWord = months[theMonth];

var x = dayWord + ", " + theDate + " " + monthWord + " " + theYear
document.getElementById("update").innerHTML = x;