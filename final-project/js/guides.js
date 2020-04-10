const requestURL = 'json/riverGuides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
  const guides = jsonObject['Guides'];

  
  for (let i = 0; i < guides.length; i++ ) {

    
    
    let box = document.createElement('div'); 
   // box.className = "text";
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image =  document.createElement('img');

    image.setAttribute('src', guides[i].picture);
    image.setAttribute('alt', guides[i].firstName + ' ' + guides[i].lastName);
    h3.textContent = guides[i].firstName + " " + guides[i].lastName;
    p.textContent = "Level of Certification: " + guides[i].certificationLevel;
    p1.textContent = "Years of Experience: " + guides[i].experience;
    p2.textContent =  guides[i].email;
    p3.textContent = guides[i].bio;
    

   box.appendChild(image);
    box.appendChild(h3);
    box.appendChild(p);
    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(p3);
    
    document.querySelector('div.content').appendChild(box);

    
   } });