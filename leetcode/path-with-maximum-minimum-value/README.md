# README

## Algorithm

Approaches

- DFS
  - Need to figure out all paths and get maximum from all paths
  - Is it possible we don't need to figure out all paths ?
- BFS
  - Use PriorityQueue to maintain a list of candidates. For each iteration, we always pull out the most likely path which is the one with maximum minimum path.
  - By doing so, we are always on the path with the maximum value. So we don't need to figure out all paths.
  - Once destination is reached, we can return as soon as possible.
