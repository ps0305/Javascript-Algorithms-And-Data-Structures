# README

## Algorithm

- Use a priority queue to get the pair with smallest sum from pairs
- We start from the first element of each array. `[0, 0]`
- For each iteration,
  - Dequeue from the queue to get the smallest one.
  - Next smallest could be either `[i + 1, j]` or `[i, j + 1]`.
  - So push those candidates to the queue.
  - To prevent visiting duplicated pairs, we have `visited` set to check duplication.
