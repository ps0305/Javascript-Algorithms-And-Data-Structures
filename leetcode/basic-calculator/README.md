## README

### Test Cases

```js
s = '1+2+3-4-5';
s = '(1 + 2 + 3 + ( 4 + 5 ))';
```

### Algorithm

- `createParentheses` is used to store positions of parentheses so that we can get substrings with recursive call efficiently.
- Let's iterate over given string `s`
  - If encounter a number, `parseNumberSubstring` is used to parse number with more than one digits.
  - Operation logic: `output = output + num * parseInt(str)`
    - If `+` is met, set `num = 1`
    - If `-` is met, set `num = -1`
    - `str` is parsed from `parseNumberSubstring`
  - If encounter parentheses, calculate substring expression with recursive call.
    - `output += num * calculate(s, parentheses, i + 1, parentheses[i] - 1)`
