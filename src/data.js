export { potterTemplate, filterBy, patronusFilter, wandFilter, roleFilter, gryffindorData, slytherinData, hufflepuffData, ravenclawData };

import potterData from './data/potter/potter.js';

let filteredCharacters = [];


//Character templates
function potterTemplate(cards) {
  return `
  <div class='characterBox'>
      <h1>${cards.name}</h1>
      <img class='harryPhotos' src=${cards.image}>
      <p><strong>House:</strong>${(cards.house.toUpperCase()} </p>
      <p><strong> Blood status: </strong> ${cards.ancestry}</p>
      <p><strong> Birthday:</strong> ${cards.dateOfBirth}</p>
      <p><strong> Patronus:</strong> ${cards.patronus}</p>
      <p><strong> Wand:</strong> ${cards.wand.core}</p>
  </div>`;
};

// Filter by house
function filterBy(filterKey, filterValue) {
  filteredCharacters = potterData.filter((potterCharacter) => (potterCharacter[filterKey] === filterValue));
  return filteredCharacters;
};

// Character filters
function patronusFilter(data, input) {
  console.log(input)
  return data.filter((persona) => {
    if (persona.patronus === input){
      return persona;
    }else if (input === 'unknown'){
      return persona.patronus === '';
    }
  });
};

function wandFilter(data, input) {
  //console.log(input)
  return data.filter((persona) => {
    if (persona.wand.core === input){
      return persona;
    }else if (input === 'unknown'){
      return persona.wand.core === '';
    }
  });
};

function roleFilter(data, input) {
  //console.log(input)
  return data.filter((persona) => {
    if (input === "hogwarts student"){
      return persona.hogwartsStudent === true;
    } else if (input === "hogwarts staff"){
      return persona.hogwartsStaff === true;
    } else if (input === "other/unknown"){
      return persona.hogwartsStudent === false && persona.hogwartsStaff === true; //revisar la lógica de este operador
    }
  });
};

function nameFilter(data, input) {
  //console.log(input)
  return data.filter((persona) => {
    if (persona.name === input){
      return persona;
    };
  });
};


//House filters
const gryffindorData = potterData.house === "gryffindor";
const slytherinData = potterData.house === "slytherin";
const ravenclawData = potterData.house === "ravenclaw";
const hufflepuffData = potterData === "ravenclaw";




