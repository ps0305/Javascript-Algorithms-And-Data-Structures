# README

## Algorithm

Use BFS to search for the shortest path.

Notes:

- If branching factor of tree is b and distance of goal vertex from source is d, then time complexity would be `O(b ** d)` which is exponential.
- In javascript, `arr.pop()` is faster than `arr.shift()`.

Time complexity can be further improved by using [bidirectional BFS](https://www.geeksforgeeks.org/bidirectional-search/).

If we start BFS from both start and end, then they will meet in the middle. Time complexity in this case would be `O(b ** (d / 2) + b ** (d / 2))` which is lar less than `O(b ** d)`
