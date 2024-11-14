// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add Elements to the End of an Array Using concat Instead of push</h1>`;

/** TODO:
 * Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.
 * 
 function nonMutatingPush(original, newItem) {
   // Only change code below this line 
   return original.push(newItem);
 
   // Only change code above this line
 }
 
 const first = [1, 2, 3];
 const second = [4, 5];
 nonMutatingPush(first, second);
 */

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(first, second, nonMutatingPush(first, second));
