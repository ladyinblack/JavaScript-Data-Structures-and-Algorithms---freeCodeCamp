// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Remove Items from an Array with pop() and shift()</h1>`;

/** TODO:
 * We have defined a function, popShift, which takes an array as an argument and returns a new array.  Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
 
 function popShift(arr) {
   let popped;       // Change this line 
   let shifted;        // Change this line 
   return [shifted, popped];
 }
 
 console.log(popShift(['challenge', 'is', 'not', 'complete']));
 */

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

let challengeArray = ['challenge', 'is', 'not', 'complete'];
console.log(popShift(challengeArray));
console.log(challengeArray);
