## README

### Test Cases

```js
s = 'ab';
p = 'c*a*b*';

s = '';
p = 'c*';

s = 'ab';
p = '.*';
```

### Algorithm

Use two pointers `i` and `j`. At each function call, we validate string and pattern step by step. If they are matched at `i` and `j`, then keep going. For matched cases, both `i` and `j` should reach the end of string and pattern at the same time.

For the case of `*`,

forward j two characters for appearing zero times

```js
isMatch(s, p, i, j + 2);
```

forward i one character for appearing one time

```js
(s[i] === p[j] || p[j] === '.') && isMatch(s, p, i + 1, j);
```

### Edge cases:

`j` reaches the end of p. `i` must reaches the end of `s` since `s` always appear one time.

```js
if (j >= p.length) {
  return i >= s.length;
}
```

`i` reaches the end of s. If `p[j + 1]` is not `*`, it means no match. If `i` is greater than `s.length`, it means no match, too.

```js
if ((i === s.length && p[j + 1] !== '*') || i > s.length) {
  return false;
}
```
