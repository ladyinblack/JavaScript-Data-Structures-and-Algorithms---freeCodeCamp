// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use Prototype Properties to Reduce Duplicate Code</h1>`;

/** TODO:
 * Add a numLegs property to the prototype of Dog.
 *
 
 function Dog(name) {
   this.name = name;
 }
 
 // Only change code above this line
 let beagle = new Dog('Snoopy');
 */

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog('Snoopy');
