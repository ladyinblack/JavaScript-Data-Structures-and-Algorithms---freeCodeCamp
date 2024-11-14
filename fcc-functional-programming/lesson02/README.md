# js-ef7ag1

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-ef7ag1)

### [Understand Functional Programming Terminology](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/understand-functional-programming-terminology)

## PROBLEM EXPLANATION
Just as in the last challenge, you must call the `getTea` method and store it in a variable. Only this time, you have 2 variables to store 2 separate sets of data in. You will see that the `getTea()` function is the same as before, only now it takes in 2 separate parameters. The first parameter is a function, so we will need to pass in either the `prepareGreenTea()` function or the `prepareBlackTea()` function, followed by the number second parameter `numOfCups` which can be input as an integer.

## HINTS
### Hint 1
In this exercise we are assigning the result of a higher order function to variables. To do this we call a function with a callback function as a parameter.
```js
const basketOne = makeBasket(addFruit, 10)
```

### Code Explanation
In the solution above we passed in the functions `prepareGreenTea()` and `prepareBlackTea()` as parameters or callback functions for the `getTea()` functions being assigned to our two constant variables `tea4BlackTeamFCC` and `tea4GreenTeamFCC`.

This way no global variables are changed, and we have the option to add an unlimited number of different choices of `prepareTea()` methods since it is a callback function being passed to the higher order function of `getTea()`.

