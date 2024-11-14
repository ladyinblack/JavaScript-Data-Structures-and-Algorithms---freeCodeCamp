## SOLUTIONS
### Solution 1
```js
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```
### Code Explanation
- A simple `if`-statement can be used to check whether or not the value returned by the `indexOf()` function is less than 0.
- Once the value is discovered then you can return either `true` or `false`.
- Demonstrates how a simple `if`-statement can return the correct result.

### Solution 2
```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```
### Code Explanation
- Demonstrates how the problem can be solved using the `? :` conditional operator.

### Solution 3
```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```
### Code Explanation
- Demonstrates how the problem can be solved by directly returning result of the comparison.
