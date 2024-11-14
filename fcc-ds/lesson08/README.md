# js-tjwqsl

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-tjwqsl)

### [Copy an Array with the Spread Operator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator)

## HINTS
### Hint 1
- The final hint in the example tells you to use a recently learned method.
### Hint 2
- The spread operator copies all elements into a new empty object.
```js
while (num >= 1) {
    newArr = [...arr];
    num--;
}
```
- The code above will copy all of the elements into `newArr` but will also reinitialize `newArr` with every new iteration of the while loop.
- A new variable should first be initialized using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop.
