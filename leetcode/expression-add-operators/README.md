## README

### Test Cases

```js
num = '232';
target = 8;

num = '105';
target = 5;
```

Need to take care of combinations starting from zero.

ex:

`00` and `005` are invalid.

<!-- prettier-ignore -->
```js
num = '1005'
start = 1
combinations = [
  '0',
  '00',
  '005',
]
```

### Algorithm

- Add one `+`, `-` and `*` for each recursive calls.
- `*` needs to take extra care.
  - `addOperators(num, target, sum - diff + diff * n, i + 1, diff * n, selected + '*' + n, output);`

```js
num = '234';

// for combination = '2+3*4*5'

// 1st call
sum = sum + 2;
diff = 2;

// 2nd call
sum = sum + 3;
diff = 3;

// 3rd call
// sum = sum - diff + diff * 4
sum = sum - 3 + 3 * 4;
diff = 3 * 4;

// 4th call
sum = sum - 3 * 4 + 3 * 4 * 5;
diff = 3 * 4 * 5;
```
