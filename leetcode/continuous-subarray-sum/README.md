# README

## Algorithm

- `subarraySum(i, j) = prefixSum[i] - prefixSum[j - 1]`
  - Multiple of k means `n % k === 0`
  - `A = a * b + r`, `B = c * d + r` => `(A - B) % k === 0`
  - To find multiple of k, get the sum with the same reminder.
- Iterate over nums
  - Calculate prefix sum.
  - Create a map between reminder and current index.
  - If there exists one with the same reminder and its length is greater than 2, return true.
- Edge cases
  - If there exists two consecutive zeros, it's multiple of any `n`
  - If k is zero and no at least two consecutive zeros, no value is multiple of zero.
