// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Avoid Mutations and Side Effects Using Functional Programming</h1>`;

/** TODO:
 * Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.
 * 
 // The global variable 
 let fixedValue = 4;
 
 function incrementer() {
   // Only change code below this line 
 
   // Only change code above this line
 }
 */

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  return fixedValue + 1;
  // Only change code above this line
}

console.log(fixedValue);
console.log(incrementer());
