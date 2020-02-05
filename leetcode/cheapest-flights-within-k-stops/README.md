# README

## Algorithm

Use BFS to traverse level by level. Keep going only if

- `nStops + 1 <= K`
- `price + prices[u][v] <= min`
  - If next price is going to be greater than min, no need to keep going.
  - Without this, it will result in Time Limit Exceeded.
