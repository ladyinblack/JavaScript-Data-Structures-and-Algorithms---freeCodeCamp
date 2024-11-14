# js-bgksnq

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-bgksnq)

### [Iterate Through All an Array's Items Using For Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops)

## HINTS
### Hint 1
- A `for` loop must be used to search through every element in the array.
```js
for (let i = 0; i < arr.length; i++) {}
```
### Hint 2
- Every element of the array must then be compared to the `elem` parameter passed through the `filteredArray()` function.
```js
if (arr[i].indexOf(elem) == -1) {
}
```
### Hint 3
- If a match is NOT found then `newArr` have that entire subarry added.  The `push()` function is very useful here.
```js
newArr.push(arr[i]);
```
- Once that entire subarray is added to `newArr` the loop continue with the next element.
