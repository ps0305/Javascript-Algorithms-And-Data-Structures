# README

## Algorithm

When flipping a zero, we connect previous and current consecutive one's. So to know the max consecutive one's, we only need to know previous and current one. So we use `pre` and `cur` to store the length of previous and current consecutive one's. We update pre and cur depending on `nums[i]`. And at the same time, we also update `max` value.

- Note
  - We initialize `pre` with `-1`. So that if we never encounter `0`, `-1 + 1` will always be zero without affecting `max`.
