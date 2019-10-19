### Statement
Given a number N return the index value of the Fibonacci sequence, where the sequence is:
> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

After a quick look, you can easily notice that the pattern of the sequence is that each value is the sum of the `2 previous values`, that means that for N=5 → 2+3 or in maths:
```html
F(n) = F(n-1) + F(n-2)
```
### First implementation( O(n) time complexity )

```js
function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
```

### Recursive solution(exponential time complexity)
```js
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
```

## Memoization

> Is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.

```js
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
```

## Print Fibonacci Series

```js
function fibonacci(n) {
if(n <= 1) return [0,1]
let fib = fibonacci(n - 1)
fib.push(fib[fib.length - 1] + fib[fib.length - 2])
return fib;
}
