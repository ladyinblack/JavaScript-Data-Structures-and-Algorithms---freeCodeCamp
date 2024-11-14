// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Non-Whitespace Characters</h1>`;

/** TODO:
 * Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
 
 let sample = "Whitespace is important in separating words";
 let countNonWhiteSpace = /change/;        // Change this line 
 let result = sample.match(countNonWhiteSpace);
 */

function CountNonWhitespaces(sample) {
  let countNonWhiteSpace = /\S/g;
  return sample.match(countNonWhiteSpace);
}

console.log(CountNonWhitespaces('Whitespace is important in separating words'));
console.log(CountNonWhitespaces('Men are from Mars and women are from Venus.'));
console.log(CountNonWhitespaces('Space: the final frontier.'));
console.log(CountNonWhitespaces('MindYourPersonalSpace'));
