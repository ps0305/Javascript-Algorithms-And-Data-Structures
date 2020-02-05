# README

## Algorithm

```js
dp[i][0] = Math.min(
  isInc(A[i - 1], A[i], B[i - 1], B[i]) ? dp[i - 1][0] : Infinity,
  isInc(B[i - 1], A[i], A[i - 1], B[i]) ? dp[i - 1][1] : Infinity,
);
// prettier-ignore
dp[i][1] = 1 + Math.min(
  isInc(A[i - 1], B[i], B[i - 1], A[i]) ? dp[i - 1][0] : Infinity,
  isInc(B[i - 1], B[i], A[i - 1], A[i]) ? dp[i - 1][1] : Infinity,
);
```

Define `dp[i][0]` as minimum required swaps with array ending at index i and does not swap at i.
Define `dp[i][1]` as minimum required swaps with array ending at index i and does swap at i.

In the case that does not swap at i

- If does not swap at `i - 1` is also increasing, add `dp[i - 1][0]` as candidate.
- If does swap at `i - 1` is also increasing, add `dp[i - 1][1]` as candidate.

Then `dp[i][0]` is minimum from above candidates.

In the case that does swap at i

- If does not swap at `i - 1` is also increasing, add `1 + dp[i - 1][0]` as candidate.
- If does swap at `i - 1` is also increasing, add `1 + dp[i - 1][1]` as candidate.

Then `dp[i][1]` is minimum from above candidates.

So the final output will be the minimum of `dp[i][0]` and `dp[i][1]`.

Time Complexity: O(n)
Space Complexity: O(n)

Because current state only depends on previous state, space complexity can be reduced to O(1)
