# README

## Algorithm

- Scan from left to right to see if there are enough lefts to pair with rights.
- Scan from right to left to see if there are enough rights to pair with lefts.

Scan from left to right and use a variable `n` to maintain how many left parenthesis are available to pair with right parenthesis.

Increase `n` with `(` or `*`.

Decrease `n` with `)`.

Whenever `n < 0`, it's invalid.

```js
let n = 0;
for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (c === '(' || c === '*') {
    n += 1;
  } else if (c === ')') {
    n -= 1;
  }
  if (n < 0) return false;
}
```

This approach works if `*` is after `(`. So it doesn't work for this case.

```
***(((
```

So we can scan from right to left again.

```js
n = 0;
for (let i = s.length - 1; i >= 0; i--) {
  const c = s[i];
  if (c === ')' || c === '*') {
    n += 1;
  } else if (c === '(') {
    n -= 1;
  }
  if (n < 0) return false;
}
```
