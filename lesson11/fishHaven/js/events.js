const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
  const towns = jsonObject['towns'];

  
  for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name == "Fish Haven" ) //using names instead of indexes to account for any future additions or deletions that could be made to the source file
    {
    
    let box = document.createElement('div'); 
    
   
for (j = 0; j < 3; j++)
{ 
   let p = document.createElement('p'); 
   p.textContent = towns[i].events[j];
    

    box.appendChild(p);
  }
    document.querySelector('#upcomingEvents').appendChild(box);
    
    
  } }});