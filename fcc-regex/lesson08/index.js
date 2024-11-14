// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Single Character with Multiple Possibilities</h1>`;

/** TODO:
 * Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
 * NOTE: Be sure to match both upper- and lowercase vowels.
 
 let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
 let vowelRegex = /change/;      // Change this line 
 let result = vowelRegex;      // Change this line 
 */

let quoteSample =
  'Beware of bugs in the above code; I have only proved it correct, not tried it.';
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result);
