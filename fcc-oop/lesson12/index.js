// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Understand the Constructor Property</h1>`;

/** TODO:
 * Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
 * 
 
 function Dog(name) {
   this.name = name;
 }
 
 // Only change code below this line 
 function joinDogFraternity(candidate) {
 
 }
 */

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
