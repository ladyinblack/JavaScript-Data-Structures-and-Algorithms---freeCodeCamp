# fcc-functional-programming-lesson-24

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-7z8pmk)

### [Introduction to Currying and Partial Application](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/introduction-to-currying-and-partial-application)

## PROBLEM EXPLANATION
Use currying to return a function which accepts a function as a parameter.  Each function should accept one parameter, and a third-most should return the sum of each parameter.

### REFERENCE LINKS
- [JavaScript.info - Currying](https://javascript.info/currying-partials)

## HINTS
### Hint 1
Within the `add` function, return a function which returns a function, which returns the addition of three parameters (one from each function).

