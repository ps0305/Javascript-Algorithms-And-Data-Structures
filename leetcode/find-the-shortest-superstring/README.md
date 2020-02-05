# README

## Algorithm

Consider every string in A is a node. So that entire array is a connected graph. Edges between nodes are weighted. Weight represents the appending length from `A[i]` to `A[j]`.

For example, `appendingLength[1][2] = 3`. `gcta` + `ctaagt` = `gctaagt`. We only need to append `agt` to `ctaagt`.

```js
A = ['catg', 'gcta', 'ctaagt', 'ttca', 'atgcatc'];
```

So that we can consider this problem as finding a minimum length of path visiting every node exactly once.

There are many approaches to this problem, like dp, bfs,... Here we are using BFS.

Start from every node. For each iteration, create another state according to current selection state.

We use these variables to represent current state. `[selected, i, p, length]`

`selected` means selection state. We implement selection state with bit manipulation to save memory.

For example, consider a binary representation of an integer. `12` => `1100`. Every bit at `ith` position represents selected or not.

`1` means selceted. `0` means deselected.

`i` means last element in the selection. For example, `{2,3}` if index 2 and 3 are in the set and 3 is last, then `selected = 1100`, `i = 3`.

`p` means parent.

`length` means current length.

## References

- https://buptwc.com/2018/11/19/Leetcode-943-Find-the-Shortest-Superstring/ => Best explanation ever !
