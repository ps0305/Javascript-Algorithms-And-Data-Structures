JavaScript Algorithms and Data Structures Projects: Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

```js
function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase();

  let rev = str.split('').reverse().join('');

  return str === rev;

  return true;
}



palindrome("eye");
```

* [ and ] are the start and end of a character set.
* \W means "non-word", as opposed to \w which will match a word.
* _ is the "_" character.
* / mark the beginning and end of a regular expression.
* g means it's a global search.
