# README

## Algorithm

- Traverse every position in the matrix.
  - If the position is 1, do DFS and find out coordinates of that island
  - Create key for the coordinates of that island
    - For each island, we create 8 shapes of transformations.
    - For each shape, we create vectors to each position relative to an origin.
    - In order to let each shape has the same origin, we sort the coordinate in each shape.
    - We create vectors to each position relative to an origin which is `shape[0]`.
    - Finally we flatten all coordinates in each shape and sort all of the coordinate.
    - This array will be unique for each island.
  - Use this key as the unique identifier to count distinct islands.

```js
pipe(
  map(
    pipe(
      sort,
      toVector,
    ),
  ),
  flatten,
  sort,
  join(','),
)(shapes);
```
