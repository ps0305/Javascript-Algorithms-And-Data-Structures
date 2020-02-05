# README

## Algorithm

```js
dp[i] = Math.max(dp[i], (nums[i] > nums[j] ? dp[j] : 0) + 1);
```

Define `dp[i]` as maximum length of increasing subsequence with `nums[i]` as last element. So comparing with each element before i, if j to i is increasing, update length.

In order to count number of maximum length, we need to store more information. We need to store maximum length and number of maximum length.

```ts
const dp: Array<DP>;

interface DP {
  length: number;
  count: number;
}
```

`if (dp[j].length + 1 > dp[i].length)` When length is greater, we set the maximum length and counter.
`else if (dp[j].length + 1 === dp[i].length)` When length is equal, we increment by count.

Finally, we scan the dp array and sum up counts with length is equal to max.
