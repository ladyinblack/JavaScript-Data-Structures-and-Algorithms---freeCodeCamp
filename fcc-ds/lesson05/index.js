// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Remove Items Using splice()</h1>`;

/** TODO:
 * We've initialized an array arr.  Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
 
 const arr = [2, 4, 5, 1, 7, 5, 2, 1];
 // Only change code below this line 
 
 // Only change code above this line 
 console.log(arr);
 */

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(2, 1);
arr.splice(3, 2);
// Only change code above this line
console.log(arr);
