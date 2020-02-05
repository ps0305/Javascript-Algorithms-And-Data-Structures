# README

## Algorithm

Split any given word into left and right. There are two ways to create palindrome.

1. Reverse left and append to the end of word => `left|right|reversed left`
2. Reverse right and prepend to the front of word => `reversed right|left|right`

- In case 1, `right` should be palindrome.
- In case 2, `left` should be palindrome.

```
word = left|right

left|right|reversed left => llsss ss => llsss ss sssll
reversed right|left|right => ss sssll => llsss ss sssll
```
