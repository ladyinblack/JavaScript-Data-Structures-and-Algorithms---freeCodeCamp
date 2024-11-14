// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Repeat a String Repeat a String</h1>`;

/** TODO:
 * Repeat a given string 'str' (first argument) for 'num' times (second argument).  Return an empty string if 'num' is not a positive number.  For the purpose of this challenge, do not use the built-in '.repeat()' method.
 * 
 
 function repeatStringNumTimes(str, num) {
   return str;
 }
 
 repeatStringNumTimes("abc", 3);
 */

function repeatStringNumTimes(str, num) {
  let retStr = '';
  for (let i = 0; i < num; i++) {
    retStr += str;
  }
  return retStr;
}

console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('abc', 4));
console.log(repeatStringNumTimes('abc', 1));
console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('*', 8));
console.log(repeatStringNumTimes('abc', -2));
console.log(repeatStringNumTimes('abc', 0));
