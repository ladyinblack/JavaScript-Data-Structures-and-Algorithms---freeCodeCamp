// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Iterate Over All Properties</h1>`;

/** TODO:
 * Add all of the own properties of beagle to the array ownProps.  Add all of the prototype properties of Dog to the array prototypeProps.
 *
 
 function Dog(name) {
   this.name = name;
 }
 Dog.prototype.numLegs = 4;
 
 let beagle = new Dog('Snoopy');
 
 let ownProps = [];
 let prototypeProps = [];
 
 // Only change code above this line
 */

function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
console.log(ownProps);
console.log(prototypeProps);

// Only change code above this line
