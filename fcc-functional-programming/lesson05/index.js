// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Pass Arguments to Avoid External Dependence in a Function</h1>`;

/** TODO:
 * Let's update the incrementer function to clearly declare its dependencies.
 * Write the incrementer function so it take an argument, and then returns a result after increasing the value by one.
 * 
 // The global variable
 let fixedValue = 4;
 
 // Only change code below this line
 function incrementer() {
 
   // Only change code above this line
 }
 */

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(val) {
  return val + 1;
  // Only change code above this line
}

console.log(fixedValue);
console.log(incrementer(fixedValue));
