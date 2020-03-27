import POTTER from './data/potter/potter.js'; //Importing json data from the local file
 
import { potterTemplate, filterBy, patronusFilter, wandFilter, roleFilter, gryffindorData, slytherinData, hufflepuffData, ravenclawData } from './data.js'; //Importing data functions

export { potterData };

console.log(POTTER); //showing JSON data in console for verification 

const potterData = POTTER;
let fPotter = [];

const gryffindorData = potterData.filter((gryffindor) => gryffindor.house === 'Gryffindor');
const slytherinData = potterData.filter((slytherin) => slytherin.house === 'Slytherin');
const ravenclawData = potterData.filter((ravenclaw) => ravenclaw.house === 'Ravenclaw');
const hufflepuffData = potterData.filter((hufflepuff) => hufflepuff.house === 'Hufflepuff');console.log(hufflepuffData);

//Function to show all character cards
document.getElementById('potterCards').innerHTML = `
${POTTER.map(potterTemplate).join('')}`;

// Characters by house
gryffindorBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Gryffindor');
  document.getElementById('gryffindorCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
slytherinBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Slytherin');
  document.getElementById('slytherinCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
hufflepuffBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Hufflepuff');
  document.getElementById('hufflepuffCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
ravenclawBtn.addEventListener('click', () => {
  fPotter = filterBy('house', 'Ravenclaw');
  document.getElementById('ravenclawCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
gryffindorNav.addEventListener('click', () => {
  fPotter = filterBy('house', 'Gryffindor');
  document.getElementById('gryffindorCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
slytherinNav.addEventListener('click', () => {
  fPotter = filterBy('house', 'Slytherin');
  document.getElementById('slytherinCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
hufflepuffNav.addEventListener('click', () => {
  fPotter = filterBy('house', 'Hufflepuff');
  document.getElementById('hufflepuffCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});
ravenclawNav.addEventListener('click', () => {
  fPotter = filterBy('house', 'Ravenclaw');
  document.getElementById('ravenclawCards').innerHTML = `
  ${fPotter.map(potterTemplate).join('')}`;
});


// Character filters
document.getElementById('patronus').addEventListener('change', selectPatronus);
function selectPatronus(e) {
  const pcharacter = document.getElementById('patronus');
  const patronus = pcharacter.options[pcharacter.selectedIndex].text.toLowerCase();
  const filterPatronus = patronusFilter(potterData, patronus) 
  document.getElementById('potterCards').innerHTML = `${filterPatronus.map(potterTemplate).join('')}`;
};

document.getElementById('charactersWand').addEventListener('change', selectWand);
function selectWand(e) {
  const wcharacter = document.getElementById('charactersWand');
  const wandCore = wcharacter.options[wcharacter.selectedIndex].text.toLowerCase();
  const filterWand = wandFilter(potterData, wandCore) 
  document.getElementById('potterCards').innerHTML = `${filterWand.map(potterTemplate).join('')}`;
};

document.getElementById('charactersRole').addEventListener('change', selectRole);
function selectRole(e) {
  const rcharacter = document.getElementById('charactersRole');
  const role = rcharacter.options[rcharacter.selectedIndex].text.toLowerCase();
  const filterRole = roleFilter(potterData, role) 
  document.getElementById('potterCards').innerHTML = `${filterRole.map(potterTemplate).join('')}`;
};

// Gryffindor filters
/*document.getElementsByClassName('houseS').addEventListener('change', selectHouse);
function selectHouse(i){
  const houseNav = document.getElementsByClassName('houseS');
  const houseSelect = houseNav.selectedIndex.text.toLowerCase();
  const filterHouse = houseFilter(potterData, houseSelect)
  document.getElementById('gryffindorCards').innerHTML = `${filterHouse.map(potterTemplate).join('')}`;
};*/

document.getElementById('patronusG').addEventListener('change', selectPatronusG);
function selectPatronusG(e) {
  const pcharacter = document.getElementById('patronusG');
  const patronus = pcharacter.options[pcharacter.selectedIndex].text.toLowerCase();
  const filterPatronus = patronusFilter(gryffindorData, patronus) 
  document.getElementById('gryffindorCards').innerHTML = `${filterPatronus.map(potterTemplate).join('')}`;
};

//Buscador personajes
/*const searchBar = document.querySelector('#nameSearch');
const searchBtn = document.querySelector('#searchButton');
const searchResult = document.querySelector('#potterCards');

const filterName = () => {
  //let names = []
  searchResult.innerHTML = '';
  const nameInput = searchBar.value.toLowerCase();
  console.log(nameInput);
  for (let data of POTTER){
    let name = data.name.toLowerCase();
    if(name.indexOf(nameInput) !== -1){
      searchResult.innerHTML += `
      <li>${data.name}
      `
    //searchResult.innerHTML += `
    //${POTTER.map(potterTemplate).join('')}`
    }
  }
  if(searchResult.innerHTML === ''){
    searchResult.innerHTML += `
    <img class='noResults' src='https://image.flaticon.com/icons/png/512/867/867855.png'> 
    <p class='results'> OOPS!
    We couldn't find a match for your search.
    Are you sure you cast the right spell?</p>`
  }
};
searchBtn.addEventListener('click', filterName);
searchBar.addEventListener('keyup', filterName);

filterName(); */
