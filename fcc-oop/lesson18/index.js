// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Inherit Behaviors from a Supertype</h1>`;

/** TODO:
 * Use Object.create to make two instances of Animal named duck and beagle.
 * 
 function Animal() {}
 
 Animal.prototype = {
   constructor: Animal,
   eat: function() {
     console.log("nom nom nom");
   }
 };
 
 // Only change code below this line
 
 let duck;     // Change this line 
 let beagle;   // Change this line 
 */

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
