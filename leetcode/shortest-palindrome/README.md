# README

## Algorithm

```js
'aabba' => 'abb aa bba'

'aacecaaa' => 'a aacecaa a'
```

- Split string into left part and right part.
  - Left substring is a palindrome.
  - Right substring is not a palindrome.
  - Observed from the above examples, we know that the shortest palindrome comes from `reverse(right) + s`.
  - So the question become finding a longest palindrome starting at 0.
- We construct a prefix table of this string.
  - `s + '#' + reverse(s)`
  - So the length of the longest palindrome starting at 0 is equal to prefix[prefix.length - 1].

Time Complexity: O(n)
Space Complexity: O(n)
