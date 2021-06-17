let prefix = "www."
let pronoun = ["the", "our", "this", "that", "your"];
let adj = ["great", "big", "adventurous", "amused", "enthusiastic"];
let noun = ["jogger", "racoon", "family", "person", "story", "player", "physics"];
let extension = [".com", ".co", ".io", ".net"]

// function to generate random number
const getRandomNumber = (max) => Math.floor(Math.random() * max);

// function to generate grab that word from the arrays and ling them together
const generateWebDomain = () =>
  `${prefix}${pronoun[getRandomNumber(pronoun.length)]}${adj[getRandomNumber(adj.length)]}${noun[getRandomNumber(noun.length)]}${extension[getRandomNumber(extension.length)]}`;
console.log(generateWebDomain());

// function to link the created domains to the html 
const generateDomain = () => {
  document.querySelector("#domain").innerHTML = generateWebDomain();
}

// activate the button to change domains on click `
document.querySelector("button").addEventListener('click', generateDomain);

generateDomain();






// let generateWebDomain = () => {
// let prefix = "www."
// let pronoun = ["the", "our", "this", "that", "your"];
// let adj = ["great", "big", "adventurous", "amused", "enthusiastic"];
// let noun = ["jogger", "racoon", "family", "person", "story", "player", "physics"];
// let extension = [".com", ".co", ".io", ".net"]

//   let genDomain = [];

//   for (let i = 0; i < pronoun.length; i++) {

//     for (let j = 0; j < adj.length; j++) {

//       for (let k = 0; k < noun.length; k++) {

//          for (let l = 0; l < noun.length; l++){

//         genDomain.push(prefix + pronoun[i] + adj[j] + noun[k] + extension[l]);

//          }
//       }
//     }
//   }
// document.querySelector(#domain).innerHTML= genDomain

//   return genDomain;
// };

