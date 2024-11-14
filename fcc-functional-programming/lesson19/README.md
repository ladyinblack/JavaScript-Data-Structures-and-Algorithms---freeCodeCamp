# fcc-functional-programming-lesson-19

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-pe23nz)

### [Split a String into an Array Using the `split` Method](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/split-a-string-into-an-array-using-the-split-method)

## PROBLEM EXPLANATION
Simply split the string to create a new array of words.

A simple regular expression can be used to achieve this result.

`/\W/` Matches any non-word character.  This includes spaces and punctuation, but not underscores.  It's equivalent to `/[^A-Za-z0-9_]/`.  For more information about Regular Expressions, see the official [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

