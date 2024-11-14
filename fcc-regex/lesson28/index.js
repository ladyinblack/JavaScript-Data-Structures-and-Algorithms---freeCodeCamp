// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Check for All or None</h1>`;

/** TODO:
 * Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.
 
 let favWord = "favorite";
 let favRegex = /change/;        // Change this line 
 let result = favRegex.test(favWord);
 */

function MyFavWord(favWord) {
  let favRegex = /favou?rite/;
  return favRegex.test(favWord);
}

console.log(MyFavWord('favorite'));
console.log(MyFavWord('favourite'));
console.log(MyFavWord('fav'));
