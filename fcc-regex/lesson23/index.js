// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Whitespace</h1>`;

/** TODO:
 * Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
 
 let sample = "Whitespace is important in separating words";
 let countWhiteSpace = /change/;       // Change this line 
 let result = sample.match(countWhiteSpace);
 */

function CountWhitespaces(sample) {
  let countWhiteSpace = /\s/g;
  return sample.match(countWhiteSpace);
}

console.log(CountWhitespaces('Whitespace is important in separating words'));
console.log(CountWhitespaces('Men are from Mars and women are from Venus.'));
console.log(CountWhitespaces('Space: the final frontier'));
console.log(CountWhitespaces('MindYourPersonalSpace'));
