// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Understand the Prototype Chain</h1>`;

/** TODO:
 * Modify the code to show the correct prototype chain.
 * 
 function Dog(name) {
   this.name = name;
 }
 
 let beagle = new Dog("Snoopy");
 
 Dog.prototype.isPrototypeOf(beagle);    // yields true 
 
 // Fix the code below so that it evaluates to true 
 ???.isPrototypeOf(Dog.prototype);
 */

function Dog(name) {
  this.name = name;
}

let beagle = new Dog('Snoopy');

Dog.prototype.isPrototypeOf(beagle); // yields true

// Fix the code below so that it evaluates to true
console.log(Object.prototype.isPrototypeOf(Dog.prototype));
