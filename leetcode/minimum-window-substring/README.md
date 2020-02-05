## README

### Test Cases

```js
S = 'ADOBECODECBANC';
T = 'ABCC';
output = 'CBANC';
```

### Algorithm

- Count all characters frequency in T
  - counts: characters frequency
  - Start sliding window.
    - n: number of required characters
    - min: min length of valid window
    - left: left boundary of sliding window
    - If find a match, decrement T[c] by 1.
    - If T[c] is 0, decrement n by 1.
    - While (is valid sliding)
      - Update min
      - Shrink sliding window
      - Increment left
