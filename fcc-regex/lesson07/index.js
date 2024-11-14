// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Anything with Wildcard Period</h1>`;

/** TODO:
 * Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.  Your regex should use the wildcard character.
 
 let exampleStr = "Let's have fun with regular expressions!";
 let unRegex = /change/; // Change this line
 let result = unRegex.test(exampleStr);
 */

function RegexUn(exampleStr) {
  let unRegex = /.un/;
  return unRegex.test(exampleStr);
}
console.log(RegexUn('Let us go on a run.'));
console.log(RegexUn('The sun is out today.'));
console.log(RegexUn('Coding is a lot of fun.'));
console.log(RegexUn('Seven days without a pun makes one weak.'));
console.log(RegexUn('One takes a vow to be a nun.'));
console.log(
  RegexUn('She got fired from the hot dog stand for putting her hair in a bun.')
);
console.log(RegexUn('There is a bug in my code.'));
console.log(RegexUn('Catch me if you can.'));
