// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use Dot Notation to Access the Properties of an Object</h1>`;

/** TODO:
 * Print both properties of the dog object to your console.
 * 
 
 let dog = {
   name: "Spot",
   numLegs: 4
 };
 // Only change code below this line
 */

let dog = {
  name: 'Spot',
  numLegs: 4,
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);
