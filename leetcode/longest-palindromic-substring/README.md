# README

## Algorithm Two Pointers

Iterate over string s and start from every position, we try to extend the substring starting from i.
If `s.substring(i - 1, i + 2)` is a palindrome, we keep trying `s.substring(i - 2, i + 3)` until we can no longer extend anymore. Then we update the max value. Notice that we try to extend starting from `s[right] !== s[left]`.

Time Complexity: O(N \*\* 2)
Space Complexity: O(1)

## Algorithm DP

```js
dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] : false;
```

Given a string s, `s.substring(i, j + 1)` is a palindrome if `s[i] === s[j]` and `s.substring(i + 1, j)` is also a palindrome.

So we can use dynamic programming and bottom up approach to solve it.

Time Complexity: O(N ** 2)
Space Complexity: O(N ** 2)
