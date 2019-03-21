console.log('hello world');

var randChar = document.createElement('button');
randChar.innerHTML = 'Get a random character!';
randChar.id = 'randButton';
profile.appendChild(randChar);

randChar.addEventListener('click',getData);

function getData() {
    var randNum = Math.floor(Math.random()*87);
    var swapi = 'https://swapi.co/api/people/' + randNum;
    
    axios.get(swapi).then(function (response) {
        console.log(response.data);
        showData(response.data);
      })
      .catch(function (error) {
          noData();
      });
}

var nameElem = document.createElement('div');
var heightElem = document.createElement('div');
var massElem = document.createElement('div');
var hairElem = document.createElement('div');
profile.appendChild(nameElem);
profile.appendChild(heightElem);
profile.appendChild(massElem);
profile.appendChild(hairElem);

function showData(data) {

    nameElem.id = 'name';
    nameElem.className = 'charAttr';
    heightElem.className = 'charAttr';
    massElem.className = 'charAttr';
    hairElem.className = 'charAttr';
    nameElem.innerHTML = data.name;
    heightElem.innerHTML = 'height(cm): '+data.height;
    massElem.innerHTML = 'mass(kg): '+data.mass;
    hairElem.innerHTML = 'hair color: '+data.hair_color;

}


function noData() {
    nameElem.innerHTML = 'dare mo imasen';
    heightElem.innerHTML = '';
    massElem.innerHTML = '';
    hairElem.innerHTML = '';
}