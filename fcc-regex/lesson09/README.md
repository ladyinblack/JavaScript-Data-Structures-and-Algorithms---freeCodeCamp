# js-gx1hzc

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-gx1hzc)

### [Match Letters of the Alphabet](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet)

## PROBLEM EXPLANATION
In this challenge, you're asked to match all of the letters of the alphabet within a given string.  Not only are you matching/searching for characters, but you're asked to extract them.

## HINTS
### Hint 1
Remember that you're asked to extract the letters from the string - this cannot be done with the `.test()` method because it returns True or False.  In this case, we need to extract the actual result from the string using the `.match()` method.
### Hint 2
Are you using the `match()` method character case flag with brackets?  e.g. `regExp = /[a-e]/` vs `regExp = /a-e/`.  What this allows us to do is search through the string for any characters matching `[a, b, c, ..., e]` using the shorthand notation `/[a-e]/`.
