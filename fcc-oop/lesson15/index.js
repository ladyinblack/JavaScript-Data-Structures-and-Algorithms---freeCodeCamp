// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Understand Where an Object's Prototype Comes From</h1>`;

/** TODO:
 * Use isPrototypeOf to check the prototype of beagle.
 * 
 function Dog(name) {
   this.name = name;
 }
 
 let beagle = new Dog("Snoopy");
 
 // Only change code below this line
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

// Only change code below this line
console.log(Dog.prototype.isPrototypeOf(beagle));
