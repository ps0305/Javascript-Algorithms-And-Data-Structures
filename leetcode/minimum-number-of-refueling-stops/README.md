# README

## Algorithm

Let `dp[i]` denotes the farthest position can be reached with `i` refueling stops.

If there are only `i` stations, clearly that there are at max `i` refueling stops.

Iterate over stations and for each station,

```js
// i mean number of refueling stops.
// so the last station with i refueling stops is stations[i - 1].
dp[i] = Math.max(dp[i], dp[i - 1] + stations[i - 1][1]); // if stations[i - 1] is reachable with i - 1 refueling stops.
```

So we update `dp[i]` for each stations. Finally, we check `i` from `0` to `m`, if any `dp[i] >= target`, then `i` is the minimum number.
