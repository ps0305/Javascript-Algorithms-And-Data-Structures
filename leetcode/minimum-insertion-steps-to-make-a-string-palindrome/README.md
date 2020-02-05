# README

## Algorithm

case1

```js
const s1 = 'a xyz a';
const s2 = 'xyz';
```

case2

```js
const s3 = 'a xyz';
const s4 = 'axy z';
```

Observation:

Case1, minimum number of insertions of s1 is equal to s2. Why ? Because `s[0]` === `s[4]`.

Case2, minimum number of insertions may come from `s[1:]` or `s[:2]`.

```js
dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : Math.min(1 + dp[i + 1][j], dp[i][j - 1] + 1);
```

Define dp as minimum number of insertions between i, j.
