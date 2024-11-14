// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specify Upper and Lower Number of Matches</h1>`;

/** TODO:
 * Change the regex OhRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
 
 let ohStr = "Ohhh no";
 let ohRegex = /change/;       // Change this line 
 let result = ohRegex.test(OhStr);
 */

function IsOh(ohStr) {
  let ohRegex = /Oh{3,6}\sno/;
  return ohRegex.test(ohStr);
}

console.log(IsOh('Ohh no'));
console.log(IsOh('Ohhh no'));
console.log(IsOh('Ohhhh no'));
console.log(IsOh('Ohhhhh no'));
console.log(IsOh('Ohhhhhh no'));
console.log(IsOh('Ohhhhhhh no'));

/** HINT:
 * Remember to use \s after Oh{3,6} to include a whitespace, followed by no to pass all test cases.  All test cases are written using a capita O, however, the test cases could also be passed by using ignore-case: /oh{3,6}\sno/i
 */
