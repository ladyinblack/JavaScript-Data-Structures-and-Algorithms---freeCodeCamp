// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sort an Array Alphabetically using the sort Method</h1>`;

/** TODO:
 * Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.  The function should return the sorted array.
 *
 function alphabeticalOrder(arr) {
   // Only change code below this line
 
   return arr;
   // Only change code above this line
 }
 
 alphabeticallyOrder(['a', 'd', 'c', 'a', 'z', 'g']);
 */

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort();
  // Only change code above this line
}

console.log(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g']));
