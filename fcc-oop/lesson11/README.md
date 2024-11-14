# js-st1p2y

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-st1p2y)

### [Iterate Over All Properties](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties)

## PROBLEM EXPLANATION
The method is to use a `for-in-loop` to iterate through every property in the object.  Inside the loop you then check if the property is a `own-property` or a `prototype` and place it in the `ownProps[]` array or the `prototypeProps[]` array.  Remember to `push` properties to the `beagle` object and not the `Dog` object to pass all test cases.

