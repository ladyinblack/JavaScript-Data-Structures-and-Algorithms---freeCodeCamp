// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Convert Celsius to Fahrenheit</h1>`;

/** TODO:
 * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 * You are given a variable celsius representing a temperature in Celsius.  Use the variable fahrenheit alredy defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.  Use the formula mentioend above to help convert the Celsius temperature to Fahrenheit.
 
 function convertCtoF(celsius) {
   let fahrenheit;
   return fahrenheit;
 }
 
 convertCtoF(30);
 */

function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log('0ºC = ' + convertCtoF(0) + 'ºF');
console.log('-30ºC = ' + convertCtoF(-30) + 'ºF');
console.log('-10ºC = ' + convertCtoF(-10) + 'ºF');
console.log('0ºC = ' + convertCtoF(0) + 'ºF');
console.log('20ºC = ' + convertCtoF(20) + 'ºF');
console.log('30ºC = ' + convertCtoF(30) + 'ºF');
