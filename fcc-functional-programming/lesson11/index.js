// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Return Part of an Array Using the slice Method</h1>`;

/** TODO:
 * Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices.  The function should return an array.
 * 
 function sliceArray(anim, beginSlice, endSlice) {
   // Only change code below this line 
 
   // Only change code above this line
 }
 
 const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
 sliceArray(inputAnim, 1, 3);
 */

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice);
  // Only change code above this line
}

const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
console.log(sliceArray(inputAnim, 1, 3));

console.log(sliceArray(inputAnim, 0, 1));
console.log(sliceArray(inputAnim, 1, 4));
