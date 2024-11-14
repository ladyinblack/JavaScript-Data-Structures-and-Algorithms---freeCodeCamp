# js-hgkysx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-hgkysx)

### [Use an Array to Store a Collection of Data](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data)

## PROBLEM EXPLANATION
- In JS, Arrays are one of the most commonly used data structure.  Unlike other languages, Arrays in JS can store different data types and can also change their size on runtime and hence are also referred as "Dynamic Arrays".  They are also 0 indexed.
- Arrays can be initialized in different ways:
  1. Array literals
  2. Array constructors
- In this challenge we'll focus on Array literals.  To initialize an array we simply do `let arr = [];`
- We can add values to this array by accessing its index, example:
```js
let arr = [];
arr[0] = "hello";
console.log(arr);     // ["hello"]
```
- We can also initialize the values in the array when we declare it, example:
```js
let arr = [1, 2, 3, "John"];
```
- In this challenge you need to create an array with at least 5 elements and at leaast one string, one number, and one boolean.
