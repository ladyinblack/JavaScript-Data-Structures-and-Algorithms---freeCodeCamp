// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match a Literal String with Different Possibilities</h1>`;

/** TODO:
 * Complete the regex petRegex to match the pets dog, cat, bird, or fish.
 
 let petString = 'James has a pet cat.';
 let petRegex = /change/; // Change this line
 let result = petRegex.test(petString);
 */

let petString = 'James has a pet cat.';
// let petString = 'Emma has a pet rock.';
// let petString = 'Emma has a pet bird.';
// let petString = 'Liz has a pet cat.';
// let petString = 'Kara has a pet dolphin.';
// let petString = 'Alice has a pet fish.';
// let petString = 'Jimmy has a pet computer.';
let petRegex = /dog|cat|bird| fish/; // Change this line
let result = petRegex.test(petString);

console.log(result);
