# fcc-functional-programming-lesson-17

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-rleqgt)

### [Sort an Array Alphabetically using the sort Method](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/sort-an-array-alphabetically-using-the-sort-method)

## HINTS
### Hint 1
You need to use a "compare function" as the callback function of the sort method.

For example, the following is how you would sort an array in reverse alphabetical order.

```js
function reverseAlphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
  // Add your code above this line
}
reverseAlphabeticalOrder(["l", "h", "z", "b", "s"]);
// Returns ['z', 's', 'l', 'h', 'b']
```

