# js-powjnx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-powjnx)

### [Match Numbers and Letters of the Alphabet](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet)

## PROBLEM EXPLANATION
In this challenge, you are asked to return a collection of both numbers and letters extracted from a string.  Our goal is to create a single regexp that captures the range of letters between `h` and `s`, and the numbers from `2` to `6`.

## HINTS
## Hint 1
Are you using the `match()` method?  If so, then are you calling the method from the appropriate variable? i.e.
```js
let input_string = "The string you are testing on";
let yourRegExp = /[h-s]/;
let correct_result = input_string.match(yourRegExp);    // passes - returns characters H to S

let incorrect_reslt = yourRegExp.match(input_string);   // fails - .match() is not a function
```
## Hint 2
Did you remember to enable the regexp flags such as `i` for ignoring case and `g` for retrieving multiple values?  If so, then are you including both the character case match for numbers AND letters?
```js
let regexp = /[a-z1-100]/gi;
// above code returns all characters from A to Z, along with all numbers from 1 to 100
// this includes the letter A and Z and the numbers 1 and 100 
```
