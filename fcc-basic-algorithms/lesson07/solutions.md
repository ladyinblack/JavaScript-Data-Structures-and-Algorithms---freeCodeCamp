## SOLUTIONS

### Alternate Solution 1
```js
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}
```
### Code Explanation
- This solution uses recursion.
- We check if `num` is negative and return an empty string if true.
- If not, we add the string to a call of our function with `num` being decreased by 1, which will add another `str` and another ... until eventually `num` is 1.  And return that whole process.

### REFERENCE LINKS
- [Functions - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)


### Alternate Solution 2 (Recursive Solution)
```js
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}
```

