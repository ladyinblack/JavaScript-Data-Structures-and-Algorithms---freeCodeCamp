// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Set the Child's Prototype to an Instance of the Parent</h1>`;

/** TODO:
 * Modify the code so that instance sof Dog inherit from Animal.
 * 
 function Animal() {}
 
 Animal.prototype = {
   constructor: Animal,
   eat: function() {
     console.log("nom nom nom");
   }
 };
 
 function Dog() {}
 
 // Only change code below this line 
 
 let beagle = new Dog();
 */

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();
beagle.eat();
