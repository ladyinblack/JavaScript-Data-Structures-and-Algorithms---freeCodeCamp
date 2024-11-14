// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Everything But Letters and Numbers</h1>`;

/** TODO:
 * Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
 
 let quoteSample = "The five boxing wizards jump quickly.";
 let nonAlphabetRegex = /change/;        // Change this line 
 let result = quoteSample.match(nonAlphabetRegex).length;
 */

function extractLength(quoteSample) {
  let nonAlphabetRegex = /\W/g;
  return quoteSample.match(nonAlphabetRegex).length;
}

console.log(extractLength('The five boxing wizards jump quickly.'));
console.log(extractLength('Pack my box with five dozen liquor jugs.'));
console.log(extractLength('How vexingly quick daft zebras jump!'));
console.log(extractLength('123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'));
