// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Copy an Array with the Spread Operator</h1>`;

/** TODO:
 * We have defined a function, copyMachine, which takes arr (an array) and num (a number) as arguments.  
 * The function is supposed to return a new array made up of num copies of arr. 
 * We have done most of the work for you, but it doesn't work quite right yet.  
 * Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
 
 function copyMachine(arr, num) {
   let newArr = [];
   while (num >= 1) {
     // Only change code below this line 
 
     // Only change code above this line 
     num--;
   }
   return newArr;
 }
 
 console.log(copyMachine([true, false, true], 2));
 */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
console.log(copyMachine([true, true, null], 1));
console.log(copyMachine(['it works'], 3));
