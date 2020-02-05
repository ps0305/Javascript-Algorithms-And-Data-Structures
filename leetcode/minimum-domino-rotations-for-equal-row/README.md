# README

## Algorithm

In the rotated result, all values must either be `A[0]` or `B[0]`.

There are 4 possible combinations. So we compute all 4 combinations and take the minimum.

- All `A` is equal to `A[0]`
- All `A` is equal to `B[0]`
- All `B` is equal to `A[0]`
- All `B` is equal to `B[0]`

`count` This function counts how many swaps are required to make all elements in first array equal to target.
