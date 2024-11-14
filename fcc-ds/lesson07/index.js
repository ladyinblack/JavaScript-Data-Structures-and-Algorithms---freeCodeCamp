// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Copy Array Items Using slice()</h1>`;

/** TODO:
 * We have defined a function, forecast, that takes an array as an argument.  Modify the function using slice() to exract information from the argumetn array and return a new array that contains the string elements 'warm' and 'sunny'.
 
 function forecast(arr) {
   // Only change code below this line 
 
   return arr;
 }
 
 // Only change code above this line 
 console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
 */

function forecast(arr) {
  // Only change code below this line

  return arr.slice(2, 4);
}

// Only change code above this line
console.log(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
);
