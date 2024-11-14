// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Check For The Presence of an Element With indexOf()</h1>`;

/** TODO:
 * indexOf() can be incredibly useful for quickly checkign for the presence of an element on an array.  We have defined a function, quickCheck, that takes an array and an element as arguments.  Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
 
 function quickCheck(arr, elem) {
   // Only change code below this line 
 
   // Only change code above this line 
 }
 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
 */

function quickCheck(arr, elem) {
  // Only change code below this line
  let elemExist = arr.indexOf(elem);
  if (elemExist == -1) {
    return false;
  }
  return true;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(['onions', 'squash', 'shallots'], 'onions'));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck([true, false, false], undefined));
