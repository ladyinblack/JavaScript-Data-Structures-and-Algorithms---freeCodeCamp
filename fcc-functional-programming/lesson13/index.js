// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Combine Two Arrays Using the concat Method</h1>`;

/** TODO:
 * Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original.  The function should return the concatenated array.
 * 
 function nonMutatingConcat(original, attach) {
   // Only change code below this line 
 
   // Only change code above this line
 }
 
 const first = [1, 2, 3];
 const second = [4, 5];
 nonMutatingConcat(first, second);
 */

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);
  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));
console.log(first, second);
