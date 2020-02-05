# README

## Algorithm

Similar to `shortest-path-in-a-grid-with-obstacles-elimination`.

Main idea is to model state as (set of acquired keys, current position). Then, we can run a standard BFS.

`dist[k][i][j]` means shortest path from some origin to `(i, j)` with keys selected encoded as k.
