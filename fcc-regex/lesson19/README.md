# js-fwdycm

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-fwdycm)

### [Match Everything But Letters and Numbers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers)

## PROBLEM EXPLANATION
To finish this challenge, it's necessary to use **character classes**.

The `\W` matches any character that is not a word character from the basic Latin alphabet.

*Equivalent to `[^A-Za-z0-9]._`* 

For example, `/\W/` or `/[^A-Za-z0-9_]/` matches `%` in `50%`.
