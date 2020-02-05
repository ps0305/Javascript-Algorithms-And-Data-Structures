## README

### Thoughts

- Partition to equal subset sum is identical to find a subset that sums up to half of total.
- DFS can be used to find subsets that sums up to target.
- Two important steps for optimization:
  - leftTotal:
    - Total of unselected numbers.
    - If leftTotal is smaller than target, it means target is never reached.
  - Ignore duplicated:
    - If `i` is not start index and current is equal to previous, it means the same value has been selected before. So it can be ignored.

### Analysis

Time Complexity: `O(n ** 2)`
Space Complexity: `O(1)` or `O(n)` if recursion is counted.
