# README

## Algorithm

Use `left` and `right` to find all combinations of columns. That is, `left` starts from `0 ~ n`. `right` starts from `left ~ n`. So that it will start from any position and with any width. For each fixed width, we store the sum in each row between column `left` and `right` to `arr[i]`. Then we can use 1-D subarray sum equals to target technique to count how many submatrix sum equals to target.

Time Complexity: O(n\*\*3)
Space Complexity: O(n)
