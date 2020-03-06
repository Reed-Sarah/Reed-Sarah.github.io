const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
  const towns = jsonObject['towns'];

  
  for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") //using names instead of indexes to account for any future additions or deletions that could be made to the source file
    {
    
    let box = document.createElement('div'); 
   // box.className = "text";
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
   

    h3.textContent = towns[i].name;
    h4.textContent = towns[i].motto;
    p.textContent = "Year Founded: " + towns[i].yearFounded;
    p2.textContent ='Population: ' +  towns[i].currentPopulation;
    p3.textContent ='Annual Rain Fall: ' +  towns[i].averageRainfall;
    

    box.appendChild(h3);
    box.appendChild(h4);
    box.appendChild(p);
    box.appendChild(p2);
    box.appendChild(p3);
    
    if (towns[i].name == "Preston") // must use if statement instead of variable in queryselector because of spaces in town names and spaces are not allowed in css id selector
    document.querySelector('#preston').appendChild(box);
    else if (towns[i].name == "Soda Springs")
    document.querySelector('#sodaSprings').appendChild(box);
    else if (towns[i].name == "Fish Haven")
    document.querySelector('#fishHaven').appendChild(box);
    }

    
  } });